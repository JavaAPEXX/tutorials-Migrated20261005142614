import React from 'react';

type ViewAccessdeniedComponentProps = {
    data?: Record<string, any>;
};

export const ViewAccessdeniedComponent: React.FC<ViewAccessdeniedComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>Sorry, you do not have permission to view this page.</h2>
        
        Click <a href="<c:url value="/homepage.html" /> ">here</a> to go back to the Homepage.
            </div>
        </div>
    );
};

export default ViewAccessdeniedComponent;
