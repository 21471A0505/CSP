import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import{  InsertedSuccess,Read,SignupDetails,UniqueConstraintError}from './sign';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SigndataService {


  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:8000/';

  Insert(
    Details: SignupDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'signup/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(email: string): Observable<Read> {
    return this.http.get<Read>(`${this.url}signup/Read${email}`);
  }
  Dlogin(email: string): Observable<Read> {
    return this.http.get<Read>(`${this.url}signup/Dlogin${email}`);
  }
  Delete(email: string): Observable<InsertedSuccess> {
    console.log(`${this.url}signup/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}signup/Delete${email}`
    );
  }
  Update(email: string, Details: SignupDetails) {
    return this.http.put(`${this.url}signup/Update${email}`, Details, {
      headers: this.headers,
    });
  }
  
  Showoff(){};


}
