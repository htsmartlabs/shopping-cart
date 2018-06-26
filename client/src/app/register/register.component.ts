import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Token } from '../model/token';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  private name: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  registerForm(form: NgForm) {
    console.log(form);
    console.log(this.user);
    if (this.user._id === undefined) {
      if (this.user.password === this.user.cPassword) {
        this.userService.user = this.user;
        this.userService.addUser(this.user).subscribe((data) => {
          console.log(data);
          this.router.navigate(['/login']);
        }, (error) => {});
      } else {
        alert('Password did not match 1');
      }
    } else {
      if (this.user.password === this.user.cPassword) {
        this.userService.updateUser().subscribe((data) => {
          this.userService.ticket = data as Token;
          alert(this.userService.ticket.message);
          this.router.navigate(['/login']);
        }, (error) => {});
      } else {
        alert('Password did not match 2');
      }
    }
  }

  resetForm() {
    if (this.userService.user) {
      this.user = this.userService.user;
      this.name = 'Update';
      this.user.password = '';
      this.user.cPassword = '';
    } else {
      this.user = {
        name: '',
        email: '',
        password: '',
        phone: '',
        cPassword: '',
        admin: false,
        address: {
          street: '',
          houseNo: '',
          city: '',
          province: '',
          country: '',
          postalCode: ''
        }
      }
      this.name = 'Register';
    }
  }
}
