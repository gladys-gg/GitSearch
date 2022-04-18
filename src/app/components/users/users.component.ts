import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

})
export class UsersComponent implements OnInit {
  api: string = 'https://api.github.com/users/${username}/repos';
  data = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    const promise = new Promise<void>((resolve, reject) => {
      const apiURL = this.api;
      this.http.get<User[]>(apiURL).subscribe({
        next: (res: any) => {
          this.data = res.map((res: any) => {
            return new User(res.userName, res.email, res.followers_url, res.html_url);
          });
          resolve();
        },
        error: (err: any) => {
          reject(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
    return promise;
  }
}
