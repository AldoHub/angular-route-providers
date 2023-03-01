import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Http2Service {

  constructor() { }

  public getAllPosts(): Observable<any[]>{
    return of([{
      title: "First Post coming from Alternative service"
    },
    {
      title: "Second Post from Alternative service"
    }]);
  }

}
