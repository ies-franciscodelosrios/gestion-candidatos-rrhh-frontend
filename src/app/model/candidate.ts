import {CandidateStatus} from "./enums/CandidateStatus";
import {ContactMethod} from "./enums/ContactMethod";
import {Job} from "./job";

export interface Candidate{
  id?:number,
  name:string, //+
  surname: string,//+
  description:string,//+
  rejectionReason:string,//+
  status:CandidateStatus|number, //enum hacer con select -
  contact:ContactMethod|number,//-
  cvDate:Date, //+
  interviewDate:Date, //+
  hiringDate:Date,//+
  firstContactDate:Date,//+
  job:Job //no poner por ahora

}
