import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
  
// Importing forms module
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Health';
  True:Boolean = true;
 close(){
   this.True=false;
 }

//  setTimeout(function() {
//   location.reload();
// }, 5000);

}
