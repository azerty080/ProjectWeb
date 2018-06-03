import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class QuestionService {

  constructor(private http: HttpClient) {

  }

  postQuestion(v: any, code: string) {
    const token = localStorage.getItem('token');
    return this.http.post(`https://api20op20.herokuapp.com/api/question/`, { answer: v.answer, question: v.question, keyCode: code }, {
			headers: new HttpHeaders().set('x-auth-token', `${token}`)
		});
  }
}
