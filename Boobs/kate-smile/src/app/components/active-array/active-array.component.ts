import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'active-array',
  templateUrl: './active-array.component.html',
  styleUrls: ['./active-array.component.scss']
})
export class ActiveArrayComponent implements OnInit {
  name: string;
  wifesUrls: string[];

  private index: number = 0;

  constructor() {
    this.name = "Паша";
    this.wifesUrls = [];
  }

  ngOnInit(): void {
  }

  addImage() {
    let newImageUrl = `/assets/images/Wife0${this.index}.JPG`;
    this.wifesUrls.push(newImageUrl);
    this.index++;
  }

}
