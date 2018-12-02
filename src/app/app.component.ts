import { Component } from '@angular/core';

class TabLink {
  path: string;
  displayName: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabLinks: Array<TabLink> = [{
    path: 'home',
    displayName: '首頁',
    icon: 'home'
  }, {
    path: 'aboutMe',
    displayName: '關於我',
    icon: 'face'
  }, {
    path: 'webSkills',
    displayName: '網頁技能',
    icon: 'computer'
  }, {
    path: 'experience',
    displayName: '學經歷',
    icon: 'work'
  }, {
    path: 'works',
    displayName: '作品集',
    icon: 'collections'
  }, {
    path: 'contact',
    displayName: '聯絡我',
    icon: 'email'
  }];
}
