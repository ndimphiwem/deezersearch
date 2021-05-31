import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  apiPath = `${environment.proxy}/${environment.api}`;
  constructor(readonly http: HttpClient) { }

  searchArtists (searchTerm: any) {
    const url = `${this.apiPath}/search/artist?q=${searchTerm}`;
    return this.http.get(url).pipe(
      /**
       * This map will only return the "data" property from the response and
       * also order by the number of fans in desc order (nb_fan)
       */
      map((searchResults: any) => searchResults?.data?.sort((a: any, b: any) => b?.nb_fan - a?.nb_fan))
    );
  }

  getArtist (artistId: any) {
    const url = `${this.apiPath}/artist/${artistId}`;
    return this.http.get(url);
  }

  getArtistTopTracks(artistId: any, numberOfTracks: number) {
    const url = `${this.apiPath}/artist/${artistId}/top?limit=${numberOfTracks}`;
    return this.http.get(url).pipe(
      map((trackResults: any) => trackResults?.data)
    );
  }

  getArtistAlbums(artistName: any, artistId: any) {
    const url = `${this.apiPath}/search/album?q=${artistName}`;
    return this.http.get(url).pipe(
      map((albumResults: any) => albumResults?.data?.filter((album: any) => album?.artist?.id === artistId))
    );
  }
}
