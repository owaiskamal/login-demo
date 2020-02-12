import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class UserauthService {
  constructor(private http: HttpClient) {}

  userAuth(UserId, Password): Observable<any> {
    let user = {
      UserId,
      Password
    };

    return this.http.post(environment.baseUrl + "UserLogin", user);
  }
}
