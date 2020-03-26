import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data {

  userData = [];
  uniqueValue = 1;
  constructor() { }

  setUserData(obj){
    console.log(obj);
    obj.uniqueId = this.uniqueValue;
    this.userData.push(obj);
    this.uniqueValue++;
  }
  getUserData(){
    return this.userData;
  }

  deleteUserData(obj){
    this.userData = this.userData.filter(data => data.uniqueId !== obj.uniqueId);   
    alert("User deleted Successfully!!"); 
  }

  editUserData(obj,uniqueId){
    this.userData.forEach((data,i)=>{
      if(data.uniqueId == uniqueId){
       this.userData[i]=obj;
      }
    })
  }
}
