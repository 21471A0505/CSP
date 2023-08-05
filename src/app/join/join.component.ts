
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
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit , OnDestroy {
  

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
  SuccessMsg = '';
  ErrorMsg = '';
  


  Insert(Form: NgForm) {
    console.log(Form.value);
    this.Subscription = this.Service.Insert(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.phone} alredy Exists`;
        } else {
          this.SuccessMsg = ` Inserted Succesfully`;
          Form.reset();
        }
       
      }
    }
    )
    alert(" Successfully Joined as a Volunteer (●'◡'●)  ");
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

  
}
