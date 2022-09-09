import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  baseURL = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  login(username : any, password : any) {
    return this.http.post(this.baseURL + '/users/login', {
      username: username,
      password: password
    });
 
  }

  signup(email : any, username : any, password : any) {
    return this.http.post(this.baseURL + '/users/register', {
      email : email,
      username : username,
      password : password
    });

  }

}
