import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from 'ionic-angular';

import { TeamDetailsPage } from '../team-detail/team-detail'

@Component({
	selector: 'page-my-games',
	templateUrl: 'my-games.html'
})
export class MyGamesPage {

	private items: Array<{ id: number, name: string, hour: string }>;

	constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

		this.items = [];
		storage.keys().then(result => {
			console.log(result);
			for (let k of result) {
				storage.get(k).then(team => {
					console.log(team);
					this.items.push(team);
				})
			}
		})

	}

	itemTapped(event, item) {
		console.log(event, item);
		this.navCtrl.push(TeamDetailsPage, {
			item: item
		  });
	}
}
