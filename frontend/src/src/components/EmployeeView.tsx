import React from 'react';
import './EmployeeView.css'; // Ensure the modern CSS classes are defined

export interface EmployeeViewProps {
  /** Employee full name */
  name: string;
  /** Employee identifier */
  id: string | number;
  /** Contact phone number */
  contactNumber: string;
}

/**
 * Detail view for a submitted employee.
 * Mirrors the original JSP `employeeView.jsp` which displayed the
 * `name`, `id` and `contactNumber` values in a simple table.
 *
 * No internal state or event handlers are required because the
 * source page contains no forms or scripts.
 */
const EmployeeView: React.FC<EmployeeViewProps> = ({ name, id, contactNumber }) => (
  <div className="modern-container">
    <div className="modern-card">
      <h2 className="card-title">Submitted Employee Information</h2>

      <div className="modern-table-wrapper">
        <table className="detail-table">
          <tbody>
            <tr>
              <td className="detail-label">Name :</td>
              <td className="detail-value">{name}</td>
            </tr>
            <tr>
              <td className="detail-label">ID :</td>
              <td className="detail-value">{id}</td>
            </tr>
            <tr>
              <td className="detail-label">Contact Number :</td>
              <td className="detail-value">{contactNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default EmployeeView;