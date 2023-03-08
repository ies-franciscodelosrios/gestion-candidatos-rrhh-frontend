import {SubRol} from "./enums/SubRol";
import {Rol} from "./enums/Rol";
import {Localization} from "./enums/Localization";
import {RolStatus} from "./enums/RolStatus";
import {Candidate} from "./candidate";

export interface Job{
  id?: number,
  project: string,
  area: string,
  rol:Rol | number,
  subRol:SubRol | number,
  localization:Localization | number,
  description:string,
  status:RolStatus | number,
  vacancies:number,
  closeDate:Date,
  creationDate:Date,
  last_update:Date,
  candidates : Candidate[]

}
