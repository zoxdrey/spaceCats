import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {baseAuthUrl} from "../../../utils/constants";


export interface IUser {
  name?: string
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  signIn(user: IUser) {
    return this.httpClient.post(`${baseAuthUrl}/signup`, user)
  }
}
