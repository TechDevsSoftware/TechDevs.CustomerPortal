import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClientKeyService {
    constructor(
    ) { }

    public get clientKey(): string {
        const url = location.pathname;
        const parts = url.split('/');
        const dealershipIndex = parts.findIndex(p => p == "dealership");
        const result = parts[dealershipIndex + 1];
        return result;
    }
}
