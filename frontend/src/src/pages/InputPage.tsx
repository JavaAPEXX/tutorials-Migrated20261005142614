import React, { useState } from 'react';

interface InputPageProps {
  // No additional props required based on source
}

const InputPage: React.FC<InputPageProps> = () => {
  // Form state for the detected field: carName
  const [carName, setCarName] = useState<string>('');

  // Handle form submission
  // Source: <form method="get" action="/MyStrutsApp/tutorial/car.action">
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Construct URLSearchParams for GET request as per source method="get"
    const params = new URLSearchParams();
    params.append('carName', carName);
    
    // Navigate to the action URL with query parameters
    const actionUrl = `/MyStrutsApp/tutorial/car.action?${params.toString()}`;
    window.location.href = actionUrl;
  };

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h1 className="card-title">Baledung Struts</h1>
        
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <p className="form-text">Welcome to Baeldung Struts 2 app</p>
            <p className="form-text">Which car do you like !!</p>
            <p className="form-text">Please choose ferrari or bmw</p>
          </div>

          <div className="form-group">
            <label htmlFor="carName" className="form-label">Car Name</label>
            <select
              id="carName"
              name="carName"
              className="form-control"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
            >
              <option value="" disabled>Select a car</option>
              <option value="Ferrari">ferrari</option>
              <option value="BMW">bmw</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Enter!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputPage;