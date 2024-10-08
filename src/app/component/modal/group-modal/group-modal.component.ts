import { CommonModule } from '@angular/common';
import { Component,ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { GroupManagementComponent } from '../../group-management/group-management.component';
@Component({
  selector: 'app-group-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './group-modal.component.html',
  styleUrl: './group-modal.component.css'
})
export class GroupModalComponent {
  @ViewChild('modal', { static: false }) modal: any;
  groupname:any=""
  role:any=""
  email:any=""
  password:any=""
  constructor(private userService:UserService, private groupManagement: GroupManagementComponent){}
  ngAfterViewInit(){
  
  }
  openModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.style.display = 'flex';
  }

  closeModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.style.display = 'none';
  }
  onSubmit(){
    let groupObj = {"name": this.groupname}
    
    this.userService.createGroup(groupObj)
    .subscribe((data:any)=>{
      this.closeModal()
      this.groupManagement.loadAllGroup()
      console.log(data)
    })
  }
}
