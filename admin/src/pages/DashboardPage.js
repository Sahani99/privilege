import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import setAuthToken from '../utils/setAuthToken';

// --- STYLES (Keep existing, add new ones for controls and modal) ---
const DashboardContainer = styled.div`
  padding: 40px;
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
    padding: 10px 20px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover { opacity: 0.9; }
`;

const ControlsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 12px;
    margin-bottom: 5px;
    color: #555;
  }
  input, select {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-size: 14px;
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

const NotesButton = styled.button`
  padding: 5px 10px;
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// --- MODAL STYLES ---
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  width: 500px;
  max-height: 80vh;
  overflow-y: auto;
`;

// --- COMPONENT LOGIC ---
const DashboardPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // New state for filters and sorting
  const [filters, setFilters] = useState({ category: '', email: '' });
  const [sortBy, setSortBy] = useState('date_desc');

  // New state for notes modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSubmission, setCurrentSubmission] = useState(null);
  const [newNote, setNewNote] = useState('');

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
      setLoading(true);
      try {
        const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
        
        // Build query parameters from state
        const params = new URLSearchParams();
        if (filters.category) params.append('category', filters.category);
        if (filters.email) params.append('email', filters.email);
        if (sortBy) params.append('sortBy', sortBy);

        const res = await axios.get(`${API_URL}/submissions?${params.toString()}`);
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
  }, [filters, sortBy, handleLogout]);

  const handleFilterChange = (e) => {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOpenNotes = (submission) => {
    setCurrentSubmission(submission);
    setIsModalOpen(true);
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    try {
        const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
        const res = await axios.put(`${API_URL}/submissions/${currentSubmission._id}/notes`, { text: newNote });

        // Update the submission in the local state with the new notes
        const updatedSubmissions = submissions.map(sub => 
            sub._id === currentSubmission._id ? { ...sub, notes: res.data } : sub
        );
        setSubmissions(updatedSubmissions);
        
        setCurrentSubmission(prev => ({ ...prev, notes: res.data }));
        setNewNote('');
    } catch (err) {
        console.error('Failed to add note', err);
        alert('Could not add note. Please try again.');
    }
  };

  if (loading) return <p>Loading submissions...</p>;

  // Get unique categories for the filter dropdown
  const uniqueCategories = [...new Set(submissions.map(s => s.category).filter(Boolean))];

  return (
    <>
      <DashboardContainer>
        <Header>
          <h1>Recruitment Submissions</h1>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </Header>

        <ControlsContainer>
          <ControlGroup>
            <label htmlFor="sortBy">Sort By</label>
            <select id="sortBy" value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="date_desc">Newest First</option>
              <option value="date_asc">Oldest First</option>
            </select>
          </ControlGroup>
          <ControlGroup>
            <label htmlFor="category">Filter by Category</label>
            <select id="category" name="category" value={filters.category} onChange={handleFilterChange}>
              <option value="">All Categories</option>
              {uniqueCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </ControlGroup>
          <ControlGroup>
            <label htmlFor="email">Filter by Email</label>
            <input type="text" id="email" name="email" value={filters.email} onChange={handleFilterChange} placeholder="Search email..." />
          </ControlGroup>
        </ControlsContainer>

        <div style={{ overflowX: 'auto' }}>
          <Table>
            <thead>
              <tr>
                <Th>Date</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>WhatsApp</Th>
                <Th>Category</Th>
                <Th>Message</Th>
                <Th>Notes</Th>
              </tr>
            </thead>
            <tbody>
              {submissions.length > 0 ? (
                submissions.map(sub => (
                  <tr key={sub._id}>
                    <Td>{new Date(sub.createdAt).toLocaleDateString()}</Td>
                    <Td>{sub.name}</Td>
                    <Td>{sub.email}</Td>
                    <Td>{sub.whatsapp || 'N/A'}</Td>
                    <Td>{sub.category}</Td>
                    <Td>{sub.message}</Td>
                    <Td><NotesButton onClick={() => handleOpenNotes(sub)}>View ({sub.notes.length})</NotesButton></Td>
                  </tr>
                ))
              ) : (
                <tr><Td colSpan="7" style={{ textAlign: 'center' }}>No submissions found.</Td></tr>
              )}
            </tbody>
          </Table>
        </div>
      </DashboardContainer>

      {isModalOpen && (
        <ModalBackdrop onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <h2>Notes for {currentSubmission.name}</h2>
            <form onSubmit={handleAddNote}>
              <textarea 
                value={newNote}
                onChange={e => setNewNote(e.target.value)}
                placeholder="Add a new note..."
                style={{ width: '100%', minHeight: '80px', marginBottom: '10px', padding: '8px' }}
              />
              <button type="submit" style={{ padding: '8px 15px' }}>Add Note</button>
            </form>
            <hr style={{ margin: '20px 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {currentSubmission.notes && currentSubmission.notes.length > 0 ? (
                currentSubmission.notes.map(note => (
                  <div key={note._id}>
                    <p style={{ margin: 0 }}>{note.text}</p>
                    <small style={{ color: '#777' }}>{new Date(note.createdAt).toLocaleString()}</small>
                  </div>
                ))
              ) : (
                <p>No notes yet.</p>
              )}
            </div>
          </ModalContent>
        </ModalBackdrop>
      )}
    </>
  );
};

export default DashboardPage;