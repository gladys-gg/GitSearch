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

  constructor(githubService:GithubService, profileService:ProfileService) { }

  ngOnInit(): void {
  }

}
