import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupModalComponent } from '../modal/group-modal/group-modal.component';
import { UserService } from '../../service/user.service';
import { ManageMemberModalComponent } from '../modal/manage-member-modal/manage-member-modal.component';
import { AddChannelModalComponent } from '../modal/add-channel-modal/add-channel-modal.component';
@Component({
  selector: 'app-group-management',
  standalone: true,
  imports: [CommonModule, GroupModalComponent, ManageMemberModalComponent, AddChannelModalComponent],
  templateUrl: './group-management.component.html',
  styleUrl: './group-management.component.css'
})
export class GroupManagementComponent {
  @ViewChild(GroupModalComponent, {static:false}) groupModal:any
  @ViewChild(ManageMemberModalComponent, {static:false}) manageMemberModal:any
  @ViewChild(AddChannelModalComponent, {static:false}) addChannelModal:any

  groups:any[] = []
  constructor(private userService:UserService){}
  ngOnInit(){
    this.loadAllGroup()
  
  }
  loadAllGroup(){
    this.userService.getAllGroup().subscribe(
      (data: any) => {
        this.groups = data
      },
      (error) => {
        console.error('Error:', error);
        alert("An error occurred: " + error.message);
      }
    );
  }
  createGroup(){
    if (this.groupModal) {
      this.groupModal.openModal();
    } else {
      console.error('Modal component is not available');
    }
  }
  openEditGroupModal(group:any){
    this.addChannelModal.openModal(group)
  }
  manageMembers(group:any){
    this.manageMemberModal.openModal(group)
  }
  deleteGroup(name:any){
    let groupObj = {"name": name}
    this.userService.deleteGroup(groupObj)
    .subscribe((data)=>{
      console.log(data)
      this.loadAllGroup()
    })
  }
}
