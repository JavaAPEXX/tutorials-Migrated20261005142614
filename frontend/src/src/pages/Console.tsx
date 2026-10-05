import React from 'react';
import { Link } from 'react-router-dom';

interface ConsoleProps {
  userRoles?: string[];
}

const Console: React.FC<ConsoleProps> = ({ userRoles = [] }) => {
  const hasRole = (role: string) => userRoles.includes(role);

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h1>This is the landing page for the admin</h1>

        {hasRole('ROLE_USER') && (
          <p>This text is only visible to a user</p>
        )}

        {hasRole('ROLE_ADMIN') && (
          <p>This text is only visible to an admin</p>
        )}

        <div className="actions">
          <Link to="/logout" className="btn btn-primary">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Console;