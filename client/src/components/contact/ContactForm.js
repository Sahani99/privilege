import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// All your styled-components are correct and do not need to be changed.
// ...

const FormWrapper = styled.div`
  width: 100%;
  background: var(--surface-color);
  padding: 30px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 20px;

  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-color);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: var(--background-color);
  color: var(--text-color);
  border-radius: 5px;
  font-size: 1em;
  font-family: inherit;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Select = styled.select`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  background-color: white;
`;

const FileInput = styled(Input)`
  padding-top: 10px;
  cursor: pointer;
  
  &::file-selector-button {
    background-color: var(--primary-color);
    color: var(--background-color);
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 15px;
  }
`;

const Textarea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 120px;
  resize: vertical;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--background-color);
  font-size: 1.1em;
  font-weight: 600;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    filter: brightness(1.1);
  }
`;

const FormStatus = styled.p`
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  &.success {
    background-color: #28a745;
    color: white;
  }
  &.error {
    background-color: #dc3545;
    color: white;
  }
  &.sending {
      background-color: #17a2b8;
      color: white;
  }
`;


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    category: 'Finance',
    message: '',
    cv: null,
  });
  const [status, setStatus] = useState({ submitted: false, message: '', type: '' });

 const { name, email, whatsapp, category, message } = formData;
  
  const handleChange = (e) => {
    if (e.target.name === 'cv') {
      setFormData({ ...formData, cv: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: true, message: 'Sending...', type: 'sending' });
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('whatsapp', formData.whatsapp);
    data.append('category', formData.category);
    data.append('message', formData.message);
    if (formData.cv) {
      data.append('cv', formData.cv);
    }

    try {
      // The API_URL is just the base address from the .env file
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      
      // --- THE FIX IS HERE ---
      // We now correctly construct the full URL path: base + /api + /submissions
      await axios.post(`${API_URL}/submissions`, data, config);

      setStatus({ submitted: true, message: 'Thank you! Your message has been sent.', type: 'success' });
      setFormData({ name: '', email: '', whatsapp: '', category: 'Finance', message: '', cv: null });
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus({ submitted: true, message: 'Something went wrong. Please try again.', type: 'error' });
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <InputGrid>
          <InputGroup>
            <Label htmlFor="name">Full Name *</Label>
            <Input type="text" id="name" name="name" value={name} placeholder="John Doe" required onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email Address *</Label>
            <Input type="email" id="email" name="email" value={email} placeholder="you@example.com" required onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="whatsapp">WhatsApp Number *</Label>
            <Input type="tel" id="whatsapp" name="whatsapp" value={whatsapp} placeholder="+94 77 123 4567" required onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="category">Field of Interest *</Label>
            <Select id="category" name="category" value={category} required onChange={handleChange}>
                <option value="Finance">Finance</option>
                <option value="Management">Management</option>
                <option value="ICT">ICT</option>
            </Select>
          </InputGroup>
          <InputGroup className="full-width">
            <Label htmlFor="message">Your Message *</Label>
            <Textarea id="message" name="message" value={message} placeholder="Tell us a little about your goals..." required onChange={handleChange} />
          </InputGroup>
          <InputGroup className="full-width">
            <Label htmlFor="cv">Upload CV (PDF format)</Label>
            <FileInput type="file" id="cv" name="cv" accept=".pdf" onChange={handleChange} />
          </InputGroup>
        </InputGrid>
        <Button type="submit">Send Message</Button>
      </Form>
      {status.submitted && <FormStatus className={status.type}>{status.message}</FormStatus>}
    </FormWrapper>
  );
};

export default ContactForm;