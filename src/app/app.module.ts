import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';

const myRoutes:Routes = [ 
  { path: 'acerca', component: AcercaDeComponent },
  { path: '404', component: Error404Component },
  { path: 'lista', component: ListaCarrosComponent },
  { path: '', component: PaginaInicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PaginaInicioComponent,
    ListaCarrosComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
