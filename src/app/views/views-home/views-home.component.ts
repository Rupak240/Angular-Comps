import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Satisfication Score' },
  ];

  items = [
    {
      image: '/assets/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantistic couch to sit on.',
    },
    {
      image: '/assets/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a grest dresser to put on.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}