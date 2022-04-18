import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { userInterface } from './user';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  user:[] = [];
  apiUrl: 'https://api.github.com/users' = "https://api.github.com/users";
  
  constructor(private http: HttpClient) { }


getUser(){
  return this.http.get(this.apiUrl)
}

}
