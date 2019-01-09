/**
    Building a 2D racing Game using Angular
    @auther Rouz Majlessi
*/

import { Injectable, Input } from '@angular/core';
import * as CONFIG from './../config/config';
@Injectable()
export class GameService {

@Input() public width: number = CONFIG.playGroundWidth;
@Input() public height: number = CONFIG.playGroundHeight;

context: CanvasRenderingContext2D;
image: HTMLImageElement = null;
gameLoop =  null;

loadAssets(canvasElement: HTMLCanvasElement): Promise<void>  {
this.context = canvasElement.getContext('2d');
canvasElement.width = this.width;
canvasElement.height = this.height;
return new Promise((resolve, reject) => {
this.image = new Image();
this.image.src = CONFIG.spritePath;
this.image.width = 58;
this.image.height = 128;
resolve();
});
}
    startGameLoop() {
this.gameLoop = setInterval(() => {
            /**
            ---
            ---
            Code to start the game
            ---
            ---
            */
}, 10);
}
}
