import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menuController: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menuController.close();
  }

  logoutUser() {
    this.storage.set('isUserLoggedIn', false);
    this.navCtrl.navigateRoot('/login');
  }

  goToHome() {
    this.menuController.close();
    this.navCtrl.navigateRoot("menu/home");
  }

  goToSettings() {
    this.menuController.close();
    this.navCtrl.navigateRoot("menu/settings");
  }

  goToSport() {
    this.menuController.close();
    this.navCtrl.navigateRoot("menu/sport");
  }

}
