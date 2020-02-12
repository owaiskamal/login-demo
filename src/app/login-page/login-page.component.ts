import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { UserauthService } from "../userauth.service";
@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private router: Router,
    private authService: UserauthService
  ) {}

  userName: string;
  password: string;
  ngOnInit() {}


     msg = [];
     jso = [{
       STATUS : '0;Invalid User ID and Password'
     }]
    loginUser() {
    this.authService.userAuth(this.userName, this.password).subscribe(res => {


      //var kol = JSON.stringify(this.jso);
      console.log(res[0].STATUS);
      console.log(this.jso)

      if (res[0].STATUS == "0;Invalid User ID and Password") {



        this.messageService.add({
          severity: "error",
          summary: "Login Failed",
          detail: "Enter correct username and password"
        });

      } else {
        this.messageService.add({
          severity: "success",
          summary: "Login Successfully",
          detail: "Welcome User"
        });
         setTimeout(() => {
           this.router.navigateByUrl("/adminpage");
        }, 2000);
      }
    });
  }
  changePassword() {
    this.router.navigateByUrl("/changepassword");
  }
}
