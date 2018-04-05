import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class DataServiceService {

  private x = new BehaviorSubject<any>(['']);
  y = this.x.asObservable();
 constructor() { }

  changeMyGoal(y){
    this.x.next(y);
  }

}
