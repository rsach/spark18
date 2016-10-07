import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFire, FirebaseListObservable} from "angularfire2";

import { Client } from './client';


@Injectable()
export class ClientService {
  items:FirebaseListObservable<Client[]>;


  constructor(private af:AngularFire ) {
    this.items  = this.af.database.list('/client') as FirebaseListObservable<Client[]>;
  }

  getClient(){

    console.log(this.items);
    return this.items;


  }

  storeClient(client){
    return this.items.push(client);
  }


  updateClient(key,client){
    return this.items.update(key,client);
  }

  removeClient(client){
    return this.items.remove(client);
  }

}
