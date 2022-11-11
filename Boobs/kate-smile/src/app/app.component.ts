import { Component } from '@angular/core';
import { IWife } from './models/IWife';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smile';
  info = {
    name: 'Отличный вид',
    url: '/assets/images/Wife00.JPG',
    porn: 7,
    nice: 7,
    isPregnant: false,
    textColor: '#00FFCC'
  };

  wifes = [
    {
      name: 'Отличный вид',
      url: '/assets/images/Wife00.JPG',
      porn: 7,
      nice: 7,
      isPregnant: false,
      textColor: '#00FFCC'
    },
    {
      name: 'Соки любви',
      url: '/assets/images/Wife01.JPG',
      porn: 5,
      nice: 3,
      isPregnant: false,
      textColor: '#00FFCC'

    },
    {
      name: 'Соска это не обзывательство',
      url: '/assets/images/Wife03.JPG',
      porn: 6,
      nice: 4,
      isPregnant: false,
      textColor: '#FFC00C'
    },
    {
      name: 'Беременная стесняшка',
      url: '/assets/images/Wife04.JPG',
      porn: 2,
      nice: 5,
      isPregnant: true,
      textColor: '#FFC00C'
    },
    {
      name: 'Счастливая эксбиционистка',
      url: '/assets/images/Wife02.JPG',
      porn: 4,
      nice: 7,
      isPregnant: false,
      textColor: '#FFFFCC',
    },
    {
      name: 'Подъезд не помеха',
      url: '/assets/images/Wife05.JPG',
      porn: 3,
      nice: 6,
      isPregnant: true,
    },
    {
      name: 'Со всех красота',
      url: '/assets/images/Wife06.JPG',
      porn: 2,
      nice: 3,
      isPregnant: false,
    },
    {
      name: 'Стесняшка',
      url: '/assets/images/Wife07.JPG',
      porn: 1,
      nice: 7,
      isPregnant: false,
    },
    {
      name: 'Первые фото',
      url: '/assets/images/Wife08.JPG',
      porn: 3,
      nice: 6,
      isPregnant: false,
    },
    {
      name: 'Потягушки',
      url: '/assets/images/Wife09.JPG',
      porn: 2,
      nice: 7,
      isPregnant: false,
    },
    {
      name: 'Почти цензурно',
      url: '/assets/images/Wife10.JPG',
      porn: 1,
      nice: 5,
      isPregnant: false,
    },
    {
      name: 'На показ',
      url: '/assets/images/Wife11.JPG',
      porn: 3,
      nice: 4,
      isPregnant: false,
    },
    {
      name: 'Самый важный навык',
      url: '/assets/images/Wife12.JPG',
      porn: 7,
      nice: 4,
      isPregnant: false,
    },
    {
      name: 'Счастлива',
      url: '/assets/images/Wife13.JPG',
      porn: 5,
      nice: 7,
      isPregnant: false,
    },
  ] as IWife[];

  sortedWifes = this.wifes.sort((a, b) => b.porn - a.porn);
}
