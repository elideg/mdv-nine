import { NotifyService } from 'libs/core-data/src/lib/notify.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenIntercepterService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private notify: NotifyService
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone<{accessToken: string}>({
      setHeaders: {
        Autherization: `Bearer ${this.authService.getToken()}`
      },
    })
    return next.handle(request).pipe(
      tap(() => {}, (error) => this.notify.notification(error.message))
    )
  }
}
