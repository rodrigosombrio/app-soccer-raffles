import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Platform} from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  templateUrl: 'tabs.html'
})

@NgModule({
  providers: [ CallNumber ]
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public platform: Platform) {

  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log("ready", this.platform);
    });
}  
}
