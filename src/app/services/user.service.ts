import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { CreateUser } from '../Models/CreateUser';
import { Observable } from 'rxjs';
import { CreateUserResponse } from '../Models/CreateUserResponse';
import { AuthRequest } from '../auth/AuthRequest';
import { AuthResponse } from '../auth/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environments.API_URL;

  constructor(private http: HttpClient) { }

  CriarUsuario(requestDatas: CreateUser): Observable<CreateUserResponse>{
        return this.http.post<CreateUserResponse>(`${this.url}api/User/create`, requestDatas
        )
  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse>{
     return this.http.post<AuthResponse>(`${this.url}api/Auth`, requestDatas);
  }

}
