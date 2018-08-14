import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'page-create-team',
	templateUrl: 'create-team.html'
})
export class CreateTeamPage {

	private controller: number;
	public name: any;
	public hourteam: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

		console.log(navCtrl)
		console.log(navParams)

		this.controller = 1;

	}

	saveteam() {
		let o = { "id": this.controller, "name": this.name, "hour": this.hourteam };
		this.storage.set(this.controller.toString(), o)
		this.controller++;
	}
}
