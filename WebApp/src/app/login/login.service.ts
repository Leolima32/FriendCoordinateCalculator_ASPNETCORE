import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../shared/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {
    username = 'leo';
    constructor(private httpClient: HttpClient) { }

    login(user: UserModel): Observable<any> {
        return this.httpClient.post(`${environment.API_ROOT}/api/account/login`, user);
    }
}
