import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll (0,0)
  }

  login() {
    this.authService.login(this.userLogin).subscribe((resp: UserLogin) => {this.userLogin = resp}, erro =>{
      if(erro.status == 500){
        alert('Usuário e/ou senha incorreto(s)!')
      }})
    this.router.navigate(['/home'])
  }

}
