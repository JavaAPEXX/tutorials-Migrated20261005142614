import React from 'react';

type CustomerviewComponentProps = {
    data?: Record<string, any>;
};

export const CustomerviewComponent: React.FC<CustomerviewComponentProps> = ({ data = {} }) => {
    const { customerContact, customerEmail, customerId, customerName } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h2>Submitted Customer Information</h2>
        	<div className="modern-table-wrapper"><table className="modern-table">
        		<tr>
        			<td>Customer Id :</td>
        			<td>{customerId}</td>
        		</tr>
        		<tr>
        			<td>Customer Name :</td>
        			<td>{customerName}</td>
        		</tr>
        		<tr>
        			<td>Customer Contact :</td>
        			<td>{customerContact}</td>
        		</tr>
        		<tr>
        			<td>Customer Email :</td>
        			<td>{customerEmail}</td>
        		</tr>
        	</table></div>
            </div>
        </div>
    );
};

export default CustomerviewComponent;
