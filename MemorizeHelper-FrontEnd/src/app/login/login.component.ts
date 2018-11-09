import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient:HttpClient,private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit(data) {

    var name=data.name;
 var password=data.password;
 //console.log("name"+name+" password"+password);
    console.log(data);
    var parameter = JSON.stringify({username:name, password:password});
  //console.log("pap"+parameter);
  const headers = new HttpHeaders().append('Content-Type' , 'application/json')
  var postd=this.httpClient.post("http://127.0.0.1:5000/api/auth/login", parameter,{ headers: headers })

  .subscribe(
    data => {
    var token=JSON.stringify(data);
   console.log("data"+token);
   this.router.navigateByUrl('/user');
   }
,
   err =>
   {
    console.log("err"+JSON.stringify(err.statusText));
 if(JSON.stringify(err.statusText).indexOf("Unauthorized")!=-1){
     //alert("Unregistered User");
     document.getElementById("SIAnchor").textContent = "Invaild Username or password ,please click here to sign up! "; 
     document.getElementById("SIAnchor").style.color = "#ff0000";
     
   }
  }  
 
  )
}

    
    //this.router.navigateByUrl('/user');
  }

