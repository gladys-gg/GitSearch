import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/github.service';
import { ProfileService } from 'src/app/profile.service';
import { userInterface } from 'src/app/user';





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

})
export class UsersComponent implements OnInit {


 
  

  constructor(private profileService:ProfileService, gitService:GithubService) { }
  ngOnInit(): void {
  }
}
