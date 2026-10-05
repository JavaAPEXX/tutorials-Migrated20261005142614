import React from 'react';

type ViewConsoleComponentProps = {
    data?: Record<string, any>;
};

export const ViewConsoleComponent: React.FC<ViewConsoleComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>This is the landing page for the admin</h1>
        
        	<security:authorize access="hasRole('ROLE_USER')">
        		This text is only visible to a user
        		<br/>
        	</security:authorize>
        	
        	<security:authorize access="hasRole('ROLE_ADMIN')">
        		This text is only visible to an admin
        		<br/>
        	</security:authorize>
        
        	<a href="<c:url value="/logout" />">Logout</a>
            </div>
        </div>
    );
};

export default ViewConsoleComponent;
