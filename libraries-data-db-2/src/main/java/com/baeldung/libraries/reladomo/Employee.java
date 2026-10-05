package com.baeldung.libraries.reladomo;
public class Employee extends EmployeeAbstract
{
	public Employee()
	{
		// You must not modify this constructor. Mithra calls this internally.
		// You can call this constructor. You can also add new constructors.
	}
	
	public Employee(long id, String name){
	    this.setId(id);
	    this.setName(name);
	}
}
