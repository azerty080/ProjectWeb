import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../common/reducers';
import { AuthGuard } from '../guards/auth.guard';


@Injectable()
export class AuthService {
  authToken: any;
  user: any = { id: '', username: '' };
  authObj: Observable<any>;

  constructor(private http: HttpClient, private router: Router, private store: Store<State>, private authGuard: AuthGuard) {
    this.authObj = store.select('auth');
    this.authObj.subscribe((v) => {
      this.user = v;
    });
  }

    authenticateUser(user): any {
        let headers = new HttpHeaders();
        headers.append('Content-Type','application/json');

        this.http.post('http://project.api/users/validate_login', JSON.stringify(user))
            .subscribe((v: any) => {
                this.auth(v);
                this.router.navigate(['']);
            },
                (err: HttpErrorResponse) => {
                    console.log(err)
                    if (err.status === 404 || err.status === 403) {
                        console.log('No user found for given credentials.');
                    } else {
                        console.log(`Oops. That login failed. Please try again.`);
                    }
                }
            );
    }

    auth(res: any) {
        this.store.dispatch({ type: 'CREATE_AUTH', payload: { id: res.user.id, username: res.user.username }});
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', res.user.username);
    }

    loggedIn() {
      return this.user && this.user.id != undefined && this.user.username != undefined;
    }

    logout() {
        this.store.dispatch({ type: 'DELETE_AUTH', payload: '' });
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['']);
    }
}
