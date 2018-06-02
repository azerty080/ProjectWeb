import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class QuestionService {

  constructor(private http: HttpClient) {

  }

  postQuestion(v: any) {
    console.log(v);
    const token = localStorage.getItem('token');
    return this.http.post(`http://localhost:3000/api/question/`, v, {
			headers: new HttpHeaders().set('x-auth-token', `${token}`)
		});
  }
}
