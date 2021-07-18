import { CommonService } from './../common.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-restaurent',
  templateUrl: './register-restaurent.component.html',
  styleUrls: ['./register-restaurent.component.css']
})
export class RegisterRestaurentComponent implements OnInit {
  alert:boolean=false;
  createUser = new FormGroup({
    name:new FormControl(''),
    Address:new FormControl(''),
    Email: new FormControl(''),
    Phone: new FormControl('')
  })
  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }

  regUser(){
    console.log(this.createUser.value);
    this.resto.createUser(this.createUser.value)
    .subscribe((result)=>{
      console.log(result,"Registered Successfully")
    })
  }

}
