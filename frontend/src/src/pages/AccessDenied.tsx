import React from 'react';
import { Link } from 'react-router-dom';

const AccessDenied: React.FC = () => {
  return (
    <div className="modern-container" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f8f9fa',
      padding: '20px'
    }}>
      <div className="modern-card" style={{
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        padding: '48px',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          background: '#fff3cd',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px auto'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#856404" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>

        <h2 style={{
          margin: '0 0 16px 0',
          fontSize: '24px',
          fontWeight: '600',
          color: '#333',
          lineHeight: '1.4'
        }}>
          Sorry, you do not have permission to view this page.
        </h2>

        <p style={{
          margin: '0 0 32px 0',
          fontSize: '16px',
          color: '#666',
          lineHeight: '1.6'
        }}>
          Click{' '}
          <Link
            to="/homepage.html"
            className="btn btn-primary"
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: '#0d6efd',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0b5ed7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0d6efd';
            }}
          >
            here
          </Link>{' '}
          to go back to the Homepage.
        </p>
      </div>
    </div>
  );
};

export default AccessDenied;