import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RoleComponent } from "./role/role.component";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "role",
    component: RoleComponent
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
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
