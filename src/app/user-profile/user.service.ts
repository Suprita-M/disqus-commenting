import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = {
    username : 'Suprita',
    thumbnailUrl: 'https://picsum.photos/id/237/200/300'
  };

  private isLoggedIn: boolean;

  getLoggedInUser() {
    return this.user;
  }
}
