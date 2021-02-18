import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  works: any[] = [];
  constructor() {}

  ngOnInit() {
    this.works = [
      {
        id: 1,
        img: './assets/imgs/Shop.PNG',
        title: 'Shop.az',
        shortDesc:
          'SHOP.AZ – Bütün mağazaları bir platformada toplayan , Azərbaycanın online alış-veriş mərkəzidir.',
        technologies: ['C#','ASP.NET Core APİ','Onion Architecture'],
        site: 'https://shop.az/',
      },
      {
        id: 2,
        img: './assets/imgs/logo.png',
        title: 'Margo.az',
        shortDesc:
          'Daşınma şirkətlərinin mağazalar şəklində toplandığı platforma',
        technologies: ['C#','ASP.NET Core MVC','Onion Architecture'],
        site: 'https://margo.az/',
      },
      {
        id: 3,
        img: './assets/imgs/Construction-Logos.jpg',
        title: 'Akber Supplier',
        shortDesc:
          'Şəxsi tikinti şirkətində materialların alışı,satışını toplayan platforma.',
        technologies: ['C#', ' ASP.NET Core MVC'],
        site: 'http://akbersupplier.az/',
      },
      {
        id: 4,
        img: './assets/imgs/logo-era.png',
        title: 'Era',
        shortDesc:
          'Təmizlik materiallarının ölkə mağazalarına satışını həyatə keçirən platforma.',
        technologies: ['C#','ASP.NET Core','Onion Architecture'],
        site: 'http://era.com.az/',
      },
      {
        id: 5,
        img: './assets/imgs/Junko.PNG',
        title: 'Code Academy Final Project',
        shortDesc: 'Texnologiya məhsullarının satış platforması',
        technologies: ['C#','ASP.NET Core MVC'],
        site: 'https://github.com/huseynasadov/CodeFinal',
      },
      {
        id: 6,
        img: './assets/imgs/GYM.jpg',
        title: 'GYM Desktop APP',
        shortDesc: 'Gimnastika zalına giriş,çıxış qeydiyyatı, cafe dən istifadə.',
        technologies: ['C#', 'WinForm', 'Desktop App'],
        site: 'https://github.com/huseynasadov/C-Final-Project',
      },
    ];
  }
}
