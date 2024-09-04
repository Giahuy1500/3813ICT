import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css'
})
export class GroupComponent {
  messages:any=""
  newMessage:any=""
  groups:any= [
    { initial: 'S' },
    { initial: 'A' },
    { initial: 'B' }
  ]
  selectGroup(group:any){

  }
  sendMessage(){}
}
