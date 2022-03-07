import { Component, OnInit } from '@angular/core';
import {SessionStorageService} from "../shared/service/session-storage.service";

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  token?: string;

  constructor(private accountService: SessionStorageService) { }

  ngOnInit(): void {
    const account = this.accountService.getToken();
    if(account != null){
      this.token = account;
    }
  }

  removeToken(): void{
    this.token = undefined;
    this.accountService.removeToken('token');
  }
}
