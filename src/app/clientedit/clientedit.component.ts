import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import { ClientService } from '../client.service';
import { Client } from '../client';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-clientedit',
  templateUrl: './clientedit.component.html',
  styleUrls: ['./clientedit.component.css']
})
export class ClienteditComponent implements OnInit {

  private isNew = true;
  private subscription:Subscription;
	taskForm:FormGroup;
  key=null;

  clients:Client[];
  constructor(private  fb:FormBuilder
              ,private clientSrv:ClientService
              ,private route:ActivatedRoute
              , private  router:Router) {
  		 this.taskForm = fb.group({
      "name" : ["",Validators.required],
      "imgUrl" :  ["",Validators.required]
    });
   }

  ngOnInit() {
    this.clientSrv.getClient().subscribe(clients => {
      this.clients = clients
    });

    console.log(this.clients);


  }

  submitForm(){
    const client = new Client(this.taskForm.value.name, this.taskForm.value.imgUrl);

    if(this.isNew) {
        const client = new Client(this.taskForm.value.name, this.taskForm.value.imgUrl);

        // console.log(this.taskForm.value.name);
        this.clientSrv.storeClient(client);
      }else{
        this.clientSrv.updateClient(this.key,client);

      }

  }

  private navigateBack(){
    this.router.navigate(['../']);

  }

  onCancel(){
    this.navigateBack();
  }

  onEdit(item){
    this.key = item;
    this.isNew= false;
    var name = item.name;
    var imgUrl = item.imgUrl;
    this.taskForm = this.fb.group({
      name: [name , Validators.required],
      imgUrl: [imgUrl , Validators.required ]
    });

    this.submitForm();





  }


  onDelete(item){
    this.clientSrv.removeClient(item);
  }

}
