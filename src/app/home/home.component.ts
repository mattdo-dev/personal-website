import { AfterViewInit, Component } from '@angular/core';
import { HomeCanvas } from "./home.canvas";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [HomeCanvas]
})

export class HomeComponent implements AfterViewInit {
  title: string = 'mattdo.dev'
  skills: Array<string> = [
    'Python',
    'C',
    'C++',
    'Java',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'git',
    'Web UI/UX'
  ]
  gitlab: string = 'https://gitlab.com/mattdos'

  constructor(private homeCanvas: HomeCanvas) {

  }

  ngOnInit(): void {
    this.homeCanvas.displayBackground()
  }

  ngAfterViewInit() {

  }
}
