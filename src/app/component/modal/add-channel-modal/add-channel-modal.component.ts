import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { GroupManagementComponent } from '../../group-management/group-management.component';
@Component({
  selector: 'app-add-channel-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-channel-modal.component.html',
  styleUrl: './add-channel-modal.component.css'
})
export class AddChannelModalComponent {
  @ViewChild('modal', { static: false }) modal: any;

  channelname:any=""
  group:any=""
  constructor(private userService:UserService, private groupManagement:GroupManagementComponent){}

  openModal(group:any) {
    const modalElement = this.modal.nativeElement;
    modalElement.style.display = 'flex';
    this.group = group
  }

  closeModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.style.display = 'none';
  }
  onSubmit(){
    let channelObj = {"name": this.channelname, "groupName": this.group.name}
    this.userService.createChannel(channelObj)
    .subscribe((data:any)=>{
      this.closeModal()
      this.groupManagement.loadAllGroup()
      console.log(data)
    })
  }
}
