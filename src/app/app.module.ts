import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  FormularioJagfComponent,
} from './components/formulario-jagf/formulario-jagf.component';
import {
  ListadoNoticiasJagfComponent,
} from './components/listado-noticias-jagf/listado-noticias-jagf.component';
import {
  NavbarJagfComponent,
} from './components/navbar-jagf/navbar-jagf.component';
import {
  SpinnerJagfComponent,
} from './shared/spinner-jagf/spinner-jagf.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioJagfComponent,
    ListadoNoticiasJagfComponent,
    NavbarJagfComponent,
    SpinnerJagfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
