import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class FriendsService {

    customHeaders: HttpHeaders;

    constructor(private httpClient: HttpClient) {
        this.customHeaders = new HttpHeaders({ Authorization: `bearer ${localStorage.getItem('token')}` });
    }

    public getAllFriends(): Observable<any> {
        return this.httpClient.get(`${environment.API_ROOT}/api/friends`, { headers: this.customHeaders });
    }

    public getClosestFriends(_id: string): Observable<any> {
        return this.httpClient.get(`${environment.API_ROOT}/api/friends/${_id}`, { headers: this.customHeaders });
    }
}
