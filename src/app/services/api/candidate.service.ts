import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/model/candidate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  public insert(candidate: Candidate): Observable<boolean> {
    return this.http.post<boolean>(`${environment.url}/Candidate/Insert`,candidate)
  }

  getById(id: number): Observable<Candidate> {
    return this.http.get<Candidate>(`${environment.url}/Candidate/GetById/${id}`);
  }

  getAll(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${environment.url}/Candidate/GetAll`);
  }
}
