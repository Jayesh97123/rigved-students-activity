import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  list:undefined | any=undefined
  constructor(private _service:DataService) { }

  ngOnInit(): void {
    this._service.getNumber().subscribe((data)=>{
      this.list=data
    })
  }



}
