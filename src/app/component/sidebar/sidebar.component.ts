import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  username:any="" 
  role:any=""
  constructor(private router:Router, httpClient: HttpClient){}
  ngOnInit(){
    this.username = sessionStorage.getItem('username')
    this.role = sessionStorage.getItem('role')
  }
  logout(){
    this.router.navigateByUrl('/login')
    sessionStorage.clear()
  }
}
