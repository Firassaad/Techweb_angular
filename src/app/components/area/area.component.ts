import {Component, OnInit} from '@angular/core';
import {AreaService} from '../../services/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  providers: [AreaService]
})
export class AreaComponent implements OnInit {
  resualt: number = 0;

  constructor(private area: AreaService) {
  }

  ngOnInit() {

  }


  calculCarre(nb) {
    this.resualt = this.area.calculateSquare(nb);
    console.log(this.calculCarre(nb));
  }
  calculCircle(r){
    this.resualt =this.area.calculateCircle(r);
  }

}
