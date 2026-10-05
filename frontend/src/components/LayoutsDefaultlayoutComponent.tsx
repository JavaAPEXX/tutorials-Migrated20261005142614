import React from 'react';

type LayoutsDefaultlayoutComponentProps = {
    data?: Record<string, any>;
};

export const LayoutsDefaultlayoutComponent: React.FC<LayoutsDefaultlayoutComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <div className="flex-container">
                <tiles:insertAttribute name="header" />
                <tiles:insertAttribute name="menu" />
                <article className="article">
        		    <tiles:insertAttribute name="body" />
                </article>
            <tiles:insertAttribute name="footer" />
            </div>
            </div>
        </div>
    );
};

export default LayoutsDefaultlayoutComponent;
