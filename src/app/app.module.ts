import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DefaultComponent } from './default/default.component';
import { TestComponent } from './test/test.component';
import { UpdateeComponent } from './updatee/updatee.component';
import { DeleComponent } from './dele/dele.component';
import { JoinComponent } from './join/join.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { TempComponent } from './temp/temp.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    VolunteerComponent,
    DefaultComponent,
    TestComponent,
    UpdateeComponent,
    DeleComponent,
    JoinComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    TempComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
