import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule }    from '@angular/common/http';
import { text } from '@angular/core/src/render3/instructions';
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
  
  constructor(private httpClient:HttpClient,private router: Router) { }
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
  serach = "";
  SearchNow()
  {  

    this.serach=(<HTMLInputElement>document.getElementById("Searchtext")).value;
   
	 //console.log("inner text "+this.serach)
  const Headers = new HttpHeaders().append('Content-Type' , 'application/json');

this.httpClient.get("http://localhost:44724/api/MemorizeUnit/?TitleSearch="+this.serach).subscribe(data => {
  
  this.AllData = data;

//alert("Data Loaded");
localStorage.setItem('CurrentUnit', JSON.stringify(this.AllData));
console.log("in    "+JSON.stringify(localStorage.getItem('CurrentUnit')));
	 //this.router.navigateByUrl('/viewunit');
//console.log(this.AllData);
// console.log("out  "+JSON.stringify(localStorage.getItem('CurrentUnit')));

},err =>{
  
alert("Error");	 
  
});
       
}
View(X)
{
  localStorage.setItem('CurrentUnit', JSON.stringify(X));
  this.router.navigateByUrl('/viewunit');
}
Back(){
	  
  this.router.navigateByUrl('/myprofile');

}

}