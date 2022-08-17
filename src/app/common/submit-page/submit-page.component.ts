import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css']
})
export class SubmitPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotohome() {
    this.router.navigate(['citizen'])
  }

}
