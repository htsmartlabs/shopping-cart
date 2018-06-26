import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Token } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  ticket: Token;

  readonly URL = 'http://localhost:3000/user';
  private header: HttpHeaders;

  constructor(private http: HttpClient) { }

  getUser() {
    this.header = new HttpHeaders().set('autharization', localStorage.getItem('ticket'));
    return this.http.get(this.URL,{headers:this.header});
  }
  addUser(user: User){
    return this.http.post(this.URL,user);
  }
  authUser(user: User) {
    return this.http.post(this.URL+'/login',user);
  }
  updateUser() {
    this.header = new HttpHeaders().set('autharization', localStorage.getItem('ticket'));
    return this.http.put(this.URL+'/'+this.user._id,this.user,{headers:this.header});
  }
  deleteUser() {
    this.header = new HttpHeaders().set('autharization', localStorage.getItem('ticket'));
    return this.http.delete(this.URL+'/'+this.user._id,{headers:this.header});
  }
}
