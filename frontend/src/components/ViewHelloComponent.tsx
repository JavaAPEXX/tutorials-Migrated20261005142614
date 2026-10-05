import React from 'react';

type ViewHelloComponentProps = {
    data?: Record<string, any>;
};

export const ViewHelloComponent: React.FC<ViewHelloComponentProps> = ({ data = {} }) => {
    const { msg } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>Hello {msg}</h2>
        	<br>
        	<p>
        		<a href="spring-handler-index.jsp">Go to spring handler mappings homepage</a>
            </div>
        </div>
    );
};

export default ViewHelloComponent;
