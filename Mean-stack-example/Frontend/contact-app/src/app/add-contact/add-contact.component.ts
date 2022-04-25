import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private _service:ProfileService, private _activatedRoute:ActivatedRoute, private _builder:FormBuilder) { }

  ngOnInit(): void {
  }

  dt:undefined| any=undefined
  ContactForm:FormGroup=this._builder.group({
    _id:[''],
    name:[''],
    phone:['']
  })

  handleSubmit(){
    this._activatedRoute.parent?.params.subscribe({
      next:(params:Params)=>{
        this._service.addContact(params['id'],this.ContactForm.value).subscribe({
          next:(data)=>{
            this.dt=data
          }
        })
      }
    })
  }

}
