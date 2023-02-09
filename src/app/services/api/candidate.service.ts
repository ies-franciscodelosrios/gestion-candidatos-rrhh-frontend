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
    return this.http.post<boolean>(`${environment.api.url}${environment.api.endpoints.candidateInsert}`,candidate)
  }

  getById(id: number): Observable<Candidate> {
    return this.http.get<Candidate>(`${environment.api.url}${environment.api.endpoints.candidateGetById}/${id}`);
  }

  getAll(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${environment.api.url}${environment.api.endpoints.candidateGetAll}`);
  }
}
