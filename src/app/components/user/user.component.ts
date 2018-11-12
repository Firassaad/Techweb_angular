import {Component, OnInit, ɵConsole} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  email: string;
  adresse: string;
  hobbies: string[];
  showHobbies : boolean;

  constructor() {
  }

  ngOnInit() {
    this.name = 'toto';
    this.email = 'doudou@esprit.tn';
    this.adresse = ' hay el ghazela';
    this.hobbies = ["poetry", "sport", "fitness"];
    this.showHobbies =false;
  }

  delete(index) {
    console.log(index)
    this.hobbies.splice(index, 1);
  }

  addHobby(hobby) {
    console.log(hobby)
    this.hobbies.push(hobby)

  }
  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }
}
