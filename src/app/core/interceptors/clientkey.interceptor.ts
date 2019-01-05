import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { ClientKeyService } from '../services/techdevs-clientkey.service';

@Injectable()
export class ClientKeyInterceptor implements HttpInterceptor {

    constructor(
        private clientKeyService: ClientKeyService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modified = req.clone({ setHeaders: { 'TechDevs-ClientKey': this.clientKeyService.clientKey } });
        return next.handle(modified);
    }
}