import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuanhoan',
  templateUrl: './tuanhoan.component.html',
  styleUrls: ['./tuanhoan.component.less']
})
export class TuanhoanComponent implements OnInit {

  listImg = [
    {
      "img": "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.15752-9/120093975_2941610089272845_4973677147199946437_n.png?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=6NjUaZMKUVEAX-rm7ox&_nc_oc=AQn_EcBFbtXSUr6sJf5cpIN1QBakqgEzzoiYgjvB4o804_0xfazK_DOvBTdOqOCGVX8&_nc_ht=scontent.fvca1-2.fna&oh=43b173089fa70cca4fd69a01e60f60c8&oe=5F90C4C8",
    },
    {
      "img" : "https://i.pinimg.com/originals/2d/91/01/2d9101ca4d2c0259f39f60ec2ea2be56.png"
    },
    {
      "img" : "https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg"
    }
  ];
  

  img="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.15752-9/120093975_2941610089272845_4973677147199946437_n.png?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=6NjUaZMKUVEAX-rm7ox&_nc_oc=AQn_EcBFbtXSUr6sJf5cpIN1QBakqgEzzoiYgjvB4o804_0xfazK_DOvBTdOqOCGVX8&_nc_ht=scontent.fvca1-2.fna&oh=43b173089fa70cca4fd69a01e60f60c8&oe=5F90C4C8";
  tittle="Tuấn Hoàn";
  description = "this is my profile";
  facebook = "fb://profile/100015369369316";
  zalo = "https://zalo.me/84948502258";
  instagram = "instagram://user?username=tuanhoanmd";
  tiktok = "https://vm.tiktok.com/ZSu1NHCV/";
  gmail = "#";
  skype = "https://join.skype.com/invite/UcA31pt3JP9i";
  twitter = "twitter://profile/tuanhoan";

  listName = ["Facebook", "Zalo"];
  listLink = ["fb://profile/100015369369316", "https://zalo.me/84948502258"];

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
    window.open(this.facebook);
  }

  loadZalo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
    window.open(this.zalo);
  }
  loadInstagram(): void {
    this.isLoadingThree = true;
    setTimeout(() => {
      this.isLoadingThree = false;
    }, 5000);
    window.open(this.instagram);
  }
  loadTiktok(): void {
    this.isLoadingFour = true;
    setTimeout(() => {
      this.isLoadingFour = false;
    }, 5000);
    window.open(this.tiktok);
  }
  loadSkype(): void {
    this.isLoadingFive = true;
    setTimeout(() => {
      this.isLoadingFive = false;
    }, 5000);
    window.open(this.skype);
  }
  loadWechat(): void {
    this.isLoadingSix = true;
    setTimeout(() => {
      this.isLoadingSix = false;
    }, 5000);
    window.open("#");
  }
  loadGmail(): void {
    this.isLoadingSeven = true;
    setTimeout(() => {
      this.isLoadingSeven = false;
    }, 5000);
    window.open(this.gmail);
  }
  loadTwitter(): void {
    this.isLoadingEight = true;
    setTimeout(() => {
      this.isLoadingEight = false;
    }, 5000);
    window.open(this.twitter);
  }
  constructor() { 
   
  }

  array = [1, 2, 3, 4];

  ngOnInit() {
    
  }

}
