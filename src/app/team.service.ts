import { Injectable } from '@angular/core';
import {Team} from "./team";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Injectable()
export class TeamService {


  items:FirebaseListObservable<Team[]>;




  constructor(private af:AngularFire ) {
    this.items  = this.af.database.list('/team') as FirebaseListObservable<Team[]>;
  }

  getTeam(){

    console.log(this.items);
    return this.items;


  }

  storeTeam(team){
    return this.items.push(team);
  }


  updateTeam(key,team){
    return this.items.update(key,team);
  }

  removeTeam(team){
    return this.items.remove(team);
  }



}
