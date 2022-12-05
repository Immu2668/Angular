import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {

  constructor(private data: DataService) { }

  name: string = "";
  status: string = "";

  addNewUser(){
    this.data.addUsers(this.name, this.status);
  }

  ngOnInit(): void {
  }

}
