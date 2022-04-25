import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-update-profile-phone',
  templateUrl: './update-profile-phone.component.html',
  styleUrls: ['./update-profile-phone.component.css']
})
export class UpdateProfilePhoneComponent implements OnInit {

  constructor(private _service:ProfileService,private _activtedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  data:undefined|any=undefined
  phone=new FormControl('')

  updatePhone(){
    this._activtedRoute.parent?.parent?.params.subscribe({
      next:(params:Params)=>{
        this._service.updateProfilePhone(params['id'],this.phone.value,undefined).subscribe({
          next:(data)=>{
            this.data=data
          }
        })
      }
    })
  }

}
