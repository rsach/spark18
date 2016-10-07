import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';

import { TeameditComponent } from './teamedit/teamedit.component';
import { ClienteditComponent } from './clientedit/clientedit.component';


const routes: Routes = [

	{path: '',redirectTo: 'home' , pathMatch: 'full'},
	{path: 'home' , component: HomeComponent },
	{path: 'service' , component: ServiceComponent },
	{path: 'team' , component: TeamComponent },
	{path: 'client' , component: ClientsComponent },
	{path: 'contact' , component: ContactComponent },
	{path: 'teamedit' , component: TeameditComponent },
	{path: 'clientedit' , component: ClienteditComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Fire2RoutingModule { }
