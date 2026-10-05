import React from 'react';

const AnonymousPage: React.FC = () => {
  return (
    <div className="modern-container">
      <div className="modern-card">
        <h1>Anonymous page</h1>
        <a href="/login.html" className="btn btn-primary">
          To Login
        </a>
      </div>
    </div>
  );
};

export default AnonymousPage;