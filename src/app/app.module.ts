import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
import { NgxSpinnerModule } from "ngx-spinner";

import { RoleComponent } from "./role/role.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

import { CookieService } from "ngx-cookie-service";

import { registerLocaleData } from "@angular/common";
import localeTr from "@angular/common/locales/tr";
import localeTrExtra from "@angular/common/locales/extra/tr";

import { HttpClientModule } from "@angular/common/http";

registerLocaleData(localeTr, "tr-TR", localeTrExtra);

import {
  IgxNavbarModule,
  IgxIconModule,
  IgxNavigationDrawerModule
} from "igniteui-angular";
import { UserService } from "src/libs";

@NgModule({
  declarations: [AppComponent, NavbarComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      progressBar: true,
      easing: "ease-in",
      closeButton: false,
      progressAnimation: "decreasing",
      preventDuplicates: true,
      positionClass: "toast-bottom-left"
    }),
    NgxSpinnerModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule
  ],
  providers: [CookieService, UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
