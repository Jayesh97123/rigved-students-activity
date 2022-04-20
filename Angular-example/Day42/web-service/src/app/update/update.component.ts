import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  output:undefined | any=undefined
  value:undefined | any=undefined
  constructor(private _service:DataService) { }

  ngOnInit(): void {
  }

  id=new FormControl('');
  n1=new FormControl('');
  n2=new FormControl('');

  handleUpdate(){
    this._service.updateNumber(this.id.value,this.n1.value,this.n2.value,this.value).subscribe((data)=>{
      this.output=data
    })
  }

}
