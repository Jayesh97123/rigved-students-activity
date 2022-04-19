import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {

  constructor(public service: DataService, private _router: Router){}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let arr=this.service.getUser();
      console.log(arr)
      let name=route.paramMap.get('name');
      let password=route.paramMap.get('pass')
      
      for(let i = 0; i<arr.length; i++){
        //console.log(state);
        if(name===arr[i].name && password===arr[i].password){
          return true;
          
        }
      }
      alert('Please check name or username');
        this._router.navigate(['/login']);
        return false;;
  }
  
}
