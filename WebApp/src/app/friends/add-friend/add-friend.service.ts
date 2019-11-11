import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddFriendModel } from './add-friend-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AddFriendService {

    customHeaders: HttpHeaders;

    constructor(private httpClient: HttpClient) {
        this.customHeaders = new HttpHeaders({ Authorization: `bearer ${localStorage.getItem('token')}` });
    }

    addFriend(model): Observable<any> {
        return this.httpClient.post(`${environment.API_ROOT}/api/friends`,
            { name: model.name, position: { latitude: model.latitude, longitude: model.longitude } }, { headers: this.customHeaders });
    }
}