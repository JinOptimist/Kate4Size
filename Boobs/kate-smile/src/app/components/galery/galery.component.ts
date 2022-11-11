import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  imagesInfo = [
    {
      name: 'boobs rule',
      url: '/assets/images/boobsRule.jpg',
      porn: 1
    },
    {
      name: 'boobs rule',
      url: '/assets/images/Wife14.JPG',
      porn: 5
    },
    {
      name: 'boobs rule',
      url: '/assets/images/Wife12.JPG',
      porn: 6
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
