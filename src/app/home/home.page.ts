import { Component } from '@angular/core';
import { PlatziMusicService } from '../services/platzi-music/platzi-music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  albums: any[] = [];

  slideOpts = {
    initialSlide: 6,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400
  };

  constructor(
    private musicService: PlatziMusicService
  ) {}

  ionViewDidEnter() {
    this.musicService.getNewReleases().then(newReleases => {
      this.albums = newReleases.albums.items.filter(e => e.album_type === 'album');
    });
  }

}
