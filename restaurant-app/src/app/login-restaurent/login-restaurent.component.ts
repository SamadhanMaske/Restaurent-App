import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-restaurent',
  templateUrl: './login-restaurent.component.html',
  styleUrls: ['./login-restaurent.component.css']
})
export class LoginRestaurentComponent implements OnInit {

  constructor(private resto: CommonService, private router:Router) { }

  ngOnInit(): void {
  }
  email :any;
  password:any;

  logIn():any{
    if(this.email=="admin@gmail.com" && this.password=="Admin@123"){
      // this.router.navigate[("../list")]
    }
    else{
      alert("Please enter valid Details")
    }
  }

}
