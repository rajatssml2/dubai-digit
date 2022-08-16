import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
  loginUser: any;
  citizenDetails: any;
  imgSrc: any;

  constructor() { }

  ngOnInit(): void {
    let citizen_details:any = localStorage.getItem('citizen_details')
    this.citizenDetails = JSON.parse(citizen_details);
    this.loginUser = localStorage.getItem('loginUser');
    if(this.citizenDetails && this.loginUser) {
      if(this.citizenDetails.emirates == 'Abu Dhabi') {
        this.imgSrc = '../../../assets/images/Abu_Dhabi_Municipality_logo.png'
      } else if(this.citizenDetails.emirates == 'Dubai') {
        this.imgSrc = '../../../assets/images/Dubai_Municipality_logo.png'
      } else if(this.citizenDetails.emirates == 'Sharjah') {
        this.imgSrc = '../../../assets/images/Sharjah_Municipality_logo.png'
      } else if(this.citizenDetails.emirates == 'Ajman') {
        this.imgSrc = '../../../assets/images/Ajman_Municipality_logo.png'
      } else if(this.citizenDetails.emirates == 'Umm Al Quwain') {
        this.imgSrc = '../../../assets/images/Umm_Al_Quwain_Municipality_logo.png'
      } else if(this.citizenDetails.emirates == 'Ras Al Khaimah') {
        this.imgSrc = '../../../assets/images/Ras_Al_Khaimah_Municipality_logo.png'
      } else if(this.citizenDetails.emirates == 'Fujairah') {
        this.imgSrc = '../../../assets/images/Fujairah_Municipality_logo.png'
      }
    }
    
  }

}
