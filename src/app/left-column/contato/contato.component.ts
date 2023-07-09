import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioContatoComponent } from 'src/app/formulario-contato/formulario-contato.component';
import { ContactData } from 'src/app/models/contact-data.model';
import { Contact } from 'src/app/models/contact.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  @Input() public contactData!: ContactData;
  @Input() public formularioContato!: Contact;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormularioContatoComponent, {
      disableClose: true,
      data: this.formularioContato,
    });

    dialogRef.afterClosed().subscribe((contact: Contact) => {
      console.log(contact);
    });
  }
}