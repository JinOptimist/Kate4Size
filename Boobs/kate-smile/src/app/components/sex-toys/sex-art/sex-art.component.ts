import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sex-art',
  templateUrl: './sex-art.component.html',
  styleUrls: ['./sex-art.component.scss']
})
export class SexArtComponent implements OnInit {
  name: string;
  sexArtArray: string[];
  private index: number = 1;  
  constructor() {
    this.name = "Катя";
    this.sexArtArray = [];
   }

  ngOnInit(): void {
  }
  addImg() {
    let newImageUrl = `/assets/images/sexArt/sexArt0${this.index}.jpg`;
    this.sexArtArray.push(newImageUrl);
    this.index++;
  }
}
