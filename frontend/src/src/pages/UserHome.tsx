import React, { useState, FormEvent, ChangeEvent } from 'react';

interface FormValues {
  email: string;
  verifyEmail: string;
  password: string;
  verifyPassword: string;
}

interface FormErrors {
  email?: string;
  verifyEmail?: string;
  password?: string;
  verifyPassword?: string;
  global?: string;
}

const UserHome: React.FC = () => {
  const [form, setForm] = useState<FormValues>({
    email: '',
    verifyEmail: '',
    password: '',
    verifyPassword: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setErrors({});
    setMessage('');

    try {
      const response = await fetch('/spring-mvc-basics/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          email: form.email,
          verifyEmail: form.verifyEmail,
          password: form.password,
          verifyPassword: form.verifyPassword,
        }).toString(),
      });

      if (response.ok) {
        setMessage('User created successfully.');
        setForm({
          email: '',
          verifyEmail: '',
          password: '',
          verifyPassword: '',
        });
      } else {
        // Attempt to parse JSON error response
        const data = await response.json().catch(() => ({}));
        if (data.errors) {
          setErrors(data.errors);
        } else if (data.message) {
          setErrors({ global: data.message });
        } else {
          setErrors({ global: 'An unexpected error occurred.' });
        }
      }
    } catch (err) {
      setErrors({ global: 'Network error. Please try again later.' });
    }
  };

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h2>New User</h2>

        {message && (
          <div className="alert-box success">{message}</div>
        )}

        {errors.global && (
          <div className="alert-box error">{errors.global}</div>
        )}

        <form
          action="/spring-mvc-basics/user"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="emailInput" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="emailInput"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="error">{errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="verifyEmailInput" className="form-label">
              Verify email:
            </label>
            <input
              type="email"
              id="verifyEmailInput"
              name="verifyEmail"
              className="form-control"
              value={form.verifyEmail}
              onChange={handleChange}
            />
            {errors.verifyEmail && (
              <div className="error">{errors.verifyEmail}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="passwordInput" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="passwordInput"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="error">{errors.password}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="verifyPasswordInput" className="form-label">
              Verify password:
            </label>
            <input
              type="password"
              id="verifyPasswordInput"
              name="verifyPassword"
              className="form-control"
              value={form.verifyPassword}
              onChange={handleChange}
            />
            {errors.verifyPassword && (
              <div className="error">{errors.verifyPassword}</div>
            )}
          </div>

          <button type="submit" className="submit-button">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserHome;