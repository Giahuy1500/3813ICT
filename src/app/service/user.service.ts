import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

const BACK_ENDURL = "http://localhost:3030"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  getAllUser(){
    return this.httpClient.get(BACK_ENDURL + '/users', httpOptions);
  }
  createUser(userObj:any){
    return this.httpClient.post(BACK_ENDURL + '/createUser',userObj ,httpOptions)
  }
}
