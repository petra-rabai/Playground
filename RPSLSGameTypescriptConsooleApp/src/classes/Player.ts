import * as readline from 'readline';
import { Board } from './Board';

class Player implements IPlayer
{
    name: string;
    choosedKey: string;
    score: number;
    isWin: boolean;
    gameItems: Map<string, string>;

    constructor(name: string, choosedKey: string, score: number, isWin: boolean, gameItems: Map<string, string>) {
        this.name = name;
        this.choosedKey = choosedKey;
        this.score = score;
        this.isWin = isWin;
        this.gameItems = gameItems;
    }

    

    getChoosedKey(key: string): string {
        let readInfoFromUser = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readInfoFromUser.question("Please choose an item: ", (answer) => {
            if (answer.length == 1) {
                let gameBoard = new Board(this.gameItems);
                gameBoard.initializeGameItems(this.gameItems);
                
            }
            readInfoFromUser.close();
        });


        return key;
    }

}
