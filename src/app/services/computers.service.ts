import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ComputersService {

  constructor(private http: HttpClient) { }

  readonly URL = 'https://testbed.illapa.cloud/db/testbed';

  getComputerData() {
    return this.http.get(this.URL);
  }
}
