"use strict";
(self["webpackChunkwishlist"] = self["webpackChunkwishlist"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wish-list/wish-list.component */ 829);
/* harmony import */ var _snow_button_snow_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snow-button/snow-button.component */ 4998);



class AppComponent {
    constructor() {
        this.isSnowing = true;
        this.title = 'wishlist';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 33, consts: [[1, "wrapper"], [1, "layer1", "ab"], [1, "ab"], [1, "content"], [3, "isSnowing", "isSnowingChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1)(2, "div")(3, "div", 2)(4, "div")(5, "div", 2)(6, "div")(7, "div", 2)(8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-wish-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "snow-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("isSnowingChange", function AppComponent_Template_snow_button_isSnowingChange_11_listener($event) { return ctx.isSnowing = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("snow", ctx.isSnowing)("layer1", ctx.isSnowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("snow", ctx.isSnowing)("layer1", ctx.isSnowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("snow", ctx.isSnowing)("layer2", ctx.isSnowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("snow", ctx.isSnowing)("layer2", ctx.isSnowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("snow", ctx.isSnowing)("layer3", ctx.isSnowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("snow", ctx.isSnowing)("layer3", ctx.isSnowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("snow", ctx.isSnowing)("layer4", ctx.isSnowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("snow", ctx.isSnowing)("layer4", ctx.isSnowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isSnowing", ctx.isSnowing);
    } }, dependencies: [_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_0__.WishListComponent, _snow_button_snow_button_component__WEBPACK_IMPORTED_MODULE_1__.SnowButtonComponent], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background: radial-gradient(farthest-corner at 30vw 20vh, #7397a1 1%, #3f2c41 100%);\n  z-index: -10;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.wrapper[_ngcontent-%COMP%]   .snow[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  opacity: 0.8;\n  position: absolute;\n  top: -100vh;\n  animation-name: fall;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n.wrapper[_ngcontent-%COMP%]   .layer1[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  filter: blur(1.5px);\n  box-shadow: 41.4vw 30vh 0 -0.21rem #fff,74.5vw 7.4vh 0 -0.08rem #fff,34.4vw 28.4vh 0 -0.18rem #fff,4.5vw 90.2vh 0 -0.19rem #fff,53.4vw 1.7vh 0 -0.48rem #fff,88.6vw 35.9vh 0 -0.23rem #fff,51.1vw 7.7vh 0 -0.1rem #fff,57.9vw 77.2vh 0 -0.49rem #fff,51.2vw 4.1vh 0 -0.04rem #fff,50.1vw 54vh 0 -0.29rem #fff,99.6vw 13.4vh 0 -0.48rem #fff,55.3vw 53.1vh 0 -0.23rem #fff,24.8vw 50.8vh 0 -0.38rem #fff,92vw 71.3vh 0 -0.03rem #fff,34.3vw 54.3vh 0 -0.12rem #fff,21.5vw 10.6vh 0 -0.09rem #fff,86.3vw 71.2vh 0 -0.14rem #fff,42.9vw 15vh 0 -0.02rem #fff,65.8vw 27.9vh 0 -0.36rem #fff,9.9vw 51.4vh 0 -0.36rem #fff,52.3vw 70vh 0 -0.26rem #fff,37.7vw 78.7vh 0 -0.06rem #fff,76.2vw 92.6vh 0 -0.22rem #fff,90.7vw 85.4vh 0 -0.3rem #fff,94.9vw 26.5vh 0 -0.09rem #fff,34.2vw 65.2vh 0 -0.12rem #fff,1.8vw 73vh 0 -0.1rem #fff,72.6vw 54vh 0 -0.49rem #fff,76.8vw 14.2vh 0 -0.06rem #fff,26.9vw 38.1vh 0 -0.36rem #fff,7.6vw 87.5vh 0 -0.46rem #fff,15vw 46.8vh 0 -0.19rem #fff,2.7vw 22.5vh 0 -0.48rem #fff,91.5vw 29.6vh 0 -0.44rem #fff,81vw 80.4vh 0 -0.08rem #fff,57.6vw 61.8vh 0 -0.47rem #fff,33.1vw 2vh 0 -0.16rem #fff,37.4vw 0.6vh 0 -0.29rem #fff,82.3vw 59.8vh 0 -0.38rem #fff,40.2vw 56.9vh 0 -0.08rem #fff,32vw 12vh 0 -0.25rem #fff,30.3vw 78.7vh 0 -0.45rem #fff,91.6vw 50.5vh 0 -0.05rem #fff,60.6vw 24.6vh 0 -0.41rem #fff,86.4vw 29.5vh 0 -0.28rem #fff,65.8vw 61.9vh 0 -0.39rem #fff,10.8vw 82.4vh 0 -0.05rem #fff,59.9vw 96.4vh 0 -0.22rem #fff,99.8vw 47.3vh 0 -0.25rem #fff,35.4vw 43.3vh 0 -0.27rem #fff,71.9vw 74vh 0 -0.41rem #fff,23.4vw 82.3vh 0 -0.36rem #fff,56.6vw 43.3vh 0 -0.46rem #fff,71.1vw 60.7vh 0 -0.15rem #fff,57.4vw 80.2vh 0 -0.13rem #fff,40.7vw 37.1vh 0 -0.47rem #fff,72.6vw 40.9vh 0 -0.48rem #fff,43.6vw 95.3vh 0 -0.15rem #fff,62.2vw 82.1vh 0 -0.01rem #fff,46.3vw 55.9vh 0 -0.37rem #fff,20.2vw 24.4vh 0 -0.44rem #fff,25vw 16.4vh 0 -0.18rem #fff,16.1vw 54.5vh 0 -0.45rem #fff,43.1vw 43.4vh 0 -0.35rem #fff,43.3vw 28.8vh 0 -0.24rem #fff,56.8vw 77.1vh 0 -0.49rem #fff,34.1vw 89.1vh 0 -0.07rem #fff,72.4vw 41vh 0 -0.21rem #fff,0.8vw 71.5vh 0 -0.28rem #fff,82.9vw 4.4vh 0 -0.01rem #fff,64.4vw 14vh 0 -0.47rem #fff,39.6vw 78.6vh 0 -0.02rem #fff,64vw 94.1vh 0 -0.06rem #fff,84.1vw 68.9vh 0 -0.24rem #fff,64vw 42.2vh 0 -0.18rem #fff,71.9vw 55.8vh 0 -0.11rem #fff,31.4vw 7.9vh 0 -0.07rem #fff,18.3vw 13.1vh 0 -0.26rem #fff,32.4vw 95.1vh 0 -0.07rem #fff,60vw 59.1vh 0 -0.36rem #fff,8vw 51.8vh 0 -0.02rem #fff,86.1vw 3.6vh 0 -0.23rem #fff,94.8vw 80.3vh 0 -0.11rem #fff,13.7vw 41vh 0 -0.06rem #fff,30.3vw 90.3vh 0 -0.42rem #fff,35.2vw 28.6vh 0 -0.36rem #fff,54.4vw 12.8vh 0 -0.4rem #fff,34.3vw 16.1vh 0 -0.08rem #fff,49.8vw 60.9vh 0 -0.36rem #fff,64.2vw 53.6vh 0 -0.35rem #fff,55.6vw 3.1vh 0 -0.09rem #fff,17.5vw 41.3vh 0 -0.42rem #fff,55.4vw 85.9vh 0 -0.14rem #fff,12.2vw 19.9vh 0 -0.39rem #fff,66.6vw 19.4vh 0 -0.41rem #fff,55vw 62.5vh 0 -0.47rem #fff,99.3vw 14.6vh 0 -0.16rem #fff,44.9vw 60vh 0 -0.42rem #fff,32.3vw 47.2vh 0 -0.12rem #fff,22.9vw 7.5vh 0 -0.46rem #fff,73.4vw 58.6vh 0 -0.38rem #fff,84.7vw 74vh 0 -0.47rem #fff,73.2vw 71.1vh 0 -0.49rem #fff,93.7vw 76.3vh 0 -0.42rem #fff,19.5vw 27.3vh 0 -0.32rem #fff,81.1vw 57.5vh 0 -0.31rem #fff,53.4vw 56.5vh 0 -0.3rem #fff,31.3vw 7.6vh 0 -0.49rem #fff,95.5vw 75.7vh 0 -0.29rem #fff,24.3vw 32.2vh 0 -0.09rem #fff,88.5vw 61vh 0 -0.46rem #fff,17.5vw 46.5vh 0 -0.48rem #fff,20.9vw 11.3vh 0 -0.25rem #fff,46vw 29vh 0 -0.05rem #fff,73.8vw 86.6vh 0 -0.44rem #fff,98vw 69.5vh 0 -0.25rem #fff,9.6vw 56.1vh 0 -0.03rem #fff,24.6vw 36.8vh 0 -0.03rem #fff,89.8vw 11vh 0 -0.18rem #fff,74.9vw 62.8vh 0 -0.04rem #fff,82.4vw 31.1vh 0 -0.05rem #fff,63.2vw 72.9vh 0 -0.2rem #fff,89.8vw 49.8vh 0 -0.1rem #fff,28.5vw 58.1vh 0 -0.28rem #fff,77vw 92.2vh 0 -0.21rem #fff,31.9vw 24.8vh 0 -0.1rem #fff,89.8vw 70.7vh 0 -0.46rem #fff,82.1vw 98.3vh 0 -0.13rem #fff,73.4vw 50.1vh 0 -0.35rem #fff,16.7vw 12.5vh 0 -0.07rem #fff,82.4vw 78.8vh 0 -0.33rem #fff,67.3vw 28.5vh 0 -0.01rem #fff,86.4vw 55.4vh 0 -0.13rem #fff,70vw 52.1vh 0 -0.33rem #fff,50.7vw 29.2vh 0 -0.27rem #fff,31.8vw 61vh 0 -0.23rem #fff,23.8vw 13.4vh 0 -0.18rem #fff,67.5vw 21.7vh 0 -0.13rem #fff,80.2vw 32vh 0 -0.46rem #fff,61.4vw 65.3vh 0 -0.11rem #fff,77.5vw 79.2vh 0 -0.34rem #fff,8.6vw 94vh 0 -0.44rem #fff,7.9vw 99.9vh 0 -0.38rem #fff,91vw 98vh 0 -0.21rem #fff,7.5vw 89.8vh 0 -0.07rem #fff,54.8vw 65.7vh 0 -0.34rem #fff,23vw 51.1vh 0 -0.13rem #fff,25.5vw 22.5vh 0 -0.32rem #fff,94.7vw 52vh 0 -0.22rem #fff,40.2vw 69.6vh 0 -0.33rem #fff,69.2vw 59.9vh 0 -0.09rem #fff,57.3vw 58.1vh 0 -0.23rem #fff,65.6vw 77.1vh 0 -0.24rem #fff,12.6vw 93.8vh 0 -0.22rem #fff,8.8vw 94.2vh 0 -0.36rem #fff,51.6vw 80.6vh 0 -0.45rem #fff,9.6vw 69.4vh 0 -0.02rem #fff,11.3vw 52.1vh 0 -0.07rem #fff,72.9vw 14.5vh 0 -0.3rem #fff,32.6vw 25vh 0 -0.18rem #fff,8.7vw 12.9vh 0 -0.14rem #fff,28.5vw 63.4vh 0 -0.38rem #fff,75.9vw 31.9vh 0 -0.18rem #fff,36.7vw 17.6vh 0 -0.41rem #fff,12.1vw 73.7vh 0 -0.4rem #fff,67.1vw 57vh 0 -0.5rem #fff,49.6vw 34.6vh 0 -0.31rem #fff,1.5vw 73.1vh 0 -0.5rem #fff,27.1vw 42.2vh 0 -0.41rem #fff,1.2vw 41vh 0 -0.21rem #fff,26.6vw 47.8vh 0 -0.41rem #fff,7vw 16.9vh 0 -0.06rem #fff,19.5vw 4.2vh 0 -0.13rem #fff,54vw 44.3vh 0 -0.12rem #fff,72.7vw 48.4vh 0 -0.17rem #fff,71.9vw 25.2vh 0 -0.25rem #fff,53.3vw 57.8vh 0 -0.36rem #fff,36.3vw 60vh 0 -0.06rem #fff,35.4vw 14.4vh 0 -0.47rem #fff,67.9vw 66.8vh 0 -0.19rem #fff,52.2vw 24.8vh 0 -0.09rem #fff,3.9vw 93.4vh 0 -0.22rem #fff,55.3vw 84.7vh 0 -0.08rem #fff,63.5vw 70.4vh 0 -0.11rem #fff,83vw 63.4vh 0 -0.01rem #fff,67.3vw 1.9vh 0 -0.22rem #fff,25.4vw 22.1vh 0 -0.27rem #fff,31.8vw 4.5vh 0 -0.14rem #fff,32.1vw 25.4vh 0 -0.01rem #fff,39.1vw 35.6vh 0 -0.22rem #fff,14.7vw 21.1vh 0 -0.37rem #fff,86vw 93.8vh 0 -0.25rem #fff,37.8vw 52vh 0 -0.32rem #fff,25.2vw 37.2vh 0 -0.18rem #fff,97.4vw 98.3vh 0 -0.27rem #fff,63.4vw 86.1vh 0 -0.05rem #fff,26.9vw 28vh 0 -0.49rem #fff,88.8vw 78.3vh 0 -0.29rem #fff,69.6vw 54.7vh 0 -0.31rem #fff,14vw 39.1vh 0 -0.01rem #fff,37.2vw 8.4vh 0 -0.14rem #fff,88.1vw 8.5vh 0 -0.03rem #fff,72.1vw 46.6vh 0 -0.01rem #fff,1.3vw 44.4vh 0 -0.47rem #fff,52.1vw 46vh 0 -0.13rem #fff,46.5vw 1.5vh 0 -0.3rem #fff,32.6vw 36.2vh 0 -0.43rem #fff,26.4vw 23.1vh 0 -0.46rem #fff,41.2vw 45.1vh 0 -0.42rem #fff,10.4vw 63.2vh 0 -0.44rem #fff,82.4vw 93.5vh 0 -0.03rem #fff,19.9vw 80.1vh 0 -0.47rem #fff,64vw 77.1vh 0 -0.38rem #fff,6.9vw 39.5vh 0 -0.42rem #fff,94.1vw 100vh 0 -0.23rem #fff,99.1vw 53.2vh 0 -0.15rem #fff,9.8vw 19vh 0 -0.28rem #fff,10.4vw 85.1vh 0 -0.35rem #fff,40.7vw 21.1vh 0 -0.3rem #fff,12.3vw 21.8vh 0 -0.18rem #fff,87.1vw 3.6vh 0 -0.05rem #fff,50.8vw 18.1vh 0 -0.27rem #fff,18.8vw 4.9vh 0 -0.4rem #fff,2.5vw 96.6vh 0 -0.36rem #fff,96.9vw 72.8vh 0 -0.04rem #fff,92.6vw 9.2vh 0 -0.31rem #fff,83.8vw 55.8vh 0 -0.01rem #fff,85vw 99.6vh 0 -0.46rem #fff,58.7vw 73.5vh 0 -0.03rem #fff,9.6vw 73vh 0 -0.48rem #fff,5.2vw 79.7vh 0 -0.48rem #fff,63.1vw 74.4vh 0 -0.27rem #fff,54vw 84.7vh 0 -0.24rem #fff,18.6vw 44.8vh 0 -0.4rem #fff,6.6vw 16.8vh 0 -0.22rem #fff,62.8vw 72.8vh 0 -0.14rem #fff,98.2vw 98.7vh 0 -0.32rem #fff,81vw 4.3vh 0 -0.33rem #fff,83.9vw 64.1vh 0 -0.1rem #fff,68.8vw 12.3vh 0 -0.12rem #fff,29vw 92vh 0 -0.13rem #fff,50.5vw 2.5vh 0 -0.13rem #fff,51.9vw 37.7vh 0 -0.37rem #fff,49.7vw 38.4vh 0 -0.17rem #fff,92.8vw 0.7vh 0 -0.28rem #fff,19.4vw 87.3vh 0 -0.14rem #fff,21.9vw 10.2vh 0 -0.11rem #fff,68.3vw 79.4vh 0 -0.28rem #fff,11.7vw 65.1vh 0 -0.48rem #fff,28.1vw 55.3vh 0 -0.44rem #fff,50.6vw 20.3vh 0 -0.47rem #fff,10.7vw 74.3vh 0 -0.21rem #fff,82.3vw 58.3vh 0 -0.11rem #fff,75.1vw 44.3vh 0 -0.47rem #fff,96.9vw 7.4vh 0 -0.11rem #fff,54vw 86.6vh 0 -0.39rem #fff,60.2vw 60.2vh 0 -0.02rem #fff,99.9vw 62.2vh 0 -0.44rem #fff,87.6vw 1.8vh 0 -0.2rem #fff,68.8vw 3.3vh 0 -0.12rem #fff,39.6vw 57.7vh 0 -0.16rem #fff,4.3vw 17.5vh 0 -0.09rem #fff,3vw 22.3vh 0 -0.14rem #fff,6.6vw 21.5vh 0 -0.31rem #fff,28.2vw 19vh 0 -0.5rem #fff,82.6vw 42.6vh 0 -0.21rem #fff,15.6vw 54.3vh 0 -0.38rem #fff,83.1vw 97.4vh 0 -0.03rem #fff,26.9vw 6.6vh 0 -0.01rem #fff,74.1vw 79.8vh 0 -0.38rem #fff,60.5vw 22.1vh 0 -0.43rem #fff,13.9vw 14.4vh 0 -0.01rem #fff,68.5vw 3.6vh 0 -0.3rem #fff,3.6vw 21.7vh 0 -0.16rem #fff,2.8vw 70.8vh 0 -0.01rem #fff,50.4vw 7.9vh 0 -0.06rem #fff,19.6vw 44.5vh 0 -0.22rem #fff,74.9vw 94.3vh 0 -0.33rem #fff,71.9vw 76.1vh 0 -0.25rem #fff,61.7vw 38.2vh 0 -0.06rem #fff,16.1vw 45.5vh 0 -0.06rem #fff,55.5vw 72.7vh 0 -0.06rem #fff,34.6vw 36.2vh 0 -0.11rem #fff,96.3vw 48.2vh 0 -0.41rem #fff,21.1vw 51.4vh 0 -0.21rem #fff,70.9vw 79.4vh 0 -0.43rem #fff,1vw 92.7vh 0 -0.32rem #fff,69.5vw 93.1vh 0 -0.09rem #fff,71.9vw 34.7vh 0 -0.13rem #fff,46.7vw 43.7vh 0 -0.26rem #fff,19.8vw 3.7vh 0 -0.05rem #fff,35vw 76.5vh 0 -0.09rem #fff,25.8vw 84.4vh 0 -0.04rem #fff,64vw 35.9vh 0 -0.28rem #fff,2.5vw 94.6vh 0 -0.02rem #fff,47.5vw 64.9vh 0 -0.18rem #fff,91.1vw 81.7vh 0 -0.27rem #fff,8.7vw 2.2vh 0 -0.23rem #fff,62vw 19.2vh 0 -0.38rem #fff;\n  animation-duration: 60s;\n}\n.wrapper[_ngcontent-%COMP%]   .layer1[_ngcontent-%COMP%]   .ab[_ngcontent-%COMP%] {\n  animation-delay: -30s;\n}\n.wrapper[_ngcontent-%COMP%]   .layer2[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  height: 1.2rem;\n  filter: blur(3px);\n  box-shadow: 26.7vw 8.5vh 0 -0.13rem#fff,17.9vw 71.3vh 0 -0.4rem#fff,50.6vw 8.2vh 0 -0.19rem#fff,42.5vw 6.5vh 0 -0.46rem#fff,7.2vw 3.4vh 0 -0.22rem#fff,81.6vw 59.6vh 0 -0.12rem#fff,27.3vw 60vh 0 -0.34rem#fff,49.7vw 59.3vh 0 -0.25rem#fff,77.7vw 96.1vh 0 -0.29rem#fff,3.1vw 85.8vh 0 -0.24rem#fff,78vw 16.7vh 0 -0.36rem#fff,61.8vw 56.5vh 0 -0.29rem#fff,51.2vw 92.8vh 0 -0.15rem#fff,46.4vw 99.3vh 0 -0.14rem#fff,29.4vw 80.1vh 0 -0.44rem#fff,1.2vw 31.6vh 0 -0.17rem#fff,70.9vw 3.1vh 0 -0.07rem#fff,20.7vw 38.4vh 0 -0.25rem#fff,9.3vw 21.6vh 0 -0.36rem#fff,45vw 52.4vh 0 -0.28rem#fff,90.9vw 13.1vh 0 -0.46rem#fff,44.6vw 34.3vh 0 -0.46rem#fff,11.9vw 78.3vh 0 -0.49rem#fff,10.5vw 77.4vh 0 -0.42rem#fff,51.1vw 45vh 0 -0.15rem#fff,68.7vw 72.3vh 0 -0.36rem#fff,77.3vw 75.9vh 0 -0.49rem#fff,38.9vw 57.9vh 0 -0.06rem#fff,79.5vw 32.9vh 0 -0.26rem#fff,15.1vw 98.1vh 0 -0.47rem#fff,29.2vw 65.3vh 0 -0.23rem#fff,51vw 85.4vh 0 -0.27rem#fff,87.6vw 26.3vh 0 -0.03rem#fff,35.4vw 42.1vh 0 -0.5rem#fff,83.8vw 19.9vh 0 -0.14rem#fff,81.6vw 7.4vh 0 -0.27rem#fff,76.7vw 66.1vh 0 -0.46rem#fff,58.2vw 18.2vh 0 -0.15rem#fff,65vw 7vh 0 -0.18rem#fff,79vw 11.8vh 0 -0.46rem#fff,87.8vw 11.1vh 0 -0.08rem#fff,84.9vw 70.5vh 0 -0.33rem#fff,50.2vw 46.7vh 0 -0.47rem#fff,19.8vw 87.6vh 0 -0.27rem#fff,5.9vw 95.4vh 0 -0.49rem#fff,9.7vw 38vh 0 -0.11rem#fff,39.6vw 92.1vh 0 -0.39rem#fff,49.6vw 35.6vh 0 -0.44rem#fff,67.2vw 86.6vh 0 -0.35rem#fff,10.8vw 15.9vh 0 -0.15rem#fff,29.6vw 88.9vh 0 -0.45rem#fff,89.3vw 73.1vh 0 -0.03rem#fff,80vw 19.7vh 0 -0.38rem#fff,41.3vw 10.1vh 0 -0.08rem#fff,18.8vw 6.2vh 0 -0.26rem#fff,67.7vw 97.6vh 0 -0.3rem#fff,59.8vw 64.7vh 0 -0.09rem#fff,74.7vw 5.6vh 0 -0.1rem#fff,7.4vw 18.6vh 0 -0.42rem#fff,16.8vw 15.7vh 0 -0.48rem#fff,22.5vw 20.4vh 0 -0.39rem#fff,14.8vw 77.6vh 0 -0.06rem#fff,1.3vw 59vh 0 -0.2rem#fff,14vw 90.9vh 0 -0.48rem#fff,61.3vw 5.8vh 0 -0.02rem#fff,45.7vw 40.1vh 0 -0.43rem#fff,87.5vw 8.8vh 0 -0.38rem#fff,88.2vw 13.9vh 0 -0.44rem#fff,34.5vw 95.5vh 0 -0.24rem#fff,21.4vw 49.8vh 0 -0.19rem#fff,96.2vw 37.4vh 0 -0.23rem#fff,96.8vw 8.4vh 0 -0.27rem#fff,10vw 36.2vh 0 -0.06rem#fff,44.7vw 12.6vh 0 -0.28rem#fff,73.4vw 51.7vh 0 -0.1rem#fff,63.5vw 88.2vh 0 -0.3rem#fff,48.8vw 36.7vh 0 -0.43rem#fff,63.2vw 32.5vh 0 -0.21rem#fff,48.5vw 28.6vh 0 -0.46rem#fff,87.4vw 42.8vh 0 -0.28rem#fff,92.1vw 56.2vh 0 -0.14rem#fff,33vw 92.9vh 0 -0.09rem#fff,87.1vw 56vh 0 -0.03rem#fff,54.2vw 8.4vh 0 -0.33rem#fff,16.8vw 92.2vh 0 -0.08rem#fff,68.5vw 22vh 0 -0.05rem#fff,21.5vw 5vh 0 -0.13rem#fff,30vw 99vh 0 -0.27rem#fff,12.2vw 51.1vh 0 -0.46rem#fff,72.1vw 74.8vh 0 -0.33rem#fff,60.4vw 58.9vh 0 -0.23rem#fff,87.5vw 74.3vh 0 -0.1rem#fff,59.5vw 75.3vh 0 -0.29rem#fff,40.1vw 60.9vh 0 -0.45rem#fff,7vw 9.1vh 0 -0.34rem#fff,46.7vw 7.4vh 0 -0.21rem#fff,51.3vw 51vh 0 -0.17rem#fff,86.4vw 48.5vh 0 -0.19rem#fff,92.1vw 6.3vh 0 -0.17rem#fff,88.8vw 29.2vh 0 -0.49rem#fff,26.1vw 15.8vh 0 -0.49rem#fff,81.6vw 61.8vh 0 -0.26rem#fff,42.3vw 55.4vh 0 -0.16rem#fff,67.4vw 65.9vh 0 -0.22rem#fff,10.8vw 68.9vh 0 -0.33rem#fff,24.2vw 77.8vh 0 -0.07rem#fff,15.8vw 71.7vh 0 -0.18rem#fff,84vw 32.2vh 0 -0.39rem#fff,33.6vw 56.7vh 0 -0.33rem#fff,65.5vw 0.1vh 0 -0.36rem#fff,84.4vw 95.4vh 0 -0.02rem#fff,25.3vw 71.6vh 0 -0.04rem#fff,4.2vw 37.9vh 0 -0.34rem#fff,8vw 22vh 0 -0.22rem#fff,61.7vw 66.2vh 0 -0.26rem#fff,17.8vw 42.2vh 0 -0.26rem#fff,6.1vw 43vh 0 -0.22rem#fff,30.4vw 97.3vh 0 -0.16rem#fff,35vw 14.9vh 0 -0.04rem#fff,97.7vw 11.2vh 0 -0.03rem#fff,15.7vw 49.3vh 0 -0.03rem#fff,57.4vw 12.8vh 0 -0.22rem#fff,24.9vw 55.1vh 0 -0.43rem#fff,75.6vw 7.3vh 0 -0.41rem#fff,73.4vw 86vh 0 -0.17rem#fff,72.1vw 75.7vh 0 -0.35rem#fff,86.9vw 19.5vh 0 -0.17rem#fff,31vw 58.5vh 0 -0.36rem#fff,93.3vw 13.3vh 0 -0.09rem#fff,47.9vw 3vh 0 -0.42rem#fff,70.9vw 33.7vh 0 -0.4rem#fff,59.2vw 54.1vh 0 -0.19rem#fff,65.8vw 73.3vh 0 -0.22rem#fff,53.9vw 91.9vh 0 -0.37rem#fff,96vw 74.9vh 0 -0.16rem#fff,32vw 79.8vh 0 -0.34rem#fff,95.5vw 54vh 0 -0.01rem#fff,78.7vw 58vh 0 -0.26rem#fff,97.4vw 15.4vh 0 -0.26rem#fff,52.2vw 55.7vh 0 -0.01rem#fff,41.1vw 28.1vh 0 -0.31rem#fff,28.5vw 31.7vh 0 -0.06rem#fff,63.3vw 59.5vh 0 -0.04rem#fff,91vw 24.5vh 0 -0.32rem#fff,91.8vw 17.8vh 0 -0.43rem#fff,74.6vw 66.6vh 0 -0.45rem#fff,20.7vw 84.5vh 0 -0.23rem#fff,59.7vw 37.6vh 0 -0.28rem#fff,17.5vw 65.5vh 0 -0.05rem#fff,58.1vw 33.5vh 0 -0.22rem#fff,82.3vw 59.3vh 0 -0.43rem#fff,90.4vw 57.7vh 0 -0.48rem#fff,24vw 25.2vh 0 -0.11rem#fff,29.1vw 36.9vh 0 -0.36rem#fff,75.9vw 84.7vh 0 -0.45rem#fff,65.8vw 34.7vh 0 -0.17rem#fff,72.2vw 7.1vh 0 -0.32rem#fff,29.5vw 44.9vh 0 -0.14rem#fff,74.1vw 86.2vh 0 -0.19rem#fff,13.2vw 39.6vh 0 -0.17rem#fff,71.9vw 45.9vh 0 -0.04rem#fff,89.7vw 50.2vh 0 -0.44rem#fff,2.3vw 12.7vh 0 -0.31rem#fff,89.9vw 81.2vh 0 -0.45rem#fff,15.1vw 99.9vh 0 -0.24rem#fff,82.3vw 72.6vh 0 -0.29rem#fff,23.8vw 9.1vh 0 -0.19rem#fff,98vw 7.2vh 0 -0.06rem#fff,97vw 83.6vh 0 -0.48rem#fff,19.9vw 70vh 0 -0.07rem#fff,91.8vw 90.7vh 0 -0.14rem#fff,73.9vw 21.2vh 0 -0.06rem#fff,99.9vw 26.2vh 0 -0.28rem#fff,7.1vw 81.7vh 0 -0.39rem#fff,83.8vw 72.7vh 0 -0.22rem#fff,71.9vw 80.3vh 0 -0.19rem#fff,52.2vw 67.6vh 0 -0.23rem#fff,42.5vw 31.5vh 0 -0.1rem#fff,24.8vw 56.4vh 0 -0.23rem#fff,1.3vw 57.9vh 0 -0.14rem#fff,83.8vw 11.8vh 0 -0.37rem#fff,24.7vw 55.5vh 0 -0.23rem#fff,98.9vw 54.1vh 0 -0.12rem#fff,28vw 35.9vh 0 -0.33rem#fff,45.2vw 64.9vh 0 -0.21rem#fff,33.6vw 47.3vh 0 -0.35rem#fff,31.1vw 19.7vh 0 -0.36rem#fff,0.9vw 1.1vh 0 -0.08rem#fff,80.4vw 97.3vh 0 -0.4rem#fff,37.7vw 95.9vh 0 -0.24rem#fff,81.3vw 83.1vh 0 -0.08rem#fff,57vw 32.5vh 0 -0.22rem#fff,40.2vw 64.6vh 0 -0.3rem#fff,50.2vw 30.7vh 0 -0.3rem#fff,97.8vw 93.6vh 0 -0.24rem#fff,86.6vw 2.1vh 0 -0.02rem#fff,20.8vw 34.3vh 0 -0.07rem#fff,27vw 70.7vh 0 -0.03rem#fff,68.5vw 99vh 0 -0.41rem#fff,4.6vw 18.3vh 0 -0.13rem#fff,57.9vw 100vh 0 -0.35rem#fff,74.4vw 98.9vh 0 -0.02rem#fff,42.3vw 40.8vh 0 -0.18rem#fff,94.8vw 88.1vh 0 -0.45rem#fff,49.8vw 62.9vh 0 -0.36rem#fff,88.9vw 16.6vh 0 -0.23rem#fff,50.9vw 11.9vh 0 -0.37rem#fff,61.3vw 91.9vh 0 -0.01rem#fff,30.6vw 33vh 0 -0.35rem#fff,90.6vw 59.5vh 0 -0.47rem#fff,100vw 53.2vh 0 -0.28rem#fff,38.1vw 21.2vh 0 -0.34rem#fff,70.6vw 15.5vh 0 -0.43rem#fff,14vw 76.3vh 0 -0.34rem#fff,83.9vw 8.3vh 0 -0.1rem#fff,62.1vw 38.4vh 0 -0.07rem#fff,9.7vw 33.7vh 0 -0.28rem#fff,85.1vw 68vh 0 -0.02rem#fff,26.3vw 88.3vh 0 -0.34rem#fff,97.3vw 12.7vh 0 -0.35rem#fff,96.7vw 67.9vh 0 -0.41rem#fff,54.6vw 37.6vh 0 -0.5rem#fff,26.1vw 6.1vh 0 -0.15rem#fff,54.9vw 92.7vh 0 -0.35rem#fff,46.6vw 35.2vh 0 -0.38rem#fff,45.1vw 69.9vh 0 -0.22rem#fff,50.5vw 69.4vh 0 -0.27rem#fff,97.5vw 92vh 0 -0.24rem#fff,55.8vw 45.3vh 0 -0.36rem#fff,24vw 52.5vh 0 -0.04rem#fff,3.5vw 55vh 0 -0.23rem#fff,37.9vw 95.8vh 0 -0.14rem#fff,83.4vw 66.6vh 0 -0.02rem#fff,75.2vw 88.6vh 0 -0.19rem#fff,50vw 82.8vh 0 -0.15rem#fff,19.8vw 90.1vh 0 -0.29rem#fff,88.2vw 81.9vh 0 -0.32rem#fff,71.2vw 96.4vh 0 -0.28rem#fff,33.8vw 5.9vh 0 -0.2rem#fff,96.2vw 84.5vh 0 -0.07rem#fff,38.3vw 7.5vh 0 -0.23rem#fff,44vw 43.4vh 0 -0.15rem#fff,2.3vw 34.7vh 0 -0.34rem#fff,15.7vw 81.1vh 0 -0.1rem#fff,47.4vw 75.9vh 0 -0.31rem#fff,44.8vw 31.1vh 0 -0.47rem#fff,45.4vw 49.1vh 0 -0.4rem#fff,69.4vw 88.9vh 0 -0.18rem#fff,9vw 4vh 0 -0.22rem#fff,18.6vw 90vh 0 -0.15rem#fff,60.8vw 1.8vh 0 -0.03rem#fff,15.6vw 90vh 0 -0.25rem#fff,3.7vw 70vh 0 -0.08rem#fff,17.2vw 30.4vh 0 -0.47rem#fff,55.4vw 85.7vh 0 -0.12rem#fff,86.4vw 32.1vh 0 -0.17rem#fff,6.7vw 32.7vh 0 -0.02rem#fff,89.6vw 98.6vh 0 -0.35rem#fff,26vw 58.2vh 0 -0.48rem#fff,36.6vw 60.5vh 0 -0.05rem#fff,93.9vw 19.1vh 0 -0.22rem#fff,82.3vw 11.7vh 0 -0.38rem#fff,79.2vw 14.5vh 0 -0.41rem#fff,53.1vw 43vh 0 -0.47rem#fff,76.8vw 42.2vh 0 -0.02rem#fff,41.1vw 45.9vh 0 -0.27rem#fff,60.8vw 92.9vh 0 -0.43rem#fff,54.7vw 42.2vh 0 -0.4rem#fff,82.5vw 18.7vh 0 -0.13rem#fff,44.4vw 18.9vh 0 -0.34rem#fff,74.9vw 63.6vh 0 -0.35rem#fff,45.1vw 8.7vh 0 -0.21rem#fff,39.1vw 4.7vh 0 -0.02rem#fff,80.5vw 76vh 0 -0.31rem#fff,20.9vw 79vh 0 -0.43rem#fff,86.2vw 87.2vh 0 -0.16rem#fff,27.9vw 56.6vh 0 -0.09rem#fff,23.3vw 14.4vh 0 -0.13rem#fff,79.9vw 69.3vh 0 -0.06rem#fff,59.2vw 64.7vh 0 -0.39rem#fff,40vw 14.5vh 0 -0.37rem#fff,23.7vw 43.5vh 0 -0.01rem#fff,60.3vw 25.4vh 0 -0.05rem#fff,36.3vw 47.1vh 0 -0.28rem#fff,36.7vw 4.2vh 0 -0.25rem#fff,16.1vw 7.3vh 0 -0.3rem#fff,62vw 19vh 0 -0.4rem#fff,87.4vw 46.8vh 0 -0.28rem#fff,73.6vw 11.7vh 0 -0.01rem#fff,31.2vw 88.5vh 0 -0.33rem#fff,72.5vw 60.7vh 0 -0.38rem#fff,83.3vw 78.9vh 0 -0.26rem#fff,9.7vw 79vh 0 -0.32rem#fff,7.3vw 71.3vh 0 -0.34rem#fff,6.8vw 99.5vh 0 -0.22rem#fff,92.5vw 9.5vh 0 -0.37rem#fff,10.8vw 61.8vh 0 -0.31rem#fff,2vw 90.5vh 0 -0.23rem#fff,87.6vw 83.8vh 0 -0.16rem#fff;\n  animation-duration: 80s;\n}\n.wrapper[_ngcontent-%COMP%]   .layer2[_ngcontent-%COMP%]   .ab[_ngcontent-%COMP%] {\n  animation-delay: -40s;\n}\n.wrapper[_ngcontent-%COMP%]   .layer3[_ngcontent-%COMP%] {\n  width: 0.8rem;\n  height: 0.8rem;\n  filter: blur(6px);\n  box-shadow: 0.6vw 48.4vh 0 -0.32rem#fff,72.4vw 92.3vh 0 -0.14rem#fff,89.5vw 52vh 0 -0.28rem#fff,29.2vw 41.3vh 0 -0.15rem#fff,27.3vw 11.9vh 0 -0.26rem#fff,96.8vw 43.8vh 0 -0.16rem#fff,68.1vw 7vh 0 -0.1rem#fff,77.5vw 2.1vh 0 -0.12rem#fff,76.8vw 99.1vh 0 -0.26rem#fff,8.2vw 87.4vh 0 -0.37rem#fff,56.8vw 36.1vh 0 -0.23rem#fff,66.9vw 34.5vh 0 -0.36rem#fff,78.6vw 8.5vh 0 -0.32rem#fff,88.7vw 9.5vh 0 -0.01rem#fff,46.7vw 8.5vh 0 -0.28rem#fff,98.4vw 84.9vh 0 -0.15rem#fff,34.3vw 46.3vh 0 -0.32rem#fff,97.2vw 92.9vh 0 -0.1rem#fff,65.5vw 69.5vh 0 -0.03rem#fff,39.5vw 8.3vh 0 -0.06rem#fff,45.3vw 34.6vh 0 -0.34rem#fff,94.5vw 17.7vh 0 -0.13rem#fff,21.2vw 64.5vh 0 -0.27rem#fff,1.6vw 55.9vh 0 -0.44rem#fff,45.9vw 60.6vh 0 -0.47rem#fff,79.9vw 77.5vh 0 -0.21rem#fff,23.1vw 56vh 0 -0.1rem#fff,66.5vw 12.1vh 0 -0.31rem#fff,15vw 84.8vh 0 -0.32rem#fff,95.3vw 71.2vh 0 -0.17rem#fff,5.9vw 56.1vh 0 -0.27rem#fff,85.9vw 5.2vh 0 -0.27rem#fff,36.2vw 96.5vh 0 -0.19rem#fff,88.4vw 29.5vh 0 -0.42rem#fff,17.5vw 21.7vh 0 -0.29rem#fff,71.8vw 40.9vh 0 -0.4rem#fff,66.4vw 36.9vh 0 -0.39rem#fff,53.1vw 44.7vh 0 -0.22rem#fff,90.2vw 85.8vh 0 -0.08rem#fff,94.5vw 67.6vh 0 -0.39rem#fff,0.9vw 13.5vh 0 -0.43rem#fff,51.3vw 15.9vh 0 -0.17rem#fff,76.9vw 13.9vh 0 -0.1rem#fff,79.8vw 63.2vh 0 -0.16rem#fff,10.1vw 61.1vh 0 -0.45rem#fff,43.7vw 58.8vh 0 -0.42rem#fff,68.4vw 92.8vh 0 -0.49rem#fff,97.4vw 44.9vh 0 -0.15rem#fff,72.3vw 78.9vh 0 -0.02rem#fff,73.8vw 63vh 0 -0.49rem#fff,38.8vw 99.3vh 0 -0.48rem#fff,78.4vw 13.7vh 0 -0.37rem#fff,38.3vw 58.2vh 0 -0.19rem#fff,15.6vw 55.7vh 0 -0.34rem#fff,41.1vw 96.5vh 0 -0.09rem#fff,4.7vw 41.5vh 0 -0.15rem#fff,48.6vw 31.7vh 0 -0.34rem#fff,43.2vw 7vh 0 -0.24rem#fff,23.8vw 39.1vh 0 -0.15rem#fff,18.4vw 79.2vh 0 -0.28rem#fff,12.4vw 83.7vh 0 -0.42rem#fff,40.1vw 97.2vh 0 -0.2rem#fff,20.9vw 19.4vh 0 -0.36rem#fff,35.5vw 95vh 0 -0.15rem#fff,69.4vw 6.2vh 0 -0.04rem#fff,47.1vw 66.6vh 0 -0.13rem#fff,85.7vw 19vh 0 -0.34rem#fff,13.6vw 62vh 0 -0.32rem#fff,81.3vw 22.3vh 0 -0.3rem#fff,61.2vw 43.4vh 0 -0.05rem#fff,68.1vw 84.5vh 0 -0.11rem#fff,46.6vw 19.3vh 0 -0.08rem#fff,42.2vw 86.1vh 0 -0.48rem#fff,56vw 60.7vh 0 -0.41rem#fff,24.7vw 61.9vh 0 -0.29rem#fff,54.8vw 74.9vh 0 -0.2rem#fff,2vw 99.9vh 0 -0.23rem#fff,13.3vw 87.3vh 0 -0.23rem#fff,85.2vw 11.9vh 0 -0.35rem#fff,21.9vw 19.3vh 0 -0.13rem#fff,2.5vw 33.4vh 0 -0.22rem#fff,7.4vw 62.9vh 0 -0.4rem#fff,54.2vw 68.5vh 0 -0.01rem#fff,94.5vw 40.5vh 0 -0.44rem#fff,67.6vw 65vh 0 -0.48rem#fff,74.3vw 85.1vh 0 -0.43rem#fff,61.1vw 85.7vh 0 -0.1rem#fff,12.2vw 85vh 0 -0.24rem#fff,92.3vw 51.6vh 0 -0.47rem#fff,79.1vw 62.7vh 0 -0.19rem#fff,49.8vw 56.7vh 0 -0.37rem#fff,92.6vw 78.9vh 0 -0.5rem#fff,61.7vw 71.5vh 0 -0.09rem#fff,64.1vw 90.4vh 0 -0.33rem#fff,86.2vw 63vh 0 -0.05rem#fff,53vw 63.5vh 0 -0.48rem#fff,23.7vw 74.2vh 0 -0.24rem#fff,1.3vw 81.4vh 0 -0.26rem#fff,68vw 36.4vh 0 -0.22rem#fff,23.2vw 66.9vh 0 -0.17rem#fff,13.9vw 28.9vh 0 -0.08rem#fff,80.6vw 72.3vh 0 -0.36rem#fff,36.5vw 15.4vh 0 -0.49rem#fff,42.8vw 20vh 0 -0.01rem#fff,75.7vw 86.6vh 0 -0.26rem#fff,29vw 37.1vh 0 -0.4rem#fff,91.1vw 35.2vh 0 -0.13rem#fff,63.7vw 91.2vh 0 -0.08rem#fff,10.1vw 52.6vh 0 -0.44rem#fff,51.5vw 12.5vh 0 -0.08rem#fff,19.7vw 94.6vh 0 -0.28rem#fff,2.3vw 13.8vh 0 -0.48rem#fff,28.7vw 95.8vh 0 -0.2rem#fff,94.6vw 60.4vh 0 -0.37rem#fff,39.7vw 3vh 0 -0.5rem#fff,81.7vw 50vh 0 -0.17rem#fff,25.3vw 20.5vh 0 -0.21rem#fff,89.8vw 2.5vh 0 -0.07rem#fff,92.2vw 25.1vh 0 -0.02rem#fff,5.3vw 70.6vh 0 -0.46rem#fff,44.4vw 75.8vh 0 -0.45rem#fff,20vw 12.9vh 0 -0.04rem#fff,52.3vw 84.8vh 0 -0.45rem#fff,26.9vw 59.1vh 0 -0.1rem#fff,67.9vw 15.5vh 0 -0.48rem#fff,27.4vw 95.1vh 0 -0.23rem#fff,97vw 32.1vh 0 -0.49rem#fff,62vw 99vh 0 -0.23rem#fff,80vw 78.5vh 0 -0.47rem#fff,54.4vw 81.1vh 0 -0.44rem#fff,35.5vw 99.8vh 0 -0.35rem#fff,68vw 78vh 0 -0.22rem#fff,77.7vw 89.8vh 0 -0.01rem#fff,14.2vw 48.8vh 0 -0.49rem#fff,44vw 72.4vh 0 -0.31rem#fff,50.7vw 97.4vh 0 -0.12rem#fff,5.2vw 83.3vh 0 -0.2rem#fff,35vw 60.7vh 0 -0.09rem#fff,92.5vw 61.6vh 0 -0.47rem#fff,41.6vw 62.5vh 0 -0.23rem#fff,49.8vw 37.7vh 0 -0.38rem#fff,70.7vw 2.6vh 0 -0.23rem#fff,79.9vw 83.7vh 0 -0.2rem#fff,94.1vw 19.6vh 0 -0.36rem#fff,79.8vw 33.6vh 0 -0.42rem#fff,98vw 65.9vh 0 -0.14rem#fff,95vw 95.9vh 0 -0.2rem#fff,80.1vw 44vh 0 -0.43rem#fff,76.6vw 70.5vh 0 -0.04rem#fff,62.6vw 50vh 0 -0.4rem#fff,48.5vw 30.7vh 0 -0.47rem#fff,65.7vw 78.5vh 0 -0.17rem#fff,38.5vw 79.2vh 0 -0.33rem#fff,22.6vw 69.8vh 0 -0.47rem#fff,77.9vw 95.9vh 0 -0.48rem#fff,15.6vw 59.5vh 0 -0.44rem#fff,0.8vw 52.4vh 0 -0.16rem#fff,83.4vw 49vh 0 -0.41rem#fff,89.5vw 17.5vh 0 -0.34rem#fff,0.5vw 99.6vh 0 -0.41rem#fff,29.7vw 57.1vh 0 -0.49rem#fff,87.5vw 36vh 0 -0.2rem#fff,18.3vw 41.6vh 0 -0.23rem#fff,34.7vw 80.1vh 0 -0.1rem#fff,24.7vw 4.9vh 0 -0.01rem#fff,15.4vw 73.9vh 0 -0.14rem#fff,14.6vw 32.7vh 0 -0.11rem#fff,95.4vw 11.2vh 0 -0.29rem#fff,30.6vw 33.3vh 0 -0.33rem#fff,67.3vw 4.1vh 0 -0.45rem#fff,21.4vw 52.5vh 0 -0.23rem#fff,51.8vw 33.2vh 0 -0.12rem#fff,41.1vw 6.1vh 0 -0.16rem#fff,44.6vw 94.7vh 0 -0.03rem#fff,72vw 91vh 0 -0.34rem#fff,93.2vw 68.3vh 0 -0.13rem#fff,26vw 63.1vh 0 -0.3rem#fff,35.3vw 59.1vh 0 -0.08rem#fff,41vw 85.6vh 0 -0.05rem#fff,94.8vw 49.6vh 0 -0.29rem#fff,40.1vw 33vh 0 -0.33rem#fff,77vw 27.1vh 0 -0.17rem#fff,91.9vw 73.3vh 0 -0.11rem#fff,69.2vw 47.6vh 0 -0.09rem#fff,55.2vw 61.7vh 0 -0.39rem#fff,66.3vw 83.6vh 0 -0.04rem#fff,32.6vw 79.5vh 0 -0.14rem#fff,44vw 6.9vh 0 -0.33rem#fff,51vw 33.3vh 0 -0.1rem#fff,87.4vw 96.3vh 0 -0.1rem#fff,2.3vw 18.6vh 0 -0.24rem#fff,99.3vw 24.1vh 0 -0.3rem#fff,90.3vw 84.9vh 0 -0.37rem#fff,29.3vw 0.3vh 0 -0.23rem#fff,11.4vw 12.8vh 0 -0.49rem#fff,0.3vw 59.8vh 0 -0.42rem#fff,21.3vw 97.7vh 0 -0.43rem#fff,95.8vw 45.1vh 0 -0.4rem#fff,38.9vw 46.5vh 0 -0.38rem#fff,63.9vw 2.8vh 0 -0.27rem#fff,10vw 34.8vh 0 -0.12rem#fff,29.7vw 47.9vh 0 -0.26rem#fff,94vw 90.1vh 0 -0.08rem#fff,34.5vw 29.6vh 0 -0.12rem#fff,60.6vw 90.5vh 0 -0.41rem#fff,18vw 80.6vh 0 -0.32rem#fff,11.9vw 22.9vh 0 -0.23rem#fff,37.5vw 27.1vh 0 -0.01rem#fff,61.3vw 88.7vh 0 -0.48rem#fff,63.6vw 4.9vh 0 -0.22rem#fff,79.6vw 43.7vh 0 -0.08rem#fff,17.4vw 99.9vh 0 -0.18rem#fff,98.7vw 68.5vh 0 -0.42rem#fff,51.2vw 1.4vh 0 -0.07rem#fff,1.2vw 59.7vh 0 -0.33rem#fff,48.9vw 40.2vh 0 -0.48rem#fff,41.7vw 74.6vh 0 -0.41rem#fff,55.6vw 16.2vh 0 -0.34rem#fff,30.5vw 35.7vh 0 -0.13rem#fff,58.9vw 25.8vh 0 -0.39rem#fff,85.4vw 55.5vh 0 -0.35rem#fff,75.3vw 4.4vh 0 -0.28rem#fff,79.1vw 10.5vh 0 -0.22rem#fff,1.6vw 96.2vh 0 -0.06rem#fff,42.7vw 41.6vh 0 -0.29rem#fff,18.9vw 88.1vh 0 -0.11rem#fff,35.8vw 6.3vh 0 -0.4rem#fff,94.5vw 24.2vh 0 -0.07rem#fff,0.5vw 36.2vh 0 -0.49rem#fff,6.9vw 70.7vh 0 -0.33rem#fff,68.2vw 57.2vh 0 -0.31rem#fff,0.3vw 36vh 0 -0.18rem#fff,34vw 70.5vh 0 -0.2rem#fff,62.5vw 6.1vh 0 -0.24rem#fff,72.6vw 16.9vh 0 -0.28rem#fff,53.3vw 48.4vh 0 -0.12rem#fff,65.8vw 98.6vh 0 -0.48rem#fff,98vw 75.7vh 0 -0.23rem#fff,99.9vw 42.7vh 0 -0.27rem#fff,17.8vw 81.4vh 0 -0.21rem#fff,19.4vw 4.9vh 0 -0.22rem#fff,71.7vw 95.7vh 0 -0.1rem#fff,86.1vw 79.9vh 0 -0.17rem#fff,65.1vw 90.8vh 0 -0.31rem#fff,51.9vw 7.8vh 0 -0.08rem#fff,80.7vw 81.8vh 0 -0.46rem#fff,48.2vw 85.6vh 0 -0.23rem#fff,89.8vw 5.3vh 0 -0.43rem#fff,9.4vw 80.8vh 0 -0.06rem#fff,16.9vw 7.2vh 0 -0.33rem#fff,51.5vw 9.8vh 0 -0.29rem#fff,7.2vw 97.2vh 0 -0.23rem#fff,56.5vw 55vh 0 -0.27rem#fff,56.6vw 5.3vh 0 -0.3rem#fff,51.5vw 26.5vh 0 -0.28rem#fff,48vw 24.6vh 0 -0.13rem#fff,38.9vw 70.1vh 0 -0.45rem#fff,98.5vw 32.6vh 0 -0.41rem#fff,4.5vw 95.8vh 0 -0.43rem#fff,57.7vw 97vh 0 -0.41rem#fff,33.2vw 60.5vh 0 -0.42rem#fff,27.8vw 99.8vh 0 -0.06rem#fff,2.1vw 7.4vh 0 -0.37rem#fff,80.1vw 44.8vh 0 -0.34rem#fff,37.2vw 75.5vh 0 -0.38rem#fff,21.5vw 38.4vh 0 -0.02rem#fff,22.3vw 5.1vh 0 -0.16rem#fff,87.2vw 69.3vh 0 -0.06rem#fff,71.4vw 86vh 0 -0.14rem#fff,20.2vw 70.2vh 0 -0.17rem#fff,36.5vw 77.3vh 0 -0.4rem#fff,89vw 44vh 0 -0.08rem#fff,73.8vw 43.3vh 0 -0.21rem#fff,14.8vw 21.9vh 0 -0.5rem#fff,55.3vw 81.2vh 0 -0.13rem#fff,66.2vw 74vh 0 -0.18rem#fff,1.4vw 29.7vh 0 -0.1rem#fff,7vw 97.5vh 0 -0.41rem#fff,18vw 70vh 0 -0.34rem#fff,52vw 32.9vh 0 -0.49rem#fff,17.3vw 21.5vh 0 -0.37rem#fff,59.5vw 62vh 0 -0.22rem#fff,37.3vw 41.5vh 0 -0.13rem#fff,69.9vw 18.4vh 0 -0.31rem#fff,67.9vw 14.2vh 0 -0.4rem#fff,95.7vw 96.9vh 0 -0.47rem#fff,75.8vw 54.1vh 0 -0.36rem#fff,34.7vw 48.2vh 0 -0.01rem#fff,30.7vw 27.8vh 0 -0.24rem#fff,80.3vw 61.9vh 0 -0.4rem#fff,35.7vw 6.6vh 0 -0.33rem#fff,95.5vw 8.1vh 0 -0.18rem#fff,37.5vw 93.2vh 0 -0.36rem#fff,85.3vw 30.3vh 0 -0.49rem#fff,61.3vw 39.4vh 0 -0.09rem#fff,90.9vw 69.7vh 0 -0.22rem#fff,53.6vw 16.4vh 0 -0.38rem#fff,97.7vw 30vh 0 -0.49rem#fff,87.7vw 66.7vh 0 -0.11rem#fff;\n  animation-duration: 100s;\n}\n.wrapper[_ngcontent-%COMP%]   .layer3[_ngcontent-%COMP%]   .ab[_ngcontent-%COMP%] {\n  animation-delay: -50s;\n}\n.wrapper[_ngcontent-%COMP%]   .layer4[_ngcontent-%COMP%] {\n  width: 0.8rem;\n  height: 0.8rem;\n  filter: blur(6px);\n  box-shadow: 77.7vw 47vh 0 -0.04rem#fff,53.7vw 13.9vh 0 -0.46rem#fff,82.1vw 49.8vh 0 -0.08rem#fff,46.2vw 72.7vh 0 -0.45rem#fff,70.8vw 52.1vh 0 -0.11rem#fff,73.3vw 70.2vh 0 -0.44rem#fff,83.1vw 78.2vh 0 -0.2rem#fff,93.7vw 2.8vh 0 -0.02rem#fff,34.5vw 98.7vh 0 -0.48rem#fff,60.3vw 5.7vh 0 -0.43rem#fff,44.6vw 21.5vh 0 -0.13rem#fff,88vw 31vh 0 -0.02rem#fff,51vw 19.1vh 0 -0.07rem#fff,92.7vw 39.9vh 0 -0.03rem#fff,91.7vw 66.6vh 0 -0.18rem#fff,37vw 65vh 0 -0.3rem#fff,15.1vw 55.2vh 0 -0.32rem#fff,94.5vw 53.7vh 0 -0.46rem#fff,59.4vw 0.6vh 0 -0.34rem#fff,46vw 39.7vh 0 -0.2rem#fff,90.1vw 40.4vh 0 -0.09rem#fff,59.9vw 39.2vh 0 -0.27rem#fff,32.8vw 2.9vh 0 -0.2rem#fff,4.5vw 38.2vh 0 -0.13rem#fff,82vw 15.6vh 0 -0.47rem#fff,71.3vw 72.1vh 0 -0.39rem#fff,67.2vw 25.6vh 0 -0.05rem#fff,58.2vw 47.9vh 0 -0.05rem#fff,62.4vw 18.1vh 0 -0.2rem#fff,8.2vw 0.4vh 0 -0.47rem#fff,80.7vw 76.5vh 0 -0.15rem#fff,8vw 72.3vh 0 -0.25rem#fff,80.1vw 57.4vh 0 -0.04rem#fff,18.6vw 79.3vh 0 -0.05rem#fff,42vw 96.9vh 0 -0.39rem#fff,95.2vw 32.1vh 0 -0.03rem#fff,72.3vw 58.3vh 0 -0.25rem#fff,8.6vw 8vh 0 -0.24rem#fff,16.6vw 35.6vh 0 -0.33rem#fff,55.7vw 85vh 0 -0.42rem#fff,95.1vw 14.8vh 0 -0.5rem#fff,41.4vw 73.9vh 0 -0.07rem#fff,38.7vw 65.3vh 0 -0.04rem#fff,30.6vw 84.8vh 0 -0.35rem#fff,86.1vw 33.6vh 0 -0.15rem#fff,41.7vw 42vh 0 -0.38rem#fff,3.6vw 57.2vh 0 -0.33rem#fff,28vw 26.4vh 0 -0.17rem#fff,8.7vw 74.6vh 0 -0.46rem#fff,63.5vw 40.8vh 0 -0.15rem#fff,9.4vw 38.2vh 0 -0.3rem#fff,84.7vw 19.9vh 0 -0.38rem#fff,62.6vw 85vh 0 -0.39rem#fff,54.1vw 22.4vh 0 -0.28rem#fff,10.2vw 32.1vh 0 -0.01rem#fff,47.7vw 3.5vh 0 -0.33rem#fff,25.9vw 9.9vh 0 -0.02rem#fff,74.7vw 66.1vh 0 -0.24rem#fff,23.8vw 30.2vh 0 -0.13rem#fff,24.1vw 19.6vh 0 -0.12rem#fff,51vw 78.1vh 0 -0.02rem#fff,44.8vw 17.6vh 0 -0.44rem#fff,49.6vw 26.7vh 0 -0.31rem#fff,89.6vw 23.7vh 0 -0.09rem#fff,22vw 3.7vh 0 -0.19rem#fff,9.2vw 23.4vh 0 -0.12rem#fff,5.8vw 13.8vh 0 -0.41rem#fff,74.2vw 42.1vh 0 -0.2rem#fff,60.4vw 84.6vh 0 -0.42rem#fff,50.8vw 32.8vh 0 -0.36rem#fff,5.3vw 42.1vh 0 -0.25rem#fff,56vw 49.4vh 0 -0.04rem#fff,99.8vw 20.8vh 0 -0.24rem#fff,55.6vw 23.7vh 0 -0.43rem#fff,79.7vw 94.4vh 0 -0.45rem#fff,49.9vw 31.6vh 0 -0.32rem#fff,93.9vw 67.2vh 0 -0.2rem#fff,48.9vw 51.3vh 0 -0.38rem#fff,32.3vw 44.1vh 0 -0.45rem#fff,46vw 58.9vh 0 -0.45rem#fff,64.3vw 36.2vh 0 -0.27rem#fff,96vw 38.1vh 0 -0.46rem#fff,45.9vw 72.9vh 0 -0.3rem#fff,56.1vw 51.6vh 0 -0.41rem#fff,28.8vw 15.6vh 0 -0.01rem#fff,54.2vw 87.1vh 0 -0.24rem#fff,34.5vw 95.1vh 0 -0.21rem#fff,68vw 60.2vh 0 -0.4rem#fff,75.2vw 17.4vh 0 -0.34rem#fff,0.6vw 35.9vh 0 -0.46rem#fff,13.3vw 11.2vh 0 -0.28rem#fff,38.7vw 49.3vh 0 -0.07rem#fff,75.8vw 50.9vh 0 -0.05rem#fff,42.8vw 15.9vh 0 -0.3rem#fff,51.3vw 38.3vh 0 -0.32rem#fff,50.5vw 93vh 0 -0.21rem#fff,49.9vw 49.2vh 0 -0.11rem#fff,39.3vw 81.3vh 0 -0.27rem#fff,79.8vw 49.4vh 0 -0.43rem#fff,88.2vw 71.5vh 0 -0.4rem#fff,80.4vw 59.4vh 0 -0.15rem#fff,4.4vw 78.4vh 0 -0.17rem#fff,23.7vw 4vh 0 -0.12rem#fff,52.5vw 13.3vh 0 -0.46rem#fff,70.1vw 17.4vh 0 -0.31rem#fff,28vw 8.2vh 0 -0.22rem#fff,68.5vw 95.9vh 0 -0.46rem#fff,47.2vw 20vh 0 -0.19rem#fff,79.4vw 2.5vh 0 -0.48rem#fff,17vw 2.1vh 0 -0.39rem#fff,74.8vw 66.6vh 0 -0.28rem#fff,7.5vw 85.8vh 0 -0.09rem#fff,6.6vw 62.1vh 0 -0.22rem#fff,34vw 30.5vh 0 -0.34rem#fff,54.2vw 89.1vh 0 -0.18rem#fff,21.6vw 22.8vh 0 -0.16rem#fff,65.2vw 11vh 0 -0.25rem#fff,48vw 10.5vh 0 -0.12rem#fff,9.9vw 76.8vh 0 -0.09rem#fff,75.5vw 32vh 0 -0.33rem#fff,67.3vw 91.4vh 0 -0.25rem#fff,50.5vw 23.3vh 0 -0.45rem#fff,68.4vw 62.3vh 0 -0.36rem#fff,24vw 21.1vh 0 -0.42rem#fff,20.2vw 5.3vh 0 -0.42rem#fff,30.2vw 48.4vh 0 -0.17rem#fff,45.8vw 0.6vh 0 -0.07rem#fff,42.9vw 49.9vh 0 -0.11rem#fff,92.3vw 17vh 0 -0.19rem#fff,57.3vw 43.1vh 0 -0.1rem#fff,67.1vw 76.5vh 0 -0.27rem#fff,49.5vw 25.6vh 0 -0.25rem#fff,90.8vw 43.8vh 0 -0.46rem#fff,42vw 45vh 0 -0.46rem#fff,27.6vw 4.9vh 0 -0.29rem#fff,84.3vw 71.1vh 0 -0.45rem#fff,36vw 29.6vh 0 -0.39rem#fff,59.9vw 3.7vh 0 -0.5rem#fff,48.6vw 32.1vh 0 -0.29rem#fff,14vw 14.9vh 0 -0.36rem#fff,92.1vw 10.3vh 0 -0.09rem#fff,40.6vw 78.6vh 0 -0.22rem#fff,90.7vw 74.4vh 0 -0.18rem#fff,73.8vw 97.5vh 0 -0.18rem#fff,30.8vw 29.5vh 0 -0.17rem#fff,13.3vw 50.8vh 0 -0.5rem#fff,71.4vw 22.2vh 0 -0.47rem#fff,87.4vw 69.1vh 0 -0.08rem#fff,50.7vw 55.1vh 0 -0.39rem#fff,22vw 66vh 0 -0.04rem#fff,59.9vw 99.2vh 0 -0.25rem#fff,12.1vw 4.6vh 0 -0.18rem#fff,84.2vw 21.2vh 0 -0.34rem#fff,49.1vw 75.8vh 0 -0.09rem#fff,74.9vw 11.6vh 0 -0.37rem#fff,83.2vw 68.6vh 0 -0.38rem#fff,38.9vw 33.2vh 0 -0.12rem#fff,29vw 61.1vh 0 -0.13rem#fff,44.5vw 26.6vh 0 -0.5rem#fff,23.9vw 45.7vh 0 -0.09rem#fff,26.6vw 17.5vh 0 -0.36rem#fff,64.4vw 19vh 0 -0.03rem#fff,60.6vw 26.3vh 0 -0.41rem#fff,83vw 17.2vh 0 -0.47rem#fff,35.3vw 96.6vh 0 -0.33rem#fff,31.8vw 42.9vh 0 -0.42rem#fff,6.5vw 76.4vh 0 -0.25rem#fff,1.2vw 55vh 0 -0.25rem#fff,57.5vw 77vh 0 -0.34rem#fff,75.6vw 26.6vh 0 -0.37rem#fff,34.2vw 49.7vh 0 -0.36rem#fff,69.2vw 35vh 0 -0.49rem#fff,75vw 74vh 0 -0.45rem#fff,40.9vw 48.9vh 0 -0.11rem#fff,37.1vw 52.8vh 0 -0.28rem#fff,32.8vw 91.5vh 0 -0.24rem#fff,23.7vw 34.1vh 0 -0.36rem#fff,3.8vw 15.5vh 0 -0.23rem#fff,1.3vw 65.3vh 0 -0.34rem#fff,94.6vw 46.6vh 0 -0.42rem#fff,99.4vw 9.3vh 0 -0.24rem#fff,70.9vw 50.7vh 0 -0.18rem#fff,61.1vw 85vh 0 -0.26rem#fff,60.5vw 83.7vh 0 -0.33rem#fff,55.4vw 37.6vh 0 -0.22rem#fff,28.1vw 56.1vh 0 -0.24rem#fff,27.2vw 24vh 0 -0.02rem#fff,0.7vw 98vh 0 -0.17rem#fff,44.8vw 38.3vh 0 -0.26rem#fff,6.9vw 67.8vh 0 -0.03rem#fff,3.6vw 57vh 0 -0.02rem#fff,96.1vw 52.5vh 0 -0.06rem#fff,39.5vw 12.6vh 0 -0.1rem#fff,19.5vw 49.9vh 0 -0.38rem#fff,71.6vw 46.9vh 0 -0.23rem#fff,45vw 45.2vh 0 -0.13rem#fff,44.5vw 56.4vh 0 -0.27rem#fff,57.7vw 91.9vh 0 -0.37rem#fff,31vw 26.2vh 0 -0.44rem#fff,41.2vw 88.3vh 0 -0.24rem#fff,83.2vw 55.2vh 0 -0.21rem#fff,31.4vw 43vh 0 -0.33rem#fff,12.8vw 43.8vh 0 -0.39rem#fff,3.4vw 17.6vh 0 -0.49rem#fff,51vw 42.9vh 0 -0.2rem#fff,51.9vw 18.5vh 0 -0.21rem#fff,86.5vw 7.4vh 0 -0.28rem#fff,5.1vw 5.5vh 0 -0.29rem#fff,62.9vw 37.6vh 0 -0.29rem#fff,90.8vw 54.1vh 0 -0.34rem#fff,98.2vw 31.3vh 0 -0.02rem#fff,7.4vw 1vh 0 -0.25rem#fff,70.4vw 69.9vh 0 -0.38rem#fff,67.6vw 43.5vh 0 -0.17rem#fff,10.9vw 33.4vh 0 -0.03rem#fff,50.3vw 70vh 0 -0.13rem#fff,49.1vw 89.6vh 0 -0.27rem#fff,48.1vw 44vh 0 -0.41rem#fff,64.3vw 37.5vh 0 -0.39rem#fff,20.7vw 29.5vh 0 -0.48rem#fff,54.1vw 69.6vh 0 -0.34rem#fff,33.1vw 56.6vh 0 -0.05rem#fff,33.5vw 58.3vh 0 -0.27rem#fff,74.5vw 56.7vh 0 -0.32rem#fff,86.8vw 78.1vh 0 -0.02rem#fff,30.5vw 60.6vh 0 -0.49rem#fff,86.7vw 38.8vh 0 -0.3rem#fff,85.7vw 63.1vh 0 -0.36rem#fff,7vw 76.3vh 0 -0.42rem#fff,30vw 78vh 0 -0.03rem#fff,74vw 26.3vh 0 -0.19rem#fff,16.5vw 58.8vh 0 -0.37rem#fff,88.9vw 23.1vh 0 -0.46rem#fff,16.5vw 56.3vh 0 -0.19rem#fff,27.1vw 8.8vh 0 -0.01rem#fff,80vw 21vh 0 -0.27rem#fff,32.5vw 65vh 0 -0.34rem#fff,89.8vw 98.1vh 0 -0.46rem#fff,72.8vw 44.2vh 0 -0.24rem#fff,78.7vw 34.2vh 0 -0.41rem#fff,18.1vw 26.2vh 0 -0.29rem#fff,46.4vw 28.5vh 0 -0.1rem#fff,27.3vw 20.7vh 0 -0.22rem#fff,68.2vw 69.3vh 0 -0.13rem#fff,52vw 76.8vh 0 -0.03rem#fff,77.4vw 66.6vh 0 -0.1rem#fff,45.3vw 74.2vh 0 -0.3rem#fff,33.6vw 10.6vh 0 -0.33rem#fff,12vw 49.1vh 0 -0.12rem#fff,84.8vw 33.9vh 0 -0.32rem#fff,7.2vw 87.1vh 0 -0.23rem#fff,44.5vw 25.2vh 0 -0.38rem#fff,6vw 59.8vh 0 -0.12rem#fff,12vw 2.9vh 0 -0.46rem#fff,19.6vw 77.2vh 0 -0.07rem#fff,32.9vw 76.4vh 0 -0.04rem#fff,28.7vw 11.3vh 0 -0.3rem#fff,20.5vw 19.5vh 0 -0.47rem#fff,73.5vw 44.7vh 0 -0.03rem#fff,83.6vw 37.6vh 0 -0.32rem#fff,40.5vw 36.1vh 0 -0.24rem#fff,50vw 52.1vh 0 -0.31rem#fff,43.2vw 59vh 0 -0.5rem#fff,27.6vw 6.6vh 0 -0.02rem#fff,61.2vw 26.8vh 0 -0.32rem#fff,1.1vw 94vh 0 -0.29rem#fff,90.4vw 16.1vh 0 -0.07rem#fff,49.9vw 79.6vh 0 -0.45rem#fff,98.9vw 70.3vh 0 -0.35rem#fff,80vw 13.5vh 0 -0.13rem#fff,59.1vw 42.6vh 0 -0.42rem#fff,96.7vw 78.5vh 0 -0.01rem#fff,99vw 94.5vh 0 -0.2rem#fff,60.4vw 5.7vh 0 -0.15rem#fff,39.5vw 9.2vh 0 -0.39rem#fff,90.2vw 9.5vh 0 -0.13rem#fff,68.4vw 59.3vh 0 -0.35rem#fff,52.1vw 36.3vh 0 -0.47rem#fff,0.6vw 78.3vh 0 -0.31rem#fff,37.8vw 74.3vh 0 -0.27rem#fff,76vw 49.6vh 0 -0.02rem#fff,51.1vw 20.7vh 0 -0.05rem#fff,46.7vw 55.1vh 0 -0.07rem#fff,16.4vw 26.2vh 0 -0.35rem#fff,19vw 42.1vh 0 -0.14rem#fff,31.1vw 19.4vh 0 -0.39rem#fff,71.6vw 25.3vh 0 -0.09rem#fff,87.9vw 54.9vh 0 -0.33rem#fff,3.3vw 83vh 0 -0.22rem#fff,94.1vw 37.7vh 0 -0.02rem#fff,1.1vw 26.7vh 0 -0.38rem#fff,26.5vw 99vh 0 -0.04rem#fff,68.3vw 53.2vh 0 -0.39rem#fff,43.7vw 42.1vh 0 -0.14rem#fff,44.9vw 32.4vh 0 -0.2rem#fff,52.3vw 27.4vh 0 -0.37rem#fff,26.9vw 20.2vh 0 -0.11rem#fff,47.8vw 77.8vh 0 -0.08rem#fff,81.7vw 54.4vh 0 -0.13rem#fff;\n  animation-duration: 120s;\n}\n.wrapper[_ngcontent-%COMP%]   .layer4[_ngcontent-%COMP%]   .ab[_ngcontent-%COMP%] {\n  animation-delay: -60s;\n}\n@keyframes fall {\n  100% {\n    transform: translateY(200vh);\n  }\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\nsnow-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUZBQUE7RUFNQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBSkY7QUFvRUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7QUFsRUo7QUFxRUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNmpSQUFBO0VBQ0EsdUJBQUE7QUFuRUo7QUFxRUk7RUFDRSxxQkFBQTtBQW5FTjtBQXVFRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxveFFBQUE7RUFDQSx1QkFBQTtBQXJFSjtBQXVFSTtFQUNFLHFCQUFBO0FBckVOO0FBeUVFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDh3UUFBQTtFQUNBLHdCQUFBO0FBdkVKO0FBeUVJO0VBQ0UscUJBQUE7QUF2RU47QUEyRUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseXZRQUFBO0VBQ0Esd0JBQUE7QUF6RUo7QUEyRUk7RUFDRSxxQkFBQTtBQXpFTjtBQTZFRTtFQUNFO0lBQ0UsNEJBQUE7RUEzRUo7QUFDRjtBQThFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUEzRUY7QUE4RUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBM0VGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgZmFydGhlc3QtY29ybmVyIGF0IDMwdncgMjB2aCxcbiAgICAjNzM5N2ExIDElLFxuICAgICMzZjJjNDEgMTAwJVxuICApO1xuXG4gIHotaW5kZXg6IC0xMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgJHMxOiBcIlwiO1xuICAkczI6IFwiXCI7XG4gICRzMzogXCJcIjtcbiAgJHM0OiBcIlwiO1xuXG4gIEBmb3IgJGkgZnJvbSAxIHRvIDMwMCB7XG4gICAgJHMxOiAoXG4gICAgICAkczEgK1xuICAgICAgICBjYWxjKHJhbmRvbSgxMDAwKSAqIDAuMXZ3KSArXG4gICAgICAgIFwiIFwiICtcbiAgICAgICAgY2FsYyhyYW5kb20oMTAwMCkgKiAwLjF2aCkgK1xuICAgICAgICBcIiBcIiArXG4gICAgICAgIDAgK1xuICAgICAgICBcIiBcIiArXG4gICAgICAgIGNhbGMocmFuZG9tKDUwKSAqIC0wLjAxcmVtKSArXG4gICAgICAgIFwiIFwiICtcbiAgICAgICAgI2ZmZlxuICAgICk7XG4gICAgJHMyOiAkczIgK1xuICAgICAgcmFuZG9tKDEwMDApICpcbiAgICAgIDAuMXZ3ICtcbiAgICAgIFwiIFwiICtcbiAgICAgIHJhbmRvbSgxMDAwKSAqXG4gICAgICAwLjF2aCArXG4gICAgICBcIiBcIiArXG4gICAgICAwICtcbiAgICAgIFwiIFwiICtcbiAgICAgIHJhbmRvbSg1MCkgKlxuICAgICAgLTAuMDFyZW0gK1xuICAgICAgI2ZmZjtcbiAgICAkczM6ICRzMyArXG4gICAgICByYW5kb20oMTAwMCkgKlxuICAgICAgMC4xdncgK1xuICAgICAgXCIgXCIgK1xuICAgICAgcmFuZG9tKDEwMDApICpcbiAgICAgIDAuMXZoICtcbiAgICAgIFwiIFwiICtcbiAgICAgIDAgK1xuICAgICAgXCIgXCIgK1xuICAgICAgcmFuZG9tKDUwKSAqXG4gICAgICAtMC4wMXJlbSArXG4gICAgICAjZmZmO1xuICAgICRzNDogJHM0ICtcbiAgICAgIHJhbmRvbSgxMDAwKSAqXG4gICAgICAwLjF2dyArXG4gICAgICBcIiBcIiArXG4gICAgICByYW5kb20oMTAwMCkgKlxuICAgICAgMC4xdmggK1xuICAgICAgXCIgXCIgK1xuICAgICAgMCArXG4gICAgICBcIiBcIiArXG4gICAgICByYW5kb20oNTApICpcbiAgICAgIC0wLjAxcmVtICtcbiAgICAgICNmZmY7XG4gICAgQGlmICRpIDwyOTkge1xuICAgICAgJHMxOiAkczEgKyBcIixcIjtcbiAgICAgICRzMjogJHMyICsgXCIsXCI7XG4gICAgICAkczM6ICRzMyArIFwiLFwiO1xuICAgICAgJHM0OiAkczQgKyBcIixcIjtcbiAgICB9XG4gIH1cblxuICAuc25vdyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTAwdmg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhbGw7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICB9XG5cbiAgLmxheWVyMSB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBmaWx0ZXI6IGJsdXIoMS41cHgpO1xuICAgIGJveC1zaGFkb3c6ICN7JHMxfTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDYwcztcblxuICAgIC5hYiB7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0zMHM7XG4gICAgfVxuICB9XG5cbiAgLmxheWVyMiB7XG4gICAgd2lkdGg6IDEuMnJlbTtcbiAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgICBib3gtc2hhZG93OiAjeyRzMn07XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MHM7XG5cbiAgICAuYWIge1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtNDBzO1xuICAgIH1cbiAgfVxuXG4gIC5sYXllcjMge1xuICAgIHdpZHRoOiAwLjhyZW07XG4gICAgaGVpZ2h0OiAwLjhyZW07XG4gICAgZmlsdGVyOiBibHVyKDZweCk7XG4gICAgYm94LXNoYWRvdzogI3skczN9O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwcztcblxuICAgIC5hYiB7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IC01MHM7XG4gICAgfVxuICB9XG5cbiAgLmxheWVyNCB7XG4gICAgd2lkdGg6IDAuOHJlbTtcbiAgICBoZWlnaHQ6IDAuOHJlbTtcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcbiAgICBib3gtc2hhZG93OiAjeyRzNH07XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMjBzO1xuXG4gICAgLmFiIHtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTYwcztcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGZhbGwge1xuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHZoKTtcbiAgICB9XG4gIH1cbn1cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnNub3ctYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuIl19 */"] });


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _snow_button_snow_button_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snow-button/snow-button.module */ 3577);
/* harmony import */ var _wish_input_wish_input_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wish-input/wish-input.module */ 1519);
/* harmony import */ var _wish_list_wish_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wish-list/wish-list.module */ 242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _wish_list_wish_list_module__WEBPACK_IMPORTED_MODULE_4__.WishListModule,
        _wish_input_wish_input_module__WEBPACK_IMPORTED_MODULE_3__.WishInputModule,
        _snow_button_snow_button_module__WEBPACK_IMPORTED_MODULE_2__.SnowButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _wish_list_wish_list_module__WEBPACK_IMPORTED_MODULE_4__.WishListModule,
        _wish_input_wish_input_module__WEBPACK_IMPORTED_MODULE_3__.WishInputModule,
        _snow_button_snow_button_module__WEBPACK_IMPORTED_MODULE_2__.SnowButtonModule] }); })();


/***/ }),

/***/ 4998:
/*!******************************************************!*\
  !*** ./src/app/snow-button/snow-button.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnowButtonComponent": () => (/* binding */ SnowButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class SnowButtonComponent {
    constructor() {
        this.isSnowing = true;
        this.isSnowingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    toggleSnow() {
        this.isSnowing = !this.isSnowing;
        this.isSnowingChange.emit(this.isSnowing);
    }
}
SnowButtonComponent.ɵfac = function SnowButtonComponent_Factory(t) { return new (t || SnowButtonComponent)(); };
SnowButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnowButtonComponent, selectors: [["snow-button"]], inputs: { isSnowing: "isSnowing" }, outputs: { isSnowingChange: "isSnowingChange" }, decls: 2, vars: 1, consts: [[3, "click"]], template: function SnowButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnowButtonComponent_Template_button_click_0_listener() { return ctx.toggleSnow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isSnowing ? "Stop this stupid snow!" : "Let it snow!", "\n");
    } }, styles: ["button[_ngcontent-%COMP%] {\n  background-color: #7397a1;\n  color: #3f2c41;\n  border: none;\n  height: 48px;\n  width: 140px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNub3ctYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0FBQUYiLCJmaWxlIjoic25vdy1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM5N2ExO1xuICBjb2xvcjogIzNmMmM0MTtcbiAgYm9yZGVyOiBub25lO1xuXG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 3577:
/*!***************************************************!*\
  !*** ./src/app/snow-button/snow-button.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnowButtonModule": () => (/* binding */ SnowButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _snow_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snow-button.component */ 4998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SnowButtonModule {
}
SnowButtonModule.ɵfac = function SnowButtonModule_Factory(t) { return new (t || SnowButtonModule)(); };
SnowButtonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SnowButtonModule });
SnowButtonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SnowButtonModule, { declarations: [_snow_button_component__WEBPACK_IMPORTED_MODULE_0__.SnowButtonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_snow_button_component__WEBPACK_IMPORTED_MODULE_0__.SnowButtonComponent] }); })();


/***/ }),

/***/ 1050:
/*!****************************************************!*\
  !*** ./src/app/wish-input/wish-input.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishInputComponent": () => (/* binding */ WishInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class WishInputComponent {
    constructor() { }
    ngOnInit() {
    }
}
WishInputComponent.ɵfac = function WishInputComponent_Factory(t) { return new (t || WishInputComponent)(); };
WishInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WishInputComponent, selectors: [["wish-input"]], decls: 7, vars: 0, consts: [["for", "wish"], ["type", "text", "name", "wish"]], template: function WishInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "wish-input works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 0)(4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Wunsch hinzuf\u00FCgen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXNoLWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1519:
/*!*************************************************!*\
  !*** ./src/app/wish-input/wish-input.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishInputModule": () => (/* binding */ WishInputModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _wish_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wish-input.component */ 1050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class WishInputModule {
}
WishInputModule.ɵfac = function WishInputModule_Factory(t) { return new (t || WishInputModule)(); };
WishInputModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WishInputModule });
WishInputModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WishInputModule, { declarations: [_wish_input_component__WEBPACK_IMPORTED_MODULE_0__.WishInputComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_wish_input_component__WEBPACK_IMPORTED_MODULE_0__.WishInputComponent] }); })();


/***/ }),

/***/ 829:
/*!**************************************************!*\
  !*** ./src/app/wish-list/wish-list.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishListComponent": () => (/* binding */ WishListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class WishListComponent {
    constructor() { }
    ngOnInit() {
    }
}
WishListComponent.ɵfac = function WishListComponent_Factory(t) { return new (t || WishListComponent)(); };
WishListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WishListComponent, selectors: [["app-wish-list"]], decls: 22, vars: 0, consts: [[1, "list-wrapper"]], template: function WishListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Caros Weihnachts-W\u00FCnsche");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul")(4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Verschlusskappen f\u00FCr meine Trinkblasen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " B\u00FCgeleisen mit Dampffunktion (Z.B. Philipps Azure elite GC 5037/80, oder Braun texstyle 9 Si 9188, oder Russell Hobbs one temperature ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Trockner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Hochbeet in Anthrazit in folgenden Abmessungen(), oder Reperatur/Optimierung des jetzigen, zB neue Beh\u00E4ltnisse, Wasser l\u00E4uft sofort durch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "WOK, Marke Spring, mit Bergkristall-technologie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tomatenmesser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "angepasste OhrSt\u00F6psel f\u00FCr meine Sennheiser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Salatbesteck von WMF, Serie Merit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Puzzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".list-wrapper[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.list-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #3f2c41;\n}\n.list-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpc2gtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUFDSjtBQUdJO0VBQ0UsbUJBQUE7QUFETiIsImZpbGUiOiJ3aXNoLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC13cmFwcGVyIHtcbiAgcGFkZGluZzogMTZweDtcblxuICBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjM2YyYzQxO1xuICB9XG5cbiAgdWwge1xuICAgIGxpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 242:
/*!***********************************************!*\
  !*** ./src/app/wish-list/wish-list.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishListModule": () => (/* binding */ WishListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _wish_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wish-list.component */ 829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class WishListModule {
}
WishListModule.ɵfac = function WishListModule_Factory(t) { return new (t || WishListModule)(); };
WishListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WishListModule });
WishListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WishListModule, { declarations: [_wish_list_component__WEBPACK_IMPORTED_MODULE_0__.WishListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_wish_list_component__WEBPACK_IMPORTED_MODULE_0__.WishListComponent] }); })();


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map