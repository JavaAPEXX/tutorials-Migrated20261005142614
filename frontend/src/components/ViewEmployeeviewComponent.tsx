import React from 'react';

type ViewEmployeeviewComponentProps = {
    data?: Record<string, any>;
};

export const ViewEmployeeviewComponent: React.FC<ViewEmployeeviewComponentProps> = ({ data = {} }) => {
    const { contactNumber, id, name } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>Submitted Employee Information</h2>
        	<div className="modern-table-wrapper"><table className="modern-table">
        		<tr>
        			<td>Name :</td>
        			<td>{name}</td>
        		</tr>
        		<tr>
        			<td>ID :</td>
        			<td>{id}</td>
        		</tr>
        		<tr>
        			<td>Contact Number :</td>
        			<td>{contactNumber}</td>
        		</tr>
        	</table></div>
            </div>
        </div>
    );
};

export default ViewEmployeeviewComponent;
