import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-show-contacts',
  templateUrl: './show-contacts.component.html',
  styleUrls: ['./show-contacts.component.css']
})
export class ShowContactsComponent implements OnInit {

  contacts:undefined | any=undefined
  data:undefined|any=undefined
  errMsg:undefined|any=undefined
  constructor(private _service:ProfileService,private _activatedRoute:ActivatedRoute, private _route:Router) { }

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe({
      next:(params:Params)=>{
        this._service.showContacts(params['id']).subscribe({
          next:(data)=>{
            this.contacts=data
          }
        })
      }
    })
  }

  handleDelete(id:number){
    console.log(id)
    this._activatedRoute.parent?.params.subscribe({
      next:(params:Params)=>{
        this._service.deleteContact(params['id'],id).subscribe({
          next:(data)=>{
            this.data=data
          }
        });
        this._activatedRoute.parent?.params.subscribe({
          next:(params:Params)=>{
            this._service.showContacts(params['id']).subscribe({
              next:(data)=>{
                this.contacts=data
              }
            })
          }
        })
        
      }
    });
    
  }

  handleUpdate(){
    this._activatedRoute.parent?.params.subscribe({
      next:(params:Params)=>{
        this._service.showContacts(params['id']).subscribe({
          next:(data)=>{
            this.contacts=data
          }
        })
      }
    })
  }

  

}
