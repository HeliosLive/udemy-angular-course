import { Component, OnInit } from "@angular/core";
import { UserService } from "src/libs";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  userData;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.userData = data;
      },
      error => {
        alert(`${error.error.exception.message}`);
        console.log("error", error);
      }
    );
  }
}
