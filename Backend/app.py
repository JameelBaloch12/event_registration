from flask import Flask, request, jsonify, session, redirect, url_for
from flask_cors import CORS
from models import db, User, Admin
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

app.secret_key = 'your_secret_key'  # Replace this with a secure key in production

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# ✅ Protected Home Route
@app.route('/', methods=['GET'])
def home():
    if 'email' not in session:
        return redirect('/login-required')
    return f"Flask backend is running! Logged in as {session['email']}", 200

# ✅ Route shown if not logged in
@app.route('/login-required')
def login_required():
    return jsonify({'error': 'Login required to access this page'}), 401

# ✅ Register Route
@app.route('/register-user', methods=['POST'])
def register_user_or_admin():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    role = data.get('role')

    if not name or not email or not password or not role:
        return jsonify({'error': 'All fields are required'}), 400

    hashed_password = generate_password_hash(password)

    if role == 'user':
        if User.query.filter_by(email=email).first():
            return jsonify({'error': 'Email already exists'}), 400
        new_user = User(name=name, email=email, password=hashed_password)
    elif role == 'admin':
        if Admin.query.filter_by(email=email).first():
            return jsonify({'error': 'Email already exists'}), 400
        new_user = Admin(name=name, email=email, password=hashed_password)
    else:
        return jsonify({'error': 'Invalid role'}), 400

    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': f'{role.capitalize()} registered successfully'}), 200

# ✅ Login Route
@app.route('/login', methods=['POST'])
def login_user_or_admin():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    admin = Admin.query.filter_by(email=email).first()
    if admin and check_password_hash(admin.password, password):
        session['email'] = email
        return jsonify({'message': 'Login successful', 'role': 'admin'}), 200

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        session['email'] = email
        return jsonify({'message': 'Login successful', 'role': 'user'}), 200

    return jsonify({'error': 'Invalid email or password'}), 400

# ✅ Logout Route
@app.route('/logout', methods=['POST'])
def logout():
    session.pop('email', None)
    return jsonify({'message': 'Logged out successfully'}), 200

# ✅ Main Entry
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
