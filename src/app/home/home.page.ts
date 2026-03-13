import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from './aluno.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  
  estudante: Aluno={
    nome: "Thiago Tomazella",
    faltas: 0
  };

  constructor(private router: Router) {}

  adicionarFalta(){
    this.estudante.faltas+=1;
  }

  limparFaltas(){
    this.estudante.faltas = 0;
  }

  abrirCadastroUsuario(){
    this.router.navigate(['/cadastro-usuario'])
  }

}
