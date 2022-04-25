import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-update-profile-dob',
  templateUrl: './update-profile-dob.component.html',
  styleUrls: ['./update-profile-dob.component.css']
})
export class UpdateProfileDobComponent implements OnInit {

  constructor(private _service:ProfileService,private _activtedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  data:undefined|any=undefined
  dob=new FormControl('')

  updateDob(){
    this._activtedRoute.parent?.parent?.params.subscribe({
      next:(params:Params)=>{
        this._service.updateProfileDob(params['id'],this.dob.value,undefined).subscribe({
          next:(data)=>{
            this.data=data
          }
        })
      }
    })
  }
}
