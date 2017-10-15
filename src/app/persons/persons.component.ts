import { Component, OnInit } from '@angular/core';

import { Person } from './person.model';
import { PersonService } from './person.service';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  providers: [PersonService]
})
export class PersonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
