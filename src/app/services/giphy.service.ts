import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

const URL = "http://localhost:8080/api/search/"

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private http = inject(HttpClient);

  constructor() { }

  searchGiphy(input : string): Observable<string>{
    return this.http.get<string>(URL + input);
  }
}
