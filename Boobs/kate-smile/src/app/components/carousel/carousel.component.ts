import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  index: number = 1;
  booksAray: string[] = [];
  currentBookUrl: string;
  private booksCount = 2;

  constructor() {
    this.booksAray = [];
    this.currentBookUrl = '/assets/images/Books/books01.jpg';
    this.generateImgArray();
  }

  ngOnInit(): void {
  }

  private generateImgArray() {
    for (let i = 0; i < this.booksCount; i++) {
      this.booksAray.push(`/assets/images/Books/books0${i}.jpg`);
    }
  }

  nextImg() {
    this.index++;
    if (this.index > 3) {
      this.index = 1;
    }
    this.currentBookUrl = `/assets/images/Books/books0${this.index}.jpg`;
  }
  pastImg() {
    this.index--;
    if (this.index < 1) {
      this.index = 3;
    }
    this.currentBookUrl = `/assets/images/Books/books0${this.index}.jpg`;
  }
}
