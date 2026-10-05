package com.baeldung.eclipsecollections;

import static org.junit.Assert.assertTrue;

import org.eclipse.collections.api.list.MutableList;
import org.eclipse.collections.impl.block.factory.Predicates;
import org.eclipse.collections.impl.list.mutable.FastList;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class AnySatisfyPatternUnitTest {

    MutableList<Integer> list;

    @BeforeEach
    public void getList() {
        this.list = FastList.newListWith(1, 8, 5, 41, 31, 17, 23, 38);
    }

    @Test
    public void whenAnySatisfiesCondition_thenCorrect() {
        boolean result = list.anySatisfy(Predicates.greaterThan(30));

        assertTrue(result);
    }
}
