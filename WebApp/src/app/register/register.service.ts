import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterModel } from './register.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class RegisterService {
    constructor(private httpClient: HttpClient) { }

    public RegisterUser(model: RegisterModel): Observable<any> {
        return this.httpClient.post(`${environment.API_ROOT}/api/account/register`, model);
    }
}
