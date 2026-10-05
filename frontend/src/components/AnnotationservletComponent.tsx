import React from 'react';

type AnnotationservletComponentProps = {
    data?: Record<string, any>;
};

export const AnnotationservletComponent: React.FC<AnnotationservletComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <p>Annotation Servlet!</p>
            </div>
        </div>
    );
};

export default AnnotationservletComponent;
