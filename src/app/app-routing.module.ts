import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RoleComponent } from "./role/role.component";
import { UserComponent } from "./user/user.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "role",
    component: RoleComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "user/:id",
    component: UserDetailComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
