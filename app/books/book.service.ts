import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IBook } from './book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
// import 'rxjs/Rx';


@Injectable()
export class BookService {
    constructor(private _http:Http){}

    getBooks():Observable<IBook[]>{
        return this._http
            .get('api/books/books.json')
            .map((response:Response)=> <IBook[]> response.json())
            // .do(data=>console.log(data))
            .catch(this.handleError);
    }
    getBook(id:string):Observable<IBook>{
        return this.getBooks()
        .map((books:IBook[])=>books.find(book=>book.id===id))
        .do(data=>console.log(data))
    }
    private handleError(error:Response){
        console.log(error);
        let message=`Error status code ${error.status} at ${error.url}`;
        return Observable.throw(message);
    }

    //Hard Code way 
    // getBooks(): IBook[] {
    //     return [
    //         {
    //             id: 1,
    //             bookAuthor: "Amit K ;)",
    //             bookTitle: "Multimedia And Web Design Course Kit",
    //             bookPrice: 520,
    //             bookDescription: "Multimedia And Web Design Course is the best course",
    //             bookReviews: 4,
    //             bookImageUrl: "https://cf-books.infibeam.net/img/5ccb3b93/018e2/26/065/P-M-B-9788177226065.jpg?wid=320&hei=320",
    //             booksInStock: 5,
    //             publishedOn: new Date(),
    //             inStock: "yes",
    //         },
    //         {

    //             id: 2,
    //             bookAuthor: "Chris Griffith",
    //             bookTitle: "Mobile App Development",
    //             bookPrice: 736,
    //             bookDescription: "Learn how to build app store-ready hybrid apps with the Ionic 2",
    //             bookReviews: 1,
    //             bookImageUrl: "https://images-eu.ssl-images-amazon.com/images/I/518LpEFWNLL.jpg",
    //             booksInStock: 500,
    //             publishedOn: new Date(),
    //             inStock: "yes"
    //         },
    //         {
    //             id: 3,
    //             bookAuthor: "Narasimha Karumanchi ",
    //             bookTitle: "Data Structures and Algorithms",
    //             bookPrice: 100,
    //             bookDescription: "Learn how to build app store-ready hybrid apps with the Ionic 2",
    //             bookReviews: 90,
    //             bookImageUrl: "https://cf-books.infibeam.net/img/eebdcef3/813/9/9780615459813.jpg?wid=320&hei=320",
    //             booksInStock: 100,
    //             publishedOn: new Date(),
    //             inStock: "yes"
    //         }
    //     ]
    // }
}