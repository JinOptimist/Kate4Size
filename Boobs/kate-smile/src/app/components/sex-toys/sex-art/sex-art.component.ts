import { Component, OnInit } from '@angular/core';
import { ISexArtModel } from 'src/app/models/sexArtModel'

@Component({
  selector: 'sex-art',
  templateUrl: './sex-art.component.html',
  styleUrls: ['./sex-art.component.scss']
})
export class SexArtComponent implements OnInit {

  sexArtArray: ISexArtModel[];

  private index: number = 1;

  constructor() {

    this.sexArtArray = [

    ];
  }

  ngOnInit(): void {
  }
  addImg() {
    let newImageUrl = `/assets/images/sexArt/sexArt0${this.index}.jpg`;
    const artSex =
      {
        name: 'Art ' + this.index,
        art: 3,
        url: newImageUrl,
      } as ISexArtModel;
    this.sexArtArray.push(artSex);
    this.index++;
  }
  removeImage(url: string) {
    this.sexArtArray = this.sexArtArray.filter(sexArt => sexArt.url != url);
    this.index--;
  }
}
