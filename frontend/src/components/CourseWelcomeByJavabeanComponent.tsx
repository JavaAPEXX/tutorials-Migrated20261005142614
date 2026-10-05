import React from 'react';

type CourseWelcomeByJavabeanComponentProps = {
    data?: Record<string, any>;
};

export const CourseWelcomeByJavabeanComponent: React.FC<CourseWelcomeByJavabeanComponentProps> = ({ data = {} }) => {
    const { courseWelcomeBean } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <p>Using jsp:useBean action with a JavaBean</p>
            <jsp:useBean id="courseWelcomeBean" className="com.baeldung.boot.jsp.coursewelcome.CourseWelcomeBean"/>
            <jsp:setProperty name="courseWelcomeBean" property="username" value="Eric"/>
            <jsp:setProperty name="courseWelcomeBean" property="courseName" value="Spring Security"/>
            <div>{courseWelcomeBean.greetingUser()}</div>
            <div>{courseWelcomeBean.welcomeMsg()}</div>
            </div>
        </div>
    );
};

export default CourseWelcomeByJavabeanComponent;
