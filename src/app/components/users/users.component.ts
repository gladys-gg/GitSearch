import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/profile.service';
import { userInterface } from 'src/app/userInterface';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

})
export class UsersComponent implements OnInit {

  users: userInterface[]=[]

  constructor(private profileService:ProfileService) { }


 
  ngOnInit(): void {
 
   this.profileService.getUsers()
    
  }
  

}
