export class Board implements IBoard {

    gameItems: Map<string, string>;
    
    constructor(gameItems: Map<string, string>) {
        this.gameItems = gameItems;
    }
    initializeGameItems(gameItems: Map<string, string>): Map<string, string> {
        gameItems = new Map([]);

        return gameItems;
    }



}