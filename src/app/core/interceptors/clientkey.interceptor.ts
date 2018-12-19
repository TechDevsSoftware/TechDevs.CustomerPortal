import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Injectable()
export class ClientKeyInterceptor implements HttpInterceptor {

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modified = req.clone({ setHeaders: { 'TechDevs-ClientKey': this.clientKey } });
        return next.handle(modified);
    }

    private get clientKey(): string {
        const url = location.pathname;
        const parts = url.split('/');
        const dealershipIndex = parts.findIndex(p => p == "dealership");
        const result = parts[dealershipIndex + 1];
        return result;
    }
}