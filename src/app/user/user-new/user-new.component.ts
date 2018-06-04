import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  form;

  constructor(
    private service: UserService, 
    private routing: Router,
    private fb: FormBuilder,
  ) { 
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  save(){
    let user : User = {
      name : this.form.value.name,
      email : this.form.value.email
    };

    this.service.save(user).subscribe();

    this.routing.navigate(['user']); 
  }

}
