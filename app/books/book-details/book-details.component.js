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
var book_service_1 = require("../book.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BookDetailsComponent = (function () {
    function BookDetailsComponent(_route, _bookServeice) {
        this._route = _route;
        this._bookServeice = _bookServeice;
        console.log(this._route.snapshot.params['id']);
    }
    BookDetailsComponent.prototype.getBook = function (id) {
        var _this = this;
        this._bookServeice.getBook(id).subscribe(function (book) { return _this.book = book; }, function (error) { return _this.errorMessage = error; });
    };
    BookDetailsComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getBook(id);
        });
    };
    return BookDetailsComponent;
}());
BookDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "",
        templateUrl: "book-details.component.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        book_service_1.BookService])
], BookDetailsComponent);
exports.BookDetailsComponent = BookDetailsComponent;
//# sourceMappingURL=book-details.component.js.map