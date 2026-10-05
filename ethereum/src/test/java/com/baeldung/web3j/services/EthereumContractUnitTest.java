package com.baeldung.web3j.services;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class EthereumContractUnitTest {

    private Web3Service web3Service;

    @BeforeEach
    public void setup() {
        web3Service = new Web3Service();
    }

    @Test
    public void testContract() {
        String result = web3Service.fromScratchContractExample();
        assert (result instanceof String);
    }

    @Test
    public void sendTx() {
        String result = web3Service.sendTx();
        assert (result instanceof String);
    }

    @AfterEach
    public void cleanup() {
    }
}
