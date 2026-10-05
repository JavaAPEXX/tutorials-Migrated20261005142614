import React, { useEffect, useState } from 'react';

interface UserInfo {
  userName: string;
  sessionAttribute: string;
  uiColor: string;
}

const Welcome: React.FC = () => {
  const [info, setInfo] = useState<UserInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch('/welcome', { method: 'GET', credentials: 'include' });
        if (!res.ok) {
          throw new Error(`Error ${res.status}`);
        }
        const data: UserInfo = await res.json();
        setInfo(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    fetchInfo();
  }, []);

  if (error) {
    return (
      <div className="modern-container">
        <div className="modern-card">
          <div className="alert-box">Error loading user information: {error}</div>
        </div>
      </div>
    );
  }

  if (!info) {
    return (
      <div className="modern-container">
        <div className="modern-card">
          <div className="alert-box">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="modern-container" style={{ backgroundColor: info.uiColor }}>
      <div className="modern-card">
        <form action="/welcome" method="POST">
          <div className="form-group">
            <label className="form-label">Your name: {info.userName}</label>
          </div>
          <div className="form-group">
            <label className="form-label">Session param: {info.sessionAttribute}</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Welcome;