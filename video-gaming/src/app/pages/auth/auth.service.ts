import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username: string, password: string) {
    return this.http.post('api/auth.php', {
      username,
      password
    }).subscribe(data => {
      console.log(data, "is that what we want")
    })
  }
}
