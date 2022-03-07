import {Decision} from "./Decision";

export class Usuario{
  iduser?: string;
  name?: string;
  password?: string;
  email?: string;
  decisions?: Array<number>;

  constructor(iduser?: string, usuario: Usuario = {}) {
    this.iduser = iduser;
    this.name = usuario.name;
    this.password = usuario.password;
    this.email = usuario.email;
    this.decisions = usuario.decisions;
  }
}
