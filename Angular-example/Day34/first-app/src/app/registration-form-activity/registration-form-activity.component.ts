import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form-activity',
  templateUrl: './registration-form-activity.component.html',
  styleUrls: ['./registration-form-activity.component.css']
})
export class RegistrationFormActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  first: string ='';
  last:string='';
  gender:string='';
  skill:string='';
  qual:string='';
  add:string='';

  handleSubmit(formValue: any):void{
    console.log(formValue);
    this.first=formValue.fn;
    this.last=formValue.ln;
    this.gender=formValue.gn;
    this.skill=formValue.sk;
    this.qual=formValue.qa;
    this.add=formValue.ad;
  }

  

}
