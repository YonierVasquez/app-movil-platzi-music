import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlatziMusicService } from '../services/platzi-music/platzi-music.service';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  artists: any[] = [];
  albums: any[] = [];
  songs: any[] = [];

  song: any = {};

  slideOpts = {
    initialSlide: 6,
    slidesPerView: 4,
    speed: 400
  };

  constructor(
    private musicService: PlatziMusicService,
    private modalController: ModalController
  ) {}

  ionViewDidEnter() {
    this.musicService.getNewReleases().then(newReleases => {
      this.albums = newReleases.albums.items.filter(e => e.album_type === 'album');
      this.artists = this.musicService.getArtists();
      this.songs = newReleases.albums.items.filter(
        e => e.album_type == "single"
      );
    });
  }

  async showSongs(artist) {
    const songs = await this.musicService.getArtistTopTracks(artist.id);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs.tracks,
        artist: artist.name
      }
    });

    modal.onDidDismiss().then(dataRetuned => {
      this.song = dataRetuned.data;
    });

    return await modal.present();
  }

  play() {
    this.song.playing = true;
  }
  pause() {
    this.song.playing = false;
  }

}
