import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { QuebraSigilo } from '../models/quebra-sigilo.model';
import { QuebraSigiloFilter } from '../filters/quebra-sigilo.filter';
import { ApiService } from 'src/app/core/http/api.service';
@Injectable()
export class QuebraSigiloService {
  quebraSigiloList: QuebraSigilo[] = [];
  constructor(private apiService: ApiService) {
  }

  getAll(): Observable<QuebraSigilo[]> {
    const url = `/quebra-sigilo`;
    const params = {};
    
    return this.apiService.get(url, new HttpParams({ fromObject: params }));
  }

  load(filter: QuebraSigiloFilter): void {
    this.find(filter).subscribe(result => {
      this.quebraSigiloList = result;
    },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: QuebraSigiloFilter): Observable<QuebraSigilo[]> {
    const url = `/quebra-sigilo`;
    const params = {};

    Object.keys(filter)
    .forEach((key) => {
      params[key] = filter[key];
    });
    
    return this.apiService.get(url, new HttpParams({ fromObject: params }));
  }

  // get(slug): Observable<Article> {
  //   return this.apiService.get('/articles/' + slug)
  //     .pipe(map(data => data.article));
  // }

  // destroy(slug) {
  //   return this.apiService.delete('/articles/' + slug);
  // }

  // save(article): Observable<Article> {
  //   // If we're updating an existing article
  //   if (article.slug) {
  //     return this.apiService.put('/articles/' + article.slug, {article: article})
  //       .pipe(map(data => data.article));

  //   // Otherwise, create a new article
  //   } else {
  //     return this.apiService.post('/articles/', {article: article})
  //       .pipe(map(data => data.article));
  //   }
  // }

  // favorite(slug): Observable<Article> {
  //   return this.apiService.post('/articles/' + slug + '/favorite');
  // }

  // unfavorite(slug): Observable<Article> {
  //   return this.apiService.delete('/articles/' + slug + '/favorite');
  // }



  // findById(id: string): Observable<QuebraSigilo> {
  //   const url = `http://www.angular.at/api/QuebraSigilo/${id}`;
  //   const params = { 'id': id };
  //   const headers = new HttpHeaders().set('Accept', 'application/json');
  //   return this.http.get<QuebraSigilo>(url, { params, headers });
  // }

  

  

  // save(entity: QuebraSigilo): Observable<QuebraSigilo> {
  //   let params = new HttpParams();
  //   let url = '';
  //   const headers = new HttpHeaders().set('content-type', 'application/json');
  //   if (entity.id) {
  //     url = `http://www.angular.at/api/QuebraSigilo/${entity.id.toString()}`;
  //     params = new HttpParams().set('ID', entity.id.toString());
  //     return this.http.put<QuebraSigilo>(url, entity, { headers, params });
  //   } else {
  //     url = `http://www.angular.at/api/QuebraSigilo`;
  //     return this.http.post<QuebraSigilo>(url, entity, { headers, params });
  //   }
  // }

  // delete(entity: QuebraSigilo): Observable<QuebraSigilo> {
  //   let params = new HttpParams();
  //   let url = '';
  //   const headers = new HttpHeaders().set('content-type', 'application/json');
  //   if (entity.id) {
  //     url = `http://www.angular.at/api/QuebraSigilo/${entity.id.toString()}`;
  //     params = new HttpParams().set('ID', entity.id.toString());
  //     return this.http.delete<QuebraSigilo>(url, { headers, params });
  //   }
  //   return EMPTY;
  // }

  downloadFile(url: string): any {
    return this.apiService.download(url);
  }
}