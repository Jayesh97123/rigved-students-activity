import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-updateedit',
  templateUrl: './updateedit.component.html',
  styleUrls: ['./updateedit.component.css']
})
export class UpdateeditComponent implements OnInit {
  obj:undefined | any=undefined
  name:undefined | any =undefined
  password:undefined | any=undefined
  constructor(private _service:DataService, private fb: FormBuilder, private _router: Router) { }

  data: FormGroup=this.fb.group({
    title:[''],
    details:['']
  })
  ngOnInit(): void {
    this.obj= this._service.update();
    this.name=this._service.update1();
    this.password=this._service.update2();
    this.data.controls['title'].setValue(this.obj.title);
    this.data.controls['details'].setValue(this.obj.details);
  }

  handleeEdit(){
    this._service.updateValue(this.data.value,this.obj,this.name,this.password)
    this._router.navigate(['success',this.name,this.password,'update']);
  }

  


}
