import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId: string = 'Graziano';
  password: string = '';

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  authenticate(): void {
    if (this.userId === 'Graziano' && this.password === '123') {
      this.route.navigate(['/welcome', this.userId ]);
    } else {
      this.route.navigate(['/error']);
    }
  }
}
