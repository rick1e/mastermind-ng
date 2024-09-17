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

module.exports = "<div>\n    <div>\n      <div>\n          <app-pip-display [pips]=\"possibleColours\" (pipSelectionEvent)=\"handlePipSelectedEvent($event)\"></app-pip-display>\n          <button (click)=\"onClearButtonClick()\">Clear</button>\n          <button (click)=\"onSubmitButtonClick()\">Submit</button>\n          <button *ngIf=\"isGameDone\" (click)=\"onNewGameButtonClick()\">New Game</button>\n      </div>\n      <app-game-result *ngIf=\"isGameDone\" [resultText]=\"gameResult\" [answer]=\"currentSolution\"></app-game-result>\n    </div>\n    <div>\n      <app-pip-feedback [rounds]=\"rounds\"></app-pip-feedback>\n    </div>\n\n</div>"

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
        this.title = 'mastermind-ng';
        this.isGameDone = false;
        this.rounds = [];
        this.possibleColours = [
            'DarkBlue',
            'BrightBlue',
            'Green',
            'Yellow',
            'Orange',
            'Red',
            'RebeccaPurple',
        ];
        this.numberOfChoices = 4;
        this.numberOfRounds = 10;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initializeGame();
    };
    AppComponent.prototype.initializeGame = function () {
        this.rounds = [];
        this.isGameDone = false;
        this.numberOfPipsSelected = 0;
        this.currentRound = 0;
        this.generateEmptyRounds(this.numberOfRounds, this.numberOfChoices);
        this.currentSolution = this.generateSolution(this.possibleColours, this.numberOfChoices);
        this.gameResult = 'playying';
        this.rounds[this.currentRound].status = "active";
    };
    AppComponent.prototype.pickRandomItem = function (items) {
        var rand = Math.floor(Math.random() * items.length);
        return items[rand];
    };
    AppComponent.prototype.generateSolution = function (colours, number) {
        var tempSol = this.generateListOfStuff(number, '');
        for (var i = 0; i < tempSol.length; i++) {
            tempSol[i] = this.pickRandomItem(colours);
        }
        return tempSol.slice();
    };
    AppComponent.prototype.generateEmptyRounds = function (numberOfRounds, numberOfPips) {
        for (var i = 0; i < numberOfRounds; i++) {
            var round = new Round();
            round.status = 'blank';
            round.currentChoice = this.generateListOfBlanks(numberOfPips).slice();
            round.guessFeedback = this.generateListOfBlanks(numberOfPips).slice();
            this.rounds.push(round);
        }
    };
    AppComponent.prototype.generateListOfBlanks = function (number) {
        return this.generateListOfStuff(number, 'blank');
    };
    AppComponent.prototype.generateListOfStuff = function (number, stuff) {
        var list = [];
        for (var i = 0; i < number; i++) {
            list.push(stuff);
        }
        return list;
    };
    AppComponent.prototype.selectedPip = function (colour) {
        alert(this.rounds);
    };
    AppComponent.prototype.handlePipSelectedEvent = function (colour) {
        if (this.isGameDone)
            return;
        if (this.numberOfPipsSelected == this.numberOfChoices)
            return;
        this.rounds[this.currentRound].currentChoice[this.numberOfPipsSelected] = colour;
        this.numberOfPipsSelected++;
    };
    AppComponent.prototype.onClearButtonClick = function () {
        if (this.isGameDone) {
            return;
        }
        this.numberOfPipsSelected = 0;
        this.rounds[this.currentRound].currentChoice = this.generateListOfBlanks(this.numberOfChoices).slice();
    };
    AppComponent.prototype.onSubmitButtonClick = function () {
        this.generateGuessFeedback();
        this.rounds[this.currentRound].status = "completed";
        this.generateGameResult();
        if (this.isGameDone) {
            return;
        }
        this.numberOfPipsSelected = 0;
        this.currentRound++;
        this.rounds[this.currentRound].status = "active";
    };
    AppComponent.prototype.onNewGameButtonClick = function () {
        this.initializeGame();
    };
    AppComponent.prototype.generateGuessFeedback = function () {
        var guessFeedback = this.generateListOfStuff(this.numberOfChoices, 'x').slice();
        var tempGuess = this.rounds[this.currentRound].currentChoice.slice();
        for (var i = 0; i < this.numberOfChoices; i++) {
            var sol = this.currentSolution[i];
            if (sol === tempGuess[i]) {
                guessFeedback[i] = 'black';
                tempGuess[i] = '*';
            }
            else if (tempGuess.includes(sol)) {
                var whiteIndex = tempGuess.indexOf(sol);
                if (tempGuess[whiteIndex] === this.currentSolution[whiteIndex]) {
                    guessFeedback[whiteIndex] = 'black';
                }
                else {
                    guessFeedback[i] = 'orange';
                }
                tempGuess[whiteIndex] = '*';
            }
        }
        guessFeedback.sort();
        this.rounds[this.currentRound].guessFeedback = guessFeedback.map(function (str) { return str.replace('x', 'blank'); }).slice();
    };
    AppComponent.prototype.generateGameResult = function () {
        if (this.arraysAreEqual(this.rounds[this.currentRound].currentChoice, this.currentSolution)) {
            this.gameResult = 'You Win';
            this.isGameDone = true;
            return;
        }
        if (this.currentRound + 1 == this.numberOfRounds) {
            this.gameResult = 'You Lose';
            this.isGameDone = true;
        }
    };
    AppComponent.prototype.arraysAreEqual = function (arr1, arr2) {
        // Check if lengths are different
        if (arr1.length !== arr2.length) {
            return false;
        }
        // Check if all elements are the same
        return arr1.every(function (value, index) { return value === arr2[index]; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

var Round = /** @class */ (function () {
    function Round() {
    }
    return Round;
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pip_selector_pip_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pip-selector/pip-selector.component */ "./src/app/pip-selector/pip-selector.component.ts");
/* harmony import */ var _pip_feedback_pip_feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pip-feedback/pip-feedback.component */ "./src/app/pip-feedback/pip-feedback.component.ts");
/* harmony import */ var _game_result_game_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-result/game-result.component */ "./src/app/game-result/game-result.component.ts");
/* harmony import */ var _pip_display_pip_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pip-display/pip-display.component */ "./src/app/pip-display/pip-display.component.ts");
/* harmony import */ var _guess_feedback_display_guess_feedback_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guess-feedback-display/guess-feedback-display.component */ "./src/app/guess-feedback-display/guess-feedback-display.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pip_selector_pip_selector_component__WEBPACK_IMPORTED_MODULE_4__["PipSelectorComponent"],
                _pip_feedback_pip_feedback_component__WEBPACK_IMPORTED_MODULE_5__["PipFeedbackComponent"],
                _game_result_game_result_component__WEBPACK_IMPORTED_MODULE_6__["GameResultComponent"],
                _pip_display_pip_display_component__WEBPACK_IMPORTED_MODULE_7__["PipDisplayComponent"],
                _guess_feedback_display_guess_feedback_display_component__WEBPACK_IMPORTED_MODULE_8__["GuessFeedbackDisplayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game-result/game-result.component.css":
/*!*******************************************************!*\
  !*** ./src/app/game-result/game-result.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtcmVzdWx0L2dhbWUtcmVzdWx0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/game-result/game-result.component.html":
/*!********************************************************!*\
  !*** ./src/app/game-result/game-result.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{resultText}}\n</p>\n<h3>Solution</h3>\n<app-pip-display [pips]=\"answer\"></app-pip-display>"

/***/ }),

/***/ "./src/app/game-result/game-result.component.ts":
/*!******************************************************!*\
  !*** ./src/app/game-result/game-result.component.ts ***!
  \******************************************************/
/*! exports provided: GameResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameResultComponent", function() { return GameResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GameResultComponent = /** @class */ (function () {
    function GameResultComponent() {
    }
    GameResultComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GameResultComponent.prototype, "resultText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GameResultComponent.prototype, "answer", void 0);
    GameResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-result',
            template: __webpack_require__(/*! ./game-result.component.html */ "./src/app/game-result/game-result.component.html"),
            styles: [__webpack_require__(/*! ./game-result.component.css */ "./src/app/game-result/game-result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameResultComponent);
    return GameResultComponent;
}());



/***/ }),

/***/ "./src/app/guess-feedback-display/guess-feedback-display.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/guess-feedback-display/guess-feedback-display.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    width: 50px;\r\n    border: 1px solid;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.circle {\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.black {\r\n    background-color: black;\r\n}\r\n\r\n.orange {\r\n    background-color: orange;\r\n}\r\n\r\n.blank {\r\n    background-color: #F5F5F5;\r\n    border: 1px solid #C0C0C0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3Vlc3MtZmVlZGJhY2stZGlzcGxheS9ndWVzcy1mZWVkYmFjay1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2d1ZXNzLWZlZWRiYWNrLWRpc3BsYXkvZ3Vlc3MtZmVlZGJhY2stZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uYmxhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG4uYmxhbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDMEMwQzA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/guess-feedback-display/guess-feedback-display.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/guess-feedback-display/guess-feedback-display.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div *ngFor=\"let pip of pips;\" [ngClass]=\"['circle', pip]\"></div>\n</div>"

/***/ }),

/***/ "./src/app/guess-feedback-display/guess-feedback-display.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/guess-feedback-display/guess-feedback-display.component.ts ***!
  \****************************************************************************/
/*! exports provided: GuessFeedbackDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuessFeedbackDisplayComponent", function() { return GuessFeedbackDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuessFeedbackDisplayComponent = /** @class */ (function () {
    function GuessFeedbackDisplayComponent() {
    }
    GuessFeedbackDisplayComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GuessFeedbackDisplayComponent.prototype, "pips", void 0);
    GuessFeedbackDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guess-feedback-display',
            template: __webpack_require__(/*! ./guess-feedback-display.component.html */ "./src/app/guess-feedback-display/guess-feedback-display.component.html"),
            styles: [__webpack_require__(/*! ./guess-feedback-display.component.css */ "./src/app/guess-feedback-display/guess-feedback-display.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GuessFeedbackDisplayComponent);
    return GuessFeedbackDisplayComponent;
}());



/***/ }),

/***/ "./src/app/pip-display/pip-display.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pip-display/pip-display.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 250px;\r\n    border: 1px solid;\r\n}\r\n\r\n.circle {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.red {\r\n    background-color: red;\r\n}\r\n\r\n.blue {\r\n    background-color: blue;\r\n}\r\n\r\n.green {\r\n    background-color: green;\r\n}\r\n\r\n.yellow {\r\n    background-color: yellow;\r\n}\r\n\r\n.blank {\r\n    background-color: #F5F5F5;\r\n    border: 1px solid #C0C0C0;\r\n}\r\n\r\n.DarkBlue{\r\n    background-color: #003366;\r\n}\r\n\r\n.BrightBlue{\r\n    background-color: #0066cc;\r\n}\r\n\r\n.Green{\r\n    background-color: #009966;\r\n}\r\n\r\n.Yellow{\r\n    background-color: #ffcc00;\r\n}\r\n\r\n.Orange{\r\n    background-color: #ff6600;\r\n}\r\n\r\n.Red{\r\n    background-color: #cc0000;\r\n}\r\n\r\n.RebeccaPurple{\r\n    background-color: #663399;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlwLWRpc3BsYXkvcGlwLWRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3BpcC1kaXNwbGF5L3BpcC1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnllbGxvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5ibGFuayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MwQzBDMDtcclxufVxyXG5cclxuLkRhcmtCbHVle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzM2NjtcclxufVxyXG4uQnJpZ2h0Qmx1ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2Y2M7XHJcbn1cclxuLkdyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTk2NjtcclxufVxyXG4uWWVsbG93e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2MwMDtcclxufVxyXG4uT3Jhbmdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYwMDtcclxufVxyXG4uUmVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAwMDtcclxufVxyXG4uUmViZWNjYVB1cnBsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjMzOTk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pip-display/pip-display.component.html":
/*!********************************************************!*\
  !*** ./src/app/pip-display/pip-display.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div *ngFor=\"let pip of pips;\" [ngClass]=\"['circle', pip]\" (click)=\"onPipClick(pip)\"></div>\n</div>"

/***/ }),

/***/ "./src/app/pip-display/pip-display.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pip-display/pip-display.component.ts ***!
  \******************************************************/
/*! exports provided: PipDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipDisplayComponent", function() { return PipDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PipDisplayComponent = /** @class */ (function () {
    function PipDisplayComponent() {
        this.pipSelectionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PipDisplayComponent.prototype.ngOnInit = function () {
    };
    PipDisplayComponent.prototype.onPipClick = function (colour) {
        this.pipSelectionEvent.emit(colour);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PipDisplayComponent.prototype, "pips", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], PipDisplayComponent.prototype, "clickFunction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PipDisplayComponent.prototype, "pipSelectionEvent", void 0);
    PipDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pip-display',
            template: __webpack_require__(/*! ./pip-display.component.html */ "./src/app/pip-display/pip-display.component.html"),
            styles: [__webpack_require__(/*! ./pip-display.component.css */ "./src/app/pip-display/pip-display.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PipDisplayComponent);
    return PipDisplayComponent;
}());



/***/ }),

/***/ "./src/app/pip-feedback/pip-feedback.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pip-feedback/pip-feedback.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    border: 1px solid;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.indicator {\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n    border: 1px solid;\r\n}\r\n\r\n.active {\r\n    background-color: aquamarine;\r\n}\r\n\r\n.completed {\r\n    background-color: navy;\r\n}\r\n\r\n.blank {\r\n    background-color: #F5F5F5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlwLWZlZWRiYWNrL3BpcC1mZWVkYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3BpcC1mZWVkYmFjay9waXAtZmVlZGJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5pbmRpY2F0b3Ige1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcblxyXG4uY29tcGxldGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XHJcbn1cclxuXHJcbi5ibGFuayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pip-feedback/pip-feedback.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pip-feedback/pip-feedback.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngFor=\"let round of rounds;\">\n  <div [ngClass]=\"['indicator', round.status]\"></div>\n  <app-pip-display [pips]=\"round.currentChoice\"></app-pip-display>\n  <app-guess-feedback-display [pips]=\"round.guessFeedback\"></app-guess-feedback-display>\n</div>"

/***/ }),

/***/ "./src/app/pip-feedback/pip-feedback.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pip-feedback/pip-feedback.component.ts ***!
  \********************************************************/
/*! exports provided: PipFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipFeedbackComponent", function() { return PipFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PipFeedbackComponent = /** @class */ (function () {
    function PipFeedbackComponent() {
    }
    PipFeedbackComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PipFeedbackComponent.prototype, "rounds", void 0);
    PipFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pip-feedback',
            template: __webpack_require__(/*! ./pip-feedback.component.html */ "./src/app/pip-feedback/pip-feedback.component.html"),
            styles: [__webpack_require__(/*! ./pip-feedback.component.css */ "./src/app/pip-feedback/pip-feedback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PipFeedbackComponent);
    return PipFeedbackComponent;
}());

var Round = /** @class */ (function () {
    function Round() {
    }
    return Round;
}());


/***/ }),

/***/ "./src/app/pip-selector/pip-selector.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pip-selector/pip-selector.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpcC1zZWxlY3Rvci9waXAtc2VsZWN0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pip-selector/pip-selector.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pip-selector/pip-selector.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/pip-selector/pip-selector.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pip-selector/pip-selector.component.ts ***!
  \********************************************************/
/*! exports provided: PipSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipSelectorComponent", function() { return PipSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PipSelectorComponent = /** @class */ (function () {
    function PipSelectorComponent() {
        this.eventFromChild = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PipSelectorComponent.prototype.ngOnInit = function () {
    };
    PipSelectorComponent.prototype.onClearButtonClick = function () {
    };
    PipSelectorComponent.prototype.onSubmitButtonClick = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PipSelectorComponent.prototype, "possibleColours", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], PipSelectorComponent.prototype, "selectPip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PipSelectorComponent.prototype, "eventFromChild", void 0);
    PipSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pip-selector',
            template: __webpack_require__(/*! ./pip-selector.component.html */ "./src/app/pip-selector/pip-selector.component.html"),
            styles: [__webpack_require__(/*! ./pip-selector.component.css */ "./src/app/pip-selector/pip-selector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PipSelectorComponent);
    return PipSelectorComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Alrick\Documents\Projects\mastermind-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map