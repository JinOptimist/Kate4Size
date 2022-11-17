import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  pornCategorieAray = [
    {
      name: 'Home porn',
      url: '/assets/images/homePorn.jpg',
      place: 'house,flat',
      danger: 5
    },
    {
      name: 'role-playing games',
      url: '/assets/images/rolePlayingGames.jpg',
      place: 'doesnt matter',
      danger: 8
    },
    {
      name: 'studio porn',
      url: '/assets/images/studioPorn.jpg',
      place: 'studio',
      danger: 3
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
