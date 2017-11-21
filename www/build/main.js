webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tone__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_tone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tonal__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.signatures = [
            {
                major: "C",
                minor: "A",
                img: "/assets/cMaj.svg",
                sharps: 0,
                flats: 0
            },
            {
                major: "G",
                minor: "E",
                img: "/assets/gMaj.svg",
                sharps: 1,
                flats: 0
            },
            {
                major: "D",
                minor: "B",
                img: "/assets/dMaj.svg",
                sharps: 2,
                flats: 0
            },
            {
                major: "A",
                minor: "F#",
                img: "/assets/aMaj.svg",
                sharps: 3,
                flats: 0
            },
            {
                major: "E",
                minor: "C#",
                img: "/assets/eMaj.svg",
                sharps: 4,
                flats: 0
            },
            {
                major: "B",
                minor: "G#",
                img: "/assets/bMaj.svg",
                sharps: 5,
                flats: 0
            },
            {
                major: "F#",
                minor: "D#",
                img: "/assets/fSharpMaj.svg",
                sharps: 6,
                flats: 0
            },
            {
                major: "C#",
                minor: "A#",
                img: "/assets/cSharpMaj.svg",
                sharps: 7,
                flats: 0
            },
            {
                major: "F",
                minor: "D",
                img: "/assets/fMaj.svg",
                sharps: 0,
                flats: 1
            },
            {
                major: "Bb",
                minor: "G",
                img: "/assets/bFlatMaj.svg",
                sharps: 0,
                flats: 2
            },
            {
                major: "Eb",
                minor: "C",
                img: "/assets/eFlatMaj.svg",
                sharps: 0,
                flats: 3
            },
            {
                major: "Ab",
                minor: "F",
                img: "/assets/aFlatMaj.svg",
                sharps: 0,
                flats: 4
            },
            {
                major: "Db",
                minor: "Bb",
                img: "/assets/dFlatMaj.svg",
                sharps: 0,
                flats: 5
            },
            {
                major: "Gb",
                minor: "Eb",
                img: "/assets/gFlatMaj.svg",
                sharps: 0,
                flats: 6
            },
            {
                major: "Cb",
                minor: "Ab",
                img: "/assets/cFlatMaj.svg",
                sharps: 0,
                flats: 7
            },
        ];
    }
    HomePage.prototype.randomize = function (mode) {
        var maxIdx = this.signatures.length - 1;
        var randomIdx = Math.floor(Math.random() * maxIdx);
        this.signature = this.signatures[randomIdx];
        this.showText = false;
        this.showStaff = false;
        switch (mode) {
            case "text":
                this.showText = true;
                break;
            case "staff":
                this.showStaff = true;
                break;
            case "full":
                this.showText = true;
                this.showStaff = true;
                break;
        }
    };
    HomePage.prototype.playScale = function () {
        var synth = new __WEBPACK_IMPORTED_MODULE_2_tone__["Synth"]().toMaster();
        __WEBPACK_IMPORTED_MODULE_2_tone__["Transport"].bpm.value = 340;
        var name = this.signature.major + '4';
        var notes = __WEBPACK_IMPORTED_MODULE_3_tonal__["b" /* Scale */].notes(name + ' major');
        var top = __WEBPACK_IMPORTED_MODULE_3_tonal__["a" /* Note */].from({ oct: 5 }, name);
        console.log(notes);
        var direction = 'up';
        var i = 0;
        var count = 0;
        while (true) {
            var note = notes[i] || top;
            console.log(note);
            synth.triggerAttackRelease(note, "1n", "+" + count + 'm');
            count++;
            if (direction === 'up') {
                i++;
                if (i === notes.length) {
                    direction = 'down';
                }
            }
            else {
                i--;
                if (i === -1) {
                    break;
                }
            }
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/julian/Code/music-thing/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Key Signature Generator\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngIf="!signature" padding>\n    <ion-card-header>\n      Hello!\n    </ion-card-header>\n    <ion-card-content>\n      <p>Click a button to get started</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="signature">\n    <!-- <ion-item>\n      <h2></h2>\n      <p>November 5, 1955</p>\n    </ion-item> -->\n\n    <img *ngIf="showStaff" class="staffPreview" src="{{ signature.img }}">\n\n    <ion-card-content *ngIf="showText">\n      <p>This is {{ signature.major }} major or {{ signature.minor }} minor</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button *ngIf="!showText" (click)="showText = true" ion-button icon-left clear small>\n          <ion-icon name="eye"></ion-icon>\n          <div>Reveal Name</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button *ngIf="!showStaff" (click)="showStaff = true" ion-button icon-left clear small>\n          <ion-icon name="eye"></ion-icon>\n          <div>Reveal Staff</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button (click)="playScale()" ion-button icon-left clear small>\n          <ion-icon name="musical-notes"></ion-icon>\n          <div>Play Scale</div>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n  \n</ion-content>\n\n<ion-footer>\n  <button ion-button full color="secondary" (click)="randomize(\'full\')">Randomize</button>\n  <button ion-button full color="primary" (click)="randomize(\'staff\')">Randomize - Staff Only</button>\n  <button ion-button full color="primary" (click)="randomize(\'text\')">Randomize - Name Only</button>\n</ion-footer>\n'/*ion-inline-end:"/home/julian/Code/music-thing/src/pages/home/home.html"*/,
        providers: []
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] }]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { statusBar } from '@ionic-native/status-bar';
// import { splashScreen } from '@ionic-native/splash-screen';

var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.styleDefault();
            // splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/julian/Code/music-thing/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/julian/Code/music-thing/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.js.map