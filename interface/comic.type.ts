export type Comics = {
    code: number  | string,
    status: string,
    copyright: string,
    attributionText: string,
    attributionHTML: string,
    data: ComicData,
    etag: string
}

export type ComicData = {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: Comic[]
}



export type Comic = {
    id: number,
    digitalId: number,
    title: string,
    issueNumber: number,
    variantDescription: string,
    description: string,
    modified: string,
    isbn: string,
    upc: string,
    diamondCode: string,
    ean: string,
    issn: string,
    format: string,
    pageCount: number,
    textObjects: TextObject[],
    resourceURI: string,
    urls: Url[],
    series: SeriesSummary,
    variants: ComicSummary[],
    collections: ComicSummary[],
    collectedIssues: ComicSummary[],
    dates: ComicDate[],
    prices: ComicPrice[],
    thumbnail: Image,
    images: Image[],
    creators: CreatorsList,
    characters: CharactersList,
    stories: StoryList,
    events: EventList,
    price: number,
    oldPrice: number,
    stock: number
}

export type TextObject = {
    type: string,
    language: string,
    text: string
}

export type Url = {
    type: string,
    url: string
}

export type SeriesSummary = {
    resourceURI: string,
    name: string
}

export type ComicSummary = {
    resourceURI: string,
    name: string
}

export type ComicDate = {
    type: string,
    date: string
}

export type ComicPrice = {
    type: string,
    price: number
}

export type Image = {
    path: string,
    extension: string
}

export type CreatorsList = {
    available: number,
    returned: number,
    collectionURI: string,
    items: CreatorSummary[]
}

export type CreatorSummary = {
    resourceURI: string,
    name: string,
    role: string
}

export type CharactersList = {
    available: number,
    returned: number,
    collectionURI: string
    items: CharacterSummary[]
}

export type CharacterSummary = {
    resourceURI: string,
    name: string,
    role: string
}

export type StoryList = {
    available: number,
    returned: number,
    collectionURI: string,
    items: StorySummary[]
}

export type StorySummary = {
    resourceURI: string,
    name: string,
    type: string
}

export type EventList = {
    available: number,
    returned: number,
    collectionURI: string
    items: EventSummary[]
}

export type EventSummary = {
    resourceURI: string,
    name: string
}