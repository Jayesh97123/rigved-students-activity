import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {

  contacts:undefined | any=undefined
  data:undefined|any=undefined
  errMsg:undefined|any=undefined
  constructor(private _service:ProfileService,private _activatedRoute:ActivatedRoute, private _route:Router) { }

  ngOnInit(): void {
    
  }


  

  name=new FormControl('')
  
  getContactByName(){
    console.log(this.name.value)
    this._activatedRoute.parent?.params.subscribe({
      next:(params:Params)=>{
        this._service.getContactName(params['id'],this.name.value).subscribe({
          next:(data)=>{
            this.contacts=data
          }
        });
        
        
      }
    });
  }
  

}
