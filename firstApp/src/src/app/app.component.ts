import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Profile', url: '/folder/profile', icon: 'person' },
    { title: 'Gallery', url: '/folder/gallery', icon: 'images' },
    { title: 'About', url: '/folder/about', icon: 'information-circle' },
    { title: 'Settings', url: '/folder/settings', icon: 'settings' },
  ];
  public labels = ['Travel', 'Projects', 'Hobbies', 'Goals'];
  constructor() {}
}
