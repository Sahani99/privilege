import React, { useState, useEffect, useCallback  } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import setAuthToken from '../utils/setAuthToken';

const DashboardContainer = styled.div`
  padding: 40px;
  max-width: 1400px; /* Increased width to accommodate more columns */
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
  font-size: 14px; /* Slightly smaller font to fit more data */
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
  white-space: nowrap;
`;

const DashboardPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

    const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    setAuthToken(null);
    navigate('/login');
  }, [navigate]);

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
        if (err.response && err.response.status === 401) {
            handleLogout();
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
 }, [handleLogout]);

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   setAuthToken(null);
  //   navigate('/login');
  // };

  if (loading) return <p>Loading submissions...</p>;

  return (
    <DashboardContainer>
      <Header>
        <h1>Recruitment Submissions</h1>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>
      
      {/* This wrapper makes the table horizontally scrollable on small screens */}
      <div style={{ overflowX: 'auto' }}>
        <Table>
          <thead>
            <tr>
              <Th>Date</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              {/* --- ADDED THESE HEADERS --- */}
              <Th>WhatsApp</Th>
              <Th>Category</Th>
              {/* ------------------------- */}
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
                  {/* --- ADDED THESE DATA CELLS --- */}
                  <Td>{sub.whatsapp}</Td>
                  <Td>{sub.category}</Td>
                  {/* ---------------------------- */}
                  <Td>{sub.message}</Td>
                </tr>
              ))
            ) : (
              <tr>
                {/* --- UPDATED COLSPAN --- */}
                <Td colSpan="6" style={{ textAlign: 'center' }}>No submissions found.</Td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </DashboardContainer>
  );
};

export default DashboardPage;