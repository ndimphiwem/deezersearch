import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artistId: any;
  loading = false;
  artist: any;
  topTracks: any;

  constructor(readonly route: ActivatedRoute, readonly artistService: ArtistsService) {
    this.route.url.subscribe(() => {
      this.artistId = this.route.snapshot.paramMap.get('artistId');
      if (this.artistId) {
        this.getArtist(this.artistId);
      }
    });
  }

  ngOnInit(): void {
  }

  getArtist(artistId: any) {
    this.loading = true;
    forkJoin([
      this.artistService.getArtist(artistId),
      this.artistService.getArtistTopTracks(artistId, 5)
    ]).pipe(
      finalize(() => this.loading = false)
    ).subscribe(([artist, topTracks]) => {
      this.artist = artist;
      this.topTracks = topTracks;
    });
  }

}
