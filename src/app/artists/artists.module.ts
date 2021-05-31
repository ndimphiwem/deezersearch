import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from './artists.component';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { SharedModule } from '../shared/shared.module';



export const routes: Routes = [
  {
    path: '',
    component: ArtistsComponent
  },
  {
    path: ':artistId',
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
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ArtistsModule { }
