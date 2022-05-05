import type { MDBListMediaType, MDBListProvider, MDBListSearchResponse, MDBListItem } from './response-model.js';
declare class MDBList {
    apikey: string | null;
    constructor(apikey: string);
    search(title: string, year?: number, type?: MDBListMediaType): Promise<MDBListSearchResponse>;
    byID(provider: MDBListProvider, id: string): Promise<MDBListItem>;
    byImdbID(id: string): Promise<MDBListItem>;
    byTmdbID(id: string): Promise<MDBListItem>;
    byTvdbID(id: string): Promise<MDBListItem>;
    byTraktID(id: string): Promise<MDBListItem>;
}
export { MDBListMediaType, MDBListProvider, MDBListSearchResponse, MDBListItem, MDBList };
