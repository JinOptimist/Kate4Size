import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'for-adults',
  templateUrl: './for-adults.component.html',
  styleUrls: ['./for-adults.component.scss']
})
export class ForAdultsComponent implements OnInit {
  
  forAdultsAray = [
    {
      name: 'toys for adults',
      url: '/assets/images/toysForAdults.jpg',
      stock: 'black Friday',
      danger: 5
    },
    {
      name: 'underwear and accessories',
      url: '/assets/images/underwearAndAccessories.jpg',
      stock: 'No',
      danger: 8
    },
    {
      name: 'intimate cosmetics',
      url: '/assets/images/intimateCosmetics.jpg',
      stock: 'black Friday',
      danger: 3
    },
    {
      name: 'BDSM',
      url: '/assets/images/BDSM.jpg',
      stock: 'No salle',
      danger: 3
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
