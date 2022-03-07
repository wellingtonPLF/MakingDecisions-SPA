import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../shared/models/Usuario";
import {Router} from "@angular/router";
import {SessionStorageService} from "../../shared/service/session-storage.service";
import {LocalStorageService} from "../../shared/service/local-storage.service";
import {UsuarioService} from "../../shared/service/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario!: Usuario;

  constructor(private usuarioService: UsuarioService,
              private accountService: SessionStorageService,
              private roteador: Router) {
  }

  ngOnInit(): void {
    this.usuario = new Usuario()
  }

  validarUsuario(): void{
    if(this.usuario.name != undefined && this.usuario.password != undefined){
      this.usuarioService.getUserByNome(this.usuario).subscribe(
        it => {
          try {
            //Normal use it[0].iduser, 
            //no modelo Decision mudar no id para idDecision, 
            //no modelo Usuario mudar Array<Decision> para Array<number>
            
            //FireBase use it.docs[0].id instead.
            //no modelo Decision mudar o idDecision para id, 
            //no modelo Usuario mudar Array<number> para Array<Decision>
            const id = it[0].iduser
            if(id != undefined){
              this.usuarioService.pesquisarPorId(id).subscribe(
                result => {
                  if (result.password == this.usuario.password){
                    this.accountService.setToken(id.toString());
                    this.roteador.navigate(['']);
                  }
                  else{
                    this.invalidUser()
                  }
                }
              )
            }
          }
          catch (e){
            this.invalidUser()
          }
        }
      )
    }
  }

  invalidUser(): void{
    this.usuario.name = ''
    this.usuario.password = ''
    console.log('Usuario não cadastrado!')
  }
}
