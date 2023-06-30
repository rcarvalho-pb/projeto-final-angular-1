import { Component } from '@angular/core';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.scss']
})
export class CompetenciasComponent {
  porcentagemJava: number = 90;
  porcentagemAngular: number = 80;
  porcentagemPhotoshop: number = 50;
  porcentagemIllustrator: number = 45;
}
