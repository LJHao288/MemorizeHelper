import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private httpClient:HttpClient,private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit(data) {
    
 var name=data.name;
 var password=data.password;
 console.log("name"+name+" password"+password);
    var parameter = JSON.stringify({username:name, password:password});
const headers = new HttpHeaders().append('Content-Type' , 'application/json')
//console.log(JSON.stringify({username:a, password:b}));
//var queryHeaders = new HttpHeaders();
   // queryHeaders.append('Content-Type', 'application/json');
var post=this.httpClient.post("http://127.0.0.1:5000/api/auth/register", parameter,{ headers: headers })

.subscribe(data => 
  {
    
    
    alert('User added Successfully');
  
  }
  
  
  ,
         err => {//console.log("eroor"+JSON.stringify(err.error))
         var error=JSON.stringify(err.error);
        if(JSON.stringify(error).indexOf("Username already exists")!=-1){
          alert("Username already exists")
          this.router.navigateByUrl('/');
        }
        else if(JSON.stringify(error).indexOf("Password length")!=-1){
          alert("Password length must between 4 and 8");
        }
        else{
          alert(error);
        }
        
        } 
         

         
         )
         ;


  


  }

}
