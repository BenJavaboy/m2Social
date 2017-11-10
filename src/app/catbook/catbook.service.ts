import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post/post';
import 'rxjs/add/operator/retry';
import {User} from './user/user';

@Injectable()
export class CatbookService {

  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>('api/posts/' + id)
      .retry(3);
  }

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts')
      .retry(3);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>('api/users/' + id)
      .retry(3);
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>('/api/users')
      .retry(3);
  }

}
