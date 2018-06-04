import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,  
    FormsModule,
    ReactiveFormsModule,
    MaterialModule   
  ],
  providers: [
    UserService
  ],
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserNewComponent
  ]
})
export class UserModule { }
