import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ButtonComponent } from "./button/button.component";
import { IgxButtonModule } from "igniteui-angular";
const routes: Routes = [
  {
    path: "",
    component: ButtonComponent
  }
];

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    IgxButtonModule
  ]
})
export class StorybookModule {}
