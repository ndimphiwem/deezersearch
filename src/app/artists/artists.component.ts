import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ArtistsService } from './artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists: any;
  loading = false;

  constructor(readonly artistService: ArtistsService) { }

  ngOnInit(): void { }

  getArtists(searchTerm: string) {
    // Only show results if the search term is 3 letters or more
    if (searchTerm?.length > 2) {
      this.loading = true;
      this.artistService.searchArtists(searchTerm).pipe(
        finalize(() => this.loading = false)
      ).subscribe(artists => {
        this.artists = artists;
      });
    } else if (searchTerm?.length === 0) {
      this.artists = [];
    }
  }
}
