import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';

// @Injectable({
//   providedIn: 'root'
// })

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable()
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get('/server/api/v1/employee')
  }
}
