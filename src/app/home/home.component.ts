import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  title: string = 'mattdo.dev'
  skills: Array<string> = [
    'Python',
    'C',
    'C++',
    'Java',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'git'
  ]
}
