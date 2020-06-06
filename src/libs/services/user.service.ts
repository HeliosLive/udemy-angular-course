import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users = ["ahmet", "kerem"];

  constructor() {}

  isExistName(val: string) {
    if (this.users.indexOf(val) > -1) {
      return of(true);
    } else {
      return of(false);
    }
  }
}
