(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-create-module"],{

/***/ "./src/app/pages/create/create.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/create/create.module.ts ***!
  \***********************************************/
/*! exports provided: CreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageModule", function() { return CreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create.page */ "./src/app/pages/create/create.page.ts");






//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { LoadingController, AlertController } from '@ionic/angular';
//import { FirestoreService } from '../../services/data/firestore.service';


var routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]
    }
];
var CreatePageModule = /** @class */ (function () {
    function CreatePageModule() {
    }
    CreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]]
        })
    ], CreatePageModule);
    return CreatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/create/create.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/create/create.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Create Song</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/home\">\n        <ion-icon slot=\"icon-only\" name=\"home\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"createSongForm\" (submit)=\"createSong()\">\n    <ion-item>\n      <ion-label stacked>Song Name</ion-label>\n      <ion-input formControlName=\"songName\" type=\"text\" placeholder=\"What's this song called?\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Artist Name</ion-label>\n      <ion-input formControlName=\"artistName\" type=\"text\" placeholder=\"Who sings this song?\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Album Name</ion-label>\n      <ion-input formControlName=\"albumName\" type=\"text\" placeholder=\"What's the album's name?\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Song Description</ion-label>\n      <ion-textarea formControlName=\"songDescription\" type=\"text\" placeholder=\"What's this song about?\">\n      </ion-textarea>\n    </ion-item>\n\n\n    <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!createSongForm.valid\">\n      Add Song\n    </ion-button>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/create/create.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/create/create.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/create/create.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/create/create.page.ts ***!
  \*********************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_data_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data/firestore.service */ "./src/app/services/data/firestore.service.ts");





var CreatePage = /** @class */ (function () {
    function CreatePage(loadingCtrl, alertCtrl, firestoreService, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.firestoreService = firestoreService;
        this.createSongForm = formBuilder.group({
            albumName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            artistName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            songDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            songName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    CreatePage.prototype.createSong = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, albumName, artistName, songDescription, songName;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait...',
                            spinner: 'crescent',
                            duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        albumName = this.createSongForm.value.albumName;
                        artistName = this.createSongForm.value.artistName;
                        songDescription = this.createSongForm.value.songDescription;
                        songName = this.createSongForm.value.songName;
                        this.firestoreService.createSong(albumName, artistName, songDescription, songName).then(function () {
                            loading.dismiss().then(function () {
                                _this.router.navigateByUrl('');
                            });
                        }, function (error) {
                            console.error(error);
                        });
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreatePage.prototype.ngOnInit = function () {
    };
    CreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.page.html */ "./src/app/pages/create/create.page.html"),
            styles: [__webpack_require__(/*! ./create.page.scss */ "./src/app/pages/create/create.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_data_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CreatePage);
    return CreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-create-create-module.js.map