import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WhiteBackgroundComponent } from './white-background/white-background.component';
import { ColumnComponent } from './column/column.component';
import { FotoPerfilComponent } from './foto-perfil/foto-perfil.component';
import { ContatoComponent } from './contato/contato.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { LinguagensComponent } from './linguagens/linguagens.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBackgroundComponent,
    ColumnComponent,
    FotoPerfilComponent,
    ContatoComponent,
    CompetenciasComponent,
    LinguagensComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
