import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuanhoan',
  templateUrl: './tuanhoan.component.html',
  styleUrls: ['./tuanhoan.component.less']
})
export class TuanhoanComponent implements OnInit {

  isLoadingOne = false;
  isLoadingTwo = false;
  isLoadingThree = false;
  isLoadingFour = false;
  isLoadingFive = false;
  isLoadingSix = false;
  isLoadingSeven = false;
  isLoadingEight = false;

  loadFacebook(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
    window.open("fb://profile/100015369369316");
  }

  loadZalo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
    window.open("https://zalo.me/84948502258");
  }
  loadInstagram(): void {
    this.isLoadingThree = true;
    setTimeout(() => {
      this.isLoadingThree = false;
    }, 5000);
    window.open("instagram://user?username=tuanhoanmd");
  }
  loadTiktok(): void {
    this.isLoadingFour = true;
    setTimeout(() => {
      this.isLoadingFour = false;
    }, 5000);
    window.open("https://zalo.me/84948502258");
  }
  loadSkype(): void {
    this.isLoadingFive = true;
    setTimeout(() => {
      this.isLoadingFive = false;
    }, 5000);
    window.open("https://zalo.me/84948502258");
  }
  loadWechat(): void {
    this.isLoadingSix = true;
    setTimeout(() => {
      this.isLoadingSix = false;
    }, 5000);
    window.open("https://icq.com/people/ICQIDgoeshere");
  }
  loadGmail(): void {
    this.isLoadingSeven = true;
    setTimeout(() => {
      this.isLoadingSeven = false;
    }, 5000);
    window.open("#");
  }
  loadTwitter(): void {
    this.isLoadingEight = true;
    setTimeout(() => {
      this.isLoadingEight = false;
    }, 5000);
    window.open("twitter://profile/tuanhoan");
  }
  array = [1, 2, 3, 4];
  dotPosition = 'bottom';
  constructor() { 
   
  }

  ngOnInit() {
    
  }

}
