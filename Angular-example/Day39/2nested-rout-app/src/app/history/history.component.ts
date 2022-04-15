import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  name: undefined | string =undefined
  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.parent?.parent?.params.subscribe((parameter:Params)=>{
      this.name=parameter['name']
    })
  }

}
