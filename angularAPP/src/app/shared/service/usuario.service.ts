import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Usuario} from "../models/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // URL_USUARIO = 'http://localhost:8088/users/';
  URL_USUARIO = 'https://auth-pd-service.herokuapp.com/users/';

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Usuario []>{
    return this.httpClient.get<Usuario []>(this.URL_USUARIO);
  }


  inserir(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.URL_USUARIO, usuario);
  }

  remover(id: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_USUARIO}${id}`);
  }

  pesquisarPorId(id: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIO}${id}`);
  }

  getUserByNome(usuario: Usuario): Observable<Usuario []> {
    return this.httpClient.get<Usuario []>(this.URL_USUARIO).
    pipe(map(i => i.filter(it => it.name === usuario.name)));
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.URL_USUARIO}${usuario.iduser}`, usuario);
  }
}
