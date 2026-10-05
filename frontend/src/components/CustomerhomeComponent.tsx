import React, { useState } from 'react';

type CustomerhomeComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const CustomerhomeComponent: React.FC<CustomerhomeComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const { pageContext } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h3>Welcome, Enter The Customer Details</h3>
        
        	<form:form method="POST" action="{pageContext.request.contextPath}/addCustomer" modelAttribute="customer">
        		<div className="modern-table-wrapper"><table className="modern-table">
        			<tr>
        				<td><form:label path="customerId">Customer Id</form:label></td>
        				<td><form:input path="customerId" /></td>
        				<td><form:errors path="customerId" cssClass="error" /></td>
        			</tr>
        			<tr>
        				<td><form:label path="customerName">Customer Name</form:label></td>
        				<td><form:input path="customerName" /></td>
        				<td><form:errors path="customerName" cssClass="error" /></td>
        			</tr>
        			<tr>
        				<td><form:label path="customerContact">Customer Contact</form:label></td>
        				<td><form:input path="customerContact"/></td>
        				<td><form:errors path="customerContact" cssClass="error" /></td>
        			</tr>
        			<tr>
        				<td><form:label path="customerEmail">Customer Email</form:label></td>
        				<td><form:input path="customerEmail" /></td>
        				<td><form:errors path="customerEmail" cssClass="error" /></td>
        			</tr>
        			<tr>
        				<td><input type="submit" value="Submit" /></td>
        			</tr>
        		</table></div>
        	</form:form>
            </div>
        </div>
    );
};

export default CustomerhomeComponent;
