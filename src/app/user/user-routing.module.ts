import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserNewComponent } from './user-new/user-new.component';

const routes: Routes = [
  { 
    path: 'user',
    children : [
      { path: '', component: UserComponent },
      { path: 'new', component: UserNewComponent }      
    ]  
  }
];

@NgModule({
  imports: [     
    RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
