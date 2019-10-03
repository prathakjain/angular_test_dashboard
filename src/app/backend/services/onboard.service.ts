import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Onboard } from '../class/onboard';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators'; 
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OnboardService {

  private serverUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
  } 

  getHeadersLogin(){
    return {
       headers: new HttpHeaders({
         'Content-Type': 'application/x-www-form-urlencoded',
         'Accept': 'application/json',    
         'Version' : environment.apiVersion,
         'Authorization': localStorage.getItem('Authorization')
       })
     }; 
   }
 
   getHeadersWithoutLogin(){
     return {
       headers: new HttpHeaders({
         'Content-Type': 'application/x-www-form-urlencoded',
         'Accept': 'application/json',
         'version' : environment.apiVersion
       })
     };
   }

  login(logdata: any){
    return this.http.post(this.serverUrl+'test/login', logdata, this.getHeadersWithoutLogin()).pipe(
      catchError(this.handleError)
    );
  }

  logout(){
    return this.http.get(this.serverUrl+'test/logout', this.getHeadersLogin()).pipe(
      catchError(this.handleError)
    );
  } 

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
