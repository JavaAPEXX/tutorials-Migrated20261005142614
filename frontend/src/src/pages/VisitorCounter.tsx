import React from 'react';

interface VisitorCounterProps {
  counter?: number | null;
}

const VisitorCounter: React.FC<VisitorCounterProps> = ({ counter }) => {
  if (counter === null || counter === undefined || counter <= 0) {
    return null;
  }

  return (
    <div className="modern-container" style={{ marginTop: '1rem' }}>
      <hr className="modern-divider" />
      <div className="modern-card" style={{ padding: '1rem', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '1rem', color: '#333' }}>
          You are visitor <span className="badge badge-primary" style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>#{counter}</span>.{' '}
          <a 
            href="/?command=Logout" 
            className="btn btn-primary" 
            style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              backgroundColor: '#007bff', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
          >
            Logout
          </a>
        </p>
      </div>
    </div>
  );
};

export default VisitorCounter;