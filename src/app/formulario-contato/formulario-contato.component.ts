import { Component, Inject,inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Contact } from '../models/contact.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-formulario-contato',
  templateUrl: './formulario-contato.component.html',
  styleUrls: ['./formulario-contato.component.scss'],
})

export class FormularioContatoComponent implements OnInit{
  durationInSeconds = 5;
  showSuccessMessage = false;
  contactForm!: FormGroup;
  contact!: Contact;

  constructor(
    public dialogRef: MatDialogRef<FormularioContatoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar() {
    this._snackBar.openFromComponent(FormContactAnnotatedComponent, {
      duration: this.durationInSeconds * 800,
      verticalPosition: 'top',
    });
  }
  ngOnInit(): void {
    this.buildForm();
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  buildForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required, Validators.maxLength(500)])
    });
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }


  submitForm() {
    this.contact = this.contactForm.value;
    console.log(this.contact);
    this.showSuccessMessage = true;
    this.openSnackBar();
    this.dialogRef.close();
  }
}
@Component({
  selector: 'formulario-contato-snack.component',
  templateUrl: 'formulario-contato-snack.component.html',
  styles: [
    `
    :host {
      display: flex;
    }
    .success-snackbar {
      background-color: rgb(245, 248, 245);
      color: hotpink;
	  }
  `,
  ],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})
export class FormContactAnnotatedComponent{
  snackBarRef = inject(MatSnackBarRef);
}
