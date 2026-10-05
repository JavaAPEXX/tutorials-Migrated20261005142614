import React, { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
}

const UserFormPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Preserve original request format: application/x-www-form-urlencoded
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);

      // Preserve original action path: ${pageContext.request.contextPath}/userServlet
      // In a standard React app, contextPath is typically '' or the base URL.
      const response = await fetch('/userServlet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitStatus({ type: 'success', message: 'Form submitted successfully.' });
      // Reset form if desired, though original JSP did not explicitly reset client-side
      // setFormData({ name: '', email: '' }); 
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h2>Please fill the form below:</h2>

        {submitStatus && (
          <div className={`alert-box ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="modern-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <strong>Email:</strong>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormPage;