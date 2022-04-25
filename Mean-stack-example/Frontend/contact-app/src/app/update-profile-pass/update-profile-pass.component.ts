import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-update-profile-pass',
  templateUrl: './update-profile-pass.component.html',
  styleUrls: ['./update-profile-pass.component.css']
})
export class UpdateProfilePassComponent implements OnInit {

  constructor(private _service:ProfileService,private _activtedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  data:undefined|any=undefined
  password=new FormControl('')

  updatePass(){
    this._activtedRoute.parent?.parent?.params.subscribe({
      next:(params:Params)=>{
        this._service.updateProfilePassword(params['id'],this.password.value,undefined).subscribe({
          next:(data)=>{
            this.data=data
          }
        })
      }
    })
  }

  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
