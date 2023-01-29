interface IPlayer
{
	name: string;
	choosedKey: string;
	score: number;
	isWin: boolean;
	getChoosedKey(key: string): string
}