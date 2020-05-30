import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "udemy-angular-course";
  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success(
      "Udemy Angular 9 projemize hoşgeldiniz...!",
      "Giriş Başarılı!"
    );
  }
}
