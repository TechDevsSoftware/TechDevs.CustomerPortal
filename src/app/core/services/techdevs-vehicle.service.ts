import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserVehicle } from '../models/auth.models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class VehicleService {
    constructor(
        private httpClient: HttpClient
    ) { }

    public searchByReg(reg: string): Promise<UserVehicle> {
        const params = new HttpParams().set('registration', reg);
        return this.httpClient.get<UserVehicle>(`${environment.accountServer}/api/v1/account/myvehicles/lookup`, { params: params }).toPromise();
    }

    public addVehicle(vehicle: UserVehicle): Promise<UserVehicle> {
        return this.httpClient.post<UserVehicle>(`${environment.accountServer}/api/v1/account/myvehicles`, vehicle, {}).toPromise();
    }

    public deleteVehicle(reg: string) {
        const params = new HttpParams().set('registration', reg);
        return this.httpClient.delete(`${environment.accountServer}/api/v1/account/myvehicles`, { params: params }).toPromise();
    }

}