import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  users: any[] = [];
  selectedUser:any = {}
  constructor(private uService:UserService){}
  ngOnInit(){
    this.loadAllUsers();
  }
  loadAllUsers(){
    this.uService.getAllUser().subscribe(
      (data: any) => {
        this.users = data
      },
      (error) => {
        console.error('Error:', error);
        alert("An error occurred: " + error.message);
      }
    );
  }
  openAddUserModal(){

  }
  openEditUserModal(user:any){

  }
  deleteUser(username:any){

  }
  viewUser(username:any){

  }
}
