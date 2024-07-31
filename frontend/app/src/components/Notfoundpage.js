import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <button onClick={handleGoHome} style={styles.button}>Go Home</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f8f8',
    color: '#333',
    textAlign: 'center',
  },
  header: {
    fontSize: '72px',
    margin: '20px 0',
  },
  message: {
    fontSize: '24px',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default NotFoundPage;
