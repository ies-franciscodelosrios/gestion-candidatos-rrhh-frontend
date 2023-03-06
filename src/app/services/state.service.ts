import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  isNewJob: boolean = false;

  constructor() { }
}
