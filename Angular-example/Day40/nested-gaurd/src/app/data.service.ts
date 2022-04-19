import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userArray: any[]=[
    {name:'Jayesh',password:'1234',data:[]}
  ]

  obj:any | undefined=undefined
  name:any | undefined=undefined
  password: any | undefined=undefined
  constructor() { }

  public getUser(): any[]{
    return this.userArray
  }

  public saveUser(obj:any):any{
    console.log('done')
    let object={name:obj.name,password:obj.password,data:[]}
    this.userArray.push(object);
    // for(let i=0;i<this.userArray.length;i++){
    //   if(this.userArray[i].name!=obj.name){
    //     alert('Register Successfully..');
    //     break
    //   }
    //   if(this.userArray[i].name===obj.name){
    //     alert('Duplicate Username not allowed.')
    //   }
    // }
  }

  public createNote(obj:any, nam:any, pass:any): any{
    for(let i=0;i<this.userArray.length;i++){
      if(this.userArray[i].name===nam && this.userArray[i].password===pass){
        //console.log('done')
        let object={title:obj.title,details:obj.details}
        this.userArray[i].data.push(object);
      }
    }
  }

  public showNotes(nam:any,pass:any){
    for(let i=0; i<this.userArray.length; i++){
      if(this.userArray[i].name===nam && this.userArray[i].password===pass){
        return this.userArray[i].data;
      }
    }
  }

  public deleteNotes(nam:any,pass:any,tit:any,det:any){
    for(let i=0; i<this.userArray.length; i++){
      if(this.userArray[i].name===nam && this.userArray[i].password===pass){
        let data1=this.userArray[i].data
        for(let j=0; j<data1.length; j++){
          if(data1[j].title===tit && data1[j].details===det){
            this.userArray[i].data.splice(j,1);
          }
        }
      }
    }
  }

  public updateNotes(nam:any,pass:any,tit:any,det:any){
    for(let i=0; i<this.userArray.length; i++){
      if(this.userArray[i].name===nam && this.userArray[i].password===pass){
        let data1=this.userArray[i].data
        for(let j=0; j<data1.length; j++){
          if(data1[j].title===tit && data1[j].details===det){
            this.obj=data1[j];
            this.name=nam;
            this.password=pass;
            console.log(this.obj)
          }
        }
      }
    }
  }

  public update(): any{
    return this.obj
  }

  public update1(): any{
    return this.name
  }

  public update2(): any{
    return this.password
  }

  public updateValue(newobj: any,oldobj:any, nam: any,pass:any){
    for(let i=0; i<this.userArray.length; i++){
      if(this.userArray[i].name===nam && this.userArray[i].password===pass){
        let data1=this.userArray[i].data
        for(let j=0; j<data1.length; j++){
          if(data1[j].title===oldobj.title && data1[j].details===oldobj.details){
            data1[j].title=newobj.title;
            data1[j].details=newobj.details;
          
          }
        }
      }
    }
  }
}

