import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const BACK_ENDURL = 'http://localhost:3030';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router, private httpClient: HttpClient) {}
  handleSubmit() {
    let user = { username: this.username, password: this.password };
    this.httpClient.post(BACK_ENDURL + '/login', user, httpOptions).subscribe(
      (data: any) => {
        console.log(data);
        if (data.ok) {
          sessionStorage.setItem('username', data.user.username);
          sessionStorage.setItem('role', data.user.role);
          sessionStorage.setItem('email', data.user.email);
          sessionStorage.setItem('loginStatus', data.ok);
          this.router.navigateByUrl('/sidebar');
        } else alert('Wrong password');
      },
      (error) => {
        console.error('Error:', error);
        alert('An error occurred: ' + error.message);
      }
    );
  }
}
