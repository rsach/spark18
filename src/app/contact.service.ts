import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Contact} from "./contact";

@Injectable()
export class ContactService {

  items:FirebaseListObservable<Contact[]>;
  constructor(private  af: AngularFire) {
    this.items  = this.af.database.list('/contact') as FirebaseListObservable<Contact[]>;

  }

  storeContactForm(contact){
    this.items.push(contact);

  }

}
