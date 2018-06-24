import { Component, OnInit, OnChanges } from '@angular/core';
import { BookService } from "../book.service";
import {IBook} from '../book';
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

@Component({
    moduleId: module.id,
    // selector: 'bs-books-list', <- this is the main co
    templateUrl: 'books-list.component.html',
    styleUrls: ['books-list.component.css']
})

export class BookListComponent implements OnInit, OnChanges {
    favoriteMessage:string="";
    onfavoriteClicked(message:string):void{
        this.favoriteMessage=message;
    }
    // showMessage:string="test";
    // onNotifyClicked(message:string):void{
    //     this.showMessage=message;
    // }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getBooks();
    }
    getBooks(){
        this._bookService.getBooks()
            .subscribe(
                books=>this.books=books,
                error=>this.errorMessage=<any>error
            );
    }
    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add 'implements OnChanges' to the class.
        console.log('new change detected!');
    }
    // Part of Click ME when click 
    // changeMethodForAnimals():void{
    //     this.animals=['Dog','Cat'];
    //     console.log('new > ',this.animals);
    // }
    // animals:string[]=['Zebra','Dog'];
    // End of 
    imageWidth: number = 100;
    booksInStock:number=2;
    showImage: boolean = true;
    errorMessage:string;
    toggleImage(id): void {
        this.showImage = !this.showImage;
    }

    books:IBook[];

    constructor(private _bookService: BookService){
        // this.books=_bookService.getBooks();
    }

    // books: IBook[] = [{
    //     id: 1,
    //     bookAuthor: "Amit K ;)",
    //     bookTitle: "Multimedia And Web Design Course Kit",
    //     bookPrice: 520,
    //     bookDescription: "Multimedia And Web Design Course is the best course",
    //     bookReviews: 4,
    //     bookImageUrl: "https://cf-books.infibeam.net/img/5ccb3b93/018e2/26/065/P-M-B-9788177226065.jpg?wid=320&hei=320",
    //     booksInStock: 5,
    //     publishedOn: new Date(),
    //     inStock: "yes",
    // },
    // {

    //     id: 2,
    //     bookAuthor: "Chris Griffith",
    //     bookTitle: "Mobile App Development",
    //     bookPrice: 736,
    //     bookDescription: "Learn how to build app store-ready hybrid apps with the Ionic 2",
    //     bookReviews: 1,
    //     bookImageUrl: "https://images-eu.ssl-images-amazon.com/images/I/518LpEFWNLL.jpg",
    //     booksInStock: 500,
    //     publishedOn: new Date(),
    //     inStock: "yes"
    // },
    // {
    //     id: 3,
    //     bookAuthor: "Narasimha Karumanchi ",
    //     bookTitle: "Data Structures and Algorithms",
    //     bookPrice: 100,
    //     bookDescription: "Learn how to build app store-ready hybrid apps with the Ionic 2",
    //     bookReviews: 90,
    //     bookImageUrl: "https://cf-books.infibeam.net/img/eebdcef3/813/9/9780615459813.jpg?wid=320&hei=320",
    //     booksInStock: 100,
    //     publishedOn: new Date(),
    //     inStock: "yes"
    // }]
}