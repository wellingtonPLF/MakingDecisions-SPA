import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Decision} from "../models/Decision";

@Injectable({
  providedIn: 'root'
})
export class DecisaoService {

  // URL_DECISAO = 'http://localhost:8088/decisions/';
  URL_DECISAO = 'https://decision-pd-service.herokuapp.com/decisions/';

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Decision []>{
    return this.httpClient.get<Decision []>(this.URL_DECISAO);
  }

  inserir(decision: Decision): Observable<Decision>{
    return this.httpClient.post<Decision>(this.URL_DECISAO, decision);
  }

  remover(id: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_DECISAO}${id}`);
  }

  pesquisarPorId(id: string): Observable<Decision> {
    return this.httpClient.get<Decision>(`${this.URL_DECISAO}${id}`);
  }

  atualizar(decision: Decision): Observable<Decision> {
    return this.httpClient.put<Decision>(`${this.URL_DECISAO}${decision.idDecision}`, decision);
  }
}
