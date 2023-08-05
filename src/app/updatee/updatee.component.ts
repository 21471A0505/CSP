import { Component,OnInit ,OnDestroy  } from '@angular/core';
import {
  InsertedSuccess,
  VolunteerDetails,
  UniqueConstraintError,
}from '../csp';
import { Subscription } from 'rxjs';
import { CspdataService } from '../cspdata.service';
@Component({
  selector: 'app-updatee',
  templateUrl: './updatee.component.html',
  styleUrls: ['./updatee.component.css']
})

export class UpdateeComponent  implements OnInit , OnDestroy {
  canShow:boolean=false;
  retrive:boolean=false;
  clicked:boolean=false;
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
    this.clicked=true;
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Read(this.User.phone).subscribe(
      (data:any)=>{
        if(data){
          this.canShow=true;
          this.a=data.Result[0];
          this.retrive=true;
         
          this.User = {
            name:this.a[0] ,
            email:this.a[1],
            gender:this.a[2],
            city:this.a[3],
            dob:this.a[4],
            phone:this.a[5],
            education:this.a[6],
            job:this.a[7]
          
            };
            }
        else{
       alert("can't update");
        }
      }
    )
    
  }
  Update(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Update(this.User.phone,this.User).subscribe(


      
      (data:any)=>{
        if(data){
        
          this.SuccessMsg = `${this.User.phone} updated sucessfully`;
        }
        else{
          this.ErrorMsg = `${this.User.phone} No record Found`;
        }

      }
    )
    
  alert(" Updated successfully (●'◡'●)")
   
    console.log(this.User);
    this.canShow=false;
  }
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.canShow=false;
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
  
}