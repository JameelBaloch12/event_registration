import React, { useState, useEffect } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');

  // Fetch users from an API or mock data (replace with your actual API logic)
  useEffect(() => {
    // Replace this with the actual API call to fetch users
    const fetchUsers = () => {
      const mockUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Inactive' },
        // Add more mock users here...
      ];
      setUsers(mockUsers);
    };
    
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => {
    return (
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === 'all' || user.status === statusFilter) &&
      (roleFilter === 'all' || user.role === roleFilter)
    );
  });

  const handleStatusChange = (id, status) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id ? { ...user, status: status === 'Active' ? 'Inactive' : 'Active' } : user
      )
    );
  };

  const handleDelete = (id) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  return (
    <div>
      <h2>Manage Users</h2>
      
      <div>
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
          <option value="all">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleStatusChange(user.id, user.status)}>Toggle Status</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
