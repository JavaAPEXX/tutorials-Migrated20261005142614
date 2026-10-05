import React from 'react';

type AdminComponentProps = {
    data?: Record<string, any>;
};

export const AdminComponent: React.FC<AdminComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>Welcome to the ADMIN page</h1>
        
            <a href="<c:url value="/logout" />">Logout</a>
            </div>
        </div>
    );
};

export default AdminComponent;
