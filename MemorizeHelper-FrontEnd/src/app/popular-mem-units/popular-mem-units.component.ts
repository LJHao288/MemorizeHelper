import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import {Popup} from 'ng2-opd-popup';
@Component({
  selector: 'app-popular-mem-units',
  templateUrl: './popular-mem-units.component.html',
  styleUrls: ['./popular-mem-units.component.css']
})
export class PopularMemUnitsComponent implements OnInit {

  CurrentUnit : any = {};
  Title = "";
  
  Subject = "";
  CurrentX = null;
  Priority = "";
  Username = "";
  Privacy = false;
  
  Tags = "";
  
  Privte = "Privte";
  
  Public = "Public";
  
  Content = "";
  GetAllData(){
	 
    const Headers = new HttpHeaders().append('Content-Type' , 'application/json');
  
  this.httpClient.get("http://localhost:44724/api/MemorizeUnit/"+this.Username).subscribe(data => {
    
    this.AllData = data;
  
  },err =>{
    
 alert("Error");	 
    
  });
         
 }
  constructor(private httpClient:HttpClient,private router: Router, private popup: Popup) { }
  AllData : any = [];
  
  ngOnInit() {
    this.CurrentUnit = JSON.parse(localStorage.getItem('CurrentUnit'));
	  
	  this.Title = this.CurrentUnit.title;
	  
	  this.Subject = this.CurrentUnit.subjectName;
	  
	  this.Priority = this.CurrentUnit.priority;
	  
	  this.Privacy = this.CurrentUnit.isPrivate;
	  
	  this.Tags = this.CurrentUnit.tags;
	  
    this.Content = this.CurrentUnit.stringContent;
    
    this.Username = localStorage.getItem('Username');
	  
	  this.GetAllData();
  }
  max_MemUnits = "";
  GetPopularMems()
  {  

    this.max_MemUnits=(<HTMLInputElement>document.getElementById("Searchtext")).value;
   
	 //console.log("inner text "+this.serach)
  const Headers = new HttpHeaders().append('Content-Type' , 'application/json');

this.httpClient.get("http://localhost:44724/api/MemorizeUnit/GetPopular?maxNum="+this.max_MemUnits).subscribe(data => {
  
  this.AllData = data;

//alert("Data Loaded");
localStorage.setItem('CurrentUnit', JSON.stringify(this.AllData));
console.log("in    "+JSON.stringify(localStorage.getItem('CurrentUnit')));
	

},err =>{
  console.log(" ---"+this.max_MemUnits
  )
alert("Please enter a vaild number!");	 
  
});
       
}
View(X)
{
  localStorage.setItem('CurrentUnit', JSON.stringify(X));
  this.router.navigateByUrl('/viewunit');
}
Edit(X)
{
  localStorage.setItem('CurrentUnit', JSON.stringify(X));
  this.router.navigateByUrl('/editunit');
}

ClickConfirmPopup(X){
  this.popup.options = {
    confirmBtnContent: "Yes", 
    cancleBtnContent: "No", 
    color: "#17a598",
    header: "Confirm Deletion"
  }
  
this.CurrentX = X;

  this.popup.show();
}

ConfirmDeleteEvent(){
  


                

this.httpClient.delete("http://localhost:44724/api/MemorizeUnit/"+this.CurrentX.id,{responseType: 'text'}).subscribe(data => {
   
   this.GetAllData();
   this.popup.hide();
   
 },err =>{
   
   alert("Please try again");
 });
 

 
 

}

CancelDeleteEvent(){
  
  this.popup.hide();
 
}
Back(){
	  
  this.router.navigateByUrl('/myprofile');

}

}
