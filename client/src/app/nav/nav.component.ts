import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { error } from '@angular/compiler/src/util';
import { Observable, from } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }


  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log("Error")
    })
  }


  logout() {
    this.accountService.logout();
  }


  getCurrentUser() {
    this.accountService.currentUser$.subscribe(user => {
    }, error => {
      console.log("error")
    })
  }
}