import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Tema1Component } from './tema1/tema1.component';
import { Tema2Component } from './tema2/tema2.component';
import { Tema3Component } from './tema3/tema3.component';
import { Tema4Component } from './tema4/tema4.component';
import { Tema5Component } from './tema5/tema5.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    Tema1Component,
    Tema2Component,
    Tema3Component,
    Tema4Component,
    Tema5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
