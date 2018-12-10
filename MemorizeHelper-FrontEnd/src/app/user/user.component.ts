import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';
var apiUrl = environment.apiUrl;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']

})
 

export class UserComponent implements OnInit {

  constructor(private httpClient:HttpClient,private router: Router) { }

  ngOnInit() {
  }

  getUserEmail() {
   // const headers = new HttpHeaders().append('Content-Type' , 'application/json')
    //return JSON.stringify(this.httpClient.get("http://localhost:5000/api/values/1",{headers}

   // ))
  // .subscribe(
    //  function(success) {
     //     console.log('RESPONSE', success);
     //     return success;
     // }, function(error) {
     //     console.log('ERROR', error);
     //     return error;
    //  });

  //return "test"
    //return localStorage.getItem('email');
  }


  get_users(){
    //return JSON.stringify(this.httpClient.get('http://localhost:5000/api/values/1',{observe: 'response'})
    return JSON.stringify(this.httpClient.get(apiUrl+'/values/1'));
    
}

  logout() {
   // localStorage.removeItem('email');
    this.router.navigateByUrl('/');
  }

}
