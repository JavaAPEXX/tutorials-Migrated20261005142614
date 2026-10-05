package testfail;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Disabled;

import static org.junit.Assert.assertNotNull;

public class TestFail {
	
    @Ignore //ignored so the entire tutorials build passes
    @Test
    public void whenMessageAssigned_thenItIsNotNull() {
        String message = "hello there";
        message = null;
        assertNotNull(message);
    }
    
}
