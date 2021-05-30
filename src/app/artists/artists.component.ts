import { Component, OnInit } from '@angular/core';
import { ArtistsService } from './artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists: any;

  constructor(readonly artistService: ArtistsService) { }

  ngOnInit(): void {
    console.log('test');
    this.artistService.searchArtists('em').subscribe(artists => {
      console.log('artists', artists);
      this.artists = artists;
    });
  }

}
