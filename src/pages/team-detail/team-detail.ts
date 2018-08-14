import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-team-details',
  templateUrl: 'team-detail.html'
})
export class TeamDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  }
}
