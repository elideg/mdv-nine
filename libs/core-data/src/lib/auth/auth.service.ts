import { ProjectService } from '@mdv-nine/core-data';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap, filter, map, find } from 'rxjs/operators'
import { User } from '../project/project';
import { NotifyService } from '../notify.service';

const UrlForSignIn = 'https://mdv-db.herokuapp.com/login';
const UrlForSignUp = 'https://mdv-db.herokuapp.com/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject(false);
  auththenticatedUsers$;
  inputedUser: User;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private notifyService: NotifyService
    ) {
      this.setToken(this.getToken() || '');
    }

    getToken() {
      return localStorage.getItem('token')
    }

    setToken(accessToken: string) {
      localStorage.setItem('accessToken', accessToken);
      this.isAuthenticated$.next(accessToken !== '')
    }


    logout() {
      this.setToken('');
      this.router.navigate(['/login']);
    }

    login(user: User) {
      this.auththenticatedUsers$ = this.getAllCredentials();
      this.auththenticatedUsers$.pipe(
        tap(res => console.log(res)),
        map((res: any[]) => res.find((r) => r.email === user.email)),
        // find(allUsers => allUsers == user),
        tap(res => !!res ? this.router.navigate(['projects']) : this.notifyService.notification(`nope`)),
        // tap(() => this.setToken())
        ).subscribe();
    // return this.httpClient.post<{accessToken: string}>(this.getUrlForSignIn(), user).pipe(
    //   tap((res) => { this.setToken(res.accessToken) }),
    //   tap((res) => console.log(res.accessToken)),
    //   tap(() => this.router.navigate(['/projects']))
    // ).subscribe()
  }

  signUp(user: User) {
    return this.httpClient.post(this.getUrlForSignUp(), user)
  }

  getAllCredentials() {
    return this.httpClient.get(this.getUrlForSignIn())
  }

  getUrlForSignIn() {
    return `${UrlForSignIn}`;
  }

  getUrlForSignUp() {
    return UrlForSignUp;
  }
}
