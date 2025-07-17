import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; 

const FormWrapper = styled.div`
  max-width: 700px;
  margin: 20px auto;
  padding: 30px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: var(--text-color);
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const Textarea = styled.textarea`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  min-height: 150px;
`;

// const FileInput = styled(Input)`
//   padding: 10px;
//   background-color: #e9e9e9;
//   cursor: pointer;
// `;

const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  font-size: 1.2em;
  font-weight: bold;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6c300;
  }
`;

const FormStatus = styled.p`
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  &.success {
    background-color: #d4edda;
    color: #155724;
  }
  &.error {
    background-color: #f8d7da;
    color: #721c24;
  }
`;
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ submitted: false, message: '', type: '' });

  const { name, email, message } = formData;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // The API URL will be an environment variable when we deploy
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
      
      const res = await axios.post(`${API_URL}/submissions`, formData);
      console.log(res.data);
      
      setStatus({ submitted: true, message: 'Thank you! Your message has been sent.', type: 'success' });
      setFormData({ name: '', email: '', message: '' });

    } catch (err) {
      console.error(err);
      setStatus({ submitted: true, message: 'Something went wrong. Please try again.', type: 'error' });
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Full Name</Label>
        <Input type="text" id="name" name="name" value={name} required onChange={handleChange} />

        <Label htmlFor="email">Email Address</Label>
        <Input type="email" id="email" name="email" value={email} required onChange={handleChange} />
        
        <Label htmlFor="message">Your Message</Label>
        <Textarea id="message" name="message" value={message} required onChange={handleChange} />
        
        {/* We removed the file input for now to simplify. File uploads require more setup. */}

        <Button type="submit">Send Message</Button>
      </Form>
      {status.submitted && <FormStatus className={status.type}>{status.message}</FormStatus>}
    </FormWrapper>
  );
};

export default ContactForm;