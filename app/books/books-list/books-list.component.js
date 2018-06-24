"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var book_service_1 = require("../book.service");
// interface IBook {
//     id: number;
//     bookAuthor: string;
//     bookTitle: string;
//     bookPrice: number;
//     bookDescription: string;
//     bookReviews: number;
//     bookImageUrl: string;
//     booksInStock: number;
//     publishedOn: Date;
//     inStock: string;
// }
var BookListComponent = (function () {
    function BookListComponent(_bookService) {
        this._bookService = _bookService;
        this.favoriteMessage = "";
        // Part of Click ME when click 
        // changeMethodForAnimals():void{
        //     this.animals=['Dog','Cat'];
        //     console.log('new > ',this.animals);
        // }
        // animals:string[]=['Zebra','Dog'];
        // End of 
        this.imageWidth = 100;
        this.booksInStock = 2;
        this.showImage = true;
        // this.books=_bookService.getBooks();
    }
    BookListComponent.prototype.onfavoriteClicked = function (message) {
        this.favoriteMessage = message;
    };
    // showMessage:string="test";
    // onNotifyClicked(message:string):void{
    //     this.showMessage=message;
    // }
    BookListComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getBooks();
    };
    BookListComponent.prototype.getBooks = function () {
        var _this = this;
        this._bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; });
    };
    BookListComponent.prototype.ngOnChanges = function () {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add 'implements OnChanges' to the class.
        console.log('new change detected!');
    };
    BookListComponent.prototype.toggleImage = function (id) {
        this.showImage = !this.showImage;
    };
    return BookListComponent;
}());
BookListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        // selector: 'bs-books-list', <- this is the main co
        templateUrl: 'books-list.component.html',
        styleUrls: ['books-list.component.css']
    }),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookListComponent);
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=books-list.component.js.map