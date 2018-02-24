import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router, private userService: UserService) {
  this.auth.user$.subscribe( user => {
    if(!user) return;
      userService.save(user);
      const returnUrl = localStorage.getItem('returnUrl');
      if(!returnUrl) return;
      localStorage.removeItem('returnUrl');
       this.router.navigateByUrl(returnUrl);
}
);
  }
}
