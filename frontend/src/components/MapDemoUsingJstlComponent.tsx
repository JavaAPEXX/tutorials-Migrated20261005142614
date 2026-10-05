import React from 'react';

type MapDemoUsingJstlComponentProps = {
    data?: Record<string, any>;
};

export const MapDemoUsingJstlComponent: React.FC<MapDemoUsingJstlComponentProps> = ({ data = {} }) => {
    const { entry, movieMap } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <div>Movies in the Map Object (Using JSTL)</div>
        <br/>
        <div className="modern-table-wrapper"><table className="modern-table">
            <tr>
                <th>Code</th>
                <th>Movie Title</th>
            </tr>
            {movieMap && movieMap.map((entry: any, index: number) => (
                <tr>
                    <td>
                        {entry.key}
                    </td>
                    <td>
                        {entry.value}
                    </td>
                </tr>
            ))}
        </table></div>
            </div>
        </div>
    );
};

export default MapDemoUsingJstlComponent;
