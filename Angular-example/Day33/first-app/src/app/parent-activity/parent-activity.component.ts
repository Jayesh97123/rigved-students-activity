import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-activity',
  templateUrl: './parent-activity.component.html',
  styleUrls: ['./parent-activity.component.css']
})
export class ParentActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num: number=0;
  p2: number=0;
}
