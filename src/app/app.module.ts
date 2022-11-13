import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordleComponent } from './wordle/wordle.component';
import { HomeComponent } from './home/home.component';
import { HomeCanvas } from "./home/home.canvas";

@NgModule({
  declarations: [
    AppComponent,
    WordleComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HomeCanvas],
  bootstrap: [AppComponent]
})
export class AppModule {
}
