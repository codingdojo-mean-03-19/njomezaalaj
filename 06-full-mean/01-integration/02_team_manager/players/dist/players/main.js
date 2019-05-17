(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/app/player/index.ts");




var routes = [
    {
        path: 'players/list',
        component: _player__WEBPACK_IMPORTED_MODULE_3__["PlayerListComponent"]
    },
    {
        path: 'players/new',
        component: _player__WEBPACK_IMPORTED_MODULE_3__["PlayerNewComponent"]
    },
    {
        path: 'status/game/1',
        component: _player__WEBPACK_IMPORTED_MODULE_3__["PlayerStatusComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Team Management';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player */ "./src/app/player/index.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _player_player_status_player_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player/player-status/player-status.component */ "./src/app/player/player-status/player-status.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ].concat(_player__WEBPACK_IMPORTED_MODULE_7__["components"], [
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _player_player_status_player_status_component__WEBPACK_IMPORTED_MODULE_9__["PlayerStatusComponent"]
            ]),
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.model */ "./src/app/models/player.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return _player_model__WEBPACK_IMPORTED_MODULE_0__["Player"]; });




/***/ }),

/***/ "./src/app/models/player.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/player.model.ts ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" [routerLink]=\"['']\">Team Manager</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link active\" [routerLink]=\"['/players/list']\">Manage Players <span class=\"sr-only\">(current)</span></a>\n      <a class=\"nav-item nav-link\" [routerLink]=\"['/status/game/1']\">Manage Player Status</a>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/player/index.ts":
/*!*********************************!*\
  !*** ./src/app/player/index.ts ***!
  \*********************************/
/*! exports provided: components, PlayerStatusComponent, PlayerListComponent, PlayerNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player/player-list/player-list.component.ts");
/* harmony import */ var _player_new_player_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-new/player-new.component */ "./src/app/player/player-new/player-new.component.ts");
/* harmony import */ var _player_status_player_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-status/player-status.component */ "./src/app/player/player-status/player-status.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_0__["PlayerListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerNewComponent", function() { return _player_new_player_new_component__WEBPACK_IMPORTED_MODULE_1__["PlayerNewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerStatusComponent", function() { return _player_status_player_status_component__WEBPACK_IMPORTED_MODULE_2__["PlayerStatusComponent"]; });




var components = [
    _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_0__["PlayerListComponent"],
    _player_new_player_new_component__WEBPACK_IMPORTED_MODULE_1__["PlayerNewComponent"],
    _player_status_player_status_component__WEBPACK_IMPORTED_MODULE_2__["PlayerStatusComponent"]
];





/***/ }),

/***/ "./src/app/player/player-list/player-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/player/player-list/player-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXItbGlzdC9wbGF5ZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/player/player-list/player-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/player/player-list/player-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [ngStyle]=\"{'margin-top':'20px'}\">\n  <h4 class=\"jumbotron-heading\">Players list</h4>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Player Name</th>\n        <th scope=\"col\">Prefered Position</th>\n        <th scope=\"col\">Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor='let player of players'>\n        <td>{{ player.firstName }} {{ player.lastName }}</td>\n        <td>{{ player.position }}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-danger\" (click)='onDelete($event,player)'>Delete</button> \n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <button type=\"button\" class=\"btn btn-outline-success\" [routerLink]=\"['/players/new']\" (createPlayer)='onCreate($event)'>Add player</button>\n\n</div>\n\n<hr>"

/***/ }),

/***/ "./src/app/player/player-list/player-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/player/player-list/player-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PlayerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return PlayerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.js");



var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent(playerService) {
        this.playerService = playerService;
        this.players = [];
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ng on init');
        this.sub = this.playerService.getPlayers().subscribe(function (players) {
            console.log(players);
            _this.players = players;
        });
    };
    PlayerListComponent.prototype.ngOnDestroy = function () {
        console.log('ng on destroy');
        this.sub.unsubscribe();
    };
    PlayerListComponent.prototype.onCreate = function (player) {
        var _this = this;
        this.playerService.createPlayer(player)
            .subscribe(function (createdPlayer) {
            console.log('Adding new player');
            _this.players.push(createdPlayer);
        });
    };
    PlayerListComponent.prototype.onDelete = function (event, player) {
        var _this = this;
        event.stopPropagation();
        this.playerService.destroyPlayer(player._id)
            .subscribe(function (destroyedPlayer) {
            console.log('Deleting this player', destroyedPlayer);
            _this.players = _this.players.filter(function (player) { return player._id !== destroyedPlayer._id; });
        });
    };
    var _a;
    PlayerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-list',
            template: __webpack_require__(/*! ./player-list.component.html */ "./src/app/player/player-list/player-list.component.html"),
            styles: [__webpack_require__(/*! ./player-list.component.css */ "./src/app/player/player-list/player-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _services__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] !== "undefined" && _services__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]) === "function" ? _a : Object])
    ], PlayerListComponent);
    return PlayerListComponent;
}());



/***/ }),

/***/ "./src/app/player/player-new/player-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/player/player-new/player-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXItbmV3L3BsYXllci1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/player/player-new/player-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/player/player-new/player-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" [ngStyle]=\"{'background-color':'white'}\">\n  <h3>New Player</h3>     \n  <form (submit)='onSubmit($event,playerForm)' #playerForm='ngForm'>\n    <div class=\"form-group\">\n      <label for=\"fname\">First name:</label>\n      <input type=\"text\" class=\"form-control\" id=\"fname\" name=\"firstName\" \n      [(ngModel)]='player.firstName' \n      required\n      minlength=\"2\"\n      #firstName ='ngModel'>\n\n      <div *ngIf='(firstName.touched) && firstName.errors '>\n        <div *ngIf='firstName.errors.required' class=\"alert alert-danger\" role=\"alert\">\n          You must enter a first name!\n        </div>\n        <div *ngIf='firstName.errors.minlength' class=\"alert alert-danger\" role=\"alert\">\n          First name must be at least {{ firstName.errors.minlength.requiredLength }} characters!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lname\">Last name:</label>\n      <input type=\"text\" class=\"form-control\" id=\"lname\" name=\"lastName\" [(ngModel)]='player.lastName'>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"position\">Position:</label>\n      <input type=\"text\" class=\"form-control\" id=\"position\" name=\"position\" [(ngModel)]='player.position'>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]='playerForm.invalid' [ngStyle]=\"{'margin-right':'4px'}\">Add</button>\n  </form>\n</div>\n<hr>"

/***/ }),

/***/ "./src/app/player/player-new/player-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/player/player-new/player-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PlayerNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerNewComponent", function() { return PlayerNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.js");





var PlayerNewComponent = /** @class */ (function () {
    function PlayerNewComponent(playerService, router) {
        this.playerService = playerService;
        this.router = router;
        this.player = new _models__WEBPACK_IMPORTED_MODULE_3__["Player"]();
        this.createPlayer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PlayerNewComponent.prototype.ngOnInit = function () { };
    PlayerNewComponent.prototype.onSubmit = function (event, form) {
        var _this = this;
        event.preventDefault();
        console.log('Submitting ', this.player);
        this.playerService.createPlayer(this.player)
            .subscribe(function (player) {
            console.log('New player ', player);
            _this.router.navigateByUrl('/players/list');
        });
    };
    var _a;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayerNewComponent.prototype, "createPlayer", void 0);
    PlayerNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-new',
            template: __webpack_require__(/*! ./player-new.component.html */ "./src/app/player/player-new/player-new.component.html"),
            styles: [__webpack_require__(/*! ./player-new.component.css */ "./src/app/player/player-new/player-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _services__WEBPACK_IMPORTED_MODULE_4__["PlayerService"] !== "undefined" && _services__WEBPACK_IMPORTED_MODULE_4__["PlayerService"]) === "function" ? _a : Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlayerNewComponent);
    return PlayerNewComponent;
}());



/***/ }),

/***/ "./src/app/player/player-status/player-status.component.css":
/*!******************************************************************!*\
  !*** ./src/app/player/player-status/player-status.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXItc3RhdHVzL3BsYXllci1zdGF0dXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/player/player-status/player-status.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/player/player-status/player-status.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [ngStyle]=\"{'margin-top':'20px'}\">\n  <h4 class=\"jumbotron-heading\">Players list</h4>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Player Name</th>\n        <th scope=\"col\">Prefered Position</th>\n        <th scope=\"col\">Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor='let player of players'>\n        <td>{{ player.firstName }} {{ player.lastName }}</td>\n        <td>{{ player.position }}</td>\n        <td>\n          <button \n            type=\"button\" \n            [ngStyle]=\"{'margin-right':'4px'}\" \n            (click)=\"onPlaying($event, player)\"\n            [ngClass]=\"player.status=='Playing' ? 'btn btn-success' : 'btn btn-outline-secondary'\">Playing\n          </button>\n          <button \n            type=\"button\" \n            [ngStyle]=\"{'margin-right':'4px'}\" \n            (click)=\"onNotPlaying($event,player) \"\n            [ngClass]=\"player.status=='Not Playing' ? 'btn btn-danger' : 'btn btn-outline-secondary'\">Not Playing\n          </button> \n          <button \n            type=\"button\" \n            [ngStyle]=\"{'margin-right':'4px'}\" \n            (click)=\"onUndecided($event,player) \"\n            [ngClass]=\"player.status=='Undecided' ? 'btn btn-warning' : 'btn btn-outline-secondary'\">Undecided\n          </button>  \n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<hr>"

/***/ }),

/***/ "./src/app/player/player-status/player-status.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/player/player-status/player-status.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlayerStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStatusComponent", function() { return PlayerStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.js");



var PlayerStatusComponent = /** @class */ (function () {
    function PlayerStatusComponent(playerService) {
        this.playerService = playerService;
        this.players = [];
    }
    PlayerStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayers().subscribe(function (players) {
            console.log(players);
            _this.players = players;
        });
    };
    PlayerStatusComponent.prototype.onPlaying = function (event, player) {
        event.stopPropagation();
        console.log('Playing', player);
        player.status = 'Playing';
        this.playerService.updatePlayer(player).subscribe(function (updatedPlayer) {
            console.log('updating players status', updatedPlayer);
        });
    };
    PlayerStatusComponent.prototype.onNotPlaying = function (event, player) {
        event.stopPropagation();
        console.log('Not Playing', player);
        player.status = 'Not Playing';
        this.playerService.updatePlayer(player).subscribe(function (updatedPlayer) {
            console.log('updating players status', updatedPlayer);
        });
    };
    PlayerStatusComponent.prototype.onUndecided = function (event, player) {
        event.stopPropagation();
        console.log('Undecided', player);
        player.status = 'Undecided';
        this.playerService.updatePlayer(player).subscribe(function (updatedPlayer) {
            console.log('updating players status', updatedPlayer);
        });
    };
    var _a;
    PlayerStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-status',
            template: __webpack_require__(/*! ./player-status.component.html */ "./src/app/player/player-status/player-status.component.html"),
            styles: [__webpack_require__(/*! ./player-status.component.css */ "./src/app/player/player-status/player-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _services__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] !== "undefined" && _services__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]) === "function" ? _a : Object])
    ], PlayerStatusComponent);
    return PlayerStatusComponent;
}());



/***/ }),

/***/ "./src/app/services/index.js":
/*!***********************************!*\
  !*** ./src/app/services/index.js ***!
  \***********************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.service */ "./src/app/services/player.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return _player_service__WEBPACK_IMPORTED_MODULE_0__["PlayerService"]; });




/***/ }),

/***/ "./src/app/services/player.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/player.service.ts ***!
  \********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PlayerService = /** @class */ (function () {
    function PlayerService(http) {
        this.http = http;
        this.base = 'http://localhost:8000/api/players';
    }
    PlayerService.prototype.getPlayers = function () {
        return this.http.get(this.base);
    };
    PlayerService.prototype.createPlayer = function (player) {
        return this.http.post(this.base, player);
    };
    PlayerService.prototype.destroyPlayer = function (id) {
        return this.http.delete(this.base + "/" + id);
    };
    PlayerService.prototype.updatePlayer = function (player) {
        return this.http.put(this.base + "/" + player._id, player);
    };
    PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\mean-assignment-landscape-master\06-full-mean\01-integration\02_team_manager\players\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map