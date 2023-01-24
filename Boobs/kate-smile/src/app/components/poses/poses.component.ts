import { Component, OnInit } from '@angular/core';
import { IPose } from 'src/app/models/IPose';

@Component({
  selector: 'poses',
  templateUrl: './poses.component.html',
  styleUrls: ['./poses.component.scss']
})
export class PosesComponent implements OnInit {
  posesModels: IPose[] = [
    {
      name: 'Home porn',
      desc: 'asd'
    },
    {
      name: 'role-playing games',
      desc: 'asd'
    },
    {
      name: 'studio porn',
      desc: 'asd'
    },
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
