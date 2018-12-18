import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TechDevsClient } from '../models/auth.models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ClientService {
    constructor(
        private httpClient: HttpClient
    ) { }

    public getClient(): Promise<TechDevsClient> {
        return this.httpClient.get<TechDevsClient>(`${environment.accountServer}/api/v1/clients/current`, {}).toPromise();
    }
}
