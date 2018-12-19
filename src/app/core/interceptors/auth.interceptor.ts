import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(
        private route: ActivatedRoute
    ){ }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = localStorage.getItem('techdevs-auth-token');
        console.log("Intercepting with token", token);
        if(!token) {
            return next.handle(req);
        }
        req = req.clone({
            setHeaders: { 
                Authorization: `Bearer ${token}`
            }
        });
        return next.handle(req);
    }
}