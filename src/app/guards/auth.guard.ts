import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { State } from '../common/reducers'


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient, private store: Store<State>) {
  }

  canActivate() {
    const token = localStorage.getItem('token');
    if (localStorage.getItem('token') != undefined) {
      this.http.get('http://project.api/me', {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
      })
      .subscribe((v: any) => {
          this.store.dispatch({type: 'CREATE_AUTH', payload: {id: v.id, username: v.username}});
          this.router.navigate(['']);
          return true;
      }, (err: HttpErrorResponse) => {
          console.log('something went wrong');
          return false;
      })
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
