import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './servicios/post';

@Injectable({
  providedIn: 'root'
})
export class NetworkingService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/post/');
  }

  guardar(post: Post): Observable<any> {
    return this.httpClient.post('http://localhost:8080/post/',post);
  }
}
