import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Person } from '../person.model';

import { PersonService } from '../person.service';
 
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

   persons:Person[] ;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.persons = this.personService.getPersons() ;
  }

}
