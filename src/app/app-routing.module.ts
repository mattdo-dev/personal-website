import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordleComponent } from "./wordle/wordle.component";
import { HomeComponent } from "./home/home.component";
import { ThreeComponent } from "./three/three.component";

const routes: Routes = [
  {
    path: '',
    title: 'World of Matthew Do',
    component: HomeComponent,
  },
  {
    path: 'wordle',
    title: 'Wordle Analyzer',
    component: WordleComponent,
  },
  {
    path: 'three',
    title: '3D Sandbox',
    component: ThreeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
