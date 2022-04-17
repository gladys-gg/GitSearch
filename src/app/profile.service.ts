import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user!: User;
  api:string = 'https://api.github.com'
  constructor(private http:HttpClient) { }

  getUsers(userName:string){
    return this.http.get('https://api.github.com/users/{$username}/users');
  }

}