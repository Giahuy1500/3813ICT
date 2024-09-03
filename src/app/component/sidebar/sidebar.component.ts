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
  username:string=""
  role:string=""
  constructor(private router:Router, httpClient: HttpClient){}
  logout(){
    this.router.navigateByUrl('/login')
    sessionStorage.clear()
  }
}
