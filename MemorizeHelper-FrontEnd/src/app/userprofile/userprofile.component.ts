import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule }    from '@angular/common/http';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {


  constructor(private httpClient:HttpClient,private router: Router, private popup: Popup) { }

  Username = "";
  
  AllData : any = [];
  
  GetAllData(){
	 
     const Headers = new HttpHeaders().append('Content-Type' , 'application/json');
	 
	 this.httpClient.get("http://localhost:44724/api/MemorizeUnit/"+this.Username).subscribe(data => {
		 
     this.AllData = data;
	 
	 alert("Data Loaded");
	 
	  console.log(this.AllData);
	 
	 },err =>{
		 
	alert("Error");	 
		 
	 });
	   	   
  }
  
  ngOnInit() {
	  
	  this.Username = localStorage.getItem('Username');
	  
	  this.GetAllData();
	  
	 
  }
  
  AddNew() {
	  
	  this.router.navigateByUrl('/addmemoryunit');
  }
  
  LogOut() {
	  
	  this.router.navigateByUrl('/login');
	  
	  localStorage.setItem('isLoggedIn', "false");
	
	localStorage.setItem('Username', "-");
  }
  
  View(X)
  {
	  localStorage.setItem('CurrentUnit', JSON.stringify(X));
	  this.router.navigateByUrl('/viewunit');
  }

  ClickConfirmPopup(){
    this.popup.options = {
      confirmBtnContent: "Yes", 
      cancleBtnContent: "No", 
      color: "#17a598",
      header: "Confirm Deletion"
    }
    
    this.popup.show();
  }
  
  ConfirmDeleteEvent(){
    // this.router.navigateByUrl('/deletememoryunit');
  }

  CancelDeleteEvent(){
    
  }

}
