import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientKeyService } from './techdevs-clientkey.service';

@Injectable()
export class RouterNavService {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private clientKeyService: ClientKeyService
    ) { }

    public navigate(path: string[]): void {
        // Get the current router state
        if(this.route.snapshot.firstChild) {
            this.router.navigate(['dealership', this.clientKeyService.clientKey, ...path]);
        } else {
            console.log("RouterNav could not find a route.snapshot.firstChild.prams");   
        }
    }

    public navigateToClient(clientKey: string , path: string[]): void {
        this.router.navigate(['dealership', clientKey, 'login']);
    }
}