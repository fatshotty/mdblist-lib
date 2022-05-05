import GOT from 'got';
import type {MDBListMediaType, MDBListProvider, MDBListSearchResponse, MDBListItem}  from './response-model.js';

const BASE_URL : string = 'https://mdblist.com/api/'


function getProviderKey(p: MDBListProvider) : string {
  switch(p) {
    case 'imdb': return 'i';
    case 'tmdb': return 'tm';
    case 'tvdb': return 'tv';
    case 'trakt': return 't';
  }
  throw 'invalid provider'
}


class MDBList {

  apikey : string | null = null;

  constructor(apikey : string) {
    this.apikey = apikey;
  }


  async search(title : string, year? : number, type? : MDBListMediaType) : Promise<MDBListSearchResponse> {

    const params = [
      `apikey=${this.apikey}`,
      `s=${title}`
    ];
    if ( year ) {
      params.push(`y=${year}`);
    }

    if ( type ) {
      params.push(`m=${type}`);
    }

    return await GOT(`${BASE_URL}?${params.join('&')}`).json() as MDBListSearchResponse;
  }


  async byID(provider : MDBListProvider, id: string) : Promise<MDBListItem> {
    const providerKey : string = getProviderKey(provider);
    const params = [
      `apikey=${this.apikey}`,
      `${providerKey}=${id}`
    ];

    return await GOT(`${BASE_URL}?${params.join('&')}`).json() as MDBListItem;
  }

  async byImdbID(id : string) : Promise<MDBListItem> {
    return await this.byID('imdb', id);
  }

  async byTmdbID(id : string) : Promise<MDBListItem> {
    return await this.byID('tmdb', id);
  }

  async byTvdbID(id : string) : Promise<MDBListItem> {
    return await this.byID('tvdb', id);
  }

  async byTraktID(id : string) : Promise<MDBListItem> {
    return await this.byID('trakt', id);
  }

}

export {MDBListMediaType, MDBListProvider, MDBListSearchResponse, MDBListItem, MDBList};
