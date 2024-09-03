import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-group-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './group-modal.component.html',
  styleUrl: './group-modal.component.css'
})
export class GroupModalComponent {
  group:any=""
  onSubmit(){
    
  }
  close(){

  }
}
