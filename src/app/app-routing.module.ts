import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DefaultComponent } from './default/default.component';
import { TestComponent } from './test/test.component';
import { UpdateeComponent } from './updatee/updatee.component';
import { DeleComponent } from './dele/dele.component';
import { JoinComponent } from './join/join.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { TempComponent } from './temp/temp.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'temp',
    component : TempComponent,
    children :[
      {
      path : 'about',
      component : AboutComponent
      },
      {
        path : '',
        component : DefaultComponent
      },
      {
        path : 'contact',
        component : ContactComponent
      },
      {
        path : 'volunteer',
        component : VolunteerComponent,
        children :[
          {
            path : 'updatee',
            component : UpdateeComponent
          },
          {
            path : 'dele',
            component : DeleComponent
          },
          {
            path : '',
            component : JoinComponent
          },
          {
            path : 'test',
            component : TestComponent
          },
          {
            path : 'join',
            component : JoinComponent
          }
        ]
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
