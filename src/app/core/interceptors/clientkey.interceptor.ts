import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ClientService } from '../services/techdevs-client.service';

@Injectable()
export class ClientKeyInterceptor implements HttpInterceptor {

    constructor(
        private clientService: ClientService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modified = req.clone({ setHeaders: { 'TechDevs-ClientKey': this.clientService.clientKey } });
        return next.handle(modified);
    }
}