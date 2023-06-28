import { Component } from '@angular/core';

@Component({
  selector: 'app-linguagens',
  templateUrl: './linguagens.component.html',
  styleUrls: ['./linguagens.component.scss']
})
export class LinguagensComponent {
  porcentagemPortugues: number = 75;
  porcentagemIngles: number = 60;
  porcentagemEspanhol: number = 90;
}
