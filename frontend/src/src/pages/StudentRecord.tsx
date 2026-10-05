import React from 'react';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
}

export interface StudentRecordProps {
  /** Optional student data. If omitted, the component will render a “no record” message. */
  student?: Student;
}

const StudentRecord: React.FC<StudentRecordProps> = ({ student }) => {
  return (
    <div className="modern-container">
      <div className="modern-card">
        {student ? (
          <>
            <h1 className="modern-card-title">Student Record</h1>
            <div className="form-group">
              <span className="form-label">ID:</span>
              <span className="form-control">{student.id}</span>
            </div>
            <div className="form-group">
              <span className="form-label">First Name:</span>
              <span className="form-control">{student.firstName}</span>
            </div>
            <div className="form-group">
              <span className="form-label">Last Name:</span>
              <span className="form-control">{student.lastName}</span>
            </div>
          </>
        ) : (
          <h1>No student record found.</h1>
        )}
      </div>
    </div>
  );
};

export default StudentRecord;