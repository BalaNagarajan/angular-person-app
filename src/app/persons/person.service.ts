import { Person } from './person.model';
import { EventEmitter } from '@angular/core';
export class PersonService {

   personSelected = new EventEmitter<Person>();
   //Array of Person object
   private persons: Person[] = [
   	new Person('James','Watson','James@test.com','4567789098','London','UK','http://mindsparx.in/wp-content/uploads/2013/07/Dummy-Profile-Picture.jpg'),
    new Person('Mark','Jennison','Mark@test.com','3454432123','Wheeling','USA','http://mindsparx.in/wp-content/uploads/2013/07/Dummy-Profile-Picture.jpg'),
    new Person('Tim','Quenan','Tim@test.com','7654432123','Madris','Spain','http://mindsparx.in/wp-content/uploads/2013/07/Dummy-Profile-Picture.jpg')
   ];

   getPersons() {

   	return this.persons.slice();

   }
	
}