import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SongDurationPipe } from './pipes/song-duration.pipe';



@NgModule({
  declarations: [
    SearchComponent,
    SongDurationPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent,
    SongDurationPipe
  ]
})
export class SharedModule { }
