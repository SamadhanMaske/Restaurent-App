import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css']
})
export class AddRestaurentComponent implements OnInit {
  alert:boolean=false;

  addRestaurent= new FormGroup({
    name:new FormControl(''),
    Address: new FormControl(''),
    Email: new FormControl(''),
    Phone:new FormControl('')
  })

  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }

  createResto(){
    // console.log(this.addRestaurent.value);
    this.resto.addResto(this.addRestaurent.value).subscribe((result)=>{
      this.alert = true;
      this.addRestaurent.reset({});
      console.log("Get Data From Service", result);
    })
  }

  closeAlert(){
    this.alert=false;
  }

}
