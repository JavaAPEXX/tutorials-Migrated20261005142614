import React from 'react';

type SpringHandlerIndexComponentProps = {
    data?: Record<string, any>;
};

export const SpringHandlerIndexComponent: React.FC<SpringHandlerIndexComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>Spring Handler Mapping Examples</h2>
        <h3>Click each link below to see how the request is mapped using the specified mapping:
        </h3>
        <ol>
            <li><a href="helloWorld.html">BeanNameUrlHandlerMapping - Mapping by bean name</a></li>
            <li><a href="welcome.html">SimpleUrlHandlerMapping</a></li>
            <li><a href="helloGuest.html">ControllerClassNameHandlerMapping - Mapping by controller name</a></li>
        </ol>
        <a href="index.jsp">Home</a>
            </div>
        </div>
    );
};

export default SpringHandlerIndexComponent;
