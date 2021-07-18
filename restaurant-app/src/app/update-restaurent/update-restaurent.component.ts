import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restaurent',
  templateUrl: './update-restaurent.component.html',
  styleUrls: ['./update-restaurent.component.css']
})
export class UpdateRestaurentComponent implements OnInit {
  alert:boolean=false;
  editRestaurent = new FormGroup({
    name:new FormControl(''),
    Address: new FormControl(''),
    Email: new FormControl(''),
    Phone:new FormControl('')
    
  })

  constructor(private resto: CommonService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      // console.log(result);
      this.editRestaurent = new FormGroup({
        name:new FormControl('name'),
        Address: new FormControl('Address'),
        Email: new FormControl('Email'),
        Phone:new FormControl('Phone')
        
      })
    })
  }

  updateResto(){
    this.resto.updateResto(this.router.snapshot.params.id, this.editRestaurent.value)
    .subscribe((result)=>{
      console.log(result,"Data updated successfully")
      this.alert=true;
    })
  }

  closeAlert(){
    this.alert=false;
  }

}
