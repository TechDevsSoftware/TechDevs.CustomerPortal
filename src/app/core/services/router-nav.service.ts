import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class RouterNavService {

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    public navigate(path: string[]): void {
        // Get the current router state
        const clientKey = this.route.snapshot.firstChild.params['clientKey'];
        this.router.navigate(['dealership', clientKey, ...path]);
    }
}