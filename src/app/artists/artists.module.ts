import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from './artists.component';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';



export const routes: Routes = [
  {
    path: '',
    component: ArtistsComponent
  },
  {
    path: 'artists/:artistId',
    component: ArtistComponent
  }
];

@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArtistsModule { }
