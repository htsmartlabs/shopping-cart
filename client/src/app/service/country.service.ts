import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Country } from '../model/country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  readonly URL = 'http://localhost:3000/country';

  constructor( private http: HttpClient) { }

  getAllCountries(){
    return this.http.get(this.URL);
  }
}
