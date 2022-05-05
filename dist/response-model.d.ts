export declare type MDBListMediaType = 'movie' | 'show';
export declare type MDBListProvider = 'imdb' | 'tmdb' | 'tvdb' | 'trakt';
export interface MDBListRating {
    source: string;
    value: number;
    score: number;
    votes: number;
}
interface MDBListIdName {
    id: number;
    name: string;
}
export declare type MDBListStream = MDBListIdName;
export declare type MDBListWatchProviders = MDBListIdName;
export declare type MDBListKeyword = MDBListIdName;
interface MDBListResponse {
    response: boolean;
}
export interface MDBListSearchResponse extends MDBListResponse {
    search: MDBListSearchItem[];
    total: number;
}
export interface MDBListSearchItem extends MDBListResponse {
    id: string;
    title: string;
    year: number;
    score: number;
    type: MDBListMediaType;
    imdbid: string | null;
    traktid: string | null;
}
export interface MDBListItem extends MDBListSearchItem {
    released: string;
    description: string;
    runtime: number;
    tmdbid: number;
    language: string;
    country: string;
    certification: string;
    commonsense: string | null;
    status: string;
    trailer: string;
    poster: string;
    backdrop: string;
    apiused: number;
}
export {};
