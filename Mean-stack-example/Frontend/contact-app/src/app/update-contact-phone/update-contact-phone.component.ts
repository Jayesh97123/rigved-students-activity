import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-update-contact-phone',
  templateUrl: './update-contact-phone.component.html',
  styleUrls: ['./update-contact-phone.component.css']
})
export class UpdateContactPhoneComponent implements OnInit {

  constructor(private _service:ProfileService,private _activtedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  data:undefined|any=undefined
  phone=new FormControl('')
  _id=new FormControl('')
  updateContactPhone(){
    this._activtedRoute.parent?.params.subscribe({
      next:(params:Params)=>{
        this._service.updateContactPhone(params['id'],this._id.value,this.phone.value,undefined).subscribe({
          next:(data)=>{
            this.data=data
          }
        })
      }
    })
  }
}
