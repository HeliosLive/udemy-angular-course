import { Component, OnInit } from "@angular/core";
import { RoleService } from "src/libs";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-role",
  templateUrl: "./role.component.html",
  styleUrls: ["./role.component.scss"]
})
export class RoleComponent implements OnInit {
  rolesData;
  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    this.roleService.getAllRoles().subscribe(data => {
      this.rolesData = data;
    });
  }

  addNewRole(roleForm: NgForm) {
    this.roleService.addRole(roleForm.value).subscribe(
      data => {
        this.getRoles();
      },
      error => {
        alert("something went wrong1!");
      }
    );
  }

  editRole(roleForm: NgForm) {
    this.roleService.editRole(roleForm.value).subscribe(
      data => {
        this.getRoles();
      },
      error => {
        alert("something went wrong2!");
      }
    );
  }

  deleteRole(roleForm: NgForm) {
    this.roleService.deleteRole(roleForm.value).subscribe(
      data => {
        this.getRoles();
      },
      error => {
        alert("something went wrong2!");
      }
    );
  }
}
