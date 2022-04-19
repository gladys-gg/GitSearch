import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  user = 'gladys-gg'

  UserURL:string = `https://api.github.com/users/${this.user}`
  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  //to get users
  getUsers():Observable<any>{
    return this.http.get<any>(this.UserURL)
}

  //for github profile
  public getProfile(searchQuery: string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}${searchQuery}??access_token=+${this.apiKey}`).pipe(
      retry( 1),
      catchError(this.handleErrors)
    );
   
  }

  //for github repos

  public getRepos(searchQuery: string):Observable<any[]>{
    
    return this.http.get<any[]>(`${this.apiUrl}${searchQuery}/repos??access_token=+${this.apiKey}`).pipe(
      retry( 1),
      catchError(this.handleErrors)
    );
  }

  public handleErrors(error: HttpErrorResponse){
    let errorMessage: string;
    if(error.error instanceof ErrorEvent){
      //client side error
      errorMessage = `MESSAGE : ${error.error.message}`;
    }
    else{
      //server side error
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage);
  } 
}

