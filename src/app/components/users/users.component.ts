import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Repos } from 'src/app/repos';
import { GithubService } from 'src/app/github.service';
import { ProfileService } from 'src/app/profile.service';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userName = 'gladys-gg';
  repos: Repos[] = [];
  users: User[] = [];
  githubService: any;
  errorMessage!: string;
  loading!: boolean;
  profileRequest: any;

  constructor(githubService:GithubService, profileService:ProfileService) { }


  public getRepo(){
    this.loading = true;
    let promise = new Promise<void>((resolve, reject)=>{
      this.githubService.getRepo( this.userName).toPromise().then((response: Repos[]) =>{
        this.repos = response;
        resolve();
      },
        (      error: any) =>{
          this.errorMessage='An error was encountered';
          this.loading = false;
      }
      
      );
    });
    return promise;
  }
  public getUsers(){
    this.loading = true;
     let promise = new Promise<void>((resolve, reject)=>{
       this.profileRequest.getUsers(this.userName).toPromise().then((response: any) =>{
         this.users = response;
         resolve();
       },
         (       error: any) =>{
         this.errorMessage = "An error was encountered";
         this.loading = false;
       }
       );
     });
     return promise;
  }
  ngOnInit(): void {
  }
  

}
