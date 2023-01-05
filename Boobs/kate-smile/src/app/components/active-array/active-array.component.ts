import { Component, OnInit } from '@angular/core';
import { IWifeModel } from 'src/app/models/IWifeModel'

@Component({
  selector: 'active-array',
  templateUrl: './active-array.component.html',
  styleUrls: ['./active-array.component.scss']
})
export class ActiveArrayComponent implements OnInit {
  newWifeUrl: string;
  newWifePorn: number = 0;
  newWifeNice: number = 1;
  wifeModels: IWifeModel[];

  private index: number = 0;

  constructor() {
    this.newWifeUrl = "/assets/images/Wife00.JPG";
    this.wifeModels = [];

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
    const wife = {
      url: this.newWifeUrl,
      name: 'wife ' + this.index,
      porn: this.newWifePorn,
      nice: this.newWifeNice
    } as IWifeModel;

    this.wifeModels.push(wife);
  }

  removeImage(url: string) {
    this.wifeModels = this.wifeModels.filter(wifeModel => wifeModel.url != url);
    this.index--;
  }
}
