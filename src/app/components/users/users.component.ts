import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Repos } from 'src/app/repos';
import { GithubService } from 'src/app/github.service';
import { ProfileService } from 'src/app/profile.service';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ GithubService, ProfileService]
})
export class UsersComponent implements OnInit {

  userName = 'gladys-gg';
  repos: Repos[] = [];
  users: User[] = [];
  githubService: any;
  errorMessage!: string;
  loading!: boolean;
  profileRequest: any;

  constructor(_githubService:GithubService, _profileService:ProfileService) { }


  // public async getRepo(){
  //   this.loading = true;
  //   let promise = new Promise<void>((_resolve, _reject)=>{
  //     this.githubService.getRepo( 'gladys-gg').toPromise().then((response: Repos[]) =>{
  //       this.repos = response;
  //       console.log(this.repos);
  //     },
  //       (      _error: any) =>{
  //         this.errorMessage='An error was encountered';
  //         this.loading = false;
  //     }
      
  //     );
  //   });
  //   return promise;
  // }

  public async getRepo(): Promise<void>{
    const repos =await this.githubService.getRepo('gladys-gg')
    return repos;
  }
  
  public getUsers(){
    this.loading = true;
     let promise = new Promise<void>((resolve, _reject)=>{
       this.profileRequest.getUsers(this.userName).toPromise().then((response: any) =>{
         this.users = response;
         resolve();
       },
         (       _error: any) =>{
         this.errorMessage = "An error was encountered";
         this.loading = false;
       }
       );
     });
     return promise;
  }
  ngOnInit(): void {
    console.log(this.getRepo)
  }
  

}
