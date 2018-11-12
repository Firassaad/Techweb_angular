import { Injectable } from '@angular/core';

@Injectable()
export class AreaService {

  constructor() {

    console.log("area service");

  }
  calculateSquare(a){
    return a*a;
  }
  calculateCircle(r){

    return this.calculateSquare(r)*3.14;
  }
}
