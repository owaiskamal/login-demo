import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  constructor(private messageService :  MessageService , private router : Router) { }

  ngOnInit() {
  }

  loginUser()
  {
      this.messageService.add
      ({
        severity:'success',
        summary:'Login Successfully',
        detail: 'Welcome User'
      });
      setTimeout(() => {
        this.router.navigateByUrl('/adminpage');
      }, 2000);
  }
  changePassword()
  {
    this.router.navigateByUrl('/changepassword');
  }
}
