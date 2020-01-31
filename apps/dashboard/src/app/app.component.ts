import { Component } from '@angular/core';
import { AuthService } from '@mdv-nine/core-data';

@Component({
  selector: 'mdv-nine-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdv nine';

  links = [
    { path: '/projects', icon: 'work', title: 'Projects'}
  ]

  userIsAuthenticated$ = this.authService.isAuthenticated$;
  constructor(private authService: AuthService) {}
}
