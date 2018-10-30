import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cars } from './cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  public get(): Observable<Cars[]> {
    return this.http.get<Cars[]>('http://eacodingtest.digital.energyaustralia.com.au/api/v1/cars');
  }

}
