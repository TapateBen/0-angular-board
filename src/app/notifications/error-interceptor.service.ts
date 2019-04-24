import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { NotificationsStoreService } from './notifications-store.service';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private notificationsStore: NotificationsStoreService) {}

  public intercept(req, next) {
    return next.handle(req).pipe(catchError(this.handleError.bind(this)));
  }

  private handleError(err) {
    const unauthorized_code = 401;
    let userMessage = 'Fatal error';
    if (err instanceof HttpErrorResponse) {
      if (err.status === unauthorized_code) {
        userMessage = 'Authorization needed';
      } else {
        userMessage = 'Comunications error';
      }
    }
    // emisión de la notificación
    this.notificationsStore.dispatch(userMessage);
    return throwError(err);
  }
}
