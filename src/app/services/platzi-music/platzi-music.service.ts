import { Injectable } from '@angular/core';
import * as artists from '../../../assets/data/artists.json';
const artistData = artists;

@Injectable({
  providedIn: 'root'
})
export class PlatziMusicService {

  constructor() { }

  /**
   * Trae los artistas
   * @returns 
   */
  getArtists() {
    return artistData.items;
  }

  /**
   * Trae los nuevos lanzamientos
   * @returns 
   */
  getNewReleases() {
    return fetch('https://platzi-music-api.herokuapp.com/browse/new-releases').then(res => res.json());
  }

  /**
   * Trae las canciones más populares de un artista
   * @param artistId 
   * @returns 
   */
  getArtistTopTracks(artistId) {
    return fetch(
      `https://platzi-music-api.herokuapp.com/artists/${artistId}/top-tracks?country=CO`
    ).then(response => response.json());
  }
}
