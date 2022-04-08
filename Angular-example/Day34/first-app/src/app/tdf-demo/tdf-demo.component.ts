import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-demo',
  templateUrl: './tdf-demo.component.html',
  styleUrls: ['./tdf-demo.component.css']
})
export class TdfDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formSubmit(fromValue: any):void{
    console.log(fromValue);
  }

}
