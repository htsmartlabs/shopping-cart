import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Token } from '../model/token';
import { CountryService } from '../service/country.service';
import { Country } from '../model/country';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  name: string;
  countries: Country[];
  co_id: number;
  pr_id: number;
  ci_id: number;

  constructor(private userService: UserService, private router: Router, private countryService: CountryService) { }

  ngOnInit() {
    this.resetForm();
    this.getAllCountries();
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
      this.countries = [{_id: '', country: '', province: [{name: '', city: []}]}];
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
      };
      this.name = 'Register';
      this.countries = [{_id: '', country: '', province: [{name: '', city: []}]}];
      this.co_id = 0;
      this.pr_id = 0;
      this.ci_id = 0;
    }
  }

  getAllCountries() {
    this.countryService.getAllCountries().subscribe( data => {
      this.countries = data as Country[];
    }, error => {} );
  }

  getCountry(event) {
    this.co_id = event.target.value;
    this.user.address.country = this.countries[this.co_id].country;
  }
  getProvince(event) {
    this.pr_id = event.target.value;
    this.user.address.province = this.countries[this.co_id].province[this.pr_id].name;
  }
  getCity(event) {
    this.ci_id = event.target.value;
    this.user.address.city = this.countries[this.co_id].province[this.pr_id].city[this.ci_id];
  }
}
