import { Component} from '@angular/core';


// class User {
//   constructor(
//     public userName: string,
//     public email: string,
//     public followers_url: string,
//     public html_url: string
//   ) { }
// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // api: string = 'https://api.github.com/users';
  // data = [];
  // constructor(private http: HttpClient) {}
  // ngOnInit() {
  //   this.getUsers();
  // }
  // getUsers() {
  //   const promise = new Promise<void>((resolve, reject) => {
  //     const apiURL = this.api;
  //     this.http.get<User[]>(apiURL).subscribe({
  //       next: (res: any) => {
  //         this.data = res.map((res: any) => {
  //           return new User(res.userName, res.email, res.followers_url, res.html_url);
  //         });
  //         resolve();
  //       },
  //       error: (err: any) => {
  //         reject(err);
  //       },
  //       complete: () => {
  //         console.log('complete');
  //       },
  //     });
  //   });
  //   return promise;
  // }
}
