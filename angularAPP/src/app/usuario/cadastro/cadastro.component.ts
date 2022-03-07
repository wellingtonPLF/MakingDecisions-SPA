import { Component, OnInit } from '@angular/core';
import {SessionStorageService} from "../../shared/service/session-storage.service";
import {Router} from "@angular/router";
import {Usuario} from "../../shared/models/Usuario";
import {Decision} from "../../shared/models/Decision";
import {UsuarioService} from "../../shared/service/usuario.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  usuario!: Usuario;

  constructor(private usuarioService: UsuarioService, private roteador: Router) {
    this.usuario = new Usuario()
    //FireStore Array<Decision>
    //Spring Boot Array<number>
    this.usuario.decisions = new Array<number>()
  }

  ngOnInit(): void {
  }

  cadastrarUsuario(): void{
    try {
      this.usuarioService.inserir(this.usuario).subscribe(
        it => {
          this.roteador.navigate(['/login']);
        }
      )
    }
    catch (e){
      console.log("Dados em falta!")
    }
  }
}
