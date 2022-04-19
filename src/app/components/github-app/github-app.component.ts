import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery!: string;
  public githubProfile:any;
  public githubRepos!:any[];
  public errorMessage!:string;


  constructor(private githubservice: GithubService) { }

  public searchUser(){
      //to get the github profile
    this.githubservice.getProfile(this.githubUserQuery).subscribe((data) => {
      this.githubProfile = data;
    } , (error) => {
      this.errorMessage = error;
    });

    //get the github repos
    this.githubservice.getRepos(this.githubUserQuery).subscribe ((data) => {
      this.githubProfile = data;
    } , (error) => {
      this.errorMessage = error;
    });
  }

  ngOnInit(): void {
  }

}



