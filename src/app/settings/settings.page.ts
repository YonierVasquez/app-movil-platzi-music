import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * NOTAS:
 * 1. Para que funcione el plugin de cámara, hay que instalarlo:
 *   npm install @capacitor/camera
 */

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  
  userImage = "assets/img/user.jpg";
  photo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}
  
  ngOnInit() {
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    );
  }

}
