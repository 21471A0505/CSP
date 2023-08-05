import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import{  InsertedSuccess,Read,VolunteerDetails,UniqueConstraintError}from './csp';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CspdataService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:8000/';

  Insert(
    Details: VolunteerDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'volunteer/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(phone: number): Observable<Read> {
    return this.http.get<Read>(`${this.url}volunteer/Read${phone}`);
  }
  Delete(phone: number): Observable<InsertedSuccess> {
    console.log(`${this.url}volunteer/Delete${phone}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}volunteer/Delete${phone}`
    );
  }
  Update(phone: number, Details: VolunteerDetails) {
    return this.http.put(`${this.url}volunteer/Update${phone}`, Details, {
      headers: this.headers,
    });
  }
  Showoff(){};


}
