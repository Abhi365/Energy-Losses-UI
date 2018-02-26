import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-users',
  templateUrl: './add-new-users.component.html',
  styleUrls: ['./add-new-users.component.css']
})
export class AddNewUsersComponent implements OnInit {
  searchUserResult:boolean=false;
  isClientActive:boolean;
  expandLinkName1:string='More Details';
  expandLinkName2:string='More Details';
  searchUserName:string='';

  constructor() { }

  ngOnInit() {
  }

  searchUser() {
    this.searchUserResult=true;
  }
  saveUserDetails(){
    
  }

  openTableAccordion1() {
    if(this.expandLinkName1=='More Details'){
      this.expandLinkName1='Less Details';
    }
    else{
      this.expandLinkName1='More Details'
    }
  }

  openTableAccordion2() {
        if(this.expandLinkName2=='More Details'){
      this.expandLinkName2='Less Details';
    }
    else{
      this.expandLinkName2='More Details'
    }
  }

  reset(){
  this.searchUserName='';
  this.searchUserResult=false;
  }

}
