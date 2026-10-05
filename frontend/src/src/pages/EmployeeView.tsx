import React from 'react';

interface EmployeeViewProps {
  /** Employee name */
  name: string;
  /** Employee ID */
  id: string;
  /** Employee contact number */
  contactNumber: string;
}

const EmployeeView: React.FC<EmployeeViewProps> = ({
  name,
  id,
  contactNumber,
}) => {
  return (
    <div className="modern-container">
      <div className="modern-card">
        <h2>Submitted Employee Information</h2>
        <div className="modern-table-wrapper">
          <table className="modern-table">
            <tbody>
              <tr>
                <td>Name :</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>ID :</td>
                <td>{id}</td>
              </tr>
              <tr>
                <td>Contact Number :</td>
                <td>{contactNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeView;