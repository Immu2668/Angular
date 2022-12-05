import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  constructor(private data: DataService) { }

  users :{name: string, status: string}[] = [];

  ngOnInit(): void {
    this.users = this.data.users;
  }
  

}
