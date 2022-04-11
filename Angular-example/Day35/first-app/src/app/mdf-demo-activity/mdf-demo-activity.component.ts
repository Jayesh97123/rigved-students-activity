import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mdf-demo-activity',
  templateUrl: './mdf-demo-activity.component.html',
  styleUrls: ['./mdf-demo-activity.component.css']
})
export class MdfDemoActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstname=new FormControl('Jay');
  lastname=new FormControl('');

}
