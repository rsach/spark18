import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";
import {Client} from "../client";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:Client[];
  constructor(private  clientSrv:ClientService) {

  }

  ngOnInit() {
    this.clientSrv.getClient().subscribe(clients => {
      this.clients = clients
    });
    console.log(this.clients);

  }


}
