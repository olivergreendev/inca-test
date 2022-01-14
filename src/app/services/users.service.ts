import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  userImage: string;
  role: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http: HttpClient) { }

  readonly URL = 'https://testbed.illapa.cloud/db/testbed';

  getUserData() {
    // return this.http.get<User[]>(this.URL);
    return this.http.get(this.URL);
  }
}
