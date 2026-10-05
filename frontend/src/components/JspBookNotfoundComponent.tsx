import React from 'react';

type JspBookNotfoundComponentProps = {
    data?: Record<string, any>;
};

export const JspBookNotfoundComponent: React.FC<JspBookNotfoundComponentProps> = ({ data = {} }) => {
    const { request } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <p>Our Bookshelf doesn't contains this title:</p>
                <h2>{request.getParameter("q")}</h2>
            </div>
        </div>
    );
};

export default JspBookNotfoundComponent;
