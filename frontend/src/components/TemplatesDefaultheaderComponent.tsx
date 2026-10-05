import React from 'react';

type TemplatesDefaultheaderComponentProps = {
    data?: Record<string, any>;
};

export const TemplatesDefaultheaderComponent: React.FC<TemplatesDefaultheaderComponentProps> = ({ data = {} }) => {

    return (
        <div className="templatesdefaultheadercomponent-wrapper">
            <header>
          <h1>Welcome to Spring MVC integration with Apache Tiles</h1>
        </header>
        </div>
    );
};

export default TemplatesDefaultheaderComponent;
