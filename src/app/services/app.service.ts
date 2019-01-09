/**
    Building a 2D racing Game using Angular
    @auther Rouz Majlessi
*/

import { Injectable, EventEmitter } from '@angular/core';
import { GameService } from './game.service';

@Injectable()
export class AppService {

isImageLoaded: EventEmitter<number> = new EventEmitter();
constructor(private gameService: GameService) { }

createPlayGround(canvasElement): void {
this.gameService.loadAssets(canvasElement).then( (image) => {
this.isImageLoaded.emit();
});
}

getImageLoadEmitter() {
return this.isImageLoaded;
}
}
