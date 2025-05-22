import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ✅ For redirecting

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isNew) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/'); // ✅ Redirect to home after login/signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3 className="mb-4 text-center">{isNew ? 'Create Account' : 'Login'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="alert alert-danger">{error}</div>}
        <button className="btn btn-primary w-100" type="submit">
          {isNew ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <p className="mt-3 text-center">
        {isNew ? 'Already have an account?' : 'New user?'}{' '}
        <button
          className="btn btn-link p-0"
          onClick={() => setIsNew((prev) => !prev)}
        >
          {isNew ? 'Login' : 'Sign up'}
        </button>
      </p>
    </div>
  );
}

export default Login;
