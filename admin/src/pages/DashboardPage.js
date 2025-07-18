import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import setAuthToken from '../utils/setAuthToken';

const DashboardContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const LogoutButton = styled.button`
    padding: 10px 20px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  padding: 15px;
  text-align: left;
  border-bottom: 2px solid #dee2e6;
  background-color: #f8f9fa;
`;

const Td = styled.td`
  padding: 15px;
  border-bottom: 1px solid #dee2e6;
`;

const DashboardPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }

    const fetchSubmissions = async () => {
      try {
        const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';
        const res = await axios.get(`${API_URL}/submissions`);
        setSubmissions(res.data);
      } catch (err) {
        console.error('Could not fetch submissions', err);
        // If token is invalid, log out the user
        if (err.response && err.response.status === 401) {
            handleLogout();
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    navigate('/login');
  };

  if (loading) return <p>Loading submissions...</p>;

  return (
    <DashboardContainer>
      <Header>
        <h1>Recruitment Submissions</h1>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>
      <Table>
        <thead>
          <tr>
            <Th>Date</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Message</Th>
          </tr>
        </thead>
        <tbody>
          {submissions.length > 0 ? (
            submissions.map(sub => (
              <tr key={sub._id}>
                <Td>{new Date(sub.createdAt).toLocaleDateString()}</Td>
                <Td>{sub.name}</Td>
                <Td>{sub.email}</Td>
                <Td>{sub.message}</Td>
              </tr>
            ))
          ) : (
            <tr>
              <Td colSpan="4" style={{ textAlign: 'center' }}>No submissions found.</Td>
            </tr>
          )}
        </tbody>
      </Table>
    </DashboardContainer>
  );
};

export default DashboardPage;