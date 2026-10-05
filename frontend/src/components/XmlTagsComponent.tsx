import React from 'react';

type XmlTagsComponentProps = {
    data?: Record<string, any>;
};

export const XmlTagsComponent: React.FC<XmlTagsComponentProps> = ({ data = {} }) => {
    const { fragment, pageTitle, xmltext, xslt } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>
            {pageTitle}
        </h1>
        <c:remove var="pageTitle"/>
        <p>{pageTitle}</p>
        <div>
            <h3>
                {<x:transform>, <x::param>, <x:parse>, <x:set>, <x:out>, and <x:if> Examples}
            </h3>
            <h3>Store Items:</h3>
            <c:set var="xmltext">
                <items>
                    <item>
                        <name>Steve Madden</name>
                        <category>Sneakers</category>
                        <price>34</price>
                    </item>
        
                    <item>
                        <name>Pearl Izumi</name>
                        <category>Sneakers</category>
                        <price>80</price>
                    </item>
        
                    <item>
                        <name>Katy Perry</name>
                        <category>Heels</category>
                        <price>72</price>
                    </item>
                </items>
            </c:set>
        
            <x:parse xml={xmltext} var="output"/>
            <b>The name of the first item listed in the store is</b>:
            <x:out select="$output/items/item[1]/name"/> with price $<x:out select="$output/items/item[1]/price"/>
            <br>
        
            <x:set var="fragment" select="$output//item"/>
            <b>The second item is </b>:
            {fragment}
        
            <x:if select="$output//item">
            Document has at least one
            <item> element.
                </x:if>
                <br/>
        
                <c:import url="/items_xml" var="xslt"/>
                <x:transform xml={xmltext} xslt={xslt}>
                    <x:param name="bgColor" value="blue"/>
                </x:transform>
        </div>
        <div>
        
            <h3>
                {<x:forEach> Example}
            </h3>
            <ul className="items">
                <x:forEach select="$output/items/item/name" var="item">
                    <li>Item Name: <x:out select="$item"/></li>
                </x:forEach>
            </ul>
        </div>
        <div>
            <h3>
                {<x:choose>, <x:when> and <x:otherwise> Example}
            </h3>
        
            <x:choose>
                <x:when select="$output//item/category = 'Sneakers'">
                    Item category is Sneakers
                </x:when>
        
                <x:when select="$output//item/category = 'Heels'">
                    Item category is Heels
                </x:when>
        
                <x:otherwise>
                    Unknown category.
                </x:otherwise>
            </x:choose>
        </div>
            </div>
        </div>
    );
};

export default XmlTagsComponent;
