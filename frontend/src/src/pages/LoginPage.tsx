import React, { useState, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract query parameters for origin and error (if any)
  const queryParams = new URLSearchParams(location.search);
  const origin = queryParams.get('origin') ?? '';
  const initialError = queryParams.get('error') ?? '';

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(initialError);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('password', password);
    formData.append('origin', origin);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_CONTEXT_PATH ?? ''}/user-check/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
          credentials: 'include', // preserve session cookies if used
        }
      );

      if (response.ok) {
        // On successful login, redirect to the original page or home
        navigate(origin || '/');
      } else {
        // Extract error message from response if available
        const text = await response.text();
        setError(text || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    }
  };

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h2 className="text-center mb-4">Login</h2>

        {origin && (
          <div className="mb-3">
            <span className="badge badge-info">
              * redirected to login from: {origin}
            </span>
          </div>
        )}

        {error && (
          <div className="alert-box mb-3" role="alert">
            * error: {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="modern-form">
          {/* Hidden origin field to preserve original behavior */}
          <input type="hidden" name="origin" value={origin} />

          <fieldset>
            <legend className="mb-3">credentials</legend>

            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={name}
                onChange={(e) = /> setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) = /> setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;