import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : HttpClient) { }
  createuser (user: any): Observable<any>
  { return this.http.post <any> ('localhost: 3000/usermanagement',
    user 
  )as Observable<any>;
}
}
