import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {ContactService} from "../contact.service";
import {Contact} from "../contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  private isNew = true;
  taskForm:FormGroup;
  key=null;

  contact:any[];
  constructor(private  fb:FormBuilder
    ,private contactSrv:ContactService
    ,private route:ActivatedRoute
    , private  router:Router) {
    this.taskForm = fb.group({
      "name" : ["",Validators.required],
      "email" :  ["",Validators.required],
      "subject" :  ["",Validators.required],
      "message" :  ["",Validators.required]
    });
  }

  ngOnInit() {



  }

  submitForm(){
    const client = new Contact(this.taskForm.value.name,this.taskForm.value.email,this.taskForm.value.subject, this.taskForm.value.message);


      this.contactSrv.storeContactForm(client);



  }

  private navigateBack(){
    this.router.navigate(['../']);

  }

  onCancel(){
    this.navigateBack();
  }








}
