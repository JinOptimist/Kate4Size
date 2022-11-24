import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sex-toys',
  templateUrl: './sex-toys.component.html',
  styleUrls: ['./sex-toys.component.scss']
})
export class SexToysComponent implements OnInit {
  
  sexToysAray = [
    {
      name: 'sex doll',
      url: '/assets/images/sexDoll.jpg',
      stock: 'black Friday',
      danger: 5
    },
    {
      name: 'vibrator',
      url: '/assets/images/vibrator.jpg',
      stock: 'black Friday',
      danger: 8
    },
    {
      name: 'didos',
      url: '/assets/images/didos.jpg',
      stock: 'STOCK NO',
      danger: 3
    },
    {
      name: 'pumps',
      url: '/assets/images/pumps.jpg',
      stock: 'black Friday',
      danger: 3
    },
    {
      name: 'vaginal balls',
      url: '/assets/images/vaginalBalls.jpg',
      stock: 'black Friday',
      danger: 3
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
