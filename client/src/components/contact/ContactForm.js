import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const InputGroup = styled.div`
  margin-bottom: 20px;
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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitted: false, message: '', type: '' });

  const { name, email, message } = formData;
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: true, message: 'Sending...', type: 'sending' });
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
      await axios.post(`${API_URL}/submissions`, formData);
      setStatus({ submitted: true, message: 'Thank you! Your message has been sent.', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ submitted: true, message: 'Something went wrong. Please try again.', type: 'error' });
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input type="text" id="name" name="name" value={name} required onChange={handleChange} />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" id="email" name="email" value={email} required onChange={handleChange} />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="message">Your Message</Label>
          <Textarea id="message" name="message" value={message} required onChange={handleChange} />
        </InputGroup>
        <Button type="submit">Send Message</Button>
      </Form>
      {status.submitted && <FormStatus className={status.type}>{status.message}</FormStatus>}
    </FormWrapper>
  );
};

export default ContactForm;