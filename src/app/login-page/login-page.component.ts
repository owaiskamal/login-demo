import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  constructor(private messageService :  MessageService) { }

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
  }
}
