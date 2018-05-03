import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../common/reducers';


@Injectable()
export class CodeService {

  constructor(private http: HttpClient, private store: Store<State>) {
    // State of ready = false; This is used in user.component.ts so it will wait for codesReady to be true. The user.component will wait for asking the this.codes value until after the GET codes call is finished.
    this.store.dispatch({ type: 'CODES_NOT_READY' });

    // Gets user ID for the GET codes call.
    const user = JSON.parse(localStorage.getItem('user'));
    this.getCodesById(user.id);
  }

  getCodesById(id) {
    const token = localStorage.getItem('token');
    this.http.get(`http://project.api/codes/${id}`, { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`) })
      .subscribe((v: any) => {
            // codes get updated in store.
            this.store.dispatch({ type: 'CREATE_CODES', payload: v});
            // Ready state will be set True
            this.store.dispatch({ type: 'CODES_READY' });
      });
  }

  addCode(code: any) {
    const token = localStorage.getItem('token');
    return this.http.post(`http://project.api/code`, code, {
			headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
		});
  }

  deleteCode(id: any) {
    const token = localStorage.getItem('token');
    this.http.delete(`http://project.api/code/${id}`, {
			headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
		}).subscribe((v: any) => {
      this.deleteCodeInStore(v);
    })
  }

  addCodeInStore(code) {
    this.store.dispatch({ type: 'ADD_CODES', payload: code});
  }

  deleteCodeInStore(id) {
    this.store.dispatch({ type: 'DELETE_CODE', payload: id});
  }
}
