# Installation

`npm install mdblist-lib`


# Usage

```js
const {MDBList} = require('mdblist-lib');


const MDB = new MDBList( YOUR_API_KEY_HERE );


async function getIceAge() {

    let res = await MDB.search('ice age', null, 'show');
    console.log( JSON.stringify(res, null, 2) );

    res = await MDB.byImdbID( res.search[0].imdbid );
    console.log( JSON.stringify(res, null, 2) );

}
getIceAge();
```


### Methods

`search( title : string, year? : number, type? : MDBListMediaType )`

search by `title` and `year`.
Returns `Promise<MDBListSearchResponse>`

`byImdbID( ID: string )`

get infos by IMDB_ID
Returns `Promise<MDBListItem>`

`byTmdbID( ID: string )`

get infos by TMDB_ID
Returns `Promise<MDBListItem>`

`byTvdbID( ID: string )`

get infos by TVDB_ID
Returns `Promise<MDBListItem>`

`byTraktID( ID: string )`

get infos by TRAKT_ID
Returns `Promise<MDBListItem>`



### Types


###### MDBListMediaType
```js
'movie' | 'show';
````

###### MDBListProvider
```js
'imdb' | 'tmdb' | 'tvdb' | 'trakt'
```


###### MDBListSearchResponse
```js
search: MDBListSearchItem[]
total: number;
````

###### MDBListSearchItem

```js
id: string;
title: string;
year: number;
score: number;
type: MDBListMediaType;
imdbid: string | null;
traktid: string | null;
```

###### MDBListItem

```js
released: string;
description: string;
runtime: number;
tmdbid: number;
language: string,
country: string,
certification: string,
commonsense: string | null,
status: string,
trailer: string,
poster: string,
backdrop: string,
apiused: number
```

