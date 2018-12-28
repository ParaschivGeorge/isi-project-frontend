import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  email = null;

  constructor(private _userService: UserService, private _router: Router) {
    this._userService.userSubject.subscribe(email => this.email = email);
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.email = null;
    this._router.navigate(['login']);
  }

}
