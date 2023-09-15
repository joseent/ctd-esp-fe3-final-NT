
// export interface Comics {
// 	key: string;
// 	id: number;
// 	title: string;
// 	description: string;
// 	url: string;
// 	thumbnail: Image;
// 	price: number;
// 	oldPrice: number;
// 	stock: number;
// 	dates: string;
// 	creators: string;
// 	characters: CharacterInter[]


// }

// export interface CharacterInter {
// 	name: string;
// 	resourceURL: string;
// 	thumbnail: Image;
// 	description: string;
// }


// interface Image {
// 	path:string,
// 	extension: string
// }

import { ComicSummary, EventList, Image, StoryList, Url } from "./comic.type";

export type Characters = {
    code: number,
    status: string,
    copyright: string,
    attributionText: string,
    attributionHTML: string,
    data: CharacterData,
    etag: string
}

export type CharacterData = {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: Character[]
}

export interface Character {
    id: number,
    name: string,
    description: string,
    modified: string,
    resourceURI: string,
    urls: Url[],
    thumbnail: Image,
    comics: ComicList,
    stories: StoryList,
    events: EventList,
    series: SeriesList
}

export interface ComicList {
    available: number,
    returned: number,
    collectionURI: string,
    items: ComicSummary[]
}

export interface SeriesList {
    available: number,
    returned: number,
    collectionURI: string,
    items: SeriesSummary[]
}

export type SeriesSummary = {
    resourceURI: string,
    name: string
}
