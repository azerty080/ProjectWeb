import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../common/reducers';


@Injectable()
export class CodeService {

  constructor(private http: HttpClient, private store: Store<State>) {
    // State of ready = false; This is used in user.component.ts so it will wait for codesReady to be true.
    // The user.component will wait for asking the this.codes value until after the GET codes call is finished.
    this.store.dispatch({ type: 'CODES_NOT_READY' });

    // Gets user ID for the GET codes call.
    const user = JSON.parse(localStorage.getItem('user'));
    this.getCodes();
  }

  getCodes() {
    const token = localStorage.getItem('token');
    this.http.get(`https://api20op20.herokuapp.com/api/codes/`, { headers: new HttpHeaders().set('x-auth-token', `${token}`) })
      .subscribe((v: any) => {
            // codes get updated in store.
            this.store.dispatch({ type: 'CREATE_CODES', payload: v});
            // Ready state will be set True
            this.store.dispatch({ type: 'CODES_READY' });
      },
      (err: HttpErrorResponse) => {
        this.store.dispatch({ type: 'SET_ERROR_MESSAGE', payload: err.error });
      });
  }

  validateCode(keyCode: any) {
    const token = localStorage.getItem('token');
    return this.http.get(`https://api20op20.herokuapp.com/api/codes/${keyCode}`, {
      headers: new HttpHeaders().set('x-auth-token', `${token}`)
    });
  }

  addCode(code: any) {
    const token = localStorage.getItem('token');
    return this.http.post(`https://api20op20.herokuapp.com/api/codes/`, code, {
      headers: new HttpHeaders().set('x-auth-token', `${token}`)
    });
  }

  deleteCode(id: any) {
    const token = localStorage.getItem('token');
    this.http.delete(`https://api20op20.herokuapp.com/api/codes/${id}`, {
      headers: new HttpHeaders().set('x-auth-token', `${token}`)
    }).subscribe((v: any) => {
      this.deleteCodeInStore(v);
    }, (err: HttpErrorResponse) => {
      this.store.dispatch({ type: 'SET_ERROR_MESSAGE', payload: err.error });
    });
  }

  editCode(args: any) {
    // const token = localStorage.getItem('token');
    // // URL needs to be changed + functionality added on API server
    // this.http.put(`http://project.api/code/${args['codeName']}/${args['keyCode']}/${args['id']}`, {
    //   headers: new HttpHeaders().set('x-auth-token', `${token}`)
    // }).subscribe((v: any) => {
    //   this.editCodeInStore(v);
    // });
  }

  addCodeInStore(code) {
    this.store.dispatch({ type: 'ADD_CODES', payload: code});
  }

  editCodeInStore(code) {
    this.store.dispatch({type: 'UPDATE_CODE', payload: code});
  }

  deleteCodeInStore(id) {
    this.store.dispatch({ type: 'DELETE_CODE', payload: id});
  }
}
