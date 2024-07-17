import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.isLoggedIn) {
      this.router.navigate(['tabs']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
