import { Component, Input } from '@angular/core';
import { LanguagesData } from 'src/app/models/languages-data.model';

@Component({
  selector: 'app-linguagens',
  templateUrl: './linguagens.component.html',
  styleUrls: ['./linguagens.component.scss']
})
export class LinguagensComponent {
  @Input() public languagesData!: LanguagesData[];
}
