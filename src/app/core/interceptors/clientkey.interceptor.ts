import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ClientKeyInterceptor implements HttpInterceptor {
    
    constructor(
        private route: ActivatedRoute
    ){ }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modified = req.clone({setHeaders: {'TechDevs-ClientKey': this.clientKey}});
        return next.handle(modified);
    }

    private get clientKey () : string {
        console.log("Intercepted and got this ClientId", this.route.snapshot.firstChild.params['clientKey']);
        return this.route.snapshot.firstChild.params['clientKey'];
    }
}