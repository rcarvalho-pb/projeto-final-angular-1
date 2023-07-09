import { Component, Input, OnInit } from '@angular/core';
import { CompetenciesData } from 'src/app/models/competencies-data.model';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.scss']
})
export class CompetenciasComponent {
  @Input() competenciesData!: CompetenciesData[];
}
