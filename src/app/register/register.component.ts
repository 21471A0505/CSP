import { Component,OnInit,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';  
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import{  InsertedSuccess,
  Read,
  SignupDetails,
  UniqueConstraintError}from '../sign';
  import { Observable } from "rxjs";
  import { Subscription } from 'rxjs';
  import { SigndataService } from '../signdata.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit , OnDestroy {
 

  constructor(private Service:SigndataService,private router: Router){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: SignupDetails = {
    name:'',
    email:'',
    pass:'',
    
  };
  SuccessMsg = '';
  ErrorMsg = '';
  


  Insert(Form: NgForm) {
    console.log(Form.value);
    this.Subscription = this.Service.Insert(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} alredy Exists`;
        } else {
          this.SuccessMsg = ` Inserted Succesfully`;
          Form.reset();
        }
       
      }
    }
    )
    alert(" Successfully Registered (●'◡'●)  ");
    if(1)
          {
            // document.write('failed');
             this.router.navigate(['/login']);
          }
          else{
            alert(" Invalid creditionals ");
            this.router.navigate(['/register']);
            // document.write('failed');
          }
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

  
}
