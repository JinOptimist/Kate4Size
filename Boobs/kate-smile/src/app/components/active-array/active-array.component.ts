import { Component, OnInit } from '@angular/core';
import { IWifeModel } from 'src/app/models/IWifeModel'

@Component({
  selector: 'active-array',
  templateUrl: './active-array.component.html',
  styleUrls: ['./active-array.component.scss']
})
export class ActiveArrayComponent implements OnInit {
  newWifeUrl: string;
  wifeModels: IWifeModel[];

  private index: number = 0;

  constructor() {
    this.newWifeUrl = "/assets/images/Wife00.JPG";
    this.wifeModels = [
      {
        name: 'Отличный вид',
        url: '/assets/images/Wife00.JPG',
        porn: 7,
        nice: 7,
        isPregnant: false,
      },
      {
        name: 'Соки любви',
        url: '/assets/images/Wife01.JPG',
        porn: 5,
        nice: 3,
        isPregnant: false,
      },
      {
        name: 'Соска это не обзывательство',
        url: '/assets/images/Wife03.JPG',
        porn: 6,
        nice: 4,
        isPregnant: false,
      },
    ];

    this.index = this.wifeModels.length;

    this.removeImage('test.jpg');
  }

  ngOnInit(): void {
  }

  addAutoImage() {
    let newImageUrl = `/assets/images/Wife0${this.index}.JPG`;
    const wife = {
      url: newImageUrl,
      name: 'wife ' + this.index,
      porn: 5
    } as IWifeModel;

    this.wifeModels.push(wife);
    this.index++;
    if (this.index > 9) {
      this.index = 1;
    }
    //this.index = this.index % 10;
  }

  addCustomImage() {
    //this.wifesUrls.push(this.newWifeUrl);
  }

  removeImage(url: string) {
    this.wifeModels = this.wifeModels.filter(wifeModel => wifeModel.url != url);
    this.index--;
  }
}
