import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {
  imagesObj = [
  { path: '../../assets/images/dubai.jpg', title: 'Dubai'},
  { path: '../../assets/images/abuDhabi.jpg'},
  { path: '../../assets/images/sharjah.jpg'},
  { path: '../../assets/images/ajman.jpg'},
  { path: '../../assets/images/Umm_Al_Quwain.jpg'},
  { path: '../../assets/images/ras_al_khaimah.jpg'},
  { path: '../../assets/images/fujairah.jpg'}
];


  constructor() { }

  ngOnInit(): void {
  }

}
