import React from 'react';

interface HomeProps {
  user?: {
    name?: string;
    logins?: string[];
  };
  contextPath?: string;
}

const Home: React.FC<HomeProps> = ({ user, contextPath = '' }) => {
  const logins = user?.logins || [];

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h2 className="card-title">user info</h2>
        
        <div className="info-section">
          <span className="info-label">name:</span>
          <span className="info-value">{user?.name}</span>
        </div>

        <div className="info-section">
          <span className="info-label">logins:</span>
          <ul className="logins-list">
            {logins.map((login, index) => (
              <li key={index}>{login}</li>
            ))}
          </ul>
        </div>

        <div className="actions-section">
          <a 
            href={`${contextPath}/user-check/logout`} 
            className="btn btn-primary"
          >
            logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;