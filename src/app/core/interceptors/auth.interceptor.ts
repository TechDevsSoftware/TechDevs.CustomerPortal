import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TechDevsAuthService } from '../services/techdevs-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(
        private route: ActivatedRoute,
        private authService: TechDevsAuthService
    ){ }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.authService.token;
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