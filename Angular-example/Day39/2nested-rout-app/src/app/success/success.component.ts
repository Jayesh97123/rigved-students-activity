import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  name:undefined | string=undefined
  constructor(private _activatedRout:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRout.params.subscribe((parameter: Params)=>{
      this.name=parameter['name']
    })
  }

}
