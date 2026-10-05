import React from 'react';

type ViewCompanyviewComponentProps = {
    data?: Record<string, any>;
};

export const ViewCompanyviewComponent: React.FC<ViewCompanyviewComponentProps> = ({ data = {} }) => {
    const { id, name } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>Submitted Company Information</h2>
        <div className="modern-table-wrapper"><table className="modern-table">
            <tr>
                <td>Name :</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>ID :</td>
                <td>{id}</td>
            </tr>
        </table></div>
            </div>
        </div>
    );
};

export default ViewCompanyviewComponent;
