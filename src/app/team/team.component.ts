import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";


import {Team} from "../team";
import {TeamService} from "../team.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  teams:Team[];
  constructor(private  clientSrv:TeamService) {

  }

  ngOnInit() {
    this.clientSrv.getTeam().subscribe(teams => {
      this.teams = teams
    });
    console.log(this.teams);

  }
}
