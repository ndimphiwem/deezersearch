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
      map((searchResults: any) => searchResults.data)
    );
  }
}
