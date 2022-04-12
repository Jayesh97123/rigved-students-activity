import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form-activity',
  templateUrl: './nested-form-activity.component.html',
  styleUrls: ['./nested-form-activity.component.css']
})
export class NestedFormActivityComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  profile : FormGroup = this.builder.group({
    firstname: ['',Validators.required],
    lastname: ['',Validators.required],
    address : this.builder.group({
      state:['',Validators.required],
      city:['',Validators.required],
      pin:['',Validators.compose([
        Validators.maxLength(6),Validators.required
      ])]
    })
  })

  handleSubmit(){
    console.log(this.profile.value)
    this.profile.reset({})
  }

}
