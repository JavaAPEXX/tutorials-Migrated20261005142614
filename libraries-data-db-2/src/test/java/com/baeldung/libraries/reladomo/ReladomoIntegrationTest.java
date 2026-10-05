package com.baeldung.libraries.reladomo;

import com.gs.fw.common.mithra.test.ConnectionManagerForTests;
import com.gs.fw.common.mithra.test.MithraTestResource;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.Assert.*;

public class ReladomoIntegrationTest {
    private MithraTestResource mithraTestResource;

    @BeforeEach
    public void setUp() throws Exception {
        this.mithraTestResource = new MithraTestResource("reladomo/ReladomoTestConfig.xml");

        final ConnectionManagerForTests connectionManager = ConnectionManagerForTests.getInstanceForDbName("testDb");
        this.mithraTestResource.createSingleDatabase(connectionManager);

        mithraTestResource.addTestDataToDatabase("reladomo/test-data.txt", connectionManager);

        this.mithraTestResource.setUp();
    }

    @Test
    public void whenGetTestData_thenOk() {
        Employee employee = EmployeeFinder.findByPrimaryKey(1);
        assertEquals(employee.getName(), "Paul");
    }

    @AfterEach
    public void tearDown() throws Exception {
        this.mithraTestResource.tearDown();
    }

}
