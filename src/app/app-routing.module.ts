import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login/login.component";
import { MainComponent } from "./main/main/main.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "main", component: MainComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  declarations: []
})
export class AppRoutingModule {}
