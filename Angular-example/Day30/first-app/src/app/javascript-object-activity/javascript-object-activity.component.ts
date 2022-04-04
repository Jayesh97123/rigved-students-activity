import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-object-activity',
  templateUrl: './javascript-object-activity.component.html',
  styleUrls: ['./javascript-object-activity.component.css']
})
export class JavascriptObjectActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee={id:100,name:'Ajay',salary:45200}
}
