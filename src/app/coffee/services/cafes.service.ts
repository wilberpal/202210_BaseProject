import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cafe } from '../models/cafe.model';

@Injectable({
  providedIn: 'root',
})
export class CafesService {
  private apiUrl: string = environment.cafesUrl;

  getCoffees(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl);
  }

  constructor(private http: HttpClient) {}
}
