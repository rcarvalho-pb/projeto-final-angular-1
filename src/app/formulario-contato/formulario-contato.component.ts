import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-contato',
  templateUrl: './formulario-contato.component.html',
  styleUrls: ['./formulario-contato.component.scss']
})
export class FormularioContatoComponent {
  showForm = false;
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  showContactForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
  submitForm() {
    // Lógica para enviar o formulário
  }
}
