import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  token: string;

  constructor(private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // do not intercept request whose urls are filtered by the injected filter
    req = req.clone({
      setHeaders: {
        authorization: localStorage.getItem('token') || '',
      },
    });
    return next.handle(req);

  }
}
