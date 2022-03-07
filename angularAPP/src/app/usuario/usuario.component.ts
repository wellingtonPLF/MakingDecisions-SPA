import {Component, Input, OnInit} from '@angular/core';
import {Decision} from "../shared/models/Decision";
import {Usuario} from "../shared/models/Usuario";
import {ActivatedRoute} from "@angular/router";
import {SessionStorageService} from "../shared/service/session-storage.service";
import {UsuarioService} from "../shared/service/usuario.service";
import {DecisaoService} from "../shared/service/decisao.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent implements OnInit {
  usuario?: Usuario;
  decisoes: Array<Decision> = new Array<Decision>();
  @Input() tokenId?: string;
  timeout: any = null;

  constructor(private rotaAtual: ActivatedRoute, private accountService: SessionStorageService,
              private usuarioService: UsuarioService, private  deciaoService: DecisaoService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    if(this.tokenId != undefined){
      this.usuarioService.pesquisarPorId(this.tokenId).subscribe(
        it => {
          this.usuario = it
          if(it.decisions != undefined){
            for(let decisaoID of it.decisions){
              //Spring Boot coloque decisaoID.toString()
              //FireStore coloque decisaoID.id
              this.deciaoService.pesquisarPorId(decisaoID.toString()).subscribe(
                result => {
                    this.decisoes.push(result)
                }
              )
            }
          }
        }
      );
    }
    else{
      this.usuario = undefined;
      this.decisoes = new Array<Decision>();
    }
  }

  saveEdit(event: any, i: number) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.executeListing(event.target.value, i);
      }
    }, 300);
  }

  private executeListing(value: string, index: number) {
    if(value != '' && this.decisoes != undefined){
      if(this.decisoes.length != 0){
        const decisao = this.decisoes[index]
        if(decisao.idDecision != undefined){
          this.deciaoService.pesquisarPorId(decisao.idDecision).subscribe(
            it => {
              it.name = value;
              this.deciaoService.atualizar(it).subscribe(
                result => console.log("Decisão Atualizada!")
              )
            }
          )
        }
      }
    }
  }

  addDecisao(): void{
    const decisao = new Decision()
    decisao.name = "New";
    const iduser = this.usuario!.iduser;
    if(iduser != undefined){
      decisao.iduser = parseInt(iduser);
    }
    this.deciaoService.inserir(decisao).subscribe(
      result => {
        this.decisoes.push(result)
      }
    )
  }

  removerDecisao(index : number): void{
    const id = this.decisoes[index].idDecision;
    if(id != undefined){
      this.deciaoService.remover(id).subscribe(
        it =>{
          this.decisoes.splice(index, 1);
        }
      )
    }
  }
}
