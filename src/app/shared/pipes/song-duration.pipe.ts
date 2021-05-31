import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'songDuration'
})
export class SongDurationPipe implements PipeTransform {

  transform(durationInSeconds: number): string {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds - (minutes * 60);
    return `${minutes}:${seconds}`;
 }

}
