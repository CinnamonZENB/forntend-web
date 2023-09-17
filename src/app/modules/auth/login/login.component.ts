import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  username: string = '';
  password: string = '';

  login() {
    if (this.username === 'yourusername' && this.password === 'yourpassword') {
    } else {
    }
  }

}
