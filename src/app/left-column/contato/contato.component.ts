import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioContatoComponent } from 'src/app/formulario-contato/formulario-contato.component';
import { ContactData } from 'src/app/models/contact-data.model';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  @Input() public contactData!: ContactData;
}