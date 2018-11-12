import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-add-memory-uit',
  templateUrl: './add-memory-uit.component.html',
  styleUrls: ['./add-memory-uit.component.css']
})
export class AddMemoryUitComponent implements OnInit {

  PriorityOptions = ["Intermediate","High","Low"];
  
  PrivacyOptions = ["Private","Public"];
  
  DatesList = [];
  
  TempPrivacy = false;
  
  Content = {};
  
  JsonData = {};
  
  Schedules = [];
  
  Username = "";
  
  constructor(private httpClient:HttpClient) { }
  
  ngOnInit() {
	  
	  
	  
  }
  
  onFormSubmit(Data) 
  {
	  
	   this.Username = localStorage.getItem('Username');
	   
	   console.log(this.Username);
	   
	   this.TempPrivacy = ("Private" == Data.Privacy);
	   
	   this.Content = {Text : Data.Content};
	   
	   this.Schedules.push({Date : Data.Schedules});
	   
	   this.JsonData = {Title: Data.Title, Tags : Data.Tags, IsPrivate: this.TempPrivacy, Priority : Data.Priority, SubjectName : Data.Subject,UnitContent: this.Content ,Schedules:this.Schedules, OwnerUsername:this.Username };
	   
	   const Headers = new HttpHeaders().append('Content-Type' , 'application/json');
	   
	   console.log(this.JsonData);
	   
	   var post = this.httpClient.post('http://localhost:44724/api/MemorizeUnit', this.JsonData ,{ headers: Headers }).subscribe(data => 
	   {
		   
		   
		   alert("Done.");
		   
		   
		   
		   },err => {
			   
			   var error=JSON.stringify(err.error);
			   
			   alert(error);
			   
			   });  
  }

}
