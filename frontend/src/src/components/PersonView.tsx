import React from 'react';

export interface Person {
  id: string | number;
  name: string;
  dateOfBirth: string;
  password: string;
  sex: string;
  job: string;
  country: string;
  fruit?: string[];
  book: string;
  receiveNewsletter: string;
  hobbies?: string[];
  favouriteLanguage?: string[];
  notes: string;
}

interface PersonViewProps {
  person: Person;
}

const PersonView: React.FC<PersonViewProps> = ({ person }) => {
  const renderArray = (arr?: string[]) =>
    arr && arr.length > 0
      ? arr.map((item, idx) => (
          <span key={idx} className="array-item">
            [{item}]
          </span>
        ))
      : null;

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h2>Submitted Person Information</h2>
        <div className="modern-table-wrapper">
          <table className="modern-table">
            <tbody>
              <tr>
                <td>Id :</td>
                <td>{person.id}</td>
              </tr>
              <tr>
                <td>Name :</td>
                <td>{person.name}</td>
              </tr>
              <tr>
                <td>Date of birth :</td>
                <td>{person.dateOfBirth}</td>
              </tr>
              <tr>
                <td>Password :</td>
                <td>{person.password}</td>
              </tr>
              <tr>
                <td>Sex :</td>
                <td>{person.sex}</td>
              </tr>
              <tr>
                <td>Job :</td>
                <td>{person.job}</td>
              </tr>
              <tr>
                <td>Country :</td>
                <td>{person.country}</td>
              </tr>
              <tr>
                <td>Fruit :</td>
                <td>{renderArray(person.fruit)}</td>
              </tr>
              <tr>
                <td>Book :</td>
                <td>{person.book}</td>
              </tr>
              <tr>
                <td>Receive Newsletter :</td>
                <td>{person.receiveNewsletter}</td>
              </tr>
              <tr>
                <td>Hobbies :</td>
                <td>{renderArray(person.hobbies)}</td>
              </tr>
              <tr>
                <td>Favourite Languages :</td>
                <td>{renderArray(person.favouriteLanguage)}</td>
              </tr>
              <tr>
                <td>Notes :</td>
                <td>{person.notes}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PersonView;