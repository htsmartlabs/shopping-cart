import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { Token } from '../model/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  ticket: Token;
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  userLogin(form: NgForm) {
    this.userService.authUser(this.user).subscribe( data => {
      this.ticket = data as Token;
      console.log(this.ticket);
      if (this.ticket.status) {
        this.ticket.token = 'Jwt ' + this.ticket.token;
        localStorage.setItem('ticket', this.ticket.token);
        this.router.navigate(['/']);
      } else {
        alert(this.ticket.message);
      }
    }, error => {});
  }

  resetForm(){
    if (this.userService.user) {
      this.user = this.userService.user;
    } else {
      this.user = { email: '', password: ''};
    }
  }

}
