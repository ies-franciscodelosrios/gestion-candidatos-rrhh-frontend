import {SubRol} from "./enums/SubRol";
import {Rol} from "./enums/Rol";
import {Localization} from "./enums/Localization";
import {RolStatus} from "./enums/RolStatus";
import {Candidate} from "./candidate";

export interface Job{
  id?: number,
  proyect: string,
  area: string,
  rol:Rol,
  sub_rol:SubRol,
  localization:Localization,
  description:string,
  status:RolStatus,
  vacancies:number,
  closing_date:Date,
  creation_date:Date,
  last_update:Date,
  candidates : Candidate[]

}
