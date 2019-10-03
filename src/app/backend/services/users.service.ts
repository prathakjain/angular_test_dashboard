import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, fromEventPattern } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators'; 
import { environment } from '../../../environments/environment';
import { Router, NavigationExtras } from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private serverUrl = environment.apiUrl;
  constructor(private http: HttpClient, private router:Router) { }

  getHeadersLogin(){
   return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',    
        'Version' : environment.apiVersion,
        'Authorization': localStorage.getItem('Authorization')
      })
    }; 
  }

  getHeadersLoginFormdata(){
    return {
       headers: new HttpHeaders({   
         'Version' : environment.apiVersion,
         'Authorization': localStorage.getItem('Authorization')
       })
     }; 
   }

  getHeadersWithoutLogin(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'version' : environment.apiVersion
      })
    };
  }

  getLogindata(){
    return this.http.get(this.serverUrl+'test/get_profile', this.getHeadersLogin()).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(userData : any){
    return this.http.post(this.serverUrl+'test/profile_update', userData, this.getHeadersLoginFormdata()).pipe(
      catchError(this.handleError)
    );
  }

  // resetCurrentRouter(){ //used for reload current route for udate update...
  //   this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};
  //   let currentUrl = this.router.url + '?';
  //   this.router.navigateByUrl(currentUrl).then(() => {
  //   this.router.navigated = false;
  //   this.router.navigate([this.router.url]);
  //  });
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(error);
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}
