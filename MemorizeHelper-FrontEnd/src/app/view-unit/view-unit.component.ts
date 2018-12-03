import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule }    from '@angular/common/http';
import {Location} from '@angular/common';
@Component({
  selector: 'app-view-unit',
  templateUrl: './view-unit.component.html',
  styleUrls: ['./view-unit.component.css']
})
export class ViewUnitComponent implements OnInit {


  CurrentUnit : any = {};
  
  Title = "";
  
  Subject = "";
  
  Priority = "";
  
  Privacy = false;
  
  Tags = "";
  
  Privte = "Privte";
  
  Public = "Public";
  
  Content = "";
  
  Dates = [];
  
  CreationDate = "";
  
  constructor(private router: Router,private httpClient:HttpClient,private _location: Location) { }
  
     GetSchedule(Id){
	 
     const Headers = new HttpHeaders().append('Content-Type' , 'application/json');
	 
	 this.httpClient.get("http://localhost:44724/api/MemorizeUnit/GetSchedule/" + Id).subscribe(data => {
		 
     this.Dates = Object.values(data);
	
	 console.log(this.Dates);
	 
	 },err =>{
		 
	alert("Error");	 
		 
	 });
	   	   
  }

  ngOnInit() {
	  
	  
	  
	  
	  this.CurrentUnit = JSON.parse(localStorage.getItem('CurrentUnit'));
	  
	  this.GetSchedule(this.CurrentUnit.id);
	  
	  this.Title = this.CurrentUnit.title;
	  
	  this.Subject = this.CurrentUnit.subjectName;
	  
	  this.Priority = this.CurrentUnit.priority;
	  
	  this.Privacy = this.CurrentUnit.isPrivate;
	  
	  this.Tags = this.CurrentUnit.tags;
	  
	  this.Content = this.CurrentUnit.stringContent;
	  
	  this.CreationDate = this.CurrentUnit.creationDate;
	  
	  console.log(this.CreationDate);
	  
	  
  }
  

  
   Back(){
	  
    this._location.back();
	
  }

}
