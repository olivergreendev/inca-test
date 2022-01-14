import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SummaryService {

  constructor(private http: HttpClient) { }

  readonly URL = 'https://testbed.illapa.cloud/db/testbed';

  getData() {
    return this.http.get(this.URL);
  }
}
