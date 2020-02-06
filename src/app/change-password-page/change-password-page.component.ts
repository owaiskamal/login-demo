import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.scss']
})
export class ChangePasswordPageComponent implements OnInit {
  
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;

  constructor() { }

  ngOnInit() {
  }
 clear(){
   this.oldPassword = '';
   this.newPassword = '';
   this.confirmPassword = '';
 }
}
