import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Log In</button>
      </form>
      <p>Don't have an account? <Link to="/create-account">Create one now</Link></p>
    </div>
  );
}

export default Login;
