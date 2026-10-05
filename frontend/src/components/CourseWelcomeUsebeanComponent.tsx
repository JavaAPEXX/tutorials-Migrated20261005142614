import React from 'react';

type CourseWelcomeUsebeanComponentProps = {
    data?: Record<string, any>;
};

export const CourseWelcomeUsebeanComponent: React.FC<CourseWelcomeUsebeanComponentProps> = ({ data = {} }) => {
    const { com, welcomeBean } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <p>Using jsp:useBean action</p>
            <jsp:useBean id="welcomeBean" className="com.baeldung.boot.jsp.coursewelcome.CourseWelcome"/>
            <div>
                {welcomeBean.greeting("Kevin")}
            </div>
            <div>
                {com.baeldung.boot.jsp.coursewelcome.CourseWelcome.staticWelcome("Java Collections")}
            </div>
            </div>
        </div>
    );
};

export default CourseWelcomeUsebeanComponent;
