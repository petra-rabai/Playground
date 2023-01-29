interface IBoard
{
	gameItems: Map<string, string>;

	initializeGameItems(gameItems: Map<string, string>): Map<string, string>;
}