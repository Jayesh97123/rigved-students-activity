import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-deleted-history',
  templateUrl: './deleted-history.component.html',
  styleUrls: ['./deleted-history.component.css']
})
export class DeletedHistoryComponent implements OnInit {
  name: undefined | string =undefined
  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.parent?.parent?.params.subscribe((parameter:Params)=>{
      this.name=parameter['name']
    })
  }
}
