import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user.service';
import { AddMemberModalComponent } from '../modal/add-member-modal/add-member-modal.component';
import { EditUserModalComponent } from '../modal/edit-user-modal/edit-user-modal.component';
@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    AddMemberModalComponent,
    EditUserModalComponent,
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css',
})
export class UserManagementComponent {
  @ViewChild(AddMemberModalComponent, { static: false }) addMemberModal: any;
  @ViewChild(EditUserModalComponent, { static: false }) editMemberModal: any;
  users: any[] = [];
  selectedUser: any = {};
  isAddUSerModalOpen = false;

  constructor(private uService: UserService) {}
  ngOnInit() {
    this.loadAllUsers();
  }
  loadAllUsers() {
    this.uService.getAllUser().subscribe(
      (data: any) => {
        this.users = data;
      },
      (error) => {
        console.error('Error:', error);
        alert('An error occurred: ' + error.message);
      }
    );
  }
  async openAddUserModal() {
    if (this.addMemberModal) {
      await this.addMemberModal.openModal();
      this.loadAllUsers();
    } else {
      console.error('Modal component is not available');
    }
  }
  async openEditUserModal(user: any) {
    if (this.editMemberModal) {
      await this.editMemberModal.openModal(user);
      this.loadAllUsers();
    } else {
      console.error('Modal component is not available');
    }
  }
  deleteUser(username: any) {
    let userObj = { username: username };

    this.uService.deleteUser(userObj).subscribe((data: any) => {
      console.log(data);
      this.loadAllUsers();
    });
  }
  viewUser(username: any) {}
}
