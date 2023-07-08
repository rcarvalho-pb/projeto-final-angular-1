import { Component, Input } from '@angular/core';
import { AppData } from 'src/app/models/app-data.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() data!: AppData;
}
