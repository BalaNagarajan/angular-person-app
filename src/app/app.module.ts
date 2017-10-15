import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonListComponent } from './persons/person-list/person-list.component';
import { PersonDetailComponent } from './persons/person-detail/person-detail.component';
import { PersonItemComponent } from './persons/person-list/person-item/person-item.component';
import { PersonEditComponent } from './persons/person-list/person-edit/person-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonsComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonItemComponent,
    PersonEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
