import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-group-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-management.component.html',
  styleUrl: './group-management.component.css'
})
export class GroupManagementComponent {
  groups:any= [{"name": "2ddw", "membercount": 11}]
  openAddGroupModal(){}
  openEditGroupModal(group:any){

  }
  manageMembers(group:any){

  }
  deleteGroup(group:any){}
}
