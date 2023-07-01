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
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBackgroundComponent,
    ColumnComponent,
    FotoPerfilComponent,
    ContatoComponent,
    CompetenciasComponent,
    LinguagensComponent,
    IndexComponent
  ],
  imports: [
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
