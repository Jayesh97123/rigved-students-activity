import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  name:undefined | string=undefined
  constructor(private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRouter.parent?.parent?.params.subscribe((paramter: Params)=>{
      this.name=paramter['name']
    })
  }

}
