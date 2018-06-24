import {IBook} from '../book';
import {BookService} from '../book.service';
import { Subscription} from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
    moduleId: module.id,
    selector: "",
    templateUrl: "book-details.component.html"
})

export class BookDetailsComponent implements OnInit {
    book:IBook;
    errorMessage:string;
    private sub:Subscription;

    constructor(private _route:ActivatedRoute,
                private _bookServeice:BookService){
                    console.log(this._route.snapshot.params['id']);
                }
getBook(id:string){
    this._bookServeice.getBook(id).subscribe(
        book=>this.book=book,
        error=>this.errorMessage=<any>error
    )
}
    ngOnInit():void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
        this.sub=this._route.params.subscribe(
            params=>{
                let id=params['id'];
                this.getBook(id);
            }
        )
    }

 }