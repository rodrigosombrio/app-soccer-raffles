import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { MyGamesPage } from '../pages/my-games/my-games';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { CreateTeamPage } from '../pages/create-team/create-team';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TeamDetailsPage } from '../pages/team-detail/team-detail';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    MyApp,
    MyGamesPage,
    ItemDetailsPage,
    CreateTeamPage,
    TeamDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyGamesPage,
    ItemDetailsPage,
    TeamDetailsPage,
    CreateTeamPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
