import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: UserService, private routing: Router) { }

  displayedColumns = ['name', 'email', 'action'];
  dataSource: User[];
  
  ngOnInit() {
    this.getAll();
  }

  getAll(){
     this.service.getAll().subscribe(users => this.dataSource =  users);
  }

  delete(userId){
    this.service.delete(userId).subscribe();
    this.service.getAll().subscribe(users => this.dataSource =  users);
  }

}
