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

  loginUser() {
    this.authService.userAuth(this.userName, this.password).subscribe(res => {
      console.log("user", res);
      var msg = res;
      if (msg[0]["STATUS"] == "0;Invalid User ID and Password") {
        console.log("error");
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
