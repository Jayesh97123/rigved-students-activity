import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  na:undefined | string=undefined;
  pass: undefined | string=undefined;
  arr: any=[];
  constructor(private _activateroute:ActivatedRoute,private _service:DataService, private _route:Router) { }

  ngOnInit(): void {
    this._activateroute.parent?.params.subscribe((parameter:Params)=>{
      this.na=parameter['name'];
      this.pass=parameter['pass'];
    })
    //console.log(this.na)
    this.arr=this._service.showNotes(this.na, this.pass) ;
    //console.log(this.arr)
  }

  handleUpdate(tit:any,det: any){
    //console.log(tit, det);
    this._service.updateNotes(this.na,this.pass,tit,det);
    this._route.navigate(['success',this.na,this.pass,'updateEdit'])
  }

}
