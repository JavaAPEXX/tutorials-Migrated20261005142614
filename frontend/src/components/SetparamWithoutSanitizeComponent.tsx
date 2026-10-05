import React from 'react';

type SetparamWithoutSanitizeComponentProps = {
    data?: Record<string, any>;
};

export const SetparamWithoutSanitizeComponent: React.FC<SetparamWithoutSanitizeComponentProps> = ({ data = {} }) => {
    const { request } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                The text below comes from request parameter "input":
            <br/>
            {request.getParameter("input")}
            </div>
        </div>
    );
};

export default SetparamWithoutSanitizeComponent;
