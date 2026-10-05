import React from 'react';

type ViewWelcomeComponentProps = {
    data?: Record<string, any>;
};

export const ViewWelcomeComponent: React.FC<ViewWelcomeComponentProps> = ({ data = {} }) => {
    const { msg } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>Welcome to {msg}</h2>
        	<br>
        	<p>
        		<a href="spring-handler-index.jsp">Go to spring handler mappings homepage</a>
            </div>
        </div>
    );
};

export default ViewWelcomeComponent;
