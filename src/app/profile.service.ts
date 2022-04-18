import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userInterface } from './userInterface';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  baseURL = 'https://api.github.com/users'
  Users: userInterface[] = [];
  constructor(private http:HttpClient) { }

}
// getUsers();{
//  return this.http.get<userInterface>(this.baseURL+'users')
// }






function getUsers() {
  throw new Error('Function not implemented.');
}

