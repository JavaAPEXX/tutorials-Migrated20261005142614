package com.baeldung.jsonexception;

import org.junit.jupiter.api.Test;

public class MainControllerIntegrationTest {

    @Test(expected = CustomException.class)
    public void givenIndex_thenCustomException() throws CustomException {

        MainController mainController = new MainController();

        mainController.index();

    }

}