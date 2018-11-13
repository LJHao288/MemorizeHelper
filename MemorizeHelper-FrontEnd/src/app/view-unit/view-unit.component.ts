import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-unit',
  templateUrl: './view-unit.component.html',
  styleUrls: ['./view-unit.component.css']
})
export class ViewUnitComponent implements OnInit {


  CurrentUnit = {};
  
  Title = "";
  
  Subject = "";
  
  Priority = "";
  
  Privacy = false;
  
  Tags = "";
  
  Privte = "Privte";
  
  Public = "Public";
  
  Content = "";
  
  constructor(private router: Router) { }


  ngOnInit() {
	  
	  this.CurrentUnit = JSON.parse(localStorage.getItem('CurrentUnit'));
	  
	  this.Title = this.CurrentUnit.title;
	  
	  this.Subject = this.CurrentUnit.subjectName;
	  
	  this.Priority = this.CurrentUnit.priority;
	  
	  this.Privacy = this.CurrentUnit.isPrivate;
	  
	  this.Tags = this.CurrentUnit.tags;
	  
	  this.Content = this.CurrentUnit.stringContent;
	  
  }
  
   Back(){
	  
	  this.router.navigateByUrl('/myprofile');
	
  }

}
