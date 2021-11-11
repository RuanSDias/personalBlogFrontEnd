import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User
  confPassword: string
  userTp: string

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    window.scroll (0,0)
  }

  confirmPassword(event: any) {
    this.confPassword = event.target.value
  }

  userType(event: any) {
    this.userTp = event.target.value
  }

  register() {
    this.user.type = this.userTp

    if (this.user.password != this.confPassword) {
      alert('As senhas não coincidem')
    } else {
      this.authService.register(this.user).subscribe((resp: User) => {this.user = resp})
      this.router.navigate(['/login'])
      alert('Usuário criado com sucesso! Aproveite =)')
    }
  }

}
