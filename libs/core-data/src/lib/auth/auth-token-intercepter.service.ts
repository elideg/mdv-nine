import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenIntercepterService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone<{accessToken: string}>({
      setHeaders: {
        Autherization: `Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(request);
  }
}
