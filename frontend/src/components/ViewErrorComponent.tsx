import React from 'react';

type ViewErrorComponentProps = {
    data?: Record<string, any>;
};

export const ViewErrorComponent: React.FC<ViewErrorComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h3>Pleas enter the correct details</h3>
        	<div className="modern-table-wrapper"><table className="modern-table">
        		<tr>
        			<td><a href="employee">Retry</a></td>
        		</tr>
        	</table></div>
            </div>
        </div>
    );
};

export default ViewErrorComponent;
