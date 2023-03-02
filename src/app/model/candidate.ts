import {CandidateStatus} from "./enums/CandidateStatus";
import {ContactMethod} from "./enums/ContactMethod";
import {Job} from "./job";

export interface Candidate{
  id?:number,
  name:string,
  surname: string,
  description:string,
  rejection_reason:string,
  technical_test_url:string,
  status:CandidateStatus,
  contact:ContactMethod,
  cv_date:Date,
  interview_date:Date,
  technical_test_date:Date,
  hiring_date:Date,
  first_contact_date:Date,
  job:Job

}
