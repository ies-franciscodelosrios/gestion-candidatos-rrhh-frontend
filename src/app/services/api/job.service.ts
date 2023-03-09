import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Job} from "../../model/job";
import {Rol} from "../../model/enums/Rol";
import {SubRol} from "../../model/enums/SubRol";
import {Localization} from "../../model/enums/Localization";
import {RolStatus} from "../../model/enums/RolStatus";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

  public insert(job: Job): Observable<boolean> {
    const {candidates, ...jobWithoutCandidates} = job;
    job.rol = this._getValueOrdinal(Rol, job.rol);
    job.subRol = this._getValueOrdinal(SubRol, job.subRol);
    job.localization = this._getValueOrdinal(Localization, job.localization);
    job.status = this._getValueOrdinal(RolStatus, job.status);

    return this.http.post<boolean>(`${environment.api.url}${environment.api.endpoints.rolInsert}`,job)
  }

  getById(id: number): Observable<Job> {
    return this.http.get<Job>(`${environment.api.url}/Job/GetById/${id}`);
  }
  
  deleteById(id?: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.api.url}/Job/Delete/${id}`);
  }

  getAll(): Observable<Job[]> {
    return this.http.get<Job[]>(`${environment.api.url}${environment.api.endpoints.rolGetAll}`);
  }
  update(job: Job): Observable<boolean> {
    const {candidates, ...jobWithoutCandidates} = job;
    job.rol = this._getValueOrdinal(Rol, job.rol);
    job.subRol = this._getValueOrdinal(SubRol, job.subRol);
    job.localization = this._getValueOrdinal(Localization, job.localization);
    job.status = this._getValueOrdinal(RolStatus, job.status);

    return this.http.put<boolean>(`${environment.api.url}${environment.api.endpoints.rolUpdate}`,job)
  }

  /**
   * NO merezco vivir
   * @param enumObj
   * @param value
   * @private
   */
  private _getValueOrdinal(enumObj: any, value: any) {
    let index =-1;
    for(let key in enumObj) {
      index++;
      if (enumObj[key] === value) {
        return index;
      }
    }
    return index;
  }
}
