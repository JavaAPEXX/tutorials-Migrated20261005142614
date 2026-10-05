import React, { useState, FormEvent } from 'react';

interface PhoneHomeProps {
  /** Optional message passed from the server (e.g., after a redirect). */
  initialMessage?: string;
}

const PhoneHome: React.FC<PhoneHomeProps> = ({ initialMessage = '' }) => {
  const [phone, setPhone] = useState<string>('');
  const [errors, setErrors] = useState<string | null>(null);
  const [message, setMessage] = useState<string>(initialMessage);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (errors) setErrors(null); // clear errors on input change
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);

    try {
      const response = await fetch('/spring-mvc-basics/addValidatePhone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ phone }),
      });

      const contentType = response.headers.get('Content-Type') || '';
      const isJson = contentType.includes('application/json');

      if (response.ok) {
        if (isJson) {
          const data = await response.json();
          // Expected JSON structure: { message?: string, errors?: { phone?: string } }
          if (data.message) setMessage(data.message);
          if (data.errors?.phone) setErrors(data.errors.phone);
        } else {
          // Fallback: treat any non-JSON success as a generic success message
          setMessage('Phone number submitted successfully.');
        }
      } else {
        // Handle validation errors or server errors
        if (isJson) {
          const errorData = await response.json();
          if (errorData.errors?.phone) setErrors(errorData.errors.phone);
          if (errorData.message) setMessage(errorData.message);
        } else {
          setMessage(`Error ${response.status}: ${response.statusText}`);
        }
      }
    } catch (err) {
      setMessage(`Network error: ${(err as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h2>Phone Number</h2>

        {message && (
          <div className="alert-box">{message}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phoneInput" className="form-label">
              Phone:
            </label>
            <input
              type="text"
              id="phoneInput"
              name="phone"
              className="form-control"
              value={phone}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {errors && <div className="error">{errors}</div>}

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneHome;