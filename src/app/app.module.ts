import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentComponent } from './components/student.component';
import { UserComponent } from './components/user/user.component';
import {FormsModule} from "@angular/forms";
import { UsersComponent } from './components/users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AreaComponent } from './components/area/area.component';
import { EventsComponent } from './components/events/events.component';
import {HttpModule} from '@angular/http';
import {HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UserComponent,
    UsersComponent,
    UserFormComponent,
    AreaComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
