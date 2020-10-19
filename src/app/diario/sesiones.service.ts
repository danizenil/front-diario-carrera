import { Injectable } from '@angular/core';
import {SESIONES} from './sesiones.json'
import { Sesion } from './sesion';
import { of,Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  private urlEndPoint: string='http://localhost:8080/api/sesion';
  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  getSesiones(): Observable <Sesion[]>{
    //return of(SESIONES);
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Sesion[]))
  } 

  create(sesion:Sesion):Observable<Sesion>{
    return this.http.post<Sesion>(this.urlEndPoint, sesion, {headers:this.httpHeaders})
  }

  getSesion(id):Observable<Sesion>{
    return this.http.get<Sesion>(this.urlEndPoint.concat("/",id));
  }

  
  public update(sesion:Sesion): Observable<Sesion>{
    return this.http.put<Sesion>(this.urlEndPoint, sesion, {headers:this.httpHeaders});
  }

  public delete(id: number):Observable<Sesion>{
    return this.http.delete<Sesion>(this.urlEndPoint.concat("/",id.toString()),{headers:this.httpHeaders});
  }

}
