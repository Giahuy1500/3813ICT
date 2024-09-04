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
  getAllChannels(groupObj:any){
    return this.httpClient.post(BACK_ENDURL + '/channels',groupObj, httpOptions);
  }
  getAllGroup(){
    return this.httpClient.get(BACK_ENDURL + '/groups', httpOptions);
  }
  createUser(userObj:any){
    return this.httpClient.post(BACK_ENDURL + '/createUser',userObj ,httpOptions)
  }
  createGroup(groupObj:any){
    return this.httpClient.post(BACK_ENDURL + '/createGroup',groupObj ,httpOptions)
  }
  createChannel(channelObj:any){
    
    return this.httpClient.post(BACK_ENDURL + '/createChannel',channelObj ,httpOptions)
  }
  deleteUser(userObj:any){
    return this.httpClient.post(BACK_ENDURL + '/deleteUser',userObj ,httpOptions)
  }
  deleteGroup(groupObj:any){
    return this.httpClient.post(BACK_ENDURL + '/deleteGroup',groupObj ,httpOptions)
  }
}
