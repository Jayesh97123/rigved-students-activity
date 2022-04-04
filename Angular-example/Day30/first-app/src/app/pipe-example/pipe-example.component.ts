import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  template: `
    <p>Username: {{username}}</p>
    <p>Hello {{username | uppercase}}</p>
    <p>Default Date: {{birthday | date}}</p>
    <p>Formatting Date: {{birthday | date }}</p>
    <p>Custom Formatting Date: {{birthday | date :'dd-MM-yyyy'}}</p>
    <p>Amount: {{amount}}</p>
    <p>US Currency: {{amount| currency}}</p>
    <p>Indian Currency: {{amount | currency: 'INR'}} </p>
    <p>Length of name : {{username | size}} </p>
  `,
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  username: string='Jay';
  birthday: Date=new Date(1997,10,28);
  amount: number=56000;

  constructor() { }

  ngOnInit(): void {
  }
  

}
