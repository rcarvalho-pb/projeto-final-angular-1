import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Contact } from '../models/contact.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-formulario-contato',
  templateUrl: './formulario-contato.component.html',
  styleUrls: ['./formulario-contato.component.scss']
})
export class FormularioContatoComponent implements OnInit{
  showForm = false;
  contactForm: FormGroup;
  contact!: Contact;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl([null, Validators.required]),
      email: new FormControl([null, [Validators.required, Validators.email]]),
      message: new FormControl([null, [Validators.required, Validators.maxLength(500)]])
    });
  }

  showContactForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    let blankContact: Contact = {
      name: '',
      email: '',
      message: ''
    }
    this.contactForm.patchValue(blankContact);
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
  submitForm() {
    this.contact = this.contactForm.value;
    console.log(this.contact)
  }
}
