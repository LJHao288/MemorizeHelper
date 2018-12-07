import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule }    from '@angular/common/http';
import { text } from '@angular/core/src/render3/instructions';
import {Location} from '@angular/common';
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  CurrentUnit : any = {};
  Title = "";
  
  Subject = "";
  
  Priority = "";
  
  Privacy = false;
  
  Tags = "";
  
  Privte = "Privte";
  
  Public = "Public";
  
  Content = "";
  
  constructor(private httpClient:HttpClient,private router: Router,private _location: Location) { }
  AllData : any = [];
  
  ngOnInit() {
    this.CurrentUnit = JSON.parse(localStorage.getItem('CurrentUnit'));
	  
	  this.Title = this.CurrentUnit.title;
	  
	  this.Subject = this.CurrentUnit.subjectName;
	  
	  this.Priority = this.CurrentUnit.priority;
	  
	  this.Privacy = this.CurrentUnit.isPrivate;
	  
	  this.Tags = this.CurrentUnit.tags;
	  
	  this.Content = this.CurrentUnit.stringContent;
  }
  serachTitle = "";
  serachTag = "";
  SubjectName="";
  SearchNow()
  {  

    this.serachTitle=(<HTMLInputElement>document.getElementById("Searchtext")).value;
    this.serachTag=(<HTMLInputElement>document.getElementById("Searchtext2")).value;
    this.SubjectName=(<HTMLInputElement>document.getElementById("Searchtext3")).value;
   console.log("serachTitle "+this.serachTitle)
   console.log("serachTag "+this.serachTag)
	 //console.log("inner text "+this.serach)
  const Headers = new HttpHeaders().append('Content-Type' , 'application/json');

this.httpClient.get("http://localhost:44724/api/MemorizeUnit/GetForUserInPage?TitleSearch="+this.serachTitle+"&TagsSearch="+this.serachTag+"&SubjectNameSearch="+this.SubjectName).subscribe(data => {
  
  this.AllData = data;

//alert("Data Loaded");
localStorage.setItem('CurrentUnit', JSON.stringify(this.AllData));
console.log("in    "+JSON.stringify(localStorage.getItem('CurrentUnit')));
	 //this.router.navigateByUrl('/viewunit');
//console.log(this.AllData);
// console.log("out  "+JSON.stringify(localStorage.getItem('CurrentUnit')));

},err =>{
  console.log(" ---"+this.serachTag+ "-- "+this.serachTitle +"--"+this.SubjectName
  )
alert("Error");	 
  
});
       
}
View(X)
{
  localStorage.setItem('CurrentUnit', JSON.stringify(X));
  this.router.navigateByUrl('/viewunit');
}

Clone(X)
{
  
  var Username=localStorage.getItem('Username');
  console.log("Username "+Username)
  this.CurrentUnit = JSON.parse(X.id);
  console.log("id ... MEM  "+JSON.stringify(this.CurrentUnit));
  
var id;
const Headers = new HttpHeaders().append('Content-Type' , 'application/json');

  this.httpClient.post("http://localhost:44724/api/MemorizeUnit/Copy/"+this.CurrentUnit+"/"+Username,{ headers: Headers }).subscribe(data => {
  
    this.AllData = data;
  
  alert("Clone Done!");
 // localStorage.setItem('CurrentUnit', JSON.stringify(this.AllData));
  //console.log("in    "+JSON.stringify(localStorage.getItem('CurrentUnit')));
  
  },err =>{
    console.log(" ---"+this.serachTag+"--"+this.serachTitle+"--"+this.SubjectName
    )
  alert("Unable to Clone it!");	 
    
  });

}
Back(){
	  
  this._location.back();

}

}