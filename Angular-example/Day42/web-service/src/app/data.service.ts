import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl : string = "http://localhost:3002/numbers"
  constructor(private _http:HttpClient) { }

  public getNumber():Observable<any>{
    return this._http.get(this.baseUrl)
  }

  public storeNumber(formValue:any):Observable<any>{
    return this._http.post(this.baseUrl,formValue)
  }

  public deleteNumber(id:any):Observable<any>{
    return this._http.delete(`${this.baseUrl}/${id}`)
  }

  public updateNumber(id:any,n1:any,n2:any,value:any):Observable<any>{
    return this._http.put(`${this.baseUrl}/${id}/${n1}/${n2}`,value)
  }
}
