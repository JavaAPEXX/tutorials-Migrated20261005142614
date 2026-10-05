import React from 'react';

type ViewHelloworldComponentProps = {
    data?: Record<string, any>;
};

export const ViewHelloworldComponent: React.FC<ViewHelloworldComponentProps> = ({ data = {} }) => {
    const { msg } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>Hello World {msg}</h2>
        	<br>
        	<p>
        		<a href="spring-handler-index.jsp">Go to spring handler mappings homepage</a>
            </div>
        </div>
    );
};

export default ViewHelloworldComponent;
