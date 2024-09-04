import { Component, ViewChild  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user.service';
import { ChangeDetectorRef } from '@angular/core';
import { AddMemberModalComponent } from '../modal/add-member-modal/add-member-modal.component';
@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [FormsModule, CommonModule, AddMemberModalComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  @ViewChild(AddMemberModalComponent, {static:false}) addMemberModal: any;
  users: any[] = [];
  selectedUser:any = {}
  isAddUSerModalOpen = false;

  constructor(private uService:UserService, private cdr: ChangeDetectorRef){}
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
  async openAddUserModal(){
    if (this.addMemberModal) {
      await this.addMemberModal.openModal();
      this.loadAllUsers();
    } else {
      console.error('Modal component is not available');
    }
  }
  openEditUserModal(user:any){

  }
  deleteUser(username:any){
    let userObj = {"username": username}
    
    this.uService.deleteUser(userObj)
    .subscribe((data:any)=>{
      console.log(data)
      this.loadAllUsers()
    })
  }
  viewUser(username:any){

  }
}
