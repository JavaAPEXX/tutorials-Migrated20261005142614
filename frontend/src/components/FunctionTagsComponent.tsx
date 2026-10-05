import React from 'react';

type FunctionTagsComponentProps = {
    data?: Record<string, any>;
};

export const FunctionTagsComponent: React.FC<FunctionTagsComponentProps> = ({ data = {} }) => {
    const { fn, pageTitle, string1, string2, string3, string4 } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>
            {pageTitle}
        </h1>
        <c:set var = "string1" value = "This is first string"/>
        <c:set var = "string2" value = "This is second string with <tag>test XML</tag>"/>
        
        <div>
            <h3>
                {fn:contains() Example}
            </h3>
            <c:if test = "{fn:contains(string1, 'first')}">
            <p>Found 'first' in string<p>
            )}
        </div>
        <div>
            <h3>
                {fn:containsIgnoreCase() Example}
            </h3>
            <c:if test = "{fn:containsIgnoreCase(string1, 'first')}">
            <p>Found 'first' string<p>
            )}
        
            <c:if test = "{fn:containsIgnoreCase(string1, 'FIRST')}">
            <p>Found 'FIRST' string<p>
            )}
        </div>
        <div>
            <h3>
                {fn:endsWith() Example}
            </h3>
            <c:if test = "{fn:endsWith(string1, 'string')}">
            <p>String ends with 'string'<p>
            )}
        </div>
        <div>
            <h3>
                {fn:escapeXml() Example}
            </h3>
            <p>With escapeXml() Function:</p>
            <p>string (1) : {fn:escapeXml(string1)}</p>
            <p>string (2) : {fn:escapeXml(string2)}</p>
        
            <p>Without escapeXml() Function:</p>
            <p>string (1) : {string1}</p>
            <p>string (2) : {string2}</p>
        </div>
        <div>
            <h3>
                {fn:indexOf() Example}
            </h3>
            <p>Index (1) : {fn:indexOf(string1, "first")}</p>
            <p>Index (2) : {fn:indexOf(string2, "second")}</p>
        </div>
        <div>
            <h3>
                {fn:join() and fn:split() Example}
            </h3>
            <c:set var = "string3" value = "{fn:split(string1, ' ')}" />
            <c:set var = "string4" value = "{fn:join(string3, '-')}" />
            <p>Final String : {string4}</p>
        </div>
        <div>
            <h3>
                {fn:length() Example}
            </h3>
            <p>Length of String (1) : {fn:length(string1)}</p>
            <p>Length of String (2) : {fn:length(string2)}</p>
        </div>
        <div>
            <h3>
                {fn:replace() Example}
            </h3>
            <c:set var = "string3" value = "{fn:replace(string1, 'first', 'third')}" />
            <p>Final String : {string3}</p>
        </div>
        <div>
            <h3>
                {fn:startsWith() Example}
            </h3>
            <c:if test = "{fn:startsWith(string1, 'This')}">
                <p>String starts with 'This'</p>
            )}
        </div>
        <div>
            <h3>
                {fn:substring() Example}
            </h3>
            <c:set var = "string3" value = "{fn:substring(string1, 5, 15)}" />
        
            <p>Final sub string : {string3}</p>
        </div>
        <div>
            <h3>
                {fn:substringAfter() Example}
            </h3>
            <c:set var = "string3" value = "{fn:substringAfter(string1, 'is')}" />
        
            <p>Final sub string : {string3}</p>
        </div>
        <div>
            <h3>
                {fn:substringBefore() Example}
            </h3>
            <c:set var = "string3" value = "{fn:substringBefore(string1, 'is')}" />
        
            <p>Final sub string : {string3}</p>
        </div>
        <div>
            <h3>
                {fn:toLowerCase() Example}
            </h3>
            <c:set var = "string3" value = "{fn:toLowerCase(string1)}" />
        
            <p>Final string : {string3}</p>
        </div>
        <div>
            <h3>
                {fn:toUpperCase() Example}
            </h3>
            <c:set var = "string3" value = "{fn:toUpperCase(string1)}" />
        
            <p>Final string : {string3}</p>
        </div>
        <div>
            <h3>
                {fn:trim() Example}
            </h3>
            <c:set var = "string1" value = "This is first String "/>
            <p>String (1) Length : {fn:length(string1)}</p>
        
            <c:set var = "string2" value = "{fn:trim(string1)}" />
            <p>String (2) Length : {fn:length(string2)}</p>
            <p>Final string : "{string2}"</p>
        </div>
            </div>
        </div>
    );
};

export default FunctionTagsComponent;
