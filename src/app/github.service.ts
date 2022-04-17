import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from './repos';




@Injectable({
  providedIn: 'root'
})
export class GithubService {

  api:string = 'https://api.github.com'
  constructor(private http:HttpClient) { 
 
  }

  getRepo(userName:string){
    return this.http.get('https://api.github.com/users/{$username}/repos');
  }
}
