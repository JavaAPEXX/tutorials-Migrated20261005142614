import React from 'react';

type SqlTagsComponentProps = {
    data?: Record<string, any>;
};

export const SqlTagsComponent: React.FC<SqlTagsComponentProps> = ({ data = {} }) => {
    const { dataSource, email, iterator, pageTitle, registered, result, user } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <h1>
            {pageTitle}
        </h1>
        
        <sql:setDataSource var="dataSource" driver="com.mysql.cj.jdbc.Driver" url="jdbc:mysql://localhost/test" user="root" password=""/>
        
        <div>
        
            <h3>
                {<sql:query> Example}
            </h3>
            <sql:query dataSource={dataSource} var="result">
                SELECT * from USERS;
            </sql:query>
            <div className="modern-table-wrapper"><table className="modern-table" width="50%">
                <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Registered</th>
                </tr>
        
                <c:forEach var="user" items={result.rows} varStatus="iterator">
                    <tr>
                        <td>{iterator.index + 1}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.registered}</td>
                    </tr>
                ))}
            </table></div>
        </div>
        <div>
            <h3>
                {<sql:update> Example}
            </h3>
        
            <sql:update dataSource={dataSource} var="count">
                INSERT INTO USERS(first_name, last_name, email) VALUES ('Grace', 'Adams', 'gracea@domain.com');
            </sql:update>
            <sql:query dataSource={dataSource} var="result">
                SELECT * from USERS;
            </sql:query>
            <div className="modern-table-wrapper"><table className="modern-table" width="50%">
                <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Registered</th>
                </tr>
        
                <c:forEach var="user" items={result.rows} varStatus="iterator">
                    <tr>
                        <td>{iterator.index + 1}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.registered}</td>
                    </tr>
                ))}
            </table></div>
        </div>
        <div>
        
            <h3>
                {<sql:param> Example}
            </h3>
        
            <sql:update dataSource = "{dataSource}" var = "count">
                DELETE FROM USERS WHERE email = ?
                <sql:param value = "gracea@domain.com" />
            </sql:update>
            <sql:query dataSource={dataSource} var="result">
                SELECT * from USERS;
            </sql:query>
            <div className="modern-table-wrapper"><table className="modern-table" width="50%">
                <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Registered</th>
                </tr>
        
                <c:forEach var="user" items={result.rows} varStatus="iterator">
                    <tr>
                        <td>{iterator.index + 1}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.registered}</td>
                    </tr>
                ))}
            </table></div>
        
        </div>
        <div>
        
            <h3>
                {<sql:dateParam> Example}
            </h3>
            
        
            <sql:update dataSource = "{dataSource}" var = "count">
                UPDATE Users SET registered = ? WHERE email = ?
                <sql:dateParam value = "{registered}" type = "DATE" />
                <sql:param value = "{email}" />
            </sql:update>
            <sql:query dataSource={dataSource} var="result">
                SELECT * from USERS;
            </sql:query>
            <div className="modern-table-wrapper"><table className="modern-table" width="50%">
                <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Registered</th>
                </tr>
        
                <c:forEach var="user" items={result.rows} varStatus="iterator">
                    <tr>
                        <td>{iterator.index + 1}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.registered}</td>
                    </tr>
                ))}
            </table></div>
        </div>
        <div>
        
            <h3>
                {<sql:transaction> Example}
            </h3>
            <sql:transaction dataSource = "{dataSource}">
                <sql:update var = "count">
                    UPDATE Users SET first_name = 'Patrick-Ellis' WHERE email='patrick@baeldung.com'
                </sql:update>
        
                <sql:update var = "count">
                    UPDATE Users SET last_name = 'Nelson' WHERE email = 'patrick@baeldung.com'
                </sql:update>
        
                <sql:update var = "count">
                    INSERT INTO Users(first_name, last_name, email) VALUES ('Grace', 'Adams', 'gracea@domain.com');
                </sql:update>
            </sql:transaction>
            <sql:query dataSource={dataSource} var="result">
                SELECT * from USERS;
            </sql:query>
            <div className="modern-table-wrapper"><table className="modern-table" width="50%">
                <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Registered</th>
                </tr>
        
                <c:forEach var="user" items={result.rows} varStatus="iterator">
                    <tr>
                        <td>{iterator.index + 1}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.registered}</td>
                    </tr>
                ))}
            </table></div>
        </div>
            </div>
        </div>
    );
};

export default SqlTagsComponent;
