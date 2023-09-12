
export interface Comics {
	key: string;
	id: number;
	title: string;
	description: string;
	url: string;
	thumbnail: string;
	price: number;
	oldPrice: number;
	stock: number;
	dates: string;
	creators: string;
	characters: CharacterInter[]


}

export interface CharacterInter {
	name: string;
	resourceURL: string;
	thumbnail: string;
	description: string;
}