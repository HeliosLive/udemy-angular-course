import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users = ["ahmet", "kerem"];
  isLoggedIn = false;
  constructor() {}

  isExistName(val: string) {
    if (this.users.indexOf(val) > -1) {
      return of(true);
    } else {
      return of(false);
    }
  }

  login() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
