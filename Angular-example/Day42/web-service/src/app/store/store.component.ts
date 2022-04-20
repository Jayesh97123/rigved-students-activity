import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  output:undefined | any=undefined;

  constructor(private _service:DataService, private _builder:FormBuilder) { }

  ngOnInit(): void {
  }

  Form:FormGroup=this._builder.group({
    _id:[''],
    n1:[''],
    n2:['']
  })

  handleStore(){
    this._service.storeNumber(this.Form.value).subscribe((data)=>{
      this.output=data
    })
  }

}
