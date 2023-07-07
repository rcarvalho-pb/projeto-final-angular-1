import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WhiteBackgroundComponent } from './left-column/white-background/white-background.component';
import { ColumnComponent } from './left-column/column/column.component';
import { FotoPerfilComponent } from './left-column/foto-perfil/foto-perfil.component';
import { ContatoComponent } from './left-column//contato/contato.component';
import { CompetenciasComponent } from './left-column/competencias/competencias.component';
import { LinguagensComponent } from './left-column/linguagens/linguagens.component';
import { IndexComponent } from './pages/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { WorkExperienceComponent } from './upper-right/work-experience/work-experience.component';
import { EducationComponent } from './bottom-right/education/education.component';
import { FormularioContatoComponent } from './formulario-contato/formulario-contato.component';
import {MatButtonModule} from '@angular/material/button';
import { EmailPipePipe } from './pipes/email-pipe.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBackgroundComponent,
    ColumnComponent,
    FotoPerfilComponent,
    ContatoComponent,
    CompetenciasComponent,
    LinguagensComponent,
    IndexComponent,
    WorkExperienceComponent,
    EducationComponent,
    FormularioContatoComponent,
    EmailPipePipe
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
