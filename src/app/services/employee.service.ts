import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

    url = "http://localhost:9001/utilisateurs" 

  addEmployee(data: any): Observable<any> {
    return this._http.post(this.url, data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    console.log(id)
    console.log(data)
    return this._http.put(`${this.url}/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get(this.url);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${this.url}/${id}`);
  }
}
