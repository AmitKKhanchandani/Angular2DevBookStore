import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { BookListComponent } from "./books/books-list/books-list.component";
import { HighlightDirective } from "./shared/highlight.directive";
import { LimitChar } from "./pipes/limitchar.pipes";
import { FavoritesComponent } from "./favorites/favorites.component";
import { BookService } from "./books/book.service";
import { HttpModule } from "@angular/http";
import { HomeComponent } from "./home/home.component";
import { BookDetailsComponent } from "./books/book-details/book-details.component";

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  RouterModule.forRoot([
                    {path:'books', component:BookListComponent},
                    {path:'book/:id', component:BookDetailsComponent},
                    {path:'home', component:HomeComponent},
                    {path:"",component:HomeComponent},
                    {path:'**',redirectTo:'books',pathMatch:'full'}
                  ]) ],
  declarations: [ AppComponent, 
                  BookListComponent,
                  BookDetailsComponent,
                  HomeComponent,
                  HighlightDirective,
                  LimitChar,
                  FavoritesComponent ],
  bootstrap:    [ AppComponent ],
  providers:[BookService]
})

export class AppModule { }