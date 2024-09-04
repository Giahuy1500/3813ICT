import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../service/user.service';
@Component({
  selector: 'app-manage-member-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-member-modal.component.html',
  styleUrl: './manage-member-modal.component.css'
})
export class ManageMemberModalComponent {
  @ViewChild('modal', { static: false }) modal: any;
  username:any=""
  group:any=""
  channels:any=""
  channel:string=""
  constructor(private userService: UserService){}
  ngOnInit(){
    this.loadChannels()
  }
  loadChannels(){
    let groupObj = {"name": this.group.name}
    this.userService.getAllChannels(groupObj)
    .subscribe((data:any)=>{
      this.channels = data
    })
  }
  openModal(group:any) {
    this.group = group
    this.loadChannels()
    const modalElement = this.modal.nativeElement;
    modalElement.style.display = 'flex';
  }

  closeModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.style.display = 'none';
  }

  onSubmit(){
    console.log(this.channel); // This should log the selected channel's ID
    let selectedChannel = this.channels.find((ch: any) => ch.id === this.channel);
    let obj = {
      "username": this.username,
      "channelname": this.channel,
      "groupname": this.group.name
    };
    console.log(obj);
  }
  onChannelChange() {
    //console.log(this.channels)
    //console.log('Channel changed:', this.channel); // This should log the selected channel's ID
  }
}
