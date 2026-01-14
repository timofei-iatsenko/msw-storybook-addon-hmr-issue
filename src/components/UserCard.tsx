import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  bio: string;
}

export const UserCard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;
  }

  if (!user) {
    return <div style={{ padding: '20px' }}>No user data</div>;
  }

  return (
    <div style={{
      padding: '20px',
      border: '2px solid #007bff',
      borderRadius: '12px',
      maxWidth: '300px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: '#007bff',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        margin: '0 auto 15px'
      }}>
        {user.name.charAt(0).toUpperCase()}
      </div>
      <h3 style={{ margin: '10px 0', color: '#333' }}>{user.name}</h3>
      <div style={{ 
        fontSize: '14px', 
        color: '#666',
        marginBottom: '10px'
      }}>
        {user.role}
      </div>
      <div style={{ 
        fontSize: '12px', 
        color: '#999'
      }}>
        {user.email}
      </div>
    </div>
  );
};

console.log('trigger hmr8')