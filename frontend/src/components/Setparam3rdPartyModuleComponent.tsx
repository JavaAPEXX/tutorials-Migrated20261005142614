import React from 'react';

type Setparam3rdPartyModuleComponentProps = {
    data?: Record<string, any>;
};

export const Setparam3rdPartyModuleComponent: React.FC<Setparam3rdPartyModuleComponentProps> = ({ data = {} }) => {
    const { currentLocale } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                The language you have selected: {currentLocale != null ? currentLocale.getDisplayLanguage(currentLocale) : " None"}
            </div>
        </div>
    );
};

export default Setparam3rdPartyModuleComponent;
