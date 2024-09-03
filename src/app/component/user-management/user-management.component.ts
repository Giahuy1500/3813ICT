import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  users: any = {};
  selectedUser:any = {}
  openAddUserModal(){

  }
  openEditUserModal(user:any){

  }
  deleteUser(username:any){

  }
  viewUser(username:any){

  }
}
