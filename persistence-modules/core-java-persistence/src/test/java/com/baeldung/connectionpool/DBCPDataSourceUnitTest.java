package com.baeldung.connectionpool;

import java.sql.SQLException;
import static org.junit.Assert.assertTrue;
import org.junit.jupiter.api.Test;

public class DBCPDataSourceUnitTest {
    
    @Test
    public void givenDBCPDataSourceClass_whenCalledgetConnection_thenCorrect() throws SQLException {
        assertTrue(DBCPDataSource.getConnection().isValid(1));
    }   
}