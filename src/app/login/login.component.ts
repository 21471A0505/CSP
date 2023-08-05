import { HttpClient } from '@angular/common/http';
import { Component ,OnInit ,OnDestroy } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';  
import { Observable } from "rxjs";
import { Subscription } from 'rxjs';
import {
  InsertedSuccess,
  SignupDetails,
  UniqueConstraintError,
  Read,LoginDetails} from '../sign';
import { SigndataService } from '../signdata.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
    constructor(private Service:SigndataService,private router: Router){}
    ngOnInit() {}
    Subscription: Subscription = new Subscription();
    a=[]
  umail:string='';
  upass:string='';
  User:LoginDetails={
  email:'',
  pass:''
  }
  Read(){
    this.umail=this.User.email;
    this.upass=this.User.pass;
    this.Subscription=this.Service.Dlogin(this.User.email).subscribe(
      (data:any)=>{
        if(data){
          this.a=data.Result[0];
          this.User={
            email:this.a[0],
            pass:this.a[1]
          }
          if(this.umail==this.User.email && this.upass==this.User.pass)
          {
            // document.write('failed');
             this.router.navigate(['/temp']);
          }
          else{
            this.router.navigate(['/default']);
            // document.write('failed');
          }
      }
        else{
         alert("Can't read");
        }
      }
    )
  }
}
