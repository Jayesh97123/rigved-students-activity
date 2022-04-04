import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-and-pipe-activity',
  templateUrl: './structural-directive-and-pipe-activity.component.html',
  styleUrls: ['./structural-directive-and-pipe-activity.component.css']
})
export class StructuralDirectiveAndPipeActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user=[
    {name:'Alex', gender:'Male', address:{state:'KA', city:'BLR'}},
    {name:'Jennifer', gender:'Female', address:{state:'MH', city:'MBI'}},
    {name:'Zaheer', gender:'Male', address:{state:'KA', city:'PUN'}}
  ]
}
