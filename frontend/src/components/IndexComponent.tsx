import React from 'react';

type IndexComponentProps = {
    data?: Record<string, any>;
};

export const IndexComponent: React.FC<IndexComponentProps> = ({ data = {} }) => {
    const { linkTo, variable } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                It works!! JSP {variable} {linkTo[IndexController].index}
            </div>
        </div>
    );
};

export default IndexComponent;
