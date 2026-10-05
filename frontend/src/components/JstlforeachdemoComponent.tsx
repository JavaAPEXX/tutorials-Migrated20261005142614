import React from 'react';

type JstlforeachdemoComponentProps = {
    data?: Record<string, any>;
};

export const JstlforeachdemoComponent: React.FC<JstlforeachdemoComponentProps> = ({ data = {} }) => {
    const { movie, movieList, theLoop } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>Movie List</h1>
        <div>
            <div className="modern-table-wrapper"><table className="modern-table" style="width: 50%">
                <tr>
                    <th>varStatus.index</th>
                    <th>varStatus.count</th>
                    <th>Year</th>
                    <th>Title</th>
                </tr>
                <c:forEach var="movie" items={movieList} varStatus="theLoop">
                    <tr {theLoop.first ? 'className="first"' : ''} {theLoop.last ? 'className="last"' : ''}>
                        <td>{theLoop.index}</td>
                        <td>{theLoop.count}</td>
                        <td>{movie.year}</td>
                        <td>{movie.title}</td>
                    </tr>
                ))}
            </table></div>
        </div>
            </div>
        </div>
    );
};

export default JstlforeachdemoComponent;
