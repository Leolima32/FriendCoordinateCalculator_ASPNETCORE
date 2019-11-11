import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class FriendsService {

    constructor(private httpClient: HttpClient) { }

    public getAllFriends(): Observable<any> {
        const headers = this.getHeaders();
        return this.httpClient.get(`${environment.API_ROOT}/api/friends`, { headers: headers });
    }

    public getClosestFriends(_id: string): Observable<any> {
        const headers = this.getHeaders();
        return this.httpClient.get(`${environment.API_ROOT}/api/friends/${_id}`, { headers: headers });
    }

    getHeaders() {
        return new HttpHeaders({ Authorization: `bearer ${localStorage.getItem('token')}` });
    }
}
