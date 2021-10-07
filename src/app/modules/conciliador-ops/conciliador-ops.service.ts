import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConciliadorOps } from './conciliador-ops';
import { ConciliadorOpsFilter } from './conciliador-ops.filter';

@Injectable()
export class ConciliadorOpsService {
  ConciliadorOpsList: ConciliadorOps[] = [];

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<ConciliadorOps> {
    const url = `http://www.angular.at/api/ConciliadorOps/${id}`;
    const params = { 'id': id };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<ConciliadorOps>(url, {params, headers});
  }

  load(filter: ConciliadorOpsFilter): void {
    this.find(filter).subscribe(result => {
        this.ConciliadorOpsList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: ConciliadorOpsFilter): Observable<ConciliadorOps[]> {
    const url = `http://www.angular.at/api/ConciliadorOps`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = {
      'from': filter.from,
      'to': filter.to,
    };

    return this.http.get<ConciliadorOps[]>(url, {params, headers});
  }

  save(entity: ConciliadorOps): Observable<ConciliadorOps> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity.id) {
      url = `http://www.angular.at/api/ConciliadorOps/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<ConciliadorOps>(url, entity, {headers, params});
    } else {
      url = `http://www.angular.at/api/ConciliadorOps`;
      return this.http.post<ConciliadorOps>(url, entity, {headers, params});
    }
  }

  delete(entity: ConciliadorOps): Observable<ConciliadorOps> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity.id) {
      url = `http://www.angular.at/api/ConciliadorOps/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<ConciliadorOps>(url, {headers, params});
    }
    return EMPTY;
  }
}