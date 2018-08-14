webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyGamesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_detail_team_detail__ = __webpack_require__(529);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyGamesPage = /** @class */ (function () {
    function MyGamesPage(storage, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        storage.keys().then(function (result) {
            console.log(result);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var k = result_1[_i];
                storage.get(k).then(function (team) {
                    console.log(team);
                    _this.items.push(team);
                });
            }
        });
    }
    MyGamesPage.prototype.itemTapped = function (event, item) {
        console.log(event, item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__team_detail_team_detail__["a" /* TeamDetailsPage */], {
            item: item
        });
    };
    MyGamesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-games',template:/*ion-inline-start:"C:\git\app-tutorial\src\pages\my-games\my-games.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Meus jogos</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n	<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n		{{item.name}}\n		<div class="item-note" item-right>\n			{{item.hour}}\n		</div>\n	</button>\n\n\n</ion-content>'/*ion-inline-end:"C:\git\app-tutorial\src\pages\my-games\my-games.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
    ], MyGamesPage);
    return MyGamesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=my-games.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateTeamPage = /** @class */ (function () {
    function CreateTeamPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        console.log(navCtrl);
        console.log(navParams);
        this.controller = 1;
    }
    CreateTeamPage.prototype.saveteam = function () {
        var o = { "id": this.controller, "name": this.name, "hour": this.hourteam };
        this.storage.set(this.controller.toString(), o);
        this.controller++;
    };
    CreateTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-create-team',template:/*ion-inline-start:"C:\git\app-tutorial\src\pages\create-team\create-team.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Novo time</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<ion-list>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Nome</ion-label>\n\n			<ion-input type="text" [(ngModel)]="name"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked>Dia da semana</ion-label>\n\n			<ion-label>Segunda</ion-label> \n\n			<ion-checkbox color="dark" checked="true" [(ngModel)]="monday"></ion-checkbox>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>Terça</ion-label>\n\n			<ion-datetime color="dark" displayFormat="DDDD" pickerFormat="DDDD" [(ngModel)]="tuesday"></ion-datetime>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>Terça</ion-label>\n\n			<ion-checkbox color="dark" checked="true" [(ngModel)]="wednesday"></ion-checkbox>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>Terça</ion-label>\n\n			<ion-checkbox color="dark" checked="true" [(ngModel)]="thursday"></ion-checkbox>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>Terça</ion-label>\n\n			<ion-checkbox color="dark" checked="true" [(ngModel)]="friday"></ion-checkbox>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>Terça</ion-label>\n\n			<ion-checkbox color="dark" checked="true" [(ngModel)]="saturday"></ion-checkbox>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label>Terça</ion-label>\n\n			<ion-checkbox color="dark" checked="true" [(ngModel)]="sunday"></ion-checkbox>\n\n		</ion-item>\n\n\n\n		<ion-item> \n\n			<ion-label stacked>Hor&aacute;rio</ion-label>\n\n			<ion-datetime displayFormat="HH:mm" [(ngModel)]="hourteam"></ion-datetime>\n\n		</ion-item>\n\n\n\n	</ion-list>\n\n\n\n	<button ion-button color="dark" (click)="saveteam()">Salvar</button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\git\app-tutorial\src\pages\create-team\create-team.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
    ], CreateTeamPage);
    return CreateTeamPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=create-team.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"C:\git\app-tutorial\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"C:\git\app-tutorial\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], ItemDetailsPage);
    return ItemDetailsPage;
    var _a, _b;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_my_games_my_games__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_create_team_create_team__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_team_detail_team_detail__ = __webpack_require__(529);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_my_games_my_games__["a" /* MyGamesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_create_team_create_team__["a" /* CreateTeamPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_team_detail_team_detail__["a" /* TeamDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_my_games_my_games__["a" /* MyGamesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_team_detail_team_detail__["a" /* TeamDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_create_team_create_team__["a" /* CreateTeamPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_my_games_my_games__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_create_team_create_team__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_my_games_my_games__["a" /* MyGamesPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Meus jogos', component: __WEBPACK_IMPORTED_MODULE_2__pages_my_games_my_games__["a" /* MyGamesPage */] },
            { title: 'Novo time', component: __WEBPACK_IMPORTED_MODULE_3__pages_create_team_create_team__["a" /* CreateTeamPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\git\app-tutorial\src\app\app.html"*/'<ion-menu [content]="content">\n\n	<ion-header>\n		<ion-toolbar>\n			<ion-title>Itens</ion-title>\n		</ion-toolbar>\n	</ion-header>\n\n	<ion-content>\n		<ion-list>\n			<button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n				{{p.title}}\n			</button>\n		</ion-list>\n	</ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\git\app-tutorial\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\git\app-tutorial\src\pages\list\list.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>My First List</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n		<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n			<ion-icon name="{{item.icon}}" item-left></ion-icon>\n			{{item.title}}\n			<div class="item-note" item-right>\n				{{item.note}}\n			</div>\n		</button>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"C:\git\app-tutorial\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], ListPage);
    return ListPage;
    var _a, _b;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamDetailsPage = /** @class */ (function () {
    function TeamDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
    }
    TeamDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team-details',template:/*ion-inline-start:"C:\git\app-tutorial\src\pages\team-detail\team-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="selectedItem">Time {{selectedItem.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.name}}\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.hour}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"C:\git\app-tutorial\src\pages\team-detail\team-detail.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], TeamDetailsPage);
    return TeamDetailsPage;
    var _a, _b;
}());

//# sourceMappingURL=team-detail.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map