import { Component, OnInit } from "@angular/core";
import { LoginModel } from "../../_models/index";
import { TRANSACTIONS } from "../../_mock/transactions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor() {}

  logins: LoginModel = {
    id: 1,
    username: "Chan Tai Man",
    password: "Password"
  };

  transactions = TRANSACTIONS;

  ngOnInit() {}
}
