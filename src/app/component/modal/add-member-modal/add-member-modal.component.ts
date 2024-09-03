import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { UserService } from '../../../service/user.service';
@Component({
  selector: 'app-add-member-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-member-modal.component.html',
  styleUrl: './add-member-modal.component.css'
})
export class AddMemberModalComponent {
  
  @ViewChild('modal', { static: false }) modal: any;
  username:any=""
  role:any=""
  email:any=""
  password:any=""
  constructor(private userService:UserService){}
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
    let userObj = {"username": this.username, "role": this.role, "email":this.email}
    this.userService.createUser(userObj)
    .subscribe((data:any)=>{
      console.log(data)
    })
    console.log(userObj)
    this.closeModal()
  }
}
