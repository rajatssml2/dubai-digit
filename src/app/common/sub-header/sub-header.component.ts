import { Component, HostListener, OnInit } from '@angular/core';
import { CommonService } from '../../_service/common.service';
import {Router} from'@angular/router'

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  isSticky=false;
  loginUser: any;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 80;
  }
  constructor(private comnService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.loginUser = localStorage.getItem('loginUser');

  }
  newApplication() {
    this.router.navigate(['citizen/new-trade-licence'])
  }
  onLogOut() {
    this.comnService.onLogout();
    this.router.navigate(['/'])
  }

}
