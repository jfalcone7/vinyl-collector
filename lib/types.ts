//payload sent to discogs search API
export interface SearchQuery {
    artist?: string;
    release_title?: string;
    format?: string;
}

//individual search result returned by discogs API
export interface SearchResult {
    id: number;
    type: string;
    style: string[];
    format: string[];
    country: string;
    year: number;
    genre: string[];
    label: string[];
    title: string;
    thumb: string;
    cover_image: string;
}

//top level search results object returned by discogs API
export interface SearchResults {
    pagination: {
        page: number;
        pages: number;
        per_page: number;
        items: number;
        urls: {};
    };
    results: SearchResult[];
}
