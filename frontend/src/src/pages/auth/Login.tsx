import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Login page – migrated from `login.jsp`.
 * Preserves the original form fields, POST action and table‑based layout,
 * while applying the modern CSS design system:
 *   .modern-container, .modern-card, .modern-table-wrapper,
 *   .form-label, .form-control, .btn .btn-primary, .alert-box
 */
const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const payload = new URLSearchParams();
    payload.append('username', username);
    payload.append('password', password);

    try {
      const response = await fetch('perform_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString(),
        credentials: 'include', // preserve session cookies
      });

      if (response.redirected) {
        // Server issued a redirect (e.g., to /home); follow it.
        window.location.href = response.url;
      } else if (response.ok) {
        // Fallback navigation if the backend returns 200 without redirect.
        navigate('/home');
      } else {
        const msg = await response.text();
        setError(msg || 'Login failed');
      }
    } catch (err) {
      setError('Network error – please try again.');
    }
  };

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h1>Login</h1>

        {error && <div className="alert-box">{error}</div>}

        <form name="f" onSubmit={handleSubmit}>
          <div className="modern-table-wrapper">
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="username" className="form-label">
                      User:
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      value={username}
                      onChange={(e) = /> setUsername(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                  </td>
                  <td>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      value={password}
                      onChange={(e) = /> setPassword(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <button type="submit" className="btn btn-primary">
                      submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;