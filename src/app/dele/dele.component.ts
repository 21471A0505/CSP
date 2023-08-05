import { Component,OnInit,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';  
import{  InsertedSuccess,
  Read,
  VolunteerDetails,
  UniqueConstraintError}from '../csp';
  import { Observable } from "rxjs";
  import { Subscription } from 'rxjs';
  import { CspdataService } from '../cspdata.service';

@Component({
  selector: 'app-dele',
  templateUrl: './dele.component.html',
  styleUrls: ['./dele.component.css']
})

export class DeleComponent implements OnInit , OnDestroy{

  canShow:boolean=true;
  show:boolean=false;
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
    job:'',
  };
  SuccessMsg = '';
  ErrorMsg = '';
  // Insert(Form:NgForm) {
  //   this.ErrorMsg = '';
  //   this.SuccessMsg = '';


  //   this.Subscription = this.Service.Insert(Form.value).subscribe({

  //     next: (Data: InsertedSuccess | UniqueConstraintError) => {
       
  //       if ('errorNum' in Data) {
  //         this.ErrorMsg = `${this.User.std_id} alredy Exists`;
  //       } else {

  //         this.SuccessMsg = `${this.User.std_id} Inserted Succesfully`;
  //         Form.reset();
  //       }
      
  //     },
  //     error: (Error) => {
  //       console.log(Error);
  //     },
  //   });
  //   //this the another syntax for the Subscribe Its advanced Handling everything
  // } 
  // Insert(Form:NgForm){
  //   console.log(Form.value);
  //   Form.reset();
  // }
  Delete(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Delete(this.User.phone).subscribe(
      (data)=>{
        if(data){
          console.log(data);
          this.canshow=false;
          this.SuccessMsg = ` SUCCESSFULLY DELETED`;
        }
        else{
          alert("failed");
          this.ErrorMsg = `${this.User.phone} NO RECORD FOUND`;
         }
      }
    )
    alert("  Deleted Successfully (●'◡'●) ");
  }
  
 
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}