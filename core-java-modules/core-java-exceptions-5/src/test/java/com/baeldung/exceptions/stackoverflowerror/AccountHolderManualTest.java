package com.baeldung.exceptions.stackoverflowerror;

import org.junit.jupiter.api.Test;

public class AccountHolderManualTest {
    @Test(expected = StackOverflowError.class)
    public void whenInstanciatingAccountHolder_thenThrowsException() {
        AccountHolder holder = new AccountHolder();
    }
}
