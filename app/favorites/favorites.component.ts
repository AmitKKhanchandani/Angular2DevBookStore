import { Input, Component, Output, EventEmitter } from '@angular/core';
@Component({
    moduleId:module.id,
    selector:'bs-favorite',
    templateUrl:'favorites.component.html'
})

export class FavoritesComponent{
    @Input() favorite:string;
    @Input() reviews:number;
    // Part of Output
    @Output() favoriteClicked:EventEmitter<string>=new EventEmitter<string>();
    fave:boolean=false;
    onclick():void{
        this.favoriteClicked.emit(`The Favorite ${this.favorite} was saved`);
        this.fave=!this.fave;
    }
    isSelected(fave:boolean):boolean{
        if(!fave || !this.fave){
            return false
        }
        if(fave)
        {
            return true;
        }
    }
    // Output ends here
}