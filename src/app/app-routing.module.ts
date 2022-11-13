import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordleComponent } from "./wordle/wordle.component";
import { HomeComponent } from "./home/home.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
