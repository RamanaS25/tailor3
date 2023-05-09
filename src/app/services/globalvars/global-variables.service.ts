import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlobalVariablesService {

  private _loggedIn: boolean;


  private _user: { username: string; password: string, role: string }; 

  constructor() {
    this._loggedIn = false
   
    this._user = {username: '', password: '', role: ''}
  }

  public get loggedIn(): boolean {
    return this._loggedIn;
  }

  public set loggedIn(value: boolean) {
    this._loggedIn = value;
  }

  public get user(): { username: string; password: string,role: string } {
    return this._user;
  }

  public set user(value: { username: string; password: string, role: string }) {
    this._user = value;
  }

  
}
