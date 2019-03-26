import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  url: string = 'https://jsonplaceholder.typicode.com/users';

  getUsers(){
    return this.http.get(this.url);
  }
}
