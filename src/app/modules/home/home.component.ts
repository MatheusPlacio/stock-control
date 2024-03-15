import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loginCard = true;

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  criarContaForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private cookieService: CookieService,
              private messageService: MessageService) {}

  onSubmitLoginForm(): void {
    if(this.loginForm.value && this.loginForm.valid){
      this.userService.authUser(this.loginForm.value as any)
      .subscribe({
        next: (response) => {
            if(response) {
               this.cookieService.set('USER_INFO', response?.token);
               this.loginForm.reset();

               this.messageService.add({
                severity:'success',
                summary: 'Sucesso',
                detail: `Bem Vindo de volta ${response?.name}!`,
                life:2000,
               });
            }
        },
        error: (err) => {
          this.messageService.add({
            severity:'error',
            summary: 'Erro',
            detail: `Erro ao fazer o login!`,
            life:2000,
           });
           console.log(err);
        },
      })
  }
  }

  onSubmitCriarContaForm(): void {
    if(this.criarContaForm.value && this.criarContaForm.valid){
        this.userService.CriarUsuario(this.criarContaForm.value as any)
        .subscribe({
          next: (response) => {
              if(response) {
                  this.criarContaForm.reset();
                  this.loginCard = true;
                  this.messageService.add({
                    severity:'success',
                    summary: 'Sucesso',
                    detail: `Usuário criado com sucesso!`,
                    life:2000,
                   });
              }
          },
          error: (err) => {
            this.messageService.add({
              severity:'error',
              summary: 'Erro',
              detail: `Erro ao fazer o login!`,
              life:2000,
             });
              console.log(err)
            },
        });
    }
  }



}
