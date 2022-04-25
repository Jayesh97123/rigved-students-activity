import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private _service:ProfileService,private _active:ActivatedRoute,private _rout:Router) { }

  ngOnInit(): void {
  }

  handleDelete(){
    this._active.parent?.params.subscribe({
      next:(params:Params)=>{
        this._service.deleteProfile(params['id']).subscribe({
          next:(data)=>{
            console.log('Deleted..')
            this._rout.navigate(['/login'])
          }
        })
      }
    })
  }

}
