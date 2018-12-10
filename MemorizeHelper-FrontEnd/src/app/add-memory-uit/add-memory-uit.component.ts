import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
var apiUrl = environment.apiUrl;
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
    
  JsonData = {};
  
  SchedulesArray = [];
   
  Username = "";
  
  ValidData = true;
  
  constructor(private httpClient:HttpClient,private router: Router) { }
  
  
  ngOnInit() {
	  
	  
	  
  }
  
  Back(){
	  
	  this.router.navigateByUrl('/myprofile');
	
  }
  
  DeleteDate(i)
  {
	  this.SchedulesArray.splice(i, 1);
  }
  
  
  AddDate(D)
  {
	  
	  this.SchedulesArray.push({date : D.viewModel});
	  
	 
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
	   	   
	   this.JsonData = {Title: Data.Title, Tags : Data.Tags, IsPrivate: this.TempPrivacy, Priority : Data.Priority, SubjectName : Data.Subject, StringContent: Data.Content ,Schedules:this.SchedulesArray, OwnerUsername:this.Username };
	   
	   const Headers = new HttpHeaders().append('Content-Type' , 'application/json');
	   
	   console.log(this.JsonData);
	   
	   var post = this.httpClient.post(apiUrl+'/MemorizeUnit', this.JsonData ,{ headers: Headers }).subscribe(data => 
	   {
		   
		   this.router.navigateByUrl('/myprofile');
		   
		   },err => {
			   
			   var error=JSON.stringify(err.error);
			   
			   alert(error);
			   
			   });
			      
  }

}
