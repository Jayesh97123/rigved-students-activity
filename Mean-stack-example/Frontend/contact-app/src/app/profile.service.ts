import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseURL = "http://localhost:3001/profile"
  constructor(private _http: HttpClient) { }

  // register profile
  public storeProfile(profile: any) : Observable<any> {
    return this._http.post(this.baseURL, profile);
  }
  // login 
  public login(id: number, password: string) : Observable<any> {
    let url = `${this.baseURL}/${id}/${password}`;
    return this._http.get(url);
  }
  //add contacts
  public addContact(id: number, contact: any): Observable<any> { 
    let url = `${this.baseURL}/${id}/addContact`;
    return this._http.put(url, contact);
  }
  //show all contacts
  public showContacts(id: number) : Observable<any>{
    let url = `${this.baseURL}/${id}/c/c`;
    return this._http.get(url);
  }
  //get profile
  public getProfile(id : number) : Observable<any> {
    let url = `${this.baseURL}/${id}`;
    return this._http.get(url);
  }

  //update phone no of contact
  public updateContactPhone(profileId:number,contId:number,phone:any,data:any):Observable<any>{
    let url=`${this.baseURL}/${profileId}/contacts/${contId}/phone/${phone}`;
    return this._http.put(url,data)
  }

  //update phone no of profile
  public updateProfilePhone(profileId:number,phone:any,data:any):Observable<any>{
    let url=`${this.baseURL}/${profileId}/phone/${phone}`;
    return this._http.put(url,data)
  }

  //update dob of profile
  public updateProfileDob(profileId:number,dob:any,data:any):Observable<any>{
    let url=`${this.baseURL}/${profileId}/dob/${dob}`;
    return this._http.put(url,data)
  }

  //update password of profile
  public updateProfilePassword(profileId:number,pass:any,data:any):Observable<any>{
    let url=`${this.baseURL}/${profileId}/password/${pass}`;
    return this._http.put(url,data)
  }

  //delete contact by Contact Id
  public deleteContact(id:number,contactId:number):Observable<any>{
    let url=`${this.baseURL}/${id}/contacts/${contactId}`;
    return this._http.delete(url)
  }

  //get all contact by name
  public getContactName(profileId:number,name:string):Observable<any>{
    let url=`${this.baseURL}/${profileId}/contacts/${name}`
    return this._http.get(url)
  }

  public deleteProfile(id:number):Observable<any>{
    let url=`${this.baseURL}/${id}`;
    return this._http.delete(url)
  }
}
