import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'active-array',
  templateUrl: './active-array.component.html',
  styleUrls: ['./active-array.component.scss']
})
export class ActiveArrayComponent implements OnInit {
  newWifeUrl: string;
  wifesUrls: string[];

  private index: number = 0;

  constructor() {
    this.newWifeUrl = "/assets/images/Wife00.JPG";
    this.wifesUrls = [];

    this.removeImage('test.jpg');
  }

  ngOnInit(): void {
  }

  addAutoImage() {
    let newImageUrl = `/assets/images/Wife0${this.index}.JPG`;
    this.wifesUrls.push(newImageUrl);
    this.index++;
  }

  addCustomImage(){
    this.wifesUrls.push(this.newWifeUrl);
  }

  removeImage(url: string) {
    this.wifesUrls = this.wifesUrls.filter(wifeUrl => wifeUrl != url);
  }
}
