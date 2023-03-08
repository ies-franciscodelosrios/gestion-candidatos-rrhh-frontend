import { Injectable } from '@angular/core';
import {BehaviorSubject,map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _state:any = {page: 'home',form:'none'};
  private _StateSubject = new BehaviorSubject<any>({page: 'home',form:'none'});
  private _StateObservable$ = this._StateSubject.asObservable();
  constructor() { }

  //to be improved
  set updateState(state:any) {  //emulo una propiedad llamada updateState que se iguala al parametro
    for (let key in state) {
      if(this._state.hasOwnProperty(key)){
        this._state = {...this._state,[key]:state[key]};
      }else{
        this._state[key] = state[key];  //creo una nueva variable de estado
      }
    }
    this._StateSubject.next(this._state);
  }

  get state() {
    return this._StateObservable$
  }
    //to be improved
  public getPartialState(key:any){
    return this._StateObservable$.pipe(map(state=>state[key]));
  }
}
