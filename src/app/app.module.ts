import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@home/home.component';
import { AboutComponent } from '@uapps/about/about.component';
import { HelpComponent } from '@uapps/help/help.component';
import { E404Component } from '@uapps/e404/e404.component';
import { DisplayBooleanPipe } from './display-boolean.pipe';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    E404Component,
    DisplayBooleanPipe,
    SortPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
