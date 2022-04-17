import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from './repos';




@Injectable({
  providedIn: 'root'
})
export class GithubService {

 
  constructor(private http:HttpClient) { 
 
  }

  getRepo(username:string){
    return this.http.get('https://api.github.com/users/{$username}/repos');
  }
}
