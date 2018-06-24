"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var books_list_component_1 = require("./books/books-list/books-list.component");
var highlight_directive_1 = require("./shared/highlight.directive");
var limitchar_pipes_1 = require("./pipes/limitchar.pipes");
var favorites_component_1 = require("./favorites/favorites.component");
var book_service_1 = require("./books/book.service");
var http_1 = require("@angular/http");
var home_component_1 = require("./home/home.component");
var book_details_component_1 = require("./books/book-details/book-details.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'books', component: books_list_component_1.BookListComponent },
                { path: 'book/:id', component: book_details_component_1.BookDetailsComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: "", component: home_component_1.HomeComponent },
                { path: '**', redirectTo: 'books', pathMatch: 'full' }
            ])],
        declarations: [app_component_1.AppComponent,
            books_list_component_1.BookListComponent,
            book_details_component_1.BookDetailsComponent,
            home_component_1.HomeComponent,
            highlight_directive_1.HighlightDirective,
            limitchar_pipes_1.LimitChar,
            favorites_component_1.FavoritesComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [book_service_1.BookService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map