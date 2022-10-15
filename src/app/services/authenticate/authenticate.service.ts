import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(c) {
    const email = c.email;
    const pass = c.password;
    const credentialsValid = (email === 'test@test.com' && pass === '123456');

    const promiseCallback = (accept, reject) => {
      if (credentialsValid)
        accept('Login correcto');
      else 
        reject('Login incorrecto');
    };

    return new Promise((resolve, reject) => promiseCallback(resolve, reject));

  }
}
