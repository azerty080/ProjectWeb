import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient, private router: Router) { }

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
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', res.user.username);
    }

    loggedIn() {
        return localStorage.getItem('token') !== null && localStorage.getItem('user') !== null;
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['']);
    }
}
