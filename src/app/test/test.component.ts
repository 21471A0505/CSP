import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';  
import{  InsertedSuccess,
  Read,
  VolunteerDetails,
  UniqueConstraintError}from '../csp';
  import { Observable } from "rxjs";
  import { Subscription } from 'rxjs';
  import { CspdataService } from '../cspdata.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent  {
canshow:boolean=false;
  constructor(private Service:CspdataService){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: VolunteerDetails = {
    name:'',
    email:'',
    gender:'',
    city:'',
    dob:'',
    phone:0,
    education:'',
    job:''
  };
  a=[];
  SuccessMsg = '';
  ErrorMsg = '';
  Read(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Read(this.User.phone).subscribe(
      (data:any)=>{
        if(data){
          this.a=data.Result[0];
          console.log(data);
          this.User = {
            name:this.a[0],
            email:this.a[1],
            gender:this.a[2],
            city:this.a[3],
            dob:this.a[4],
            phone:this.a[5],
            education:this.a[6],
            job:this.a[7]
            
            };
           this.canshow=true;
       console.log(this.a);
      

        }
        else{
         alert("Can't read");
        }
      }
    )
    alert(" Successfully readed (˘･_･˘)")
  }
}
