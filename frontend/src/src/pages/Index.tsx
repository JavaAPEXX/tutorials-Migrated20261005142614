import React from 'react';
import './Index.css'; // Optional: import CSS that defines .modern-container, .modern-card, etc.

const Index: React.FC = () => {
  return (
    <div className="modern-container">
      <div className="modern-card">
        <h1>This is the body of the index view</h1>
      </div>
    </div>
  );
};

export default Index;