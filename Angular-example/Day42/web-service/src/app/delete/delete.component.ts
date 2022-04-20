import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  output:undefined | any=undefined
  constructor(private _service:DataService) { }

  ngOnInit(): void {
  }
  id=new FormControl('')

  handleDelete(){
    this._service.deleteNumber(this.id.value).subscribe((data)=>{
      this.output=data
    })
  }

}
