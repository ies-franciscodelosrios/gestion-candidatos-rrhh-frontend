import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Job} from "../../model/job";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

  public insert(job: Job): Observable<boolean> {
    return this.http.post<boolean>(`${environment.url}/Job/Insert`,job)
  }

  getById(id: number): Observable<Job> {
    return this.http.get<Job>(`${environment.url}/Job/GetById/${id}`);
  }

  getAll(): Observable<Job[]> {
    return this.http.get<Job[]>(`${environment.url}/Job/GetAll`);
  }
}
