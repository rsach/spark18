import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';

import { Fire2RoutingModule } from './app-routing.module';
import { ClienteditComponent } from './clientedit/clientedit.component';
import { TeameditComponent } from './teamedit/teamedit.component';
import {ClientService} from "./client.service";
import {TeamService} from "./team.service";
import {ContactService} from "./contact.service";


export const firebaseConfig = {
    apiKey: "AIzaSyDAlLsOJ9JQsnMUYA7kvC4n0amcdTASe24",
    authDomain: "fire2-ba223.firebaseapp.com",
    databaseURL: "https://fire2-ba223.firebaseio.com",
    storageBucket: "fire2-ba223.appspot.com"

};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TeamComponent,
    ClientsComponent,
    ContactComponent,
    ServiceComponent,
    ClienteditComponent,
    TeameditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    Fire2RoutingModule,
    ReactiveFormsModule
  ],
  providers: [ClientService,TeamService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
