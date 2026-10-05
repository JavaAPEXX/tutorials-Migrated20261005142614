package com.baeldung.linkedlist;

import java.util.LinkedList;
import java.util.ArrayList; 

/**
 *  Demonstrates the different methods to
 *  initialize a LinkedList.
 */
public class MethodsToInitializeLinkedList {


    /**
     * Initialize an Empty List
     */
    public void initializeEmptyList() {
        LinkedList<String> linkedList=new LinkedList<>();

        linkedList.addFirst("one");
        linkedList.add("two");
        linkedList.add("three");

        System.out.println(linkedList);
    }

    /**
     * Initialize a List from a Collection
     */
    public void initializeListFromCollection() {
        ArrayList<Integer> arrayList=new ArrayList<>(3);
 
        arrayList.add(Integer.valueOf(1));
        arrayList.add(Integer.valueOf(2));
        arrayList.add(Integer.valueOf(3));
 
        LinkedList<Integer> linkedList=new LinkedList<>(arrayList);

        System.out.println(linkedList);
    }

}
