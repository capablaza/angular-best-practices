import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class UserService {

  API_URL = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<User[]>{    
    return this.httpClient.get<User[]>(this.API_URL);
  }

  save(user: User): Observable<User> {
    return this.httpClient.post<User>(this.API_URL, user, httpOptions);
  }
  
  delete(userId): Observable<User> {
    return this.httpClient.delete<User>(this.API_URL+"/"+userId, httpOptions);
  }

}
