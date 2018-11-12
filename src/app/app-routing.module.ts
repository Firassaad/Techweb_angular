import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './components/user/user.component';
import {UserFormComponent} from './user-form/user-form.component';
import {Routes} from '@angular/router';
import {AreaComponent} from './components/area/area.component';
export const routes: Routes = [
  {path: 'home', component: UserComponent},
  {path: 'form', component: UserFormComponent},
  {path: 'area', component: AreaComponent},


]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
