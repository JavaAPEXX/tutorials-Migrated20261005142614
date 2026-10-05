import React from 'react';

type JspIndexComponentProps = {
    data?: Record<string, any>;
};

export const JspIndexComponent: React.FC<JspIndexComponentProps> = ({ data = {} }) => {
    const { foo, foos } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <c:forEach var="foo" items={foos}>
        		<p>
        			{foo.name}
        		</p>
        	))}
            </div>
        </div>
    );
};

export default JspIndexComponent;
