import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user.component';
import { UserNewComponent } from './user-new/user-new.component';

const routes: Routes = [
  { 
    path: 'user',
    children : [
      { path: '', component: UserComponent },
      { path: 'new', component: UserNewComponent },
      { path: 'detail', component: UserDetailComponent }      
    ]  
  }
];

@NgModule({
  imports: [     
    RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
