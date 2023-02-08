import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

class Application {
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor(private http:HttpClient) { }

  public insert(application: Application): Observable<boolean> {
    return this.http.post<boolean>(`${environment.url}/Application/Insert`,application)
  }

  getById(id: number): Observable<Application> {
    return this.http.get<Application>(`${environment.url}/Application/GetById/${id}`);
  }

  getAll(): Observable<Application[]> {
    return this.http.get<Application[]>(`${environment.url}/Application/GetAll`);
  }
}
