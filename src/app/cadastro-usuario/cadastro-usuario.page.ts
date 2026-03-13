import { Component, OnInit } from '@angular/core';

interface Usuario{
  nome:string;
  idade:number;
}

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
  standalone: false,
})
export class CadastroUsuarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
