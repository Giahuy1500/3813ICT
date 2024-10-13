import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { UserManagementComponent } from '../../user-management/user-management.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edit-user-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-user-modal.component.html',
  styleUrl: './edit-user-modal.component.css',
})
export class EditUserModalComponent {
  @ViewChild('modal', { static: false }) modal: any;
  username: any = '';
  role: any = '';
  email: any = '';
  password: any = '';
  playerObj: any = {};
  constructor(
    private userService: UserService,
    private userManagementComponent: UserManagementComponent
  ) {}
  ngAfterViewInit() {}
  openModal(user: any) {
    this.playerObj = { ...user };

    const modalElement = this.modal.nativeElement;
    modalElement.style.display = 'flex';
  }

  closeModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.style.display = 'none';
  }
  onSubmit() {
    this.playerObj.role = this.role;
    console.log(this.playerObj);
    this.userService.updateRole(this.playerObj).subscribe((data) => {
      console.log(data);
      const modalElement = this.modal.nativeElement;
      modalElement.style.display = 'none';
    });
  }
}
