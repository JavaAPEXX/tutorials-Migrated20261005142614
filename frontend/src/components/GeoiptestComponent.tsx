import React, { useState } from 'react';

type GeoiptestComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const GeoiptestComponent: React.FC<GeoiptestComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});

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
                <form onSubmit={handleSubmit} id="ipForm" action="GeoIPTest" method="POST">
        	<input type="text" name = "ipAddress" id = "ip"/>
        	<input type="submit" name="submit" value="submit" /> 
        	
        </form>
        
        <div id="status"></div>
        
        <div id="map" style="height: 500px; width:100%; position:absolute"></div>
        
         <script src="https://maps.googleapis.com/maps/api/js?key=YOUR-MAPS-API-KEY" async defer></script>
            </div>
        </div>
    );
};

export default GeoiptestComponent;
