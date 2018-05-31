import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { State } from './common/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient,  private store: Store<State>) {
    const token = localStorage.getItem('token');

    if (token != undefined) {
      this.http.get('https://api20op20.herokuapp.com/api/teacher/me', {
        headers: new HttpHeaders().set('x-auth-token', `${token}`)
      })
      .subscribe((v: any) => {
          this.store.dispatch({type: 'CREATE_AUTH', payload: { id: v.user.id, username: v.user.email, firstname: v.user.firstname, lastname: v.user.lastname, school: v.user.school }});
          return true;
      }, (err: HttpErrorResponse) => {
          console.log('something went wrong');
          return false;
      })
    }
  }
}
