import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from './repos';




@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { 

  
  }
}
