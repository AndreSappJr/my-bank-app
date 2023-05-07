import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8 || !/\d/.test(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one number');
    } else {
      // save user data and redirect to login page
      history.push('/');
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email
