import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Location} from '@angular/common';
@Component({
  selector: 'app-edit-unit',
  templateUrl: './edit-unit.component.html',
  styleUrls: ['./edit-unit.component.css']
})


export class EditUnitComponent implements OnInit {

  PriorityOptions = ["Intermediate","High","Low"];
  
  PrivacyOptions = ["Private","Public"];
  
  DatesList = [];
  
  TempPrivacy = false;
    
  JsonData = {};
  
  SchedulesArray = [];
   
  Username = "";
  
  
  ValidData = true;
  
  CurrentUnit :any = {};
  
  TitleVal = "";
  
  SubjectVal = "";
  
  PriorityVal = "";
  
  PrivacyVal = "";
  
  TagsVal = "";
  
  ContentVal = "";

  Dates = []; 

  UserID = "";  
  
  constructor(private httpClient:HttpClient,private router: Router,private _location: Location) { }
  
  
  GetSchedule(Id){
	 
     const Headers = new HttpHeaders().append('Content-Type' , 'application/json');
	 
	 this.httpClient.get("http://localhost:44724/api/MemorizeUnit/GetSchedule/" + Id).subscribe(data => {
		 
     this.Dates = Object.values(data);;
	
	 console.log(this.Dates);
	 
	 },err =>{
		 
	alert("Error");	 
		 
	 });
	   	   
  }
  
  
  
  ngOnInit() {
	  
	 this.CurrentUnit = JSON.parse(localStorage.getItem('CurrentUnit')); 
	 
	 this.UserID = this.CurrentUnit.id;
	 
	 this.GetSchedule(this.CurrentUnit.id);
	 
	 this.TitleVal = this.CurrentUnit.title;
	
	 this.SubjectVal = this.CurrentUnit.subjectName;
	 
	 this.PriorityVal = this.CurrentUnit.priority;
	 
	 this.PrivacyVal = this.PrivacyOptions[1 - (this.CurrentUnit.isPrivate*1)]
	 
	 this.TagsVal = this.CurrentUnit.tags;
	 
	 this.ContentVal = this.CurrentUnit.stringContent;
	  
  }
  
  Back(){
	  
	  this._location.back();
	
  }
  
  DeleteDate(i)
  {
	  this.Dates.splice(i, 1);
  }
  
  
  AddDate(D)
  {
	  
	  this.Dates.push({date : D.viewModel});
	  
	 
	  this.ValidData = true;
  }
  
  Chnged()
  {
	  this.ValidData = false;
  }
  
  onFormSubmit(Data) 
  {
	  
	   this.Username = localStorage.getItem('Username');
	   
	   console.log(this.Username);
	   
	   this.TempPrivacy = ("Private" == Data.Privacy);
	   	   
	   this.JsonData = { Id:this.UserID,Title: Data.Title, Tags : Data.Tags, IsPrivate: this.TempPrivacy, Priority : Data.Priority, SubjectName : Data.Subject, StringContent: Data.Content ,Schedules:this.Dates,OwnerUsername:this.Username };
	   
	   const Headers = new HttpHeaders().append('Content-Type' , 'application/json');
	   
	   console.log(this.JsonData);
	   
	   var post = this.httpClient.put('http://localhost:44724/api/MemorizeUnit/',this.JsonData,{ headers: Headers }).subscribe(data => 
	   {
		   alert("Done");
		   
       this._location.back();
		   
		   },err => {
			   
			   var error=JSON.stringify(err.error);
			   
			   alert(error);
			   
			   });
			      
  }

}
