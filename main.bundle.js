webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  aboutus works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'aboutus',
            template: __webpack_require__("./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__("./src/app/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/allcelebrities/allcelebrities.component.css":
/***/ (function(module, exports) {

module.exports = ".profpage {\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  padding: 60px 0px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.inner_pages_wrap {\r\n  padding: 60px 0px;\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.allcb_cont{ padding-top:50px; padding-bottom:50px;}\r\n\r\n.cb_avtar{   position:relative; display:block; margin:0px auto; width: 100%; padding:0 0 90% 0; }\r\n\r\n.cb_avtar > img{ position: absolute; width: 100%; height: 100%;}\r\n\r\n.allceleb_data{ margin-top:10px; position: absolute; bottom: 0; width: 100%; padding: 8px 0px;\r\n  background: linear-gradient(45deg, rgba(38,167,217,0.81) 0%,rgba(38,167,217,0.81) 1%,rgba(21,29,65,0.82) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cf26a7d9', endColorstr='#d1151d41',GradientType=1 );\r\n}\r\n\r\n.allceleb_data > h3{ text-align:center; color:#fff; font-weight:bold; font-size:16px; padding:0px 0px 0px 0px; margin: 0px;}\r\n\r\n.allceleb_data > p{ text-align:center; color:#fff;  font-size:14px; margin: 0px; }\r\n\r\n.allceleb_box{ cursor:pointer; margin-bottom:30px; padding-top:0px; background-color: #f5f5f5; padding-bottom: 20px;\r\n  overflow:hidden; position: relative; max-height: 320px; border-radius:4px;\r\n}\r\n\r\n.cb_masker{ width:0px; height:100%; background-color:rgba(35,145,194, .9); position:absolute; top:0; bottom:0; display:block;\r\n            -webkit-transition:0.3s ease-in-out; transition:0.3s ease-in-out;\r\n              margin:0px auto; left:0; right:0;\r\n               width:100%; z-index: 90; -webkit-opacity: 0;\r\n               -moz-opacity: 0;\r\n               opacity: 0; visibility:hidden;\r\n}\r\n\r\n.cb_masker > p {\r\n    color: #fff;\r\n    font-size: 20px;\r\n    padding-top: 28%;\r\n    text-align: center;\r\n    -webkit-transition: 0.3s ease-in-out;\r\n    transition: 0.3s ease-in-out;\r\n  }\r\n\r\n.allceleb_box:hover .cb_masker {\r\n  width: 100%;\r\n  left:0; right:0;\r\n  -webkit-opacity: 1;\r\n  -moz-opacity: 1;\r\n  opacity: 1; visibility:visible;\r\n  height: 100%;\r\n  top: 0; bottom: 0;\r\n}\r\n\r\n/*popup*/\r\n\r\n.loing_popup {\r\n  width: 50vw;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n \r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  background-color: #fff;\r\n  z-index: 9000;\r\n  overflow: hidden;\r\n  border-radius: 2px;\r\n}\r\n\r\n.loginpop_mask {\r\n  background-color: rgba(0,0,0,0.8);\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1000;\r\n  cursor: crosshair;\r\n}\r\n\r\n.pop_left {\r\n  display: block;\r\n  width: 45%;\r\n  float: left;\r\n  height: inherit;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  -webkit-box-shadow: 0px 0px 40px #999;\r\n  -ms-box-shadow: 0px 0px 40px #999;\r\n  box-shadow: 0px 0px 40px #999;\r\n}\r\n\r\n.pop_right {\r\n  display: block;\r\n  width: 55%;\r\n  float: left;\r\n  padding: 60px 50px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: relative;\r\n  height: inherit;\r\n  z-index: -1;\r\n}\r\n\r\n.lgn_hdng {\r\n  color: #000;\r\n  font-weight: 300;\r\n  font-size: 20px;\r\n  text-transform: uppercase;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.lg_email {\r\n  border: none;\r\n  border-radius: 0px;\r\n  border-bottom: 1px solid #ccc;\r\n  outline: none;\r\n  box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  font-size: 12px;\r\n  -webkit-transition: 0.3s ease-in-out;\r\n  transition: 0.3s ease-in-out;\r\n  position: relative;\r\n  padding: 0 0 5px 0px;\r\n}\r\n\r\n.lg_email:focus {\r\n    border-color: #259dd0;\r\n    color: #259dd0;\r\n  }\r\n\r\n.lg_email::-webkit-input-placeholder {\r\n    color: #ccc;\r\n  }\r\n\r\n.embx {\r\n  position: relative;\r\n}\r\n\r\n.usicn {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 5px;\r\n  z-index: 10;\r\n  color: #ccc;\r\n}\r\n\r\n.lg_email:focus .usicn {\r\n  color: #259dd0 !important;\r\n}\r\n\r\n.embx > label {\r\n  color: #ccc;\r\n  font-size: 12px;\r\n}\r\n\r\n.embx2 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.lgnbtner {\r\n  float: right;\r\n  background-color: #259dd0;\r\n  border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.chk_box {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding-left: 30px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 13px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  color: #ccc;\r\n}\r\n\r\n.chk_box input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 16px;\r\n  width: 16px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.chk_box:hover input ~ .checkmark {\r\n  background-color: #fff;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark {\r\n  background-color: #259dd0;\r\n  border-color: #259dd0;\r\n}\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n.chk_box .checkmark:after {\r\n  left: 6px;\r\n  top: 3px;\r\n  width: 4px;\r\n  height: 7px;\r\n  border: solid white;\r\n  border-width: 0 2px 2px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.fgp {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  left: 0;\r\n  padding: 12px 50px;\r\n  font-size: 13px;\r\n}\r\n\r\n.signup_hdng {\r\n  color: #259dd0;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.hp_blk {\r\n  list-style: none;\r\n  font-size: 12px;\r\n}\r\n\r\n/*profile page css*/\r\n\r\n.cvrwrap {\r\n  position: relative;\r\n}\r\n\r\n.profile_wrapper {\r\n  padding: 0px;\r\n  margin: 0px;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.c_page {\r\n  position: relative;\r\n}\r\n\r\n.title_mask {\r\n  padding: 0px 0px;\r\n  background-color: rgba(0,0,0,0.5);\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 90%;\r\n  z-index: 10;\r\n  right: 0;\r\n  margin: 0px;\r\n  padding-left: 150px;\r\n  list-style: none;\r\n}\r\n\r\n.title_mask li {\r\n    float: left;\r\n    color: #fff;\r\n    padding: 10px 80px 10px 0;\r\n  }\r\n\r\n.big {\r\n  display: block;\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.title_mask li > small {\r\n  font-size: 14px;\r\n}\r\n\r\n.profile_manager {\r\n  position: absolute;\r\n  left: 40px;\r\n  bottom: -44px;\r\n  z-index: 15;\r\n}\r\n\r\n.profile_box {\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 100%;\r\n  background-color: #fff;\r\n  z-index: 20;\r\n  overflow: hidden;\r\n  border: 1px solid #ccc;\r\n  -webkit-box-shadow: 0px 0px 30px #666;\r\n  -ms-box-shadow: 0px 0px 30px #666;\r\n  box-shadow: 0px 0px 30px #666;\r\n}\r\n\r\n.profile_edit {\r\n  color: #000;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  position: relative;\r\n  top: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.profile_info {\r\n  padding-left: 30px; padding-top:50px;\r\n}\r\n\r\n.profile_info ul {\r\n    list-style: none;\r\n    padding: 30px 0px 30px 0px;\r\n    margin: 0px;\r\n  }\r\n\r\n.profile_info ul li {\r\n      float: left;\r\n      width: 25%;\r\n    }\r\n\r\n.profile_info ul li span {\r\n        text-transform: uppercase;\r\n        color: #666;\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n        display: block;\r\n      }\r\n\r\n.profile_info ul li p {\r\n        text-transform: capitalize;\r\n        color: #000;\r\n        font-size: 16px;\r\n        font-weight: 600;\r\n      }\r\n\r\n.flw_btn {\r\n  background-color: #259dd0;\r\n  color: #fff;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  border-radius: 0px;\r\n  margin: 0px auto;\r\n  height: 40px;\r\n  -webkit-box-shadow: 0px 3px 0px #1c262a;\r\n  -ms-box-shadow: 0px 3px 0px #1c262a;\r\n  box-shadow: 0px 3px 0px #1c262a;\r\n  font-weight: 600;\r\n  padding: 0 20px;\r\n  float: right;\r\n  border-radius: 2px;\r\n}\r\n\r\n.profile_tabs {\r\n  border-top: 1px solid #ddd;\r\n  border-bottom: 1px solid #ddd;\r\n  list-style: none;\r\n}\r\n\r\n.tabs_header {\r\n  list-style: none;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.tabs_header li {\r\n    float: left;\r\n    padding: 15px 8%;\r\n    float: left;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n  }\r\n\r\n.mytabicn {\r\n  font-size: 1.2rem;\r\n  position: relative;\r\n  top: 2px;\r\n}\r\n\r\n.prof_infodata, .prof_feedsdata, .prof_media {\r\n  padding: 30px 85px;\r\n}\r\n\r\n.prof_infodata h3 {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    color: #000;\r\n    padding-bottom: 10px;\r\n    margin: 0px;\r\n  }\r\n\r\n.prof_infodata p {\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #444;\r\n    padding-bottom: 20px;\r\n    line-height: 25px;\r\n    margin: 0px;\r\n  }\r\n\r\n.ptab_active2 {\r\n  color: #000;\r\n}\r\n\r\n.ptab_active {\r\n  color: #259dd0;\r\n}\r\n\r\n.prof_infodata > h3 {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.membername {\r\n  margin-left: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.card-title, .card-text {\r\n  padding-left: 1rem !important;\r\n}\r\n\r\n.img-fluid1 {\r\n  width: auto;\r\n}\r\n\r\n.cardspace {\r\n  padding: 30px 20px;\r\n}\r\n\r\n.feed_bg {\r\n  max-width: auto;\r\n  max-width: 100%;\r\n  padding: 30px !important;\r\n  overflow: hidden;\r\n}\r\n\r\n.space_imng {\r\n  margin-bottom: 25px !important;\r\n}\r\n\r\n.mycard_space {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n#mymedias {\r\n  margin-top: 30px;\r\n}\r\n\r\n.mybgspacer {\r\n  position: relative;\r\n  border: 1px solid #ddd;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.cbfnter{ font-size:14px!important;}\r\n\r\n.pful{ margin-bottom:0px!important; padding-bottom:0px!important;}\r\n\r\n.abtCb{ border-top:1px solid #ddd; padding-bottom:30px;}\r\n\r\n.abtCb > h6{ font-weight:bold; padding-top:20px;}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/allcelebrities/allcelebrities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid profpage\" [style.background-image]=\"'url(\\'assets/images/land_bg.jpg\\')'\">\r\n  <div class=\"container\">\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid allcb_cont\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n\r\n      <div class=\"col-12 col-sm-3 col-md-3 col-lg-3 \" *ngFor=\"let cb of allCelebs;\">\r\n        <div class=\"allceleb_box\">\r\n          <div class=\"cb_avtar\"><img src=\"{{imageUrl+cb.avtar_imgPath}}\" width=\"100%\" alt=\"{{cb.name}}\" title=\"{{cb.name}}\" /></div>\r\n\r\n          <div class=\"allceleb_data\">\r\n            <h3>{{cb.name}}</h3>\r\n            <p>{{cb.profession}}</p>\r\n          </div>\r\n\r\n          <div class=\"cb_masker\" (click)=\"openCbProfile(cb._id)\">\r\n\r\n            <p><i class=\"fas fa-eye fa-2x\"></i><br /> View Profile</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--login popup-->\r\n<div class=\"loginpop_mask\" *ngIf=\"cbprofmask\" (click)=\"closeCbProfile()\"></div>\r\n<div class=\"loing_popup\" *ngIf=\"cbProfile\">\r\n\r\n  <div class=\"cvrwrap\">\r\n    <div class=\"profile_wrapper\">\r\n      <img src=\"assets/images/coverpage.jpg\" class=\"c_page\" width=\"100%\" alt=\"coverpage\" title=\"coverpage\">\r\n      <ul class=\"title_mask\">\r\n        <li>\r\n          <span class=\"big\">{{memPreferences.followers}}</span>\r\n          <small>Followers</small>\r\n        </li>\r\n\r\n        <li>\r\n          <span class=\"big\">{{memPreferences.fans}}</span>\r\n          <small>Following</small>\r\n        </li>\r\n\r\n        <li>\r\n          <span class=\"big\">{{memPreferences.posts}}</span>\r\n          <small>Posts</small>\r\n        </li>\r\n      </ul>\r\n\r\n      <div class=\"profile_manager\">\r\n        <div class=\"profile_box\"><img src=\"{{imageUrl+celebrity.avtar_imgPath}}\" class=\"act_bg\" width=\"100%\" alt=\"{{celebrity.name}}\" title=\"{{celebrity.name}}\"></div>\r\n        <!--<p class=\"profile_edit\"><i class=\"fas fa-pencil-alt\"></i> Edit</p>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"profile_info\">\r\n    <ul class=\"pful\">\r\n      <li>\r\n        <span>Name</span>\r\n        <p class=\"cbfnter\">{{celebrity.name}}</p>\r\n      </li>\r\n      <li>\r\n        <span>Occupation</span>\r\n        <p class=\"cbfnter\">{{celebrity.profession}} </p>\r\n      </li>\r\n      <li>\r\n        <span>Country</span>\r\n        <p class=\"cbfnter\">{{celebrity.country}}</p>\r\n      </li>\r\n      \r\n      <!--<li>\r\n      <button type=\"button\" class=\"btn btn-default flw_btn\">Follow</button>\r\n  </li>-->\r\n      <div class=\"clearfix\"></div>\r\n    </ul>\r\n\r\n    <div class=\"abtCb\">\r\n      <h6>About Me</h6>\r\n      {{celebrity.aboutMe}}\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/allcelebrities/allcelebrities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllcelebritiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_observable_service__ = __webpack_require__("./src/app/services/observable.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllcelebritiesComponent = /** @class */ (function () {
    function AllcelebritiesComponent(routSvc, cbOvc, route) {
        this.routSvc = routSvc;
        this.cbOvc = cbOvc;
        this.route = route;
        // imageUrl: any = "http://13.58.150.195:4300/";
        //demo
        this.imageUrl = "http://18.219.37.107:4300/";
        this.cbProfile = false;
        this.cbprofmask = false;
    }
    AllcelebritiesComponent.prototype.ngOnInit = function () {
        this.getAllCBKCelebrities();
        this.email = localStorage.getItem('loginSessId');
        // console.log("seesion" + localStorage.getItem('loginSessId'));
        this.id = localStorage.getItem('memberId');
        this.getMemberByEmail(this.email);
        // this.ongetFansandFolowers(this.id);
    };
    AllcelebritiesComponent.prototype.getAllCBKCelebrities = function () {
        var _this = this;
        this.cbOvc.getAllCelebrities().subscribe(function (data) {
            _this.allCelebs = data;
            _this.allCelebs = _this.allCelebs.filter(function (m) { return m.IsDeleted == false; });
            // console.log(data);
        });
    };
    AllcelebritiesComponent.prototype.openCbProfile = function (id) {
        var _this = this;
        //alert(id);
        this.cbOvc.getMemberByID(id).subscribe(function (data) {
            _this.celebrity = data;
        });
        this.cbProfile = true;
        this.cbprofmask = true;
        return this.celebrity;
    };
    AllcelebritiesComponent.prototype.getMemberByEmail = function (email) {
        var _this = this;
        email = this.email;
        this.cbOvc.getMemberByEmail(this.email).subscribe(function (x) {
            // console.log("testingid"+ x._id);
            _this.id = x._id;
            // this.test = x._id;
            localStorage.setItem('memberId', x._id);
            // console.log("final" + this.id);
            _this.ongetFansandFolowers(_this.id);
        });
        return this.id;
    };
    AllcelebritiesComponent.prototype.closeCbProfile = function () {
        this.cbProfile = false;
        this.cbprofmask = false;
    };
    AllcelebritiesComponent.prototype.ongetFansandFolowers = function (id) {
        var _this = this;
        this.cbOvc.getFansandFolowers(id).subscribe(function (data) {
            _this.memPreferences = data;
        });
    };
    AllcelebritiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'allcelebrities',
            template: __webpack_require__("./src/app/allcelebrities/allcelebrities.component.html"),
            styles: [__webpack_require__("./src/app/allcelebrities/allcelebrities.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_observable_service__["a" /* ObservableService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AllcelebritiesComponent);
    return AllcelebritiesComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<Header></Header>\r\n<router-outlet></router-outlet>\r\n<footer></footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_menu_service__ = __webpack_require__("./src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aboutus_aboutus_component__ = __webpack_require__("./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__faqs_faqs_component__ = __webpack_require__("./src/app/faqs/faqs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contactus_contactus_component__ = __webpack_require__("./src/app/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__terms_terms_component__ = __webpack_require__("./src/app/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__privacy_privacy_component__ = __webpack_require__("./src/app/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__community_community_component__ = __webpack_require__("./src/app/community/community.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__help_help_component__ = __webpack_require__("./src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__celebrities_celebrities_component__ = __webpack_require__("./src/app/celebrities/celebrities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__credits_credits_component__ = __webpack_require__("./src/app/credits/credits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_observable_service__ = __webpack_require__("./src/app/services/observable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__mainpage_mainpage_component__ = __webpack_require__("./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__transactions_transactions_component__ = __webpack_require__("./src/app/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_register_service__ = __webpack_require__("./src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__allcelebrities_allcelebrities_component__ = __webpack_require__("./src/app/allcelebrities/allcelebrities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__guards_notAuth_guard__ = __webpack_require__("./src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_carousel__ = __webpack_require__("./node_modules/ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ng2_carouselamos__ = __webpack_require__("./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_page_scroll__ = __webpack_require__("./node_modules/ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__mypreferences_mypreferences_component__ = __webpack_require__("./src/app/mypreferences/mypreferences.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__home_password_match_directive__ = __webpack_require__("./src/app/home/password.match.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ngx_password_toggle__ = __webpack_require__("./node_modules/ngx-password-toggle/ngx-password-toggle.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ngx_password_toggle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_ngx_password_toggle__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























//import { AuthGuard } from './guards/auth.guard';
//import { NotAuthGuard } from './guards/notAuth.guard';










//import { Ng2ScrollableModule } from 'ng2-scrollable';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__aboutus_aboutus_component__["a" /* AboutusComponent */],
                __WEBPACK_IMPORTED_MODULE_14__faqs_faqs_component__["a" /* FaqsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__contactus_contactus_component__["a" /* ContactusComponent */],
                __WEBPACK_IMPORTED_MODULE_16__terms_terms_component__["a" /* TermsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__privacy_privacy_component__["a" /* PrivacyComponent */],
                __WEBPACK_IMPORTED_MODULE_18__community_community_component__["a" /* CommunityComponent */],
                __WEBPACK_IMPORTED_MODULE_19__help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_20__celebrities_celebrities_component__["a" /* CelebritiesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__credits_credits_component__["a" /* CreditsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__mainpage_mainpage_component__["a" /* MainpageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__transactions_transactions_component__["a" /* TransactionsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__allcelebrities_allcelebrities_component__["a" /* AllcelebritiesComponent */],
                __WEBPACK_IMPORTED_MODULE_34__mypreferences_mypreferences_component__["a" /* MypreferencesComponent */],
                __WEBPACK_IMPORTED_MODULE_35__home_password_match_directive__["a" /* EqualValidator */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_29_ngx_carousel__["a" /* NgxCarouselModule */],
                __WEBPACK_IMPORTED_MODULE_32_ng2_carouselamos__["a" /* Ng2CarouselamosModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_36_ngx_password_toggle__["NgxPasswordToggleModule"],
                __WEBPACK_IMPORTED_MODULE_33_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                //Ng2ScrollableModule,
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full', },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
                    //{ path : 'register', component : RegisterComponent},
                    //{ path : 'login', component : LoginComponent},
                    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_13__aboutus_aboutus_component__["a" /* AboutusComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'faqs', component: __WEBPACK_IMPORTED_MODULE_14__faqs_faqs_component__["a" /* FaqsComponent */] },
                    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_15__contactus_contactus_component__["a" /* ContactusComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'termsandconditions', component: __WEBPACK_IMPORTED_MODULE_16__terms_terms_component__["a" /* TermsComponent */] },
                    { path: 'privacypolicy', component: __WEBPACK_IMPORTED_MODULE_17__privacy_privacy_component__["a" /* PrivacyComponent */] },
                    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_19__help_help_component__["a" /* HelpComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'communityguidlines', component: __WEBPACK_IMPORTED_MODULE_18__community_community_component__["a" /* CommunityComponent */] },
                    { path: 'mainpage', component: __WEBPACK_IMPORTED_MODULE_23__mainpage_mainpage_component__["a" /* MainpageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'celebrities', component: __WEBPACK_IMPORTED_MODULE_20__celebrities_celebrities_component__["a" /* CelebritiesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'transactions', component: __WEBPACK_IMPORTED_MODULE_24__transactions_transactions_component__["a" /* TransactionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'allcelebrities', component: __WEBPACK_IMPORTED_MODULE_26__allcelebrities_allcelebrities_component__["a" /* AllcelebritiesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'credits', component: __WEBPACK_IMPORTED_MODULE_21__credits_credits_component__["a" /* CreditsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'mypreferences', component: __WEBPACK_IMPORTED_MODULE_34__mypreferences_mypreferences_component__["a" /* MypreferencesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] }
                ])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_menu_service__["a" /* MenuService */],
                __WEBPACK_IMPORTED_MODULE_22__services_observable_service__["a" /* ObservableService */],
                __WEBPACK_IMPORTED_MODULE_25__services_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_28__guards_notAuth_guard__["a" /* NotAuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/celebrities/celebrities.component.css":
/***/ (function(module, exports) {

module.exports = ".profpage{ background-size: cover; background-repeat: no-repeat; padding: 60px 0px;\r\n    overflow: hidden; position: relative; font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.inner_pages_wrap{ padding: 60px 0px; font-family: 'Raleway', sans-serif;}\r\n\r\n.lftnav_wrap{ list-style: none; padding: 0px 0px 50px 0px; margin: 0px; background-color: #fff;\r\n    -webkit-box-shadow:0px 0px 30px #ddd; -ms-box-shadow:0px 0px 30px #ddd;\r\n    box-shadow:0px 0px 30px #ddd;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.lftnav_wrap li{ font-size: 14px; border-bottom: 1px solid #ddd;}\r\n\r\n.lftnav_wrap li a{ display: block; padding: 15px 20px; \r\n    -webkit-transition: 0.3s ease-in-out;\r\n    transition: 0.3s ease-in-out; cursor: pointer;\r\n}\r\n\r\n.lftnav_wrap li a:hover{ background-color: #259dd0; color: #fff;}\r\n\r\n.pad_bot{ padding-bottom: 20px;}\r\n\r\n.spons_cont{ font-size: 18px;}\r\n\r\n.cbhdng{ font-size:14px; font-weight:400;}\r\n\r\n.prof_active{ background-color: #259dd0; color: #fff;}\r\n\r\n.bc_btn{ width: 100%; display: block; background-color: #259dd0; color: #fff; text-align: center; font-size:16px; border-radius:0px; margin: 40px auto; height: 50px;\r\n        -webkit-box-shadow: 0px 3px 0px #1c262a; -ms-box-shadow: 0px 3px 0px #1c262a;\r\n    box-shadow: 0px 3px 0px #1c262a; font-weight:600;\r\n}\r\n\r\n/*profile page css*/\r\n\r\n.cvrwrap{ position: relative;}\r\n\r\n.profile_wrapper{ padding: 0px; margin: 0px; position: relative; width: 100%;}\r\n\r\n.celeb_pic{ width: 100%;  display: block; margin:  0px auto 15px auto; position: relative;\r\n    /* -webkit-border-radius:100%; -moz-border-radius:100%; -ms-border-radius:100%; border-radius:100%;  */\r\n    background-color: #fff; z-index: 20; overflow: hidden; padding: 0 0 75% 0;\r\n    /* -webkit-box-shadow: 0px 0px 3px #666; -ms-box-shadow: 0px 0px 3px #666; box-shadow: 0px 0px 3px #666; */ border-radius:4px;\r\n}\r\n\r\n.celeb_dat{ position: absolute; bottom: 0;  width: 100%; padding-top: 10px;\r\n  background: linear-gradient(45deg, rgba(38,167,217,0.81) 0%,rgba(38,167,217,0.81) 1%,rgba(21,29,65,0.82) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cf26a7d9', endColorstr='#d1151d41',GradientType=1 );\r\n}\r\n\r\n.celeb_pic > img{ position: absolute; width: 100%; height: 100%;}\r\n\r\n.celeb_title{ font-size:18px; font-weight: bold; text-align: center; padding-bottom: 0px; color: #fff;}\r\n\r\n.celeb_desig{ font-size:14px; font-weight: 400; text-align: center; padding-bottom: 0px; color: #fff;}\r\n\r\n.spacer_celeb{ margin-bottom: 30px; cursor: pointer;}\r\n\r\n/* .spacer_celeb:hover .celeb_title{ color: #259dd0;}\r\n.spacer_celeb:hover .celeb_desig{ color: #259dd0!important;} */\r\n\r\n/*profile page css*/\r\n\r\n.c_page{ position: relative;}\r\n\r\n.title_mask{ padding: 0px 0px; background-color: rgba(0,0,0,0.5); position: absolute; bottom: 0; width: 90%;\r\n     z-index: 10; right: 0; margin: 0px; padding-left: 150px; list-style: none;\r\n}\r\n\r\n.title_mask li{ float: left; color: #fff; padding: 10px 80px 10px 0;}\r\n\r\n.big{ display: block; font-size: 25px; font-weight:600; text-transform: uppercase; padding: 0px; margin: 0px; line-height: 1.5;}\r\n\r\n.title_mask li > small{ font-size:14px;}\r\n\r\n.profile_manager{ position: absolute; left: 40px; bottom: -80px;  z-index: 15;\r\n}\r\n\r\n.profile_box{ width: 150px; height: 150px; border-radius:100%; \r\n    background-color: #fff; z-index: 20; overflow: hidden; border: 1px solid #ccc;\r\n    -webkit-box-shadow: 0px 0px 30px #666; -ms-box-shadow: 0px 0px 30px #666; box-shadow: 0px 0px 30px #666;\r\n}\r\n\r\n.profile_edit{ color: #000; font-size:14px; text-align: center; position: relative; top: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile_info{ padding-left: 200px;}\r\n\r\n.profile_info ul{ list-style: none; padding: 30px 0px 30px 0px; margin: 0px;}\r\n\r\n.profile_info ul li{ float: left; width: 25%;}\r\n\r\n.profile_info ul li span{ text-transform: uppercase; color: #666; font-size:14px; font-weight:400; display: block;}\r\n\r\n.profile_info ul li p{ text-transform: capitalize; color: #000; font-size:16px; font-weight:600;}\r\n\r\n#celebs_list{ border-top: 1px solid #ddd; padding: 50px 0px;}\r\n\r\n.lgn_hdng {\r\n    color: #000;\r\n    font-weight: 300;\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    padding-bottom: 30px;\r\n  }\r\n\r\n.date_field{ margin-top:12px!important;}\r\n\r\n.error_mes{ color:red;}\r\n\r\n.image-upload > input {\r\n    display: none;\r\n  }\r\n\r\n.image-upload {\r\n    width: 150px;\r\n    height: 150px;\r\n    border-radius: 100%;\r\n    background-color: #fff;\r\n    z-index: 20;\r\n    overflow: hidden;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-shadow: 0px 0px 30px #666;\r\n    -ms-box-shadow: 0px 0px 30px #666;\r\n    box-shadow: 0px 0px 30px #666;\r\n  }\r\n\r\n.img_boxer{ overflow: hidden; padding:0 0 75% 0; position: relative;}\r\n\r\n.bpc{ width: 100%; height: 100%; position: absolute; top: 0;}\r\n\r\n.pfimger{ width:150px; height:150px;}\r\n\r\n.membername {margin-left: 14px;cursor: pointer;}\r\n\r\n.card-title, .card-text {padding-left: 1rem !important;}\r\n\r\n.img-fluid1 { width: auto;}\r\n\r\n.cardspace{ padding: 30px 20px;}\r\n\r\n.feed_bg{ max-width: auto; max-width: 100%; padding: 30px!important; overflow: hidden;}\r\n\r\n.space_imng{ margin-bottom: 25px!important;}\r\n\r\n.mycard_space{ margin-bottom: 25px;}\r\n\r\n#mymedias{ margin-top: 30px;}\r\n\r\n.mybgspacer{ position: relative; border: 3px solid #fff; padding:10px 10px; min-height: 180px; overflow: hidden; }\r\n\r\n.disable_btn{ cursor:not-allowed;}\r\n\r\n.update_profileform{ padding:30px; -webkit-box-shadow:0px 0px 60px #ccc; -ms-box-shadow:0px 0px 60px #ccc;\r\n                     box-shadow:0px 0px 60px #ccc; background-color:#fff; border:1px solid #ddd; margin-bottom:0px;\r\n                      -webkit-transition: 0.3s ease-in-out;\r\n              transition: 0.3s ease-in-out;          \r\n}\r\n\r\n.show_updpform{   margin-bottom:50px;}\r\n\r\n.lg_email {\r\n  border: none;\r\n  border-radius: 0px;\r\n  border-bottom: 1px solid #ccc;\r\n  outline: none;\r\n  box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  font-size: 12px;\r\n  -webkit-transition: 0.3s ease-in-out;\r\n  transition: 0.3s ease-in-out;\r\n  position: relative;\r\n  padding: 0 0 5px 0px;\r\n}\r\n\r\n.lg_email:focus {\r\n    border-color: #259dd0;\r\n    color: #259dd0;\r\n  }\r\n\r\n.lg_email::-webkit-input-placeholder {\r\n    color: #ccc;\r\n  }\r\n\r\n.embx {\r\n  position: relative;\r\n}\r\n\r\n.usicn {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 5px;\r\n  z-index: 10;\r\n  color: #ccc;\r\n}\r\n\r\n.lg_email:focus .usicn {\r\n  color: #259dd0 !important;\r\n}\r\n\r\n.embx > label {\r\n  color: #ccc;\r\n  font-size: 12px;\r\n}\r\n\r\n.embx2 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.lgnbtner {\r\n  float: right;\r\n  background-color: #259dd0;\r\n  border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.chk_box {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding-left: 30px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 13px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  color: #ccc;\r\n}\r\n\r\n.chk_box input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 16px;\r\n  width: 16px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.chk_box:hover input ~ .checkmark {\r\n  background-color: #fff;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark {\r\n  background-color: #259dd0;\r\n  border-color: #259dd0;\r\n}\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n.chk_box .checkmark:after {\r\n  left: 6px;\r\n  top: 3px;\r\n  width: 4px;\r\n  height: 7px;\r\n  border: solid white;\r\n  border-width: 0 2px 2px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.fgp {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  left: 0;\r\n  padding: 12px 50px;\r\n  font-size: 13px;\r\n}\r\n\r\n.signup_hdng {\r\n  color: #259dd0;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.hp_blk {\r\n  list-style: none;\r\n  font-size: 12px;\r\n}\r\n\r\n.upd_btn{\r\n  font-weight:600; background-color: #259dd0;\r\n  border-radius:36px; padding-left: 30px; padding-right: 30px;\r\n}\r\n\r\n.media_bg{ position: absolute; top: 50%; left: 50%; width: 100%; height: 100%;\r\n  -webkit-transform: translate(-50%, -50%); -mos-transform: translate(-50%, -50%); transform: translate(-50%, -50%);\r\n}\r\n\r\n@media screen and (max-width: 990px){\r\n  .myresp_cont{ max-width: 100%;}\r\n  .title_mask{ width: 100%; padding-left: 120px;}\r\n  .profile_manager{ left: 10px;}\r\n  .image-upload{ width: 80px; height: 80px;}\r\n  .bc_btn{ font-size:12px;}\r\n}\r\n\r\n@media screen and (max-width: 767px){\r\n    .profile_info{ display: none;}\r\n    .profile_tabs{ margin-top:90px;}\r\n    .title_mask > li{ padding-right: 50px;}\r\n    .bc_btn{ font-size:14px;}\r\n    .inner_pages_wrap{ padding: 40px 0px;}\r\n    .lftnav_wrap{ margin-bottom: 50px;}\r\n    .celeb_pic{ padding: 0 0 100% 0;}\r\n    .update_profileform{ margin-top:90px;}\r\n    \r\n    \r\n  }\r\n\r\n@media screen and (max-width: 660px){\r\n    .tabs_header > li{ font-size: 12px;}\r\n    .mytabicn{  font-size: 1rem;}\r\n  \r\n    .prof_infodata, .prof_feedsdata, .prof_media {\r\n      padding: 30px 10px 0px 10px;\r\n  }\r\n  .celeb_logo{ width:80px;}\r\n  .prof_infodata h3{ font-size:13px;}\r\n  .prof_infodata p{ font-size: 12px;}\r\n  \r\n  }\r\n\r\n@media screen and (max-width: 480px){\r\n    .title_mask > li{ padding-right: 10px; font-size: 12px;}\r\n    .image-upload{ width: 60px; height: 60px;}\r\n    .profile_manager{ left: 10px; bottom: -64px;}\r\n    .title_mask{ padding-left: 90px;}\r\n    .tabs_header > li{  padding: 15px 5%;}\r\n    .upd_btn{ width: 100%; display: block; margin: 10px auto;}\r\n  }\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/celebrities/celebrities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid profpage\" [style.background-image]=\"'url(\\'assets/images/land_bg.jpg\\')'\">\r\n  <div class=\"container\">\r\n   \r\n    \r\n  </div>\r\n</div>\r\n\r\n<!--video container ends-->\r\n\r\n\r\n\r\n<div class=\"container-fluid inner_pages_wrap\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-sm-12 col-md-3 col-lg-3\">\r\n        <ul class=\"lftnav_wrap\">\r\n          <li><a (click)=\"profilePage()\"><i class=\"far fa-user-circle\"></i> My Profile</a></li>\r\n          <li class=\"prof_active\"><a (click)=\"celebPage()\"><i class=\"far fa-star\"></i> My Celebrities</a></li>\r\n          <li><a (click)=\"transactionPage()\"><i class=\"far fa-money-bill-alt\"></i> My Transactions</a></li>\r\n          <!-- <li><a (click)=\"preferencePage()\"><i class=\"far fa-money-bill-alt\"></i> My Preferences</a></li> -->\r\n        </ul>\r\n\r\n      </div>\r\n      <!--left side nav ends-->\r\n\r\n      <div class=\"col-12 col-sm-12 col-md-9 col-lg-9\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n\r\n            <div class=\"cvrwrap\">\r\n                <div class=\"profile_wrapper\">\r\n                  <img src=\"assets/images/coverpage.jpg\" class=\"c_page\" width=\"100%\" alt=\"coverpage\" title=\"coverpage\">\r\n                  <ul class=\"title_mask\">\r\n                    <li>\r\n                      <span class=\"big\">{{memPreferences.followers}}</span>\r\n                      <small>Followers</small>\r\n                    </li>\r\n    \r\n                    <li>\r\n                      <span class=\"big\">{{memPreferences.fans}}</span>\r\n                      <small>Following</small>\r\n                    </li>\r\n    \r\n                    <li>\r\n                      <span class=\"big\">{{memPreferences.posts}}</span>\r\n                      <small>Posts</small>\r\n                    </li>\r\n                  </ul>\r\n    \r\n                  <div class=\"profile_manager\">\r\n                    <!--<div class=\"profile_box\">\r\n                    <img src=\"{{imageUrl+profile.avtar_imgPath}}\" class=\"act_bg\" width=\"100%\" alt=\"{{profile.name}}\" title=\"{{profile.name}}\">\r\n                    </div>-->\r\n    \r\n                    <div class=\"image-upload\">\r\n                        <div class=\"img_boxer\">\r\n                        <!--<form [formGroup]=\"formProfile\" enctype=\"multipart/form-data\" method=\"post\" name=\"fileinfo\">-->\r\n                        <label for=\"selectFile\">\r\n                          <img src=\"{{imageUrl+profile.avtar_imgPath}}\" width=\"100%\" class=\"bpc\"/>\r\n                          <img *ngIf=\"profile.avtar_imgPath==''\"  src=\"assets/images/profile_pic.jpg\" width=\"100%\" alt=\"{{profile.name}}\" title=\"{{profile.name}}\" />\r\n                        </label>\r\n                        <input type=\"file\" id=\"selectFile\" (change)=\"readURL($event)\" name=\"selectFile\" class=\"form-group\" />\r\n    \r\n                        <!--<input type=\"file\" id=\"file-input\" (change)=\"readURL($event)\" />-->\r\n                        <!--</form>-->\r\n                      </div>\r\n                      </div>\r\n    \r\n                      <p class=\"profile_edit\" (click)=\"openPform(profile._id)\"><i class=\"fas fa-pencil-alt\"></i> Edit</p>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n    \r\n    \r\n            <div class=\"profile_info\">\r\n              <ul>\r\n                <li>\r\n                  <span>Name</span>\r\n                  <p>{{profile.name}}</p>\r\n              </li>\r\n              <li>\r\n                  <span>Occupation</span>\r\n                  <p>{{profile.profession}} </p>\r\n              </li>\r\n              <li>\r\n                  <span>Country</span>\r\n                  <p>{{profile.country}}</p>\r\n              </li>\r\n              <!--<li>\r\n                  <button type=\"button\" class=\"btn btn-default flw_btn\">Follow</button>\r\n              </li>-->\r\n              <div class=\"clearfix\"></div>\r\n              </ul>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-12 update_profileform\" *ngIf=\"pform\" id=\"pf\">\r\n\r\n          <form [formGroup]=\"profileForm\" (ngSubmit)=\"onUpdateProfile(profile)\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"name\">First Name</label>\r\n\r\n\r\n                <input type=\"text\" [(ngModel)]=\"profile.name\" class=\"form-control lg_email reg_email\" id=\"profile.name\" placeholder=\"First Name\" formControlName=\"profile.name\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"lastname\">Last Name</label>\r\n                <input type=\"text\" [(ngModel)]=\"profile.lastName\" class=\"form-control lg_email reg_email\" id=\"profile.lastName\" placeholder=\"Last Name\" formControlName=\"profile.lastName\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"mobileNumber\">Phone</label>\r\n                <input type=\"number\" [(ngModel)]=\"profile.mobileNumber\" class=\"form-control lg_email reg_email\" id=\"profile.mobileNumber\" placeholder=\"Mobile Number\" formControlName=\"profile.mobileNumber\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" [(ngModel)]=\"profile.email\" class=\"form-control lg_email reg_email\" id=\"email\" placeholder=\"profile.email\" formControlName=\"profile.email\">\r\n              </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-row\">\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"gender\">Gender</label>\r\n                <select id=\"profile.gender\" [(ngModel)]=\"profile.gender\" class=\"form-control lg_email reg_email\" formControlName=\"profile.gender\">\r\n\r\n                  <option value=\"Male\" selected>Male</option>\r\n                  <option value=\"Female\">Female</option>\r\n                  <option value=\"Others\">Others</option>\r\n                </select>\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"dateOfBirth\">Date of Birth</label>\r\n                <input type=\"date\" [(ngModel)]=\"profile.dateOfBirth\" class=\"form-control lg_email reg_email date_field\" id=\"profile.dateOfBirth\" formControlName=\"profile.dateOfBirth\" />\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"location\">Location</label>\r\n                <input type=\"text\" [(ngModel)]=\"profile.location\" class=\"form-control lg_email reg_email\" id=\"profile.location\" placeholder=\"Location\" formControlName=\"profile.location\">\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"about\">About</label>\r\n                <input type=\"text\" [(ngModel)]=\"profile.aboutMe\" class=\"form-control  lg_email reg_email\" id=\"profile.aboutMe\" placeholder=\"About Me\" formControlName=\"profile.aboutMe\">\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n           \r\n\r\n            <div *ngIf=\"isValid\">\r\n              <p class=\"error_mes\">{{successMessage}}</p>\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary upd_btn\">Update Profile </button>\r\n            <button type=\"button\" class=\"btn btn-primary upd_btn\" (click)=\"closePform()\">Close </button>\r\n\r\n          </form>\r\n\r\n        </div><br/><br/>\r\n\r\n\r\n\r\n          <div class=\"row\" id=\"celebs_list\">\r\n\r\n            <div class=\"col-6 col-sm-6 col-md-4 col-lg-4 spacer_celeb\" *ngFor=\"let c of interests;\">\r\n                <div class=\"celeb_pic\">\r\n                  <img src=\"{{imageUrl+c.celebProfile.avtar_imgPath}}\" alt=\"{{c.celebProfile.name}}\" title=\"{{c.celebProfile.name}}\" width=\"100%\">\r\n                  \r\n                  <div class=\"celeb_dat\">\r\n                      <h3 class=\"celeb_title\">{{c.celebProfile.name}}</h3>\r\n                      <p class=\"celeb_desig\">{{c.celebProfile.profession}}</p>\r\n                  </div>\r\n                </div>\r\n                \r\n                \r\n            </div>\r\n           \r\n      </div>\r\n    </div>\r\n      <!--mid Cont ends-->\r\n\r\n      \r\n\r\n\r\n      \r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/celebrities/celebrities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CelebritiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_observable_service__ = __webpack_require__("./src/app/services/observable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_register_service__ = __webpack_require__("./src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CelebritiesComponent = /** @class */ (function () {
    function CelebritiesComponent(routSvc, cbOvc, route, registerService, fb, ele) {
        var _this = this;
        this.routSvc = routSvc;
        this.cbOvc = cbOvc;
        this.route = route;
        this.registerService = registerService;
        this.fb = fb;
        this.ele = ele;
        // imageUrl: any = "http://13.58.150.195:4300/";
        //demo
        this.imageUrl = "http://18.219.37.107:4300/";
        this.name = localStorage.getItem('loginSessId');
        this.isValid = false;
        this.cbOvc.getCelebrities(this.email)
            .subscribe(function (res) { return _this.Celebrities = res; });
        console.log(this.Celebrities);
        this.pform = false;
    }
    CelebritiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("session" + this.name);
        this.onProfileFormGroup();
        this.email = localStorage.getItem('loginSessId');
        console.log("seesion" + localStorage.getItem('loginSessId'));
        this.id = localStorage.getItem('memberId');
        this.test = this.getMemberByEmail(this.email);
        //alert(this.test);
        this.getlistofinterests(this.test);
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            // console.log("mid:" + this.id);
        });
        this.getCelebrityById(this.id);
        this.infoTab = true;
        this.ongetprofilebyemail(this.email);
        this.getMemberByEmail(this.email);
        console.log("session" + this.name);
    };
    CelebritiesComponent.prototype.profilePage = function () {
        //this.routSvc.navigateByUrl('/profile');
        this.routSvc.navigate(['/profile/']);
    };
    CelebritiesComponent.prototype.celebPage = function () {
        this.routSvc.navigate(['/celebrities/']);
    };
    CelebritiesComponent.prototype.transactionPage = function () {
        this.routSvc.navigate(['/transactions/']);
    };
    CelebritiesComponent.prototype.preferencePage = function () {
        this.routSvc.navigate(['/mypreferences']);
    };
    CelebritiesComponent.prototype.openPform = function (id) {
        // alert(id);
        this.pform = true;
        var frmwrap = document.getElementById('pf');
        frmwrap.classList.add('show_updpform');
    };
    CelebritiesComponent.prototype.onProfileFormGroup = function () {
        this.profileForm = this.fb.group({
            'profile.name': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.lastName': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.mobileNumber': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.email': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.location': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.aboutMe': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.gender': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.dateOfBirth': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
        });
    };
    CelebritiesComponent.prototype.closePform = function () {
        this.pform = false;
        var frmwrap = document.getElementById('pf');
        frmwrap.classList.remove('show_updpform');
    };
    CelebritiesComponent.prototype.getCelebrityById = function (id) {
        var _this = this;
        id = this.id;
        this.cbOvc.getCelebrityById(id).subscribe(function (data) {
            _this.celebsProfile = data;
            console.log("celebsProfile:" + data);
        });
        return this.celebsProfile;
    };
    CelebritiesComponent.prototype.ongetprofilebyemail = function (email) {
        var _this = this;
        this.email = email;
        this.cbOvc.onGetProfileByEmail(email).subscribe(function (data) {
            _this.profile = data;
            console.log(data);
            _this.oldImage = _this.profile.avtar_imgPath;
        });
        return this.profile;
    };
    CelebritiesComponent.prototype.getMemberByEmail = function (email) {
        var _this = this;
        email = this.email;
        this.cbOvc.getMemberByEmail(this.email).subscribe(function (x) {
            console.log("testingid" + x._id);
            _this.id = x._id;
            // this.test = x._id;
            localStorage.setItem('memberId', x._id);
            console.log("final" + _this.id);
            _this.onGetContentByID();
            _this.ongetFansandFolowers(_this.id);
        });
        return this.id;
    };
    CelebritiesComponent.prototype.onGetContentByID = function () {
        var _this = this;
        this.cbOvc.onGetContentByID(this.id).subscribe(function (result) {
            _this.feedDetails = result;
            _this.postlist = result.length;
            console.log(_this.feedDetails);
        }, function (error) { return _this.errorMessage = error; });
        console.log(this.errorMessage);
        return this.feedDetails;
    };
    CelebritiesComponent.prototype.getlistofinterests = function (id) {
        var _this = this;
        id = this.id;
        console.log("tr" + this.test);
        this.cbOvc.getCelebrityById(this.id).subscribe(function (interests) {
            _this.interests = interests;
            console.log(interests);
        });
        // return this.interests;
    };
    CelebritiesComponent.prototype.onUpdateProfile = function (profile) {
        if (this.profileForm.valid) {
            this.isValid = false;
            this.pform = false;
            this.cbOvc.onUpdateMember(profile).subscribe(function (result) {
                console.log(result);
            });
        }
        else {
            this.isValid = true;
            this.successMessage = "please Enter User Details";
            this.pform = true;
        }
    };
    CelebritiesComponent.prototype.readURL = function (event) {
        var files = this.ele.nativeElement.querySelector('#selectFile').files;
        if (files.length > 0 && files.count != 0 && files != null) {
            var req = files;
            var formData = new FormData();
            var file = files[0];
            this.images = file.name;
            formData.append('selectFile', file, file.name);
            formData.append('avtars', file, file.id);
            console.log(formData);
            console.log(files);
            if (this.images != null && this.images != "") {
                this.profile.avtar_originalname = this.images.toString();
                this.profile.avtar_imgPath = "avtars/" + this.images.toString();
            }
            else {
                this.profile.avtar_imgPath = this.oldImage;
            }
            this.cbOvc.onfileupload(this.id, formData).subscribe(function (res) { return console.log(res); });
            this.cbOvc.onUpdateMember(this.profile).subscribe(function (result) {
                console.log(result);
            });
        }
        this.getMemberByEmail(this.email);
    };
    CelebritiesComponent.prototype.ongetFansandFolowers = function (id) {
        var _this = this;
        this.cbOvc.getFansandFolowers(id).subscribe(function (data) {
            _this.memPreferences = data;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CelebritiesComponent.prototype, "fileInput", void 0);
    CelebritiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'celebrities',
            template: __webpack_require__("./src/app/celebrities/celebrities.component.html"),
            styles: [__webpack_require__("./src/app/celebrities/celebrities.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_observable_service__["a" /* ObservableService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], CelebritiesComponent);
    return CelebritiesComponent;
}());



/***/ }),

/***/ "./src/app/community/community.component.css":
/***/ (function(module, exports) {

module.exports = ".under{ padding: 0px; margin: 0px;}"

/***/ }),

/***/ "./src/app/community/community.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid profpage\" [style.background-image]=\"'url(\\'assets/images/land_bg.jpg\\')'\">\r\n  <div class=\"container\">\r\n   \r\n    \r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid under\">\r\n\r\n \r\n          <img src=\"assets/images/under_conc.jpg\" width=\"100%\" alt=\"Community Guidline\" title=\"Community Guidline\">\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/community/community.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommunityComponent = /** @class */ (function () {
    function CommunityComponent() {
    }
    CommunityComponent.prototype.ngOnInit = function () {
    };
    CommunityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'communityguidlines',
            template: __webpack_require__("./src/app/community/community.component.html"),
            styles: [__webpack_require__("./src/app/community/community.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommunityComponent);
    return CommunityComponent;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  contactus works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contactus',
            template: __webpack_require__("./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__("./src/app/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/credits/credits.component.css":
/***/ (function(module, exports) {

module.exports = ".profpage{ background-size: cover; background-repeat: no-repeat; padding: 60px 0px;\r\n    overflow: hidden; position: relative; font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.inner_pages_wrap{ padding: 60px 0px; font-family: 'Raleway', sans-serif;}\r\n\r\n.cred_box{ position: relative; display: block; width: 200px; height: 200px; border-radius:100%;\r\n    border:1px solid #ddd; -webkit-box-shadow:0px 0px 35px #ccc; display: block; margin: 50px auto; -ms-box-shadow:0px 0px 35px #ccc; box-shadow:0px 0px 35px #ccc; \r\n}\r\n\r\n.cred_icn{ max-width: 250px; margin: 0px auto;  }\r\n\r\n.creds_details{ width: 430px; display: block; margin: 0px auto;}\r\n\r\n.credits_btn{ background-color: #259dd0;  font-weight:bold; color: #fff;\r\n    text-transform: capitalize; margin-top: 30px; margin-left: 30px; border-radius:36px; text-align: center; padding-left: 30px; padding-right: 30px;\r\n}\r\n\r\n.credvalue{ font-size:30px; font-weight:bold; color: #259dd0;}\r\n\r\n.cred_hdng{ font-size:20px; font-weight:bold; text-transform: uppercase; margin-bottom: 0px; padding-bottom: 0px;}\r\n\r\n.creddetborde{ position: relative; margin-top: 30px;}\r\n\r\n.creddetborde:after{ position: absolute; content: \"\"; right: 0; top: -20px; width: 1px; height: 100px;\r\n    background-color: #ccc;\r\n}\r\n\r\n/*RADIO BUTTONS CODE*/\r\n\r\n.rdbtn {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.rdbtn input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top: 4px;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px; border-radius: 50%;\r\n  background-color: #eee;\r\n}\r\n\r\n.rdbtn:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n\r\n.rdbtn input:checked ~ .checkmark {\r\n  background-color: #2196F3;\r\n}\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.rdbtn input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n.rdbtn .checkmark:after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.payment_btn{\r\n  background-color: #259dd0;  font-weight:bold; color: #fff;\r\n    text-transform: capitalize; margin-top: 10px; border-radius:36px; text-align: center;\r\n    padding-left: 30px; padding-right: 30px;\r\n}\r\n\r\n.nopad_left{ padding-left: 0px;}\r\n\r\n.nopad_right{ padding-right: 0px;}\r\n\r\n.payment_box{ border: none; color:#000; border-bottom: 1px solid #ccc; padding: 0px; margin: 0px; border-radius:0px; font-size:13px;\r\n  outline: none; -webkit-box-shadow: none; box-shadow: none; -webkit-appearance: none; -moz-appearance: none; appearance: none; background-repeat: no-repeat; background-position: center right;\r\n}\r\n\r\n.payment_box .noselect{ background-image: none;}\r\n\r\n.payment_box > option{ font-size:14px;}\r\n\r\n@media screen and (max-width: 767px){\r\n .creddetborde:after{ display: none;}\r\n  .cred_hdng{ text-align: center;}\r\n  .credits_btn{ margin: 10px auto; display: block;}\r\n  .nocred_space{ padding-right: 0px;}\r\n}"

/***/ }),

/***/ "./src/app/credits/credits.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid profpage\" [style.background-image]=\"'url(\\'assets/images/land_bg.jpg\\')'\">\r\n  <div class=\"container\">\r\n    \r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"isMainContainer\">\r\n  <div class=\"container inner_pages_wrap\">\r\n      <div class=\"row mx-auto\">\r\n         <div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">\r\n             <div class=\"cred_box\">\r\n                 <img src=\"assets/images/payment.png\" class=\"cred_icn\" width=\"100%\" alt=\"credits\" title=\"credits\">\r\n             </div>\r\n           <div class=\"creds_details\">\r\n             <div class=\"row\">\r\n                 <div class=\"col-12 col-sm-12 col-md-6 creddetborde\">\r\n                     <h3 class=\"cred_hdng\">My Credits</h3>\r\n                     <!-- <p>Available Credits <span class=\"credvalue\">{{profile.availableCredits}}</span></p> -->\r\n                 </div>\r\n                 <div class=\"col-12 col-sm-12 col-md-6\">\r\n                     <button type=\"button\" class=\"btn btn-default credits_btn\" (click)=\"onBuyCredits()\">Buy Credits</button>\r\n                 </div>\r\n             </div>\r\n           </div>\r\n         </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"isCountryListContainer\">\r\n  <div class=\"container inner_pages_wrap\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-sm-6 col-md-6  mx-auto\">\r\n\r\n      <label for=\"countryCode\"><b>Select your Country</b></label>\r\n      <select class=\"form-control payment_box\" [style.background-image]=\"'url(\\'assets/images/down-arrow2.png\\')'\" id=\"countryCode\" (change)=\"onGetCountryCode()\" [(ngModel)]=\"countryCode\">\r\n        <option [ngValue]=\"undefined\" disabled  selected> Select Your Country </option>\r\n        <option *ngFor=\"let item of exchange\" value=\"{{item.countryCode}}\">{{item.countryName}}</option>\r\n      </select>\r\n\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"isPackageContainer\">\r\n  <div class=\"container inner_pages_wrap\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-12 col-sm-6 col-md-6  mx-auto\">\r\n    <span><b>Select Package</b></span>\r\n      <div *ngFor=\"let item of creditPackage\">\r\n        <label class=\"rdbtn\">\r\n        <input type=\"radio\" id=\"package\" (change)=\"onGetPackage(item.credits,item._id)\" name=\"package\"  [(ngModel)]=\"package\" value=\"{{item.credits}}\" />\r\n        {{item.credits}}\r\n        <span class=\"checkmark\"></span>\r\n      </label>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"isCreditsContainer\">\r\n  <div class=\"container inner_pages_wrap\">\r\n    <form [formGroup]=\"formPackage\">\r\n\r\n     \r\n        <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 mx-auto\">\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"cardType\"><b>Card Type </b></label>\r\n            <select id=\"year\" [(ngModel)]=\"cardType\" class=\"form-control payment_box\" [style.background-image]=\"'url(\\'assets/images/down-arrow2.png\\')'\" [formControl]=\"formPackage.controls['cardType']\">\r\n              <option [ngValue]=\"undefined\" disabled  selected> Select Card Type </option>\r\n              <option value=\"mastero\">Master</option>\r\n              <option value=\"visa\">Visa</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"cardNumber\"><b>Card Number</b></label>\r\n            <input type=\"text\" [(ngModel)]=\"cardNumber\" placeholder=\"Enter Card Number\" class=\"form-control payment_box noselect\" [formControl]=\"formPackage.controls['cardNumber']\" />\r\n        \r\n        </div>\r\n     \r\n\r\n     \r\n        \r\n        <div class=\"col-12 nopad_left\">\r\n            <label class=\"mr-auto\"><b>Expiry Date</b></label>\r\n\r\n            <div class=\"row\">\r\n            <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 nocred_space\">\r\n              <select id=\"month\" [(ngModel)]=\"expiryMonth\" class=\"form-control payment_box\" [style.background-image]=\"'url(\\'assets/images/down-arrow2.png\\')'\" [formControl]=\"formPackage.controls['expiryMonth']\">\r\n                <option [ngValue]=\"undefined\" disabled  selected> Select Month </option>\r\n                <option *ngFor=\"let item of months\" value=\"{{item.month}}\">{{item.month}}</option>\r\n            </select>\r\n            </div>\r\n\r\n            <div class=\"col-12 col-sm-6 col-md-4 col-lg-6 nopad_right\">\r\n               <select id=\"year\" [(ngModel)]=\"expiryYear\" class=\"form-control payment_box\" [style.background-image]=\"'url(\\'assets/images/down-arrow2.png\\')'\" [formControl]=\"formPackage.controls['expiryYear']\">\r\n                <option [ngValue]=\"undefined\" disabled  selected> Select Year </option>\r\n                <option *ngFor=\"let item of year.getAll()\" value=\"{{item.year}}\">{{item.year}}</option>\r\n            </select>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div><br/>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"cvvNumber\"><b>cvv / cvc</b></label>\r\n          <input type=\"text\" [(ngModel)]=\"cvvNumber\" placeholder=\"Enter CVV / CVC\" class=\"form-control payment_box noselect\" [formControl]=\"formPackage.controls['cvvNumber']\" />\r\n        </div>\r\n      \r\n\r\n        <div class=\"form-group\">\r\n            <button type=\"button\" class=\"btn btn-default payment_btn\" value=\"Make Payment\" (click)=\"onMakePayment()\">Make Payment</button>\r\n          </div>\r\n    \r\n\r\n\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/credits/credits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_observable_service__ = __webpack_require__("./src/app/services/observable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_year__ = __webpack_require__("./src/app/models/year.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreditsComponent = /** @class */ (function () {
    function CreditsComponent(routSvc, obSrvc, route, fb, year) {
        this.routSvc = routSvc;
        this.obSrvc = obSrvc;
        this.route = route;
        this.fb = fb;
        this.year = year;
        // imageUrl: any = "http://13.58.150.195:4300/";
        //imageUrl: any = "http://18.218.85.172:4300/";
        //demo
        this.imageUrl = "http://18.219.37.107:4300/";
        //imageUrl: any = "http://prodapi.celebkonect.com:4300";
        this.name = localStorage.getItem('loginSessId');
        this.isMainContainer = true;
        this.isCountryListContainer = false;
        this.isPackageContainer = false;
        this.isCreditsContainer = false;
        this.months = [{ month: "01" }, { month: "02" }, { month: "03" },
            { month: "04" }, { month: "05" }, { month: "06" },
            { month: "07" }, { month: "08" }, { month: "09" },
            { month: "10" }, { month: "11" }, { month: "12" }];
        this.isMainContainer = true;
        this.isCountryListContainer = false;
        this.isPackageContainer = false;
        this.isCreditsContainer = false;
    }
    CreditsComponent.prototype.ngOnInit = function () {
        this.email = localStorage.getItem('loginSessId');
        console.log("seesion" + localStorage.getItem('loginSessId'));
        this.id = localStorage.getItem('memberId');
        this.getCreditById(this.id);
        this.onGetAllExchanges();
        this.onCreateFormGroup();
    };
    CreditsComponent.prototype.getCreditById = function (id) {
        var _this = this;
        return this.obSrvc.getMemberByID(this.id).subscribe(function (result) {
            _this.profile = result;
            console.log(_this.profile);
        });
    };
    CreditsComponent.prototype.onCreateFormGroup = function () {
        this.formPackage = this.fb.group({
            cardNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            expiryMonth: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            expiryYear: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            cvvNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            cardType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    CreditsComponent.prototype.onBuyCredits = function () {
        this.isMainContainer = false;
        this.isCountryListContainer = true;
        this.isPackageContainer = false;
        this.isCreditsContainer = false;
    };
    CreditsComponent.prototype.onGetCountryCode = function () {
        var _this = this;
        //alert(this.countryCode);
        this.obSrvc.onGetPackagesByCountryCode(this.countryCode).subscribe(function (result) {
            _this.creditPackage = result;
        });
        this.isMainContainer = false;
        this.isCountryListContainer = false;
        this.isPackageContainer = true;
        this.isCreditsContainer = false;
    };
    CreditsComponent.prototype.onGetPackage = function (pack, id) {
        var _this = this;
        if (this.creditPackage.length > 0) {
            this.creditsByCode = this.creditPackage.filter(function (m) { return m._id == id; })[0];
            var packages = {
                memberId: this.id,
                packageRefId: id,
                creditValue: pack,
                equivalentAmount: this.creditsByCode.amount,
                paymentType: "credit",
                createdBy: localStorage.getItem('loginUserName')
            };
            this.obSrvc.onCreatePaymentTransaction(packages).subscribe(function (data) {
                console.log(data);
                if (data.message == "paymentTransaction saved successfully") {
                    _this.paymentId = data.paymentData._id;
                    _this.isMainContainer = false;
                    _this.isCountryListContainer = false;
                    _this.isPackageContainer = false;
                    _this.isCreditsContainer = true;
                }
                else {
                    console.log(data.message);
                }
            });
        }
    };
    CreditsComponent.prototype.onGetAllExchanges = function () {
        var _this = this;
        this.obSrvc.onGetAllExchanges().subscribe(function (data) {
            _this.exchange = data;
            //this.countryCode = this.exchange.filter(m => m.countryCode)[0].countryCode;
        });
    };
    CreditsComponent.prototype.onMakePayment = function () {
        var _this = this;
        //alert(this.formPackage.get('cardType').value);
        var code;
        var amountValue;
        if (this.creditsByCode.countryCode == "IND") {
            code = "INR";
            amountValue = this.creditsByCode.amount * 100;
        }
        else if (this.creditsByCode.countryCode == "AUS") {
            code = "AUD";
            amountValue = this.creditsByCode.amount * 100;
        }
        else if (this.creditsByCode.countryCode == "US") {
            code = "USD";
            amountValue = this.creditsByCode.amount * 100;
        }
        var payments;
        var pspReference;
        var resultCode;
        if (this.formPackage.get('cardType').value == "mastero") {
            payments = {
                reference: this.paymentId,
                shopperReference: this.id,
                merchantAccount: "IEntertainPTYCOM",
                origin: "https://www.celebkonect.com",
                returnUrl: "https://www.celebkonect.com/checkout/result",
                countryCode: this.creditsByCode.countryCode,
                amount: {
                    currency: code,
                    value: amountValue
                },
                paymentMethod: {
                    type: "scheme",
                    number: this.formPackage.get('cardNumber').value.toString(),
                    expiryMonth: this.formPackage.get('expiryMonth').value,
                    expiryYear: this.formPackage.get('expiryYear').value,
                    holderName: localStorage.getItem('loginUserName'),
                    cvc: this.formPackage.get('cvvNumber').value.toString()
                }
            };
        }
        else {
            payments = {
                reference: this.paymentId,
                shopperReference: this.id,
                merchantAccount: "IEntertainPTYCOM",
                origin: "https://www.celebkonect.com",
                returnUrl: "https://www.celebkonect.com/checkout/result",
                countryCode: this.creditsByCode.countryCode,
                amount: {
                    currency: code,
                    value: amountValue
                },
                paymentMethod: {
                    type: "scheme",
                    number: this.formPackage.get('cardNumber').value.toString(),
                    expiryMonth: this.formPackage.get('expiryMonth').value,
                    expiryYear: this.formPackage.get('expiryYear').value,
                    holderName: localStorage.getItem('loginUserName'),
                    cvv: this.formPackage.get('cvvNumber').value.toString()
                }
            };
            console.log(payments);
        }
        this.obSrvc.onCreatePaymentRequest(payments).subscribe(function (data) {
            console.log("payment" + data);
            if (data.resultCode == "Authorised") {
                alert("Payment successfull");
                pspReference = data.pspReference;
                resultCode = data.resultCode;
                var update = void 0;
                update = {
                    transactionRefId: pspReference,
                    gatewayResponse: resultCode,
                    updatedBy: localStorage.getItem('loginUserName'),
                    _id: _this.paymentId
                };
                _this.obSrvc.onUpdatePaymentTransaction(update).subscribe(function (data) {
                    console.log("update" + data.message);
                    console.log("update" + data.error);
                    var credit;
                    credit = {
                        //creditRefCartId: "",
                        couponCode: "",
                        memberId: _this.id,
                        creditType: "credit",
                        creditValue: amountValue,
                        remarks: "",
                        createdBy: localStorage.getItem('loginUserName')
                    };
                    _this.obSrvc.onCreateCreditTransaction(credit).subscribe(function (data) {
                        console.log("credit" + data.message);
                        console.log("credit" + data.error);
                    });
                });
            }
            else if (data.resultCode == "Refused") {
                alert("Refused ");
            }
            else if (data.resultCode == "RedirectShopper") {
                alert("RedirectShopper");
            }
            else if (data.resultCode == "Received") {
                alert("Received");
            }
            else if (data.resultCode == "Cancelled") {
                alert("Cancelled");
            }
            else if (data.resultCode == "Pending") {
                alert("Pending");
            }
            else if (data.resultCode == "Error") {
                alert("Error");
            }
        });
    };
    CreditsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'credits',
            template: __webpack_require__("./src/app/credits/credits.component.html"),
            styles: [__webpack_require__("./src/app/credits/credits.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__models_year__["a" /* Yearvalues */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_observable_service__["a" /* ObservableService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__models_year__["a" /* Yearvalues */]])
    ], CreditsComponent);
    return CreditsComponent;
}());



/***/ }),

/***/ "./src/app/faqs/faqs.component.css":
/***/ (function(module, exports) {

module.exports = ".faq_page{ padding-top: 80px;}"

/***/ }),

/***/ "./src/app/faqs/faqs.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid terms_page faq_page\">\r\n  <div class=\"container\"  style=\"width: 100%\">\r\n    <h4>CelebKonect - Frequently Asked questions</h4>\r\n    <p><strong>Download and Installation</strong></p>\r\n    <p>Downloading CelebKonect - CelebKonect is a free-to-download Android & iOS app for all app users.</p>\r\n    <p>Before downloading the app, please be aware of the following:</p>\r\n    <p>\r\n      If you have an existing CelebKonect account, you'll have the option to migrate your chat history and we recommend that you make a manual backup before proceeding.\r\n      Your chat history can't be migrated back to CelebKonect Messenger if you decide to stop using CelebKonect.\r\n    </p>\r\n    <p>\r\n      CelebKonect must be linked to its own unique phone number. It's not possible to have one phone number linked to many accounts at the same time.\r\n    </p>\r\n    <p>\r\n      The app is currently being rolled out to the world. If it's not available now, please check Google Play Store again later.\r\n    </p>\r\n    <p>\r\n      Then:\r\n    </p>\r\n    <p>Download CelebKonect from Google Play Store.</p>\r\n    <p>\r\n      Verify your phone number, the one you wish to use to talk to others.\r\n    </p>\r\n    <p>\r\n      Restore your chat history, if you wish.\r\n    </p>\r\n    <p>Set your profile name.</p>\r\n    <p>Build your profile. </p>\r\n    <p>Tap the Menu Button > Settings > Profile.</p>\r\n\r\n    <strong>Verification</strong>\r\n    <p>\r\n      As of now email verification link is being sent for all the members joining in, or registering within  the app.\r\n    </p>\r\n    <strong>\r\n      Account and Profile\r\n    </strong>\r\n    <p>\r\n      Changing phone numbers and/or phones, changing your CelebKonect phone number\r\n    </p>\r\n    <p>Before you stop using a particular phone number, you should migrate your CelebKonect account to the new number. For a simple way to do this, intimate us about Changing your phone or the number. By contacting us, you will be able to migrate your account information (including your profile information) as well as your groups.</p>\r\n    <p>Learn more about changing your number: Android | iPhone |</p>\r\n    <p>Make sure your contacts delete your old phone number from their phone's address book and input your new number. As it is a common practice for mobile providers to recycle numbers, you should expect that your former number will be reassigned.</p>\r\n    <p>Note: You do not need to delete your old account. After successfully using the Change Number feature, your old account will be automatically deleted.</p>\r\n    <strong>\r\n      Changing your phone\r\n    </strong>\r\n    <p>Different types of phone</p>\r\n    <p>If you are moving from one type of phone to another, such as from an iPhone to an Android, and preserving your number, you will keep your account info. This information is tied to the phone number. Simply download CelebKonect on the new phone and verify your number.</p>\r\n    <p>Note: You cannot migrate your messages across different types of phone.</p>\r\n    <p>If you are moving from one type of phone to another and not preserving your number, simply download CelebKonect on the new phone and verify the new phone number.</p>\r\n    <p><strong>Important:</strong> Remember to delete your old account. However, if you did not delete your account and no longer have access to your old phone, do not worry. If the new owner of your old number activates CelebKonect on a new phone after 45 days, all of your account information tied to that phone number will be completely deleted.</p>\r\n    <strong>Same type of phone</strong>\r\n    <p>\r\n      If you are moving to the same type of phone, such as from an Android to another Android, then you may have an option to migrate your messages. Learn more about transferring your chats on: Android | iPhone | Windows Phone | BlackBerry 10\r\n    </p>\r\n    <strong>After changing your phone</strong>\r\n    <p>\r\n      Before you give away your old phone, make sure to wipe it of all your data. Remember also to wipe the SD card, if applicable. This ensures that none of your private data, such as your CelebKonect messages, will fall into someone else's hands.\r\n    </p>\r\n    <strong>Chats</strong>\r\n    <p>\r\n      Replying to messages\r\n    </p>\r\n    <p>\r\n      The Reply feature allows you to respond to a particular message, once you receive notification for the chat\r\n    </p>\r\n    <p>On Android, tap and hold the message to highlight, and tap Reply  at the top of the chat. Then, type and send your response. Alternatively, tap and hold the message to highlight. Then, tap the text input field, type and send your response.</p>\r\n    <p>\r\n      On iPhone, tap and hold the message to highlight, and tap Reply. Then, type and send your response. Alternatively, you can swipe right on the message, then type and send your response.\r\n    </p>\r\n\r\n    <strong>Payments</strong>\r\n    <p><strong>IS MY PAYMENT INFORMATION SAFE?</strong></p>\r\n    <p>Your transaction and payment details are directly handled by Adyen, our payment service provider, with secure encryption, and under strict banking standards.</p>\r\n    <p>Your credit card details are sent directly to the bank and cannot be read or accessed by any parties other than your bank.</p>\r\n    <p><strong>DO YOU STORE MY PAYMENT INFORMATION?</strong></p>\r\n    <p>All transactions are handled directly by Adyen, our payment service provider. Your credit card details are sent directly to the bank and cannot be read or accessed by any parties other than your bank.</p>\r\n    <strong>WAS MY PAYMENT SUCCESSFUL?</strong>\r\n    <p>\r\n      Daniel Wellington incorporates several verification stages in the payment process to maximize security.\r\n    </p>\r\n    <p>The total amount of your order will be withdrawn from your bank account when the order and payment have been processed and approved</p>\r\n    <p>In the event that no payment has been received after the order has been submitted, Daniel Wellington may automatically cancel your order without notification.</p>\r\n    <p>Daniel Wellington incorporates several verification stages in the payment process to maximize security. All transactions are handled directly by Adyen, our payment service provider.</p>\r\n    <p>\r\n      There can be several reasons as to why a payment is being refused by our payment system.\r\n    </p>\r\n    <p>\r\n      The three most common reasons are:\r\n    </p>\r\n    <strong>\r\n      Insufficient funds\r\n    </strong>\r\n    <p>Please ensure that there are sufficient funds in your account for the desired purchase</p>\r\n    <strong>The credit card is not issued from the country in which you currently are in</strong>\r\n    <p>Kindly ensure that the credit card you are using is issued from the same country in which you currently are in when placing the order</p>\r\n    <strong>\r\n      Your bank is blocking the online payment for security reasons\r\n    </strong>\r\n    <p>\r\n      Many banks block international online purchases for security reasons. You will need to contact your bank and ensure that they are not blocking this international online payment on our website.\r\n    </p>\r\n    <p>If these do not resolve the issue, you can consider using an alternate payment method, such as PayPal, etc. or visit an authorized Daniel Wellington retailer in your area.</p>\r\n    <strong>Voice and Video Calls</strong>\r\n    <p>\r\n      CelebKonect Calling unavailable in some countries\r\n      Unfortunately, CelebKonect Calling is not available in some countries due to local regulations.\r\n    </p>\r\n    <p>If you are in one of these countries, you will not be able to place or receive calls. If you are in a country where CelebKonect Calling is available, you will not be able to call people in countries where it is unavailable.</p>\r\n    <strong>Troubleshooting</strong>\r\n    <p>\r\n      Problems sending or receiving messages\r\n    </p>\r\n    <p>\r\n      The most common reason why you can't send or receive CelebKonect messages is a bad Internet connection. Learn how to troubleshoot connection issues on: Android | iPhone |\r\n    </p>\r\n    <p>If you're sure your phone is connected to the Internet, there are a few reasons why CelenKonect messages aren't going through:</p>\r\n    <p>Your phone needs to be restarted or turned off and on.</p>\r\n    <p>\r\n      The contact you're messaging has blocked your number. Find out more in this article.\r\n      You haven't completed the initial verification process. Learn about verification on: Android | iPhone |\r\n    </p>\r\n    <strong>Seeing blurry photos</strong>\r\n    <p>A photo may appear blurry if CelebKonect can no longer find it on your device or SD card. This usually happens if the photo is deleted from your device or SD card.</p>\r\n    <p>Once a photo is downloaded on to your device, it cannot be re-downloaded, so you would have to ask your contact to send it to you again.</p>\r\n    <p>Photos are saved much more reliably on an SD card. In the future, we recommend that you insert an SD card to your device, if possible.</p>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/faqs/faqs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqsComponent = /** @class */ (function () {
    function FaqsComponent() {
    }
    FaqsComponent.prototype.ngOnInit = function () {
    };
    FaqsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'faqs',
            template: __webpack_require__("./src/app/faqs/faqs.component.html"),
            styles: [__webpack_require__("./src/app/faqs/faqs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqsComponent);
    return FaqsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".foot_wrap{ padding: 20px 0px; background-color: #fff; border-top:1px solid #ddd; }\r\n.foot_list{ list-style: none;  margin: 0px auto; }\r\n.foot_list li{ color: #000; font-size: 13px; float: left;}\r\n.foot_list li a{ color: #000; display: block; padding: 5px 12px; cursor: pointer; }\r\n.ql_hdng{ font-size: 18px; font-weight:600; padding-bottom: 10px;}\r\n.secure_box{ position: relative;}\r\n/*Contact Popup*/\r\n.contact_mask{\r\n    width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); position: fixed;\r\n    top: 0; bottom: 0; left: 0; right: 0; cursor: crosshair; z-index: 11000; color: #fff;\r\n  }\r\n.contact_pop{ /*position: fixed;  top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); \r\n    -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%);*/\r\n    position: fixed; right: -20px; width: 600px; height: 100%; top: 0; bottom: 0; overflow-y: scroll;\r\n     margin: 0px 0px 0px 0px;   z-index: 12000; width: 600px; font-family: 'Raleway', sans-serif; padding: 30px 0px 0px 0px;\r\n     background-size:cover;\r\n     border-radius:4px;\r\n  }\r\n.kont_hdng{ color: #fff; margin-bottom: 30px;}\r\n.red{color:red;}\r\n.form-area{padding: 10px 40px 60px;margin: 10px 0px 60px;}\r\n.lg_email2{ border: none; border-radius:0px; border-bottom: 1px solid #53586b; outline: none;\r\n    box-shadow:none; -webkit-box-shadow:none; font-size: 12px; -webkit-transition: 0.3s ease-in-out;\r\n     -moz-transition: 0.3s ease-in-out; -ms-transition: 0.3s ease-in-out; color: #fff;\r\n\ttransition: 0.3s ease-in-out; position: relative; padding: 0 0 5px 0px;  background: none;\r\n}\r\n.lg_email2.lg_mes{  padding: 10px 0px; resize: none;}\r\n.lg_email2::-webkit-input-placeholder{ color: #fff;}\r\n.knt_btn{ text-align: center; background-color: #2496ca; border: none;\r\n\twidth: 150px; margin: 10px auto 0px auto; padding: 14px 20px; color:#fff; display: block; border-radius:50px;\r\n\r\n  cursor: pointer; font-weight:bold; outline: none;\r\n\t-webkit-transition: 0.3s ease-in-out;\r\n\ttransition: 0.3s ease-in-out; outline: none;\r\n}\r\n.knt_btn:hover{ background-color: #259dd0; color: #fff;}\r\n.help-block{ list-style: none; margin:0px; padding: 0px;}\r\n.closer_pop{ position: relative; top: 0px; color: #fff; cursor: pointer; left: 15px;}\r\n.cls{  color: #666; display: block;}\r\n.rht_close{ position: absolute; right: 30px; top: 15px;}\r\n.myerr_msg{ padding-top: 8px;}\r\n.mysucess_msg{ -webkit-border-radius: 4px; -moz-border-radius: 4px; -ms-border-radius: 4px; padding: 10px 20px; margin-bottom: 10px;\r\n    border-radius: 4px; color: forestgreen; border:1px solid forestgreen; background-color: #fff;\r\n}\r\n.mysucess_msg > h6{ font-size:15px;}\r\n.lgr_messger{\r\n    border-radius: 4px; color:red; border:1px solid #ff0000; padding: 10px 20px; margin-bottom: 10px;\r\n}\r\n.lgr_messger > h6{ font-size:15px;}\r\n.embx  > label{ color:#fff; font-size:12px;}\r\n.chk_box {\r\n    display: inline-block;\r\n    position: relative;\r\n    padding-left: 30px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 13px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none; color: #ccc;\r\n}\r\n.chkb_space{ padding-left: 25px; padding-right: 30px; width: 45%;}\r\n.chk_box input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n.cb_lvler{ padding-left: 0px; margin-left: 0px;}\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 16px;\r\n    width: 16px;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n}\r\n.chker3{ border-radius: 50%;\r\n    }\r\n.chk_box:hover input ~ .checkmark {\r\n    background-color: #fff;\r\n}\r\n.chk_box input:checked ~ .checkmark {\r\n    background-color: #259dd0; border-color: #259dd0;\r\n}\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n.chk_box input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n.chk_box .checkmark:after {\r\n    left: 6px;\r\n    top: 3px;\r\n    width: 4px;\r\n    height: 7px;\r\n    border: solid white;\r\n    border-width: 0 2px 2px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n.fgp{ position: absolute; bottom: 0; width: 100%; background-color: #f5f5f5; left: 0; padding: 12px 50px; \r\n\tfont-size: 13px;}\r\n.signup_hdng{ color: #259dd0; font-weight: 600; cursor: pointer;}\r\n.hp_blk{ list-style: none; font-size: 12px;}\r\n@media screen and (max-width: 767px){\r\n   \r\n    .foot_list{ width: 100%;}\r\n}\r\n@media screen and (max-width: 480px){\r\n    .foot_list li{ float: none;}\r\n}\r\n/* Terms and conditions page css */\r\n.terms_pop{ \r\n    position: fixed; right: -40px;  width: 70%; height: 100%; bottom: 0; overflow-y: scroll; \r\n     margin: 0px 0px 0px 0px;   z-index: 12000; font-family: 'Raleway', sans-serif; padding: 0px 0px 0px 0px;\r\n   background-color: #fff; margin: 0px auto; display: block; overflow-x: hidden;\r\n}\r\n.rht2{ left: 20px;}\r\n.terms_mask{\r\n    width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); position: fixed;\r\n    top: 0; bottom: 0; left: 0; right: 0; cursor: crosshair; z-index: 11000; color: #fff;\r\n  }\r\n/*faqs*/\r\n.faqs_pop{\r\n    position: fixed; right: -40px;  width: 70%; height: 100%; bottom: 0; overflow-y: scroll; \r\n    margin: 0px 0px 0px 0px;   z-index: 12000; font-family: 'Raleway', sans-serif; padding: 0px 0px 0px 0px;\r\n  background-color: #fff; margin: 0px auto; display: block; overflow-x: hidden;\r\n  }\r\n.faqs_mask{\r\n    width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); position: fixed;\r\n    top: 0; bottom: 0; left: 0; right: 0; cursor: crosshair; z-index: 11000; color: #fff;\r\n  }\r\n/*privacy*/\r\n.privacy_pop{\r\n    position: fixed; right: -40px;  width: 70%; height: 100%; bottom: 0; overflow-y: scroll; \r\n    margin: 0px 0px 0px 0px;   z-index: 12000; font-family: 'Raleway', sans-serif; padding: 0px 0px 0px 0px;\r\n  background-color: #fff; margin: 0px auto; display: block; overflow-x: hidden;\r\n  }\r\n.privacy_mask{\r\n    width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); position: fixed;\r\n    top: 0; bottom: 0; left: 0; right: 0; cursor: crosshair; z-index: 11000; color: #fff;\r\n  }"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid foot_wrap\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-12 col-sm-9 col-md-9 col-lg-9\">\r\n              <ul class=\"foot_list\">\r\n                  <li><a pageScroll href=\"#abt\" id=\"abrt\">About Us</a></li>\r\n                  <li><a (click)=\"showFaqspage()\" >FAQ's</a></li>\r\n                  <li><a [routerLink]=\"'home'\">Community Guidelines</a></li>\r\n                  <li><a (click)=\"showTermspage()\">Terms & Conditions</a></li>\r\n                  <li><a (click)=\"showPrivacypage()\">Privacy Policy</a></li>\r\n                  <li><a (click)=\"openKontForm()\" >Contact Us</a></li>\r\n                  <!-- <li><a [routerLink]=\"'help'\">Help</a></li> -->\r\n\r\n              </ul>\r\n             \r\n            </div>\r\n\r\n            <div class=\"col-12 col-sm-3 col-md-3 col-lg-3\">\r\n                    <span id=\"siteseal\" class=\"secure_box\">\r\n                        <script async type=\"text/javascript\" src=\"https://seal.godaddy.com/getSeal?sealID=SHTFBZ6z6WjuzkdRKneaMKwEk9kvaiOfXJd5gWlvALjYUP0GccIHeJlzGn4l\"></script>\r\n                    </span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--contact popup-->\r\n<div class=\"contact_mask\" *ngIf=\"kont_msk\" (click)=\"closeKontForm()\"></div>\r\n<div class=\"contact_pop\"  [style.background-image]=\"'url(\\'assets/images/land_bg2.jpg\\')'\"  *ngIf=\"kont_pop\">\r\n  \r\n  <span (click)=\"closeKontForm()\"><i class=\"far fa-times-circle fa-2x closer_pop\"></i></span>\r\n\r\n    <div class=\"form-area\">  \r\n        <form role=\"form\" [formGroup]=\"formContactKonect\" (ngSubmit)=\"onSendContactUs()\">\r\n            <h3 class=\"kont_hdng\">Konect With Us</h3>\r\n\r\n    \t\t\t\t<div class=\"form-group embx embx2\">\r\n              <label for=\"name\">Name</label>\r\n            <input type=\"text\" class=\"form-control lg_email2\" id=\"name\" [(ngModel)]=\"name\"  formControlName=\"name\" placeholder=\"ex : John\" pattern=\"[a-zA-Z][a-zA-Z ]+\" required>\r\n            <ul class=\"help-block\">\r\n              <li class=\"err2\" *ngIf=\"formContactKonect.controls.name.errors?.required  && isSubmitted\">This field is Required</li>\r\n            </ul>\r\n            <div [hidden]=\"formContactKonect.controls.name.valid || formContactKonect.controls.name.pristine\" class=\"alert alert-danger err2\">\r\n              <div [hidden]=\"!formContactKonect.controls.name.hasError('required')\">Name is Required</div>\r\n              <div [hidden]=\"!formContactKonect.controls.name.hasError('pattern')\">Only alphabetsallowed</div>\r\n          </div>\r\n          </div>\r\n          \r\n\t\t\t\t\t<div class=\"form-group embx embx2\">\r\n              <label for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control lg_email2\" id=\"email\" [(ngModel)]=\"email\" formControlName=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" placeholder=\"ex : john@something.com\" required>\r\n            <ul class=\"help-block\">\r\n              <li *ngIf=\"formContactKonect.controls.email.hasError('required') && isSubmitted\" class=\"err2\">This field is Required</li>\r\n            </ul>\r\n            <div [hidden]=\"formContactKonect.controls.email.valid || formContactKonect.controls.email.pristine\" class=\"alert alert-danger err2\">\r\n              <div [hidden]=\"!formContactKonect.controls.email.hasError('required')\">Email is required</div>\r\n              <div [hidden]=\"!formContactKonect.controls.email.hasError('pattern')\">Email format should be \r\n              <small> <b>john@something.com</b> </small>\r\n          </div>\r\n        </div>\r\n          </div>\r\n          \r\n\t\t\t\t\t<div class=\"form-group embx embx2\">\r\n            <label for=\"mobile\">Mobile Number</label>\r\n            <input type=\"text\" class=\"form-control lg_email2\" id=\"mobile\" [(ngModel)]=\"mobile\" required formControlName=\"mobile\" placeholder=\"ex : 9000000000\"\r\n            pattern=\"[0-9]*\"\r\n            minlength=\"10\"\r\n            maxlength=\"10\">\r\n\r\n            <ul class=\"help-block\">\r\n              <li class=\"err2\" *ngIf=\"formContactKonect.controls.mobile.errors?.required && isSubmitted\">This field is Required</li>\r\n            </ul>\r\n  \r\n            <div [hidden]=\"formContactKonect.controls.mobile.valid || formContactKonect.controls.mobile.pristine\" class=\"alert alert-danger err2\">\r\n            <div [hidden]=\"!formContactKonect.controls.mobile.hasError('minlength')\">Mobile should be 10digit</div>\r\n            <div [hidden]=\"!formContactKonect.controls.mobile.hasError('required')\">Mobile is required</div>\r\n            <div [hidden]=\"!formContactKonect.controls.mobile.hasError('pattern')\">Mobile numberr should be only numbers</div>\r\n          \r\n        </div>\r\n          </div>\r\n          \r\n\t\t\t\t\t<div class=\"form-group embx embx2\">\r\n            <label for=\"subject\">Subject</label>\r\n            <input type=\"text\" class=\"form-control lg_email2\" id=\"subject\" [(ngModel)]=\"subject\" formControlName=\"subject\" placeholder=\"ex : Business\" pattern=\"[a-zA-Z][a-zA-Z ]+\" required>\r\n            <ul class=\"help-block\">\r\n              <li class=\"err2\" *ngIf=\"formContactKonect.controls.subject.errors?.required  && isSubmitted\">This field is Required</li>\r\n            </ul>\r\n            <div [hidden]=\"formContactKonect.controls.subject.valid || formContactKonect.controls.subject.pristine\" class=\"alert alert-danger err2\">\r\n              <div [hidden]=\"!formContactKonect.controls.subject.hasError('required')\">Subject is Required</div>\r\n              <div [hidden]=\"!formContactKonect.controls.subject.hasError('pattern')\">Only alphabetsallowed</div>\r\n          </div>\r\n          </div>\r\n\r\n          <!-- <div class=\"form-group embx embx2\">\r\n            <label for=\"howDoYouHearAboutUs\">How Did You Hear About Us</label>\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"howDoYouHearAboutUs\" class=\"\" >\r\n          </div> -->\r\n\r\n          <div class=\"form-group embx embx2\">\r\n            <label class=\"control-label col-12 col-sm-12 col-md-12 col-lg-12 cb_lvler\" for=\"howDoYouHearAboutUs\">How did you hear About Us:</label>\r\n            <div class=\"col-12 col-sm-12 col-md-12 cb_lvler\">\r\n           <label *ngFor=\"let rec of recogList\" class=\"chk_box chkb_space\">\r\n              <input type=\"radio\" id=\"howDoYouHearAboutUs\" name=\"howDoYouHearAboutUs\" [(ngModel)]=\"howDoYouHearAboutUs\" formControlName=\"howDoYouHearAboutUs\" value=\"{{rec.value}}\">{{rec.text}}\r\n              <span class=\"checkmark chker3\"></span>\r\n           </label>\r\n            </div>\r\n          </div>\r\n        \r\n\r\n\r\n          \r\n          <div class=\"form-group embx embx2\">\r\n            <label for=\"message\">Message</label>\r\n            <textarea class=\"form-control lg_email2 lg_mes\" type=\"textarea\" id=\"message\" [(ngModel)]=\"message\" formControlName=\"message\" placeholder=\"Type Your message\" pattern=\"[a-zA-Z][a-zA-Z ]+\" required  rows=\"2\"></textarea>\r\n            <ul class=\"help-block\">\r\n              <li *ngIf=\"formContactKonect.controls.message.hasError('required') && isSubmitted\" class=\"err2\">This field is Required</li>\r\n            </ul>\r\n            <div [hidden]=\"formContactKonect.controls.message.valid || formContactKonect.controls.message.pristine\" class=\"alert alert-danger err2\">\r\n              <div [hidden]=\"!formContactKonect.controls.message.hasError('required')\">Message is Required</div>\r\n            </div>                           \r\n         </div>\r\n         \r\n          <div class=\"form-group\" >\r\n              <div class=\"mysucess_msg\" *ngIf=\"show_msg\">\r\n                  <h6 class=\"myerr_msg\" >Email submitted successfully!!</h6>\r\n              </div>\r\n        <button type=\"submit\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-left knt_btn\" >Konect</button>\r\n        </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!--terms page-->\r\n\r\n<div class=\"terms_mask\" *ngIf=\"show_termsmask\"  (click)=\"closeTermspage()\"></div>\r\n<div class=\"terms_pop\" *ngIf=\"show_Termspage\">\r\n  <div (click)=\"closeTermspage()\" class=\"rht_close rht2\"><i class=\"far fa-times-circle fa-2x closer_pop cls\"></i></div>\r\n  \r\n  <termsandconditions></termsandconditions>\r\n</div>\r\n\r\n<div class=\"faqs_mask\" *ngIf=\"show_faqspage\"  (click)=\"closeFaqspage()\"></div>\r\n<div class=\"faqs_pop\"  *ngIf=\"show_faqspage\">\r\n    <div (click)=\"closeFaqspage()\" class=\"rht_close rht2\"><i class=\"far fa-times-circle fa-2x closer_pop cls\"></i></div>\r\n  <faqs></faqs>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"privacy_mask\" *ngIf=\"show_Privacymask\"  (click)=\"closePrivacypage()\"></div>\r\n<div class=\"faqs_pop\"  *ngIf=\"show_Privacypage\">\r\n    <div (click)=\"closePrivacypage()\" class=\"rht_close rht2\"><i class=\"far fa-times-circle fa-2x closer_pop cls\"></i></div>\r\n  <privacypolicy></privacypolicy>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("./src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_observable_service__ = __webpack_require__("./src/app/services/observable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FooterComponent = /** @class */ (function () {
    function FooterComponent(menuSvc, routeSvc, Obsvc, frmBuilder, route, authGuard) {
        this.menuSvc = menuSvc;
        this.routeSvc = routeSvc;
        this.Obsvc = Obsvc;
        this.frmBuilder = frmBuilder;
        this.route = route;
        this.authGuard = authGuard;
        this.processing = false;
        this.isSubmitted = false;
        this.recogList = this.Obsvc.getRecoglist();
        this.kont_msk = false;
        this.kont_pop = false;
        this.show_msg = false;
        this.show_Termspage = false;
        this.show_termsmask = false;
        this.show_faqspage = false;
        this.show_faqsmask = false;
        this.show_Privacypage = false;
        this.show_Privacymask = false;
    }
    FooterComponent.prototype.showTermspage = function () {
        this.show_Termspage = true;
        this.show_termsmask = true;
    };
    FooterComponent.prototype.closeTermspage = function () {
        this.show_Termspage = false;
        this.show_termsmask = false;
    };
    FooterComponent.prototype.showFaqspage = function () {
        this.show_faqspage = true;
        this.show_faqsmask = true;
    };
    FooterComponent.prototype.closeFaqspage = function () {
        this.show_faqspage = false;
        this.show_faqsmask = false;
    };
    FooterComponent.prototype.showPrivacypage = function () {
        this.show_Privacypage = true;
        this.show_Privacymask = true;
    };
    FooterComponent.prototype.closePrivacypage = function () {
        this.show_Privacypage = false;
        this.show_Privacymask = false;
    };
    FooterComponent.prototype.openKontForm = function () {
        this.kont_msk = true;
        this.kont_pop = true;
    };
    FooterComponent.prototype.closeKontForm = function () {
        this.kont_msk = false;
        this.kont_pop = false;
    };
    FooterComponent.prototype.onContactKonectFormGroup = function () {
        this.formContactKonect = this.frmBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            subject: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            howDoYouHearAboutUs: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
        });
    };
    FooterComponent.prototype.onSendContactUs = function () {
        var _this = this;
        var contactUs = {
            name: this.formContactKonect.get('name').value,
            email: this.formContactKonect.get('email').value,
            mobile: this.formContactKonect.get('mobile').value,
            subject: this.formContactKonect.get('subject').value,
            message: this.formContactKonect.get('message').value,
            howDoYouHearAboutUs: this.formContactKonect.get('howDoYouHearAboutUs').value
        };
        console.log(contactUs);
        this.isSubmitted = true;
        if (this.formContactKonect.valid) {
            this.Obsvc.onSendContactUs(contactUs).subscribe(function (data) {
                console.log(data);
                if (data.message == "Email submitted successfully!!") {
                    // this.kont_msk = false;
                    // this.kont_pop = false;
                    setTimeout(function () {
                        _this.kont_msk = false;
                        _this.kont_pop = false;
                        _this.show_msg = false;
                    }, 2000);
                    _this.message = data.message;
                    _this.show_msg = true;
                    _this.messageClass = "alert alert-success";
                    _this.formContactKonect.reset();
                }
                else {
                    // this.kont_msk = false;
                    // this.kont_pop = false;
                }
            });
            this.isSubmitted = false;
        }
    };
    FooterComponent.prototype.ngOnInit = function () {
        this.onContactKonectFormGroup();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */]),
        __metadata("design:type", Document)
    ], FooterComponent.prototype, "document", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_observable_service__["a" /* ObservableService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_observable_service__ = __webpack_require__("./src/app/services/observable.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(cbOvc, router) {
        this.cbOvc = cbOvc;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.cbOvc.loggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/home']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_observable_service__["a" /* ObservableService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_observable_service__ = __webpack_require__("./src/app/services/observable.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(cbOvc, router) {
        this.cbOvc = cbOvc;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.cbOvc.loggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    NotAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_observable_service__["a" /* ObservableService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".menu_bar{ padding: 10px 30px; margin: 0px; position: fixed; top: 0px;\r\n    left: 0px; right: 0px; z-index: 999; background: none;\r\n    -webkit-transition: 0.3s ease-in-out; transition: 0.3s ease-in-out;\r\n}\r\n.celeb_logo { width:135px; float: left; -webkit-transition: 0.3s ease-in-out; transition: 0.3s ease-in-out;}\r\n.celeb_logo > a{ margin: 10px 0px 12px 0px; display: block;}\r\n.cbk_menu{ float: right; list-style: none; padding: 0px; margin: 30px 0px 0px 0px;\r\n            -webkit-transition: 0.3s ease-in-out; transition: 0.3s ease-in-out;\r\n}\r\n.cbk_menu li{ float: left; position: relative; }\r\n.cbk_menu li a{ display: block; padding: 10px 25px; text-transform: uppercase; cursor: pointer;\r\n    -webkit-transition: 0.3s ease-in-out;\r\n    transition: 0.3s ease-in-out; color: #fff; text-decoration: none;\r\n}\r\n.cbk_menu li a:hover{ text-decoration: none; color: #259dd0; }\r\n.lgn_btn{ border: 2px solid #fff; color: #fff; margin-top:0px; cursor: pointer;\r\n          -webkit-transition: 0.3s ease-in-out; transition: 0.3s ease-in-out;\r\n}\r\n.lgn_btn a{ color: #fff!important;}\r\n.lgn_btn a:hover{ background-color: #259dd0; color: #fff!important;}\r\n.list_active{ color: #fff!important;  position: relative;  }\r\n.list_active:after{ position: absolute; content:\"\"; width: 80%; height: 1px; bottom: 0px;\r\n    background-color: #fff; display: block; margin: 0px auto; left: 0px; right: 0px;\r\n    -webkit-transition: 0.3s ease-in-out;\r\n    transition: 0.3s ease-in-out;\r\n}\r\n/*popup css */\r\n.loing_popup{ width: 670px; position: fixed; top: 50%; left: 50%; height: 470px;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\ttransform: translate(-50%, -50%); background-color: #fff; z-index: 9000; overflow: hidden; border-radius:2px;\r\n}\r\n.loginpop_mask{ background-color: rgba(0,0,0,0.8); position: fixed; width: 100%; height:100%; top: 0; bottom: 0;\r\n\tleft: 0; right: 0; z-index:1000; cursor: crosshair;\r\n}\r\n.pop_left{ display: block; width: 45%; float: left; height: inherit; background-repeat: no-repeat;\r\n\tbackground-size: cover; -webkit-box-shadow:0px 0px 40px #999;\r\n\t-ms-box-shadow:0px 0px 40px #999; box-shadow:0px 0px 40px #999;\r\n}\r\n.pop_right{ display: block; width: 55%; float: left; padding: 60px 50px; -webkit-box-sizing: border-box; box-sizing: border-box; position: relative;\r\n\theight: inherit; z-index: -1;\r\n}\r\n.lgn_hdng{ color: #000; font-weight:300; font-size: 20px; text-transform: uppercase; padding-bottom: 30px;}\r\n.lg_email{ border: none; border-radius:0px; border-bottom: 1px solid #ccc; outline: none;\r\n    box-shadow:none; -webkit-box-shadow:none; font-size: 12px; -webkit-transition: 0.3s ease-in-out;\r\n\ttransition: 0.3s ease-in-out; position: relative; padding: 0 0 5px 0px; \r\n}\r\n.lg_email:focus{ border-color: #259dd0; color: #259dd0;}\r\n.lg_email::-webkit-input-placeholder{ color: #ccc;}\r\n.embx{ position: relative;}\r\n.usicn{ position: absolute; left: 0; bottom: 5px; z-index: 10; color: #ccc;}\r\n.lg_email:focus .usicn{ color: #259dd0!important;}\r\n.embx > label{ color: #ccc; font-size: 12px;}\r\n.embx2{ margin-bottom: 30px;}\r\n.lgnbtner{ float: right; background-color: #259dd0; border-radius:2px; -webkit-border-radius:2px;\r\n\ttext-transform: uppercase; font-weight:bold; font-size:0.8rem; color: #fff; padding: 5px 10px;\r\n}\r\n.chk_box {\r\n    display: inline-block;\r\n    position: relative;\r\n    padding-left: 30px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 13px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none; color: #ccc;\r\n}\r\n.chkb_space{ padding-left: 25px; padding-right: 30px; width: 45%;}\r\n.chk_box input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n.cb_lvler{ padding-left: 0px; margin-left: 0px;}\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 16px;\r\n    width: 16px;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n}\r\n.chker3{ border-radius: 50%;\r\n    }\r\n.chk_box:hover input ~ .checkmark {\r\n    background-color: #fff;\r\n}\r\n.chk_box input:checked ~ .checkmark {\r\n    background-color: #259dd0; border-color: #259dd0;\r\n}\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n.chk_box input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n.chk_box .checkmark:after {\r\n    left: 6px;\r\n    top: 3px;\r\n    width: 4px;\r\n    height: 7px;\r\n    border: solid white;\r\n    border-width: 0 2px 2px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n.fgp{ position: absolute; bottom: 0; width: 100%; background-color: #f5f5f5; left: 0; padding: 12px 50px; \r\n\tfont-size: 13px;}\r\n.signup_hdng{ color: #259dd0; font-weight: 600; cursor: pointer;}\r\n.hp_blk{ list-style: none; font-size: 12px;}\r\n/*Register Form Setup*/\r\n.register_wrapper{ width:100%; max-width: 670px; height: 100%; position: fixed; right: -20px; top: 0px; bottom: 0px; background-color: #fff;\r\n    z-index: 10000; -webkit-box-shadow: 0px 0px 10px #000; box-shadow: 0px 0px 10px #000; padding: 50px 50px; -webkit-box-sizing: border-box; box-sizing: border-box;\r\n    font-family: 'Raleway', sans-serif; overflow-y: scroll;\r\n}\r\n.regi_title{ font-size:30px; color: #666; font-weight: 200; margin-bottom: 30px; text-transform: uppercase; }\r\n.regtabs{ list-style: none; padding: 0px; margin: 0px 0px 30px 0px; color: #ddd;}\r\n.regtabs li{ width: 80px; height:80px; float: left; border-radius:100%; border:1px solid #ddd;\r\n        margin-right:50px; position: relative; background-color: #fff; cursor: pointer; \r\n        padding: 25px 20px; text-align: center;\r\n}\r\n.regtabs li:after{ position: absolute; content: \"\"; width: 100%; height: 1px; background-color: #ddd; right: -80%;\r\n    top: 40px; z-index: -1;\r\n}\r\n.list_latchild:after{ display: none;}\r\n.regtabs > li > p{ position: absolute; bottom: -50px; left: 0px; right: 0px; text-align: center;}\r\n.reg_active{ color: #259dd0; border-color: #259dd0!important;}\r\n.reg_active:after{ position: absolute; content: \"\"; width: 100%; height: 1px; background-color: #259dd0!important; right: -80%;\r\n    top: 40px; z-index: -1;\r\n}\r\n.pi_hdng{ font-size: 20px; color: #666; padding-top: 50px; padding-bottom: 30px; font-weight:400;}\r\n.reg_email{ width: 70%;}\r\n.rgbtnr{ float: left; padding: 10px 15px; outline: none; -webkit-box-shadow: 0px 3px 0px #1c262a; box-shadow: 0px 3px 0px #1c262a;\r\n}\r\n.prefbx{\r\n    -webkit-appearance: none; -moz-appearance: none; appearance: none;\r\n    background-repeat: no-repeat; background-size: 16px; background-position: center right;\r\n}\r\n.interest_lists{ list-style: none; padding: 0px; margin: 0px;}\r\n.interest_lists > li{ float: left; width: 23%; margin-right: 2%; \r\n    position: relative; margin-bottom: 30px;\r\n}\r\n.pref_img{ position: relative;  overflow: hidden; width: 100%; height: 130px; margin-bottom: 10px; }\r\n.interest_lists > li > p{ padding: 5px 0px 0px 0px; margin: 0px;}\r\n/*buttons*/\r\n.btn-app-store{\r\n    background: black;\r\n\tcolor: white;\r\n\tposition: relative;\r\n\theight: 60px;\r\n\tpadding-left: 55px;\r\n\tpadding-right: 20px;\r\n}\r\n.ibtn{\r\n\tfont-size: 40px;\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n}\r\n.btn-app-store .small{\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tline-height: 12px;\r\n\tmargin-bottom: 2px;\r\n    margin-top: 5px;\r\n}\r\n.btn-app-store .big{\r\n\tdisplay: block;\r\n\ttext-align: left;\r\n\tfont-size: 21px;\r\n\tline-height: 21px;\r\n}\r\n.app_btn{ display: inline-block;}\r\n.thank_data{ font-size:18px; font-weight:400; padding-bottom: 20px;}\r\n.pi_hdng2{ padding-bottom:  20px; margin-bottom: 0px; color: #666;}\r\n.regimasker{ width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); position: fixed;\r\n    top: 0; bottom: 0; left: 0; right: 0; z-index: 1000; cursor: crosshair;\r\n}\r\n.headerFix{ background-color:rgba(0,0,0,0.8); padding-top: 0px; padding-bottom: 0px; \r\n    -webkit-transition: 0.3s ease-in-out; transition: 0.3s ease-in-out;\r\n}\r\n.smallLogo{ width: 70px; -webkit-transition: 0.3s ease-in-out; transition: 0.3s ease-in-out;}\r\n.spaceLogin { margin-top:-2px; -webkit-transition: 0.3s ease-in-out; transition: 0.3s ease-in-out;}\r\n.spaceForMenu { margin-top:20px; -webkit-transition: 0.3s ease-in-out; transition: 0.3s ease-in-out;}\r\n.rmenu{ display: none;}\r\n@media screen and (min-width:200px) and (max-width:767px){\r\n    .cbk_menu{ display: block; position: fixed; right: -100%; top: 0; width: 80%; padding: 20px 30px; height: 100%;\r\n         background-color: #222; margin: 0px; z-index: 100;\r\n         -webkit-transition: 0.3s ease-in-out; transition: 0.3s ease-in-out; \r\n    }\r\n    .cbk_zero{ right: 0;}\r\n    .cbk_menu li { display: block; float: none;}\r\n    .lgn_btn{ width: 100px; margin-left: 20px; margin-top:20px;}\r\n    .list_active:after{ margin: 0px; left: 20px;}\r\n    .resp_masker{ z-index: 99; position: fixed; width: 100%; height:100%; background-color: rgba(0,0,0,0.8);\r\n        cursor: crosshair;\r\n    }\r\n    .rmenu{ position: absolute; right: 30px; top:25px; display: block; cursor: pointer;}\r\n    .rmr{ color: #fff;}\r\n    .loing_popup{ width: 90%; }\r\n    .pop_left{ display: none;}\r\n    .pop_right{ width: 100%; display:block;}\r\n}\r\n/*Contact Popup*/\r\n.contact_mask{\r\n    width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); position: fixed;\r\n    top: 0; bottom: 0; left: 0; right: 0; cursor: crosshair; z-index: 11000; color: #fff;\r\n  }\r\n.contact_pop{ /*position: fixed;  top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); \r\n    -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%);*/\r\n    position: fixed; right: -20px; width: 600px; height: 100%; top: 0; bottom: 0; overflow-y: scroll;\r\n     margin: 0px 0px 0px 0px;   z-index: 12000; width: 600px; font-family: 'Raleway', sans-serif; padding: 30px 0px 0px 0px;\r\n     background-size:cover;\r\n     border-radius:4px;\r\n  }\r\n.kont_hdng{ color: #fff; margin-bottom: 30px;}\r\n.red{color:red;}\r\n.form-area{padding: 10px 40px 60px;margin: 10px 0px 60px;}\r\n.lg_email2{ border: none; border-radius:0px; border-bottom: 1px solid #53586b; outline: none;\r\n    box-shadow:none; -webkit-box-shadow:none; font-size: 12px; -webkit-transition: 0.3s ease-in-out;\r\n     -moz-transition: 0.3s ease-in-out; -ms-transition: 0.3s ease-in-out; color: #fff;\r\n\ttransition: 0.3s ease-in-out; position: relative; padding: 0 0 5px 0px;  background: none;\r\n}\r\n.lg_email2.lg_mes{  padding: 10px 0px; resize: none;}\r\n.lg_email2::-webkit-input-placeholder{ color: #fff;}\r\n.knt_btn{ text-align: center; background-color: #2496ca; border: none;\r\n\twidth: 150px; margin: 10px auto 0px auto; padding: 14px 20px; color:#fff; display: block; border-radius:50px;\r\n\r\n  cursor: pointer; font-weight:bold; outline: none;\r\n\t-webkit-transition: 0.3s ease-in-out;\r\n\ttransition: 0.3s ease-in-out; outline: none;\r\n}\r\n.knt_btn:hover{ background-color: #259dd0; color: #fff;}\r\n.help-block{ list-style: none; margin:0px; padding: 0px;}\r\n.closer_pop{ position: relative; top: 0px; color: #fff; cursor: pointer; left: 15px;}\r\n.cls{  color: #666; display: block;}\r\n.rht_close{ position: absolute; right: 30px; top: 15px;}\r\n.myerr_msg{ padding-top: 8px;}\r\n.mysucess_msg{ -webkit-border-radius: 4px; -moz-border-radius: 4px; -ms-border-radius: 4px; padding: 10px 20px; margin-bottom: 10px;\r\n    border-radius: 4px; color: forestgreen; border:1px solid forestgreen; background-color: #fff;\r\n}\r\n.mysucess_msg > h6{ font-size:15px;}\r\n.lgr_messger{\r\n    border-radius: 4px; color:red; border:1px solid #ff0000; padding: 10px 20px; margin-bottom: 10px;\r\n}\r\n.lgr_messger > h6{ font-size:15px;}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu_bar\" [class.headerFix]=\"navIsFixed\">\r\n        <div class=\"celeb_logo\" [class.smallLogo]=\"logoFixed\">\r\n          <a href=\"\"><img [src]=\"logoBg\" alt=\"CelebKonect Logo\" title=\"CeleKonect Logo\" width=\"100%\"></a>\r\n        </div>\r\n\r\n        <span class=\"rmenu\" (click)=\"slideMyMenu()\"><i class=\"fas fa-bars fa-2x rmr\"></i></span>\r\n\r\n        <ul class=\"cbk_menu\"  [class.spaceForMenu]=\"menuFixed\" id=\"loginId\" *ngIf=\"!Obsvc.loggedIn()\" (click)=\"clSlideMenu()\">\r\n            <li><a pageScroll href=\"#hm\" id=\"hmrt\" class=\"list_active\">Home</a></li>\r\n            <li><a pageScroll href=\"#abt\" id=\"abrt\">About</a></li>\r\n            <li><a pageScroll href=\"#fet\" id=\"feut\">Features</a></li>\r\n            <li><a (click)=\"openKontForm()\">Contact Us</a></li>\r\n            <li  class=\"lgn_btn\" (click)=\"ShowMyPopup()\" [class.spaceLogin]=\"loginFixed\"><a >Login</a></li>\r\n          </ul>\r\n\r\n        <ul class=\"cbk_menu\" id=\"loginId\" [class.spaceForMenu]=\"menuFixed\" *ngIf=\"Obsvc.loggedIn()\"  (click)=\"clSlideMenu()\">\r\n            <li><a [routerLink]=\"'mainpage'\" routerLinkActive=\"list_active\">Home</a></li>\r\n            <li><a [routerLink]=\"'allcelebrities'\" routerLinkActive=\"list_active\">Explore</a></li>\r\n            <li><a [routerLink]=\"'credits'\" routerLinkActive=\"list_active\">Credits</a></li>\r\n            <li (click)=\"onLogout()\"><a>Logout</a></li>\r\n        </ul>\r\n\r\n          <div style=\"clear:both;\"></div>\r\n</div>\r\n\r\n<div class=\"resp_masker\" *ngIf=\"rspmask\" (click)=\"clSlideMenu()\"></div>\r\n<!--login popup-->\r\n<div class=\"loginpop_mask\"  *ngIf=\"showPopup\" (click)=\"closePopup()\"></div>\r\n<div class=\"loing_popup\" *ngIf=\"showPopup\">\r\n    <div class=\"pop_left\" [style.background-image]=\"'url(\\'assets/images/handmobile.jpg\\')'\">\r\n        \r\n    </div>\r\n\r\n    <div class=\"pop_right\">\r\n        <div (click)=\"closePopup()\" class=\"rht_close\"><i class=\"far fa-times-circle fa-2x closer_pop cls\"></i></div>\r\n                <h3 class=\"lgn_hdng\">Login to your account</h3>\r\n            <form [formGroup]=\"loginForm\" (submit)=\"onLoginSubmit()\">\r\n\r\n                <div class=\"lgr_messger\" *ngIf=\"show_lgmsg\">\r\n                    <h6>Please enter valid email id or password</h6>\r\n                </div>\r\n                  \r\n                <div class=\"form-group embx embx2\">\r\n                  <label for=\"email\">Email:</label>\r\n\r\n                  <div [ngClass]=\"{'has-error' : loginForm.controls.email.errors && loginForm.controls.email.dirty,\r\n                                  'has-success': loginForm.controls.email.valid && loginForm.controls.email.dirty}\">\r\n                    <input type=\"email\" class=\"form-control lg_email\" [(ngModel)]=\"user.email\" id=\"email\" placeholder=\"ex : John@indoz.com\" formControlName=\"email\">\r\n                  \r\n                    <ul class=\"help-block\">\r\n                      <li class=\"err2\" *ngIf=\"loginForm.controls.email.errors?.required  && isSubmitted\">This field is Required</li>\r\n                    </ul>\r\n                    <div [hidden]=\"loginForm.controls.email.valid || formContactKonect.controls.email.pristine\" class=\"alert alert-danger err2\">\r\n                      <div [hidden]=\"!loginForm.controls.email.hasError('required')\">Email is required</div>\r\n                      <div [hidden]=\"!loginForm.controls.email.hasError('pattern')\">Email format should be \r\n                      <small> <b>john@something.com</b> </small>\r\n                  </div>\r\n                </div>\r\n                  </div>\r\n                  \r\n                </div>\r\n                <div class=\"form-group embx\">\r\n                  <label for=\"password\">Password:</label>\r\n\r\n                  <div [ngClass]=\"{'has-error' : loginForm.controls.password.errors && loginForm.controls.password.dirty,\r\n                  'has-success': loginForm.controls.password.valid && loginForm.controls.password.dirty}\">\r\n                    <input type=\"password\" [(ngModel)]=\"user.password\" class=\"form-control lg_email\" id=\"password\" placeholder=\"**********\" formControlName=\"password\">\r\n                    <ul class=\"help-block\">\r\n                      <li class=\"err2\" *ngIf=\"loginForm.controls.password.errors?.required  && isSubmitted\">This field is Required</li>\r\n                    </ul>\r\n                    <div [hidden]=\"loginForm.controls.password.valid || loginForm.controls.password.pristine\" class=\"alert alert-danger err2\">\r\n                      <div [hidden]=\"!loginForm.controls.password.hasError('required')\">This field is Required</div>\r\n                  </div>\r\n                  </div>\r\n                  \r\n                </div>\r\n                \r\n                <div class=\"checkbox\">\r\n                    <label class=\"chk_box\">Remember me\r\n                        <input type=\"checkbox\">\r\n                        <span class=\"checkmark\"></span>\r\n                    </label>\r\n                  <button type=\"submit\" class=\"btn btn-default lgnbtner\">Login </button>\r\n                </div>\r\n                \r\n              </form>\r\n\r\n              <div class=\"fgp\">Don't you have an account ? <span (click)=\"closePopup()\" class=\"signup_hdng\">Signup</span></div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!--contact popup-->\r\n<div class=\"contact_mask\" *ngIf=\"kont_msk\" (click)=\"closeKontForm()\"></div>\r\n<div class=\"contact_pop\"  [style.background-image]=\"'url(\\'assets/images/land_bg2.jpg\\')'\"  *ngIf=\"kont_pop\">\r\n  \r\n  <span (click)=\"closeKontForm()\"><i class=\"far fa-times-circle fa-2x closer_pop\"></i></span>\r\n\r\n    <div class=\"form-area\">  \r\n        <form role=\"form\" [formGroup]=\"formContactKonect\" (ngSubmit)=\"onSendContactUs()\">\r\n            <h3 class=\"kont_hdng\">Konect With Us</h3>\r\n\r\n    \t\t\t\t<div class=\"form-group embx embx2\">\r\n              <label for=\"name\">Name</label>\r\n            <input type=\"text\" class=\"form-control lg_email2\" id=\"name\" [(ngModel)]=\"name\"  formControlName=\"name\" placeholder=\"ex : John\" pattern=\"[a-zA-Z][a-zA-Z ]+\" required>\r\n            <ul class=\"help-block\">\r\n              <li class=\"err2\" *ngIf=\"formContactKonect.controls.name.errors?.required  && isSubmitted\">This field is Required</li>\r\n            </ul>\r\n            <div [hidden]=\"formContactKonect.controls.name.valid || formContactKonect.controls.name.pristine\" class=\"alert alert-danger err2\">\r\n              <div [hidden]=\"!formContactKonect.controls.name.hasError('required')\">Name is Required</div>\r\n              <div [hidden]=\"!formContactKonect.controls.name.hasError('pattern')\">Only alphabetsallowed</div>\r\n          </div>\r\n          </div>\r\n          \r\n\t\t\t\t\t<div class=\"form-group embx embx2\">\r\n              <label for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control lg_email2\" id=\"email\" [(ngModel)]=\"email\" formControlName=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" placeholder=\"ex : john@something.com\" required>\r\n            <ul class=\"help-block\">\r\n              <li *ngIf=\"formContactKonect.controls.email.hasError('required') && isSubmitted\" class=\"err2\">This field is Required</li>\r\n            </ul>\r\n            <div [hidden]=\"formContactKonect.controls.email.valid || formContactKonect.controls.email.pristine\" class=\"alert alert-danger err2\">\r\n              <div [hidden]=\"!formContactKonect.controls.email.hasError('required')\">Email is required</div>\r\n              <div [hidden]=\"!formContactKonect.controls.email.hasError('pattern')\">Email format should be \r\n              <small> <b>john@something.com</b> </small>\r\n          </div>\r\n        </div>\r\n          </div>\r\n          \r\n\t\t\t\t\t<div class=\"form-group embx embx2\">\r\n            <label for=\"mobile\">Mobile Number</label>\r\n            <input type=\"text\" class=\"form-control lg_email2\" id=\"mobile\" [(ngModel)]=\"mobile\" required formControlName=\"mobile\" placeholder=\"ex : 9000000000\"\r\n            pattern=\"[0-9]*\"\r\n            minlength=\"10\"\r\n            maxlength=\"10\">\r\n\r\n            <ul class=\"help-block\">\r\n              <li class=\"err2\" *ngIf=\"formContactKonect.controls.mobile.errors?.required && isSubmitted\">This field is Required</li>\r\n            </ul>\r\n  \r\n            <div [hidden]=\"formContactKonect.controls.mobile.valid || formContactKonect.controls.mobile.pristine\" class=\"alert alert-danger err2\">\r\n            <div [hidden]=\"!formContactKonect.controls.mobile.hasError('minlength')\">Mobile should be 10digit</div>\r\n            <div [hidden]=\"!formContactKonect.controls.mobile.hasError('required')\">Mobile is required</div>\r\n            <div [hidden]=\"!formContactKonect.controls.mobile.hasError('pattern')\">Mobile numberr should be only numbers</div>\r\n          \r\n        </div>\r\n          </div>\r\n          \r\n\t\t\t\t\t<div class=\"form-group embx embx2\">\r\n            <label for=\"subject\">Subject</label>\r\n            <input type=\"text\" class=\"form-control lg_email2\" id=\"subject\" [(ngModel)]=\"subject\" formControlName=\"subject\" placeholder=\"ex : Business\" pattern=\"[a-zA-Z][a-zA-Z ]+\" required>\r\n            <ul class=\"help-block\">\r\n              <li class=\"err2\" *ngIf=\"formContactKonect.controls.subject.errors?.required  && isSubmitted\">This field is Required</li>\r\n            </ul>\r\n            <div [hidden]=\"formContactKonect.controls.subject.valid || formContactKonect.controls.subject.pristine\" class=\"alert alert-danger err2\">\r\n              <div [hidden]=\"!formContactKonect.controls.subject.hasError('required')\">Subject is Required</div>\r\n              <div [hidden]=\"!formContactKonect.controls.subject.hasError('pattern')\">Only alphabetsallowed</div>\r\n          </div>\r\n          </div>\r\n\r\n          <!-- <div class=\"form-group embx embx2\">\r\n            <label for=\"howDoYouHearAboutUs\">How Did You Hear About Us</label>\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"howDoYouHearAboutUs\" class=\"\" >\r\n          </div> -->\r\n\r\n          <div class=\"form-group embx embx2\">\r\n            <label class=\"control-label col-12 col-sm-12 col-md-12 col-lg-12 cb_lvler\" for=\"howDoYouHearAboutUs\">How did you hear About Us:</label>\r\n            <div class=\"col-12 col-sm-12 col-md-12 cb_lvler\">\r\n           <label *ngFor=\"let rec of recogList\" class=\"chk_box chkb_space\">\r\n              <input type=\"radio\" id=\"howDoYouHearAboutUs\" name=\"howDoYouHearAboutUs\" [(ngModel)]=\"howDoYouHearAboutUs\" formControlName=\"howDoYouHearAboutUs\" value=\"{{rec.value}}\">{{rec.text}}\r\n              <span class=\"checkmark chker3\"></span>\r\n           </label>\r\n            </div>\r\n          </div>\r\n        \r\n\r\n\r\n          \r\n          <div class=\"form-group embx embx2\">\r\n            <label for=\"message\">Message</label>\r\n            <textarea class=\"form-control lg_email2 lg_mes\" type=\"textarea\" id=\"message\" [(ngModel)]=\"message\" formControlName=\"message\" placeholder=\"Type Your message\" pattern=\"[a-zA-Z][a-zA-Z ]+\" required  rows=\"2\"></textarea>\r\n            <ul class=\"help-block\">\r\n              <li *ngIf=\"formContactKonect.controls.message.hasError('required') && isSubmitted\" class=\"err2\">This field is Required</li>\r\n            </ul>\r\n            <div [hidden]=\"formContactKonect.controls.message.valid || formContactKonect.controls.message.pristine\" class=\"alert alert-danger err2\">\r\n              <div [hidden]=\"!formContactKonect.controls.message.hasError('required')\">Message is Required</div>\r\n            </div>                           \r\n         </div>\r\n         \r\n          <div class=\"form-group\" >\r\n              <div class=\"mysucess_msg\" *ngIf=\"show_msg\">\r\n                  <h6 class=\"myerr_msg\" >Email submitted successfully!!</h6>\r\n              </div>\r\n        <button type=\"submit\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-left knt_btn\" >Konect</button>\r\n        </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("./src/app/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_observable_service__ = __webpack_require__("./src/app/services/observable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







//import { scrollTo } from 'ng2-utils';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(menuSvc, routeSvc, Obsvc, frmBuilder, route, authGuard, document) {
        this.menuSvc = menuSvc;
        this.routeSvc = routeSvc;
        this.Obsvc = Obsvc;
        this.frmBuilder = frmBuilder;
        this.route = route;
        this.authGuard = authGuard;
        this.document = document;
        this.processing = false;
        this.isSubmitted = false;
        this.recogList = this.Obsvc.getRecoglist();
        this.logoBg = "assets/images/logo-trans2.png";
        this.menuList = this.menuSvc.getMenuList();
        this.showPopup = false;
        this.showMask = false;
        this.creatLoginForm();
        this.user = {};
        this.regPopup = false;
        this.showMask2 = false;
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = false;
        this.navIsFixed = false;
        this.logoFixed = false;
        this.loginFixed = false;
        this.menuFixed = false;
        //this.showMyMenu2 = false;
        //this.showMyMenu = true;
        this.rspmask = false;
        //this.email = localStorage.getItem('loginSessId');
        this.kont_msk = false;
        this.kont_pop = false;
        this.show_msg = false;
        this.show_lgmsg = false;
    }
    HeaderComponent.prototype.openKontForm = function () {
        this.kont_msk = true;
        this.kont_pop = true;
    };
    HeaderComponent.prototype.closeKontForm = function () {
        this.kont_msk = false;
        this.kont_pop = false;
    };
    HeaderComponent.prototype.slideMyMenu = function () {
        var mymenuid = this.document.getElementById("loginId");
        mymenuid.classList.add("cbk_zero");
        this.rspmask = true;
    };
    HeaderComponent.prototype.clSlideMenu = function () {
        var mymenuid = this.document.getElementById("loginId");
        mymenuid.classList.remove("cbk_zero");
        this.rspmask = false;
    };
    HeaderComponent.prototype.creatLoginForm = function () {
        this.loginForm = this.frmBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
        });
    };
    HeaderComponent.prototype.onContactKonectFormGroup = function () {
        this.formContactKonect = this.frmBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            subject: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            howDoYouHearAboutUs: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
        });
    };
    HeaderComponent.prototype.disableForm = function () {
        this.loginForm.controls['email'].disable();
        this.loginForm.controls['password'].disable();
    };
    HeaderComponent.prototype.enableForm = function () {
        this.loginForm.controls['email'].enable();
        this.loginForm.controls['password'].enable();
    };
    HeaderComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
        };
        this.isSubmitted = true;
        this.Obsvc.login(user).subscribe(function (data) {
            // console.log(data);
            _this.email = user.email;
            //this.id = id;
            if (data.message == "login sucessfully") {
                //this.message = data.message;
                //this.messageClass = "alert alert-success";
                _this.processing = true;
                //this.disableForm();
                _this.loginForm.reset();
                _this.isSubmitted = false;
                localStorage.setItem('loginSessId', user.email);
                _this.Obsvc.storeUserData(data.token, data.user);
                _this.routeSvc.navigate(['/profile/']);
                _this.showPopup = false;
                _this.showMask = false;
                _this.rspmask = false;
                //this.showMyMenu2 = true;
                //this.showMyMenu = false;
            }
            else {
                //this.message = data.message;
                _this.processing = false;
                //this.enableForm();
                //this.messageClass = "alert alert-danger";
                _this.show_lgmsg = true;
                //this.showMyMenu2 = true;
                // this.showMyMenu = false;
                localStorage.setItem('loginSessId', user.email);
            }
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.Obsvc.logout();
        this.routeSvc.navigate(['/']);
        this.rspmask = false;
    };
    HeaderComponent.prototype.onGetMemberByEmail = function () {
        var _this = this;
        var user = {
            email: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
        };
        this.Obsvc.getMemberByEmail(user.email).subscribe(function (result) {
            _this.userbyemail = result;
            console.log("data:" + _this.userbyemail);
            //this.email = this.userbyemail.email;
            _this.memberId = _this.userbyemail._id;
        });
        return this.userbyemail;
    };
    HeaderComponent.prototype.ShowMyPopup = function () {
        this.showPopup = true;
        this.showMask = true;
        this.show_lgmsg = false;
        this.isSubmitted = false;
    };
    HeaderComponent.prototype.closePopup = function () {
        this.showPopup = false;
        this.showMask = false;
    };
    HeaderComponent.prototype.showRegPopup = function () {
        this.regPopup = true;
        this.showMask2 = true;
        this.showPopup = false;
        this.showMask = false;
    };
    HeaderComponent.prototype.closeRegiPop = function () {
        this.regPopup = false;
        this.showMask2 = false;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onGetMemberByEmail();
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log("id:" + _this.id);
        });
        if (this.authGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger';
            this.message = 'You must be logged in to view that page.';
            this.previousUrl = this.authGuard.redirectUrl;
            this.authGuard.redirectUrl = undefined;
        }
        this.onContactKonectFormGroup();
    };
    HeaderComponent.prototype.onSendContactUs = function () {
        var _this = this;
        var contactUs = {
            name: this.formContactKonect.get('name').value,
            email: this.formContactKonect.get('email').value,
            mobile: this.formContactKonect.get('mobile').value,
            subject: this.formContactKonect.get('subject').value,
            message: this.formContactKonect.get('message').value,
            howDoYouHearAboutUs: this.formContactKonect.get('howDoYouHearAboutUs').value
        };
        console.log(contactUs);
        this.isSubmitted = true;
        if (this.formContactKonect.valid) {
            this.Obsvc.onSendContactUs(contactUs).subscribe(function (data) {
                console.log(data);
                if (data.message == "Email submitted successfully!!") {
                    // this.kont_msk = false;
                    // this.kont_pop = false;
                    setTimeout(function () {
                        _this.kont_msk = false;
                        _this.kont_pop = false;
                        _this.show_msg = false;
                    }, 2000);
                    _this.message = data.message;
                    _this.show_msg = true;
                    _this.messageClass = "alert alert-success";
                    _this.formContactKonect.reset();
                }
                else {
                    // this.kont_msk = false;
                    // this.kont_pop = false;
                }
            });
            this.isSubmitted = false;
        }
    };
    HeaderComponent.prototype.getRegiTabs = function (id, event) {
        switch (id) {
            case 'prof':
                this.tab1 = true;
                this.tab2 = false;
                this.tab3 = false;
                this.tab4 = false;
                event.target.classList.add('reg_active');
                break;
            case 'inter':
                this.tab2 = true;
                this.tab1 = false;
                this.tab3 = false;
                this.tab4 = false;
                event.target.classList.add('reg_active');
                break;
            case 'pref':
                this.tab2 = false;
                this.tab1 = false;
                this.tab3 = true;
                this.tab4 = false;
                event.target.classList.add('reg_active');
                break;
            case 'fin':
                this.tab2 = false;
                this.tab1 = false;
                this.tab3 = false;
                this.tab4 = true;
                event.target.classList.add('reg_active');
                break;
            case 'defualt':
                this.tab1 = true;
                break;
        }
    };
    HeaderComponent.prototype.onWindowScroll = function () {
        var number = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (number > 10) {
            this.navIsFixed = true;
            this.logoFixed = true;
            this.loginFixed = true;
            this.menuFixed = true;
        }
        else if (this.navIsFixed && number < 10) {
            this.navIsFixed = false;
            this.logoFixed = false;
            this.loginFixed = false;
            this.menuFixed = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'Header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_observable_service__["a" /* ObservableService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */],
            Document])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/help/help.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  help works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'help',
            template: __webpack_require__("./src/app/help/help.component.html"),
            styles: [__webpack_require__("./src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".appload_cont{ padding:120px 0px 50px 0px; margin-top: 0px; \r\n\tfont-family: 'Raleway', sans-serif; height: 100vh; background-repeat: no-repeat;\r\n\tbackground-size:cover; position: relative; overflow: hidden;\r\n}\r\n\r\n.btns_wrap > button{ padding: 5px 40px;}\r\n\r\n.btns_wrap > button > span{ display: inline-block; width: 40px; position: relative; top: 10px;\r\n    left: -20px;\r\n}\r\n\r\n.btns_wrap{  display: block; margin: 20px 0 30px 0 ;}\r\n\r\n.btns_wrap > button{ border-radius: 36px;}\r\n\r\n.btns_wrap > button > small{ display: block; position: relative;}\r\n\r\n.and_icntext{ display: block; left: 6px; position: relative;}\r\n\r\n.ios_icntext{ display: block; left: 3px; position: relative;}\r\n\r\n.drid{ max-height:60px; display: block; float: left; position: relative; left: -10px;\r\ntop: 5px;\r\n}\r\n\r\n.btnicons_det{ display: inline-block; margin: 0px; padding: 0px;}\r\n\r\n.big_fnt{  font-weight:600;}\r\n\r\n.and_btn{ background-color: #259dd0; border-color: #259dd0; color: #fff;}\r\n\r\n.and_btn:hover{ background-color: #fff; border-color: #2c2c2c; color: #2c2c2c;}\r\n\r\n.site_title{ font-size: 20px; font-weight:600; padding: 20px 30px 20px 0px; color: #2c2c2c; \r\n    font-family: 'Berkshire Swash', cursive;\r\n }\r\n\r\n.site_desc{ font-size: 18px; color: #2c2c2c; line-height: 30px; font-weight:400; \r\n    display: block; margin: 0px 0px;  padding: 0px 0px 20px 0px;\r\n}\r\n\r\n/* .brd{ max-width: 70%; display: block; margin: 0px 0px;} */\r\n\r\n.celeb_appmobs > img{ max-width: 480px;}\r\n\r\n.ql_hdng2{ font-size: 20px; font-weight: 600; color: #2c2c2c; padding: 20px 0px;}\r\n\r\n.sc_wrap{ margin: 0px 0px 0px 50px; display: block; list-style: none;}\r\n\r\n.fb,.tw,.lin,.yut{  display: inline-block; cursor: pointer; border-radius:2px; \r\n\t-webkit-transition: 0.3s ease-in-out;\r\n\ttransition: 0.3s ease-in-out;\r\n}\r\n\r\n.fb span,.tw span,.lin span{ display: inline-block;}\r\n\r\n/*.fb{ background-color: #365899; color:#fff; border: 1px solid;}*/\r\n\r\n.tw {\r\n  background-color: #1da1f2;\r\n  color: #fff;\r\n  border: 1px solid;\r\n  border-radius: 4px; padding-top:3px;\r\n  width: 69px;\r\n  height: 30px; position:relative; top:-10px; text-align:center;\r\n}\r\n\r\n.lin {\r\n  background-color: #e4405f;\r\n  color: #fff;\r\n  border: 1px solid;\r\n  border-radius: 4px; padding: 3px 11px;\r\n  height: 30px;\r\n  position: relative;\r\n  top: -10px;\r\n  text-align: center;\r\n}\r\n\r\n.yut {\r\n  background-color: #ff0000;\r\n  color: #fff;\r\n  border: 1px solid;\r\n  border-radius: 4px; padding: 3px 11px;\r\n  height: 30px;\r\n  position: relative;\r\n  top: -10px;\r\n  text-align: center;\r\n}\r\n\r\n/*.fb:hover,.tw:hover,.lin:hover{ background-color:rgba(0,0,0,0.9); color:#fff;}*/\r\n\r\n.lin a{ color:#fff; text-decoration:none;}\r\n\r\n.tw a{ color:#fff; text-decoration:none;}\r\n\r\n.yut a{ color:#fff; text-decoration:none;}\r\n\r\n.yut a:hover{ color: #fff; text-decoration: none;}\r\n\r\n/*buttons*/\r\n\r\n.btn-app-store {\r\n  background: black;\r\n  color: white;\r\n  position: relative;\r\n  height: 60px;\r\n  padding-left: 55px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.ibtn{\r\n\tfont-size: 40px;\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n}\r\n\r\n.btn-app-store .small{\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tline-height: 12px;\r\n\tmargin-bottom: 2px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.btn-app-store .big{\r\n\tdisplay: block;\r\n\ttext-align: left;\r\n\tfont-size: 21px;\r\n\tline-height: 21px;\r\n}\r\n\r\n.btn-app-store a{ color: #fff; text-decoration: none;}\r\n\r\n.app_btn{ display: inline-block;}\r\n\r\n.regi_btn{ border-radius:50px; padding: 13px 50px; background-color: #1da1f2;\r\n    border:none; color: #fff; font-weight: 600; text-transform: uppercase;\r\n}\r\n\r\n.regi_btn:hover{ background-color: #000; color: #fff; border: none;}\r\n\r\n.android_icn{ width: 50px; height: 50px; background-color: #2c2c2c; display: inline-block; border-radius:100%;\r\n    margin-right: 5px; color: #fff; text-align: center; vertical-align: middle;\r\n    display: table-cell;\r\n}\r\n\r\n.tab_bgr{ width: 75%; display: block; margin: 0px auto 0px auto; position: absolute; overflow: hidden;\r\n      z-index: 500; bottom: 0px; left: 0px; right: 0px; background-repeat: no-repeat;\r\n      background-position: center bottom; cursor: pointer; padding: 16.5%; z-index: 1;\r\n      background-size:75%;\r\n}\r\n\r\n.ivideo{ position: absolute; width: 40%;  z-index: -1;  left: 31.5%; right: 0;\r\n    top: 18%; height:56%;\r\n}\r\n\r\n/* .tab_bgr > img{ max-width: 600px; display: block; margin: 0px auto -30px auto;} */\r\n\r\n.site_hdng{ text-align: center; width: 600px; margin: 0px auto; display: block; padding-top: 0px; }\r\n\r\n.konect_hdng{ font-weight: 200; font-size: 21px; color: #fff; text-align: center;}\r\n\r\n.celebs_hdng{ color: #fff; text-transform: capitalize; font-weight: 600; font-size: 32px;\r\n\ttext-align: center;\r\n}\r\n\r\n.sgpbtn{ text-align: center; background-color: #2496ca; border: none;\r\n\twidth: 180px; margin: 10px auto 0px auto; padding: 14px 20px; color:#fff; display: block; border-radius:50px;\r\n\t/* cursor: pointer; -webkit-box-shadow:inset 0px -3px #071f2e; -moz-box-shadow:inset 0px -3px #071f2e;\r\n  -ms-box-shadow:inset 0px -3px #071f2e;  box-shadow:inset 0px -3px #071f2e; font-weight:bold; */\r\n  cursor: pointer; font-weight:bold; font-size:16px;\r\n\t-webkit-transition: 0.3s ease-in-out;\r\n\ttransition: 0.3s ease-in-out; outline: none;\r\n}\r\n\r\n.sgpbtn:hover{ background-color: #259dd0; color: #fff;}\r\n\r\n.hmpage_btnswrap{ padding: 100px 0px; background-color: #f5f5f5; border-top:1px solid #ddd;}\r\n\r\n.cntr_box{  margin: 0px auto;}\r\n\r\n.dwn_hdng{ color: #000; text-transform: uppercase; font-weight:200; text-align: left; margin-bottom: 25px;}\r\n\r\n.app_btn{ display: block;}\r\n\r\n.dwn2{ padding-left: 50px;}\r\n\r\n.add_lftbord{ position: relative;}\r\n\r\n.add_lftbord:before{ content: ''; position: absolute; left: 0px; top: 0px; height: 160px; width: 1px;\r\n    background: #f5f5f5; \r\n    background: -webkit-gradient(linear, left top, left bottom, from(#f5f5f5),color-stop(50%, #cccccc),to(#f5f5f5)); \r\n    background: linear-gradient(to bottom, #f5f5f5 0%,#cccccc 50%,#f5f5f5 100%); \r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f5f5', endColorstr='#f5f5f5',GradientType=0 );\r\n}\r\n\r\n.add_lftbord2{ position: relative;}\r\n\r\n.add_lftbord2:before{ content: ''; position: absolute; right: 50px; top: 0px; height: 160px; width: 1px;\r\nbackground: #f5f5f5; \r\nbackground: -webkit-gradient(linear, left top, left bottom, from(#f5f5f5),color-stop(50%, #cccccc),to(#f5f5f5)); \r\nbackground: linear-gradient(to bottom, #f5f5f5 0%,#cccccc 50%,#f5f5f5 100%); \r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f5f5', endColorstr='#f5f5f5',GradientType=0 );\r\n }\r\n\r\n/* .top_row{ height: 25vh; position: relative; top:115px;} */\r\n\r\n.top_row{ position: absolute; top: 50%; left: 50%; max-width: 700px; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);\r\n}\r\n\r\n.tabg_data{ height: 0;}\r\n\r\n/* .mydata{ position: absolute; } */\r\n\r\n.mydata{ padding: 0px; }\r\n\r\n.mydt2{ padding-top: 70%;}\r\n\r\n/*Register Form Setup*/\r\n\r\n.register_wrapper{ width:100%; max-width: 670px; height: 100%; position: fixed; right: -20px; top: 0px; bottom: 0px; background-color: #fff;\r\n    z-index: 10000; -webkit-box-shadow: 0px 0px 10px #000; box-shadow: 0px 0px 10px #000; padding: 50px 50px; -webkit-box-sizing: border-box; box-sizing: border-box;\r\n    font-family: 'Raleway', sans-serif; overflow-y: scroll;\r\n}\r\n\r\n.regi_title{ font-size:30px; color: #666; font-weight: 200; margin-bottom: 30px; text-transform: uppercase; }\r\n\r\n.regtabs{ list-style: none; padding: 0px; margin: 0px 0px 30px 0px; color: #ddd;}\r\n\r\n.regtabs li{ width: 80px; height:80px; float: left; border-radius:100%; border:1px solid #ddd;\r\n        margin-right:50px; position: relative; background-color: #fff; cursor: pointer; \r\n        padding: 25px 20px; text-align: center;\r\n}\r\n\r\n.regtabs li:after{ position: absolute; content: \"\"; width: 100%; height: 1px; background-color: #ddd; right: -80%;\r\n    top: 40px; z-index: -1;\r\n}\r\n\r\n.list_latchild:after{ display: none;}\r\n\r\n.regtabs > li > p{ position: absolute; bottom: -50px; left: 0px; right: 0px; text-align: center;}\r\n\r\n.reg_active{ color: #259dd0; border-color: #259dd0!important;}\r\n\r\n.reg_active:after{ position: absolute; content: \"\"; width: 100%; height: 1px; background-color: #259dd0!important; right: -80%;\r\n    top: 40px; z-index: -1;}\r\n\r\n.pi_hdng{ font-size: 20px; color: #666; padding-top: 50px; padding-bottom: 30px; font-weight:400;}\r\n\r\n.reg_email{ width: 70%;}\r\n\r\n.rgbtnr{ float: left!important; padding: 10px 15px!important; background-color: #2496ca;     text-align: center;\r\n  background-color: #2496ca;\r\n  border: none;\r\n  width: 150px;\r\n  margin: 10px auto 0px auto;\r\n  padding: 14px 20px;\r\n  color: #fff;\r\n  display: block;\r\n  border-radius: 50px;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  -webkit-transition: 0.3s ease-in-out;\r\n  transition: 0.3s ease-in-out;\r\n  outline: none; border-radius:36px !important;\r\n}\r\n\r\n.prefbx{\r\n    -webkit-appearance: none; -moz-appearance: none; appearance: none;\r\n    background-repeat: no-repeat; background-size: 16px; background-position: center right;\r\n}\r\n\r\n.interest_lists{ list-style: none; padding: 0px; margin:0 1.5% 0 0; width: 23%; float: left;}\r\n\r\n.interest_lists > li{ float: left; width: 100%; margin-right: 0%; \r\n    position: relative; margin-bottom: 30px;\r\n}\r\n\r\n.pref_img{ position: relative;  overflow: hidden; width: 100%; height: 130px; margin-bottom: 10px; }\r\n\r\n.interest_lists > li > p{ padding: 5px 0px 0px 0px; margin: 0px;}\r\n\r\n/*buttons*/\r\n\r\n.btn-app-store{\r\n    background: black;\r\n\tcolor: white;\r\n\tposition: relative;\r\n\theight: 52px;\r\n\tpadding-left: 38px;\r\n\tpadding-right: 13px; margin-bottom: 10px;\r\n}\r\n\r\n.ibtn{\r\n\tfont-size: 25px;\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n}\r\n\r\n.btn-app-store .small{\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tline-height: 12px;\r\n\tmargin-bottom: 2px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.btn-app-store .big{\r\n\tdisplay: block;\r\n\ttext-align: left;\r\n\tfont-size: 16px;\r\n\tline-height: 16px;\r\n}\r\n\r\n.app_btn{ display: inline-block;}\r\n\r\n.thank_data{ font-size:18px; font-weight:400; padding-bottom: 20px;}\r\n\r\n.pi_hdng2{ padding-bottom:  20px; margin-bottom: 0px; color: #666;}\r\n\r\n.regimasker{ width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); position: fixed;\r\n    top: 0; bottom: 0; left: 0; right: 0; z-index: 1000; cursor: crosshair;\r\n}\r\n\r\n.lg_email{ border: none; border-radius:0px; border-bottom: 1px solid #999; outline: none;\r\n    box-shadow:none; -webkit-box-shadow:none; font-size: 12px; -webkit-transition: 0.3s ease-in-out;\r\n\ttransition: 0.3s ease-in-out; position: relative; padding: 0 0 5px 0px; \r\n}\r\n\r\n.lg_email:focus{ border-color: #259dd0; color: #259dd0;}\r\n\r\n.lg_email::-webkit-input-placeholder{ color: #999;}\r\n\r\n.embx{ position: relative;}\r\n\r\n.usicn{ position: absolute; left: 0; bottom: 5px; z-index: 10; color: #ccc;}\r\n\r\n.lg_email:focus .usicn{ color: #259dd0!important;}\r\n\r\n.embx > label{ color: #999; font-size: 12px;}\r\n\r\n.embx2{ margin-bottom: 30px;}\r\n\r\n.lgnbtner{ float: right; background-color: #259dd0; border-radius:2px; -webkit-border-radius:2px;\r\n\ttext-transform: uppercase; font-weight:bold; font-size:0.8rem; color: #fff; padding: 5px 10px;\r\n}\r\n\r\n.chk_box {\r\n    display: inline-block;\r\n    position: relative;\r\n    padding-left: 30px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 13px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none; color: #999;\r\n}\r\n\r\n.chk_box input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 16px;\r\n    width: 16px;\r\n    background-color: #fff;\r\n    border: 1px solid #999;\r\n}\r\n\r\n.chk_box:hover input ~ .checkmark {\r\n    background-color: #fff;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark {\r\n    background-color: #259dd0; border-color: #259dd0;\r\n}\r\n\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n\r\n.chk_box .checkmark:after {\r\n    left: 6px;\r\n    top: 3px;\r\n    width: 4px;\r\n    height: 7px;\r\n    border: solid white;\r\n    border-width: 0 2px 2px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.fgp{ position: absolute; bottom: 0; width: 100%; background-color: #f5f5f5; left: 0; padding: 12px 50px; \r\n\tfont-size: 13px;}\r\n\r\n.signup_hdng{ color: #259dd0; font-weight: 600; cursor: pointer;}\r\n\r\n.hp_blk{ list-style: none; font-size: 12px;}\r\n\r\n.lgn_hdng{ color: #000; font-weight:300; font-size: 20px; text-transform: uppercase; padding-bottom: 30px;}\r\n\r\n.pref_catebox {\r\n  margin-bottom: 20px; width: 20%; margin-right: 0px; padding: 0px; border: 1px solid #fff;\r\n}\r\n\r\n.pref_databox { padding: 0px; position: relative;}\r\n\r\n.err {\r\n  background-color: none !important;\r\n  border-color: none !important;\r\n  padding: 5px 0px 0px 0px;\r\n  color: red;\r\n}\r\n\r\n.fbreq{ width:69px; height:29px;}\r\n\r\n.prefbtns{ width: 140px;  margin-right: 0px; -webkit-box-shadow: none; box-shadow: none; outline: none;}\r\n\r\n/*about container*/\r\n\r\n.about_container{ padding: 100px 0px 150px 0px; margin: 0px; background-color:#f5f5f5;\r\n     position: relative; font-family: 'Raleway', sans-serif; border-bottom: 1px solid #ddd;}\r\n\r\n.abt_title{ text-align: left; font-weight:400; color: #297ec1; display: block;  font-size: 32px;\r\n    position: relative; margin-bottom: 40px; padding-bottom: 30px;\r\n}\r\n\r\n.abt_title:after{ content:''; position: absolute; width: 210px; height: 5px; left: 0; bottom: 0;\r\n    background-color: #297ec1;\r\n}\r\n\r\n.abt_title:before{ content:''; position: absolute; width: 280px; height: 1px; left: 0; bottom: 0;\r\n    background-color: #297ec1;\r\n}\r\n\r\n.abt_data{ text-align: left; font-weight:300; color: #000; line-height: 150%; font-size: 16px;\r\n    margin: 0px 0px; display: block; padding-bottom: 20px\r\n}\r\n\r\n.abt_data > strong{ font-weight: 600;}\r\n\r\n.abtmore{ display: block; width: 100%; max-width: 260px; margin: 20px 0px; background-color: #297ec1;\r\n    border: none; border-radius:36px; padding: 15px 0px; font-size: 16px; text-transform: uppercase;\r\n}\r\n\r\n.abtmore:hover{ background-color:#10152e; outline: none;}\r\n\r\n.celb_wrp{ border:5px solid #081453; padding: 50px; max-width: 300px; min-height: 500px; border-radius:10px; position: relative;\r\n}\r\n\r\n.celb_wrp > img{ position: absolute; right: -100px; top: 50px; -webkit-box-shadow:0px 0px 50px #ccc; \r\n    -ms-box-shadow:0px 0px 50px #ccc; box-shadow:0px 0px 50px #ccc;\r\n}\r\n\r\n.allcb_cont{ padding: 80px 0px;}\r\n\r\n.allceleb_box{ position: relative; min-height: 260px; overflow: hidden; border-radius: 4px; border-radius: 4px; -webkit-transition: 0.3s ease-in-out; \r\n    transition: 0.3s ease-in-out; margin-bottom: 50px;  border: 1px solid #fff; -webkit-box-shadow:0px 0px 30px #ddd; box-shadow:0px 0px 30px #ddd;\r\n}\r\n\r\n.cb_avtar{ position: absolute; width: 100%; height: 100%; z-index: 10;}\r\n\r\n.allceleb_data{ position: absolute; width: 100%; bottom: 0px; z-index: 20;  cursor: move;\r\nbackground: linear-gradient(45deg, rgba(38,167,217,0.81) 0%,rgba(38,167,217,0.81) 1%,rgba(21,29,65,0.82) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cf26a7d9', endColorstr='#d1151d41',GradientType=1 );\r\n}\r\n\r\n.allceleb_data > h3{ color: #fff; text-align: center; font-size: 16px; font-weight:bold; padding: 20px 0px 0px 0px;  margin: 0px;}\r\n\r\n.allceleb_data > p{ color: #fff; text-align: center; font-size: 14px; font-weight:400; padding: 10px 0px 20px 0px; margin:0px;}\r\n\r\n#slider {\r\n    width: 100%;\r\n    margin:0px auto 0px auto;\r\n    padding: 0;\r\n    position: relative; overflow: hidden;\r\n}\r\n\r\n.items {\r\n    width: 100%;\r\n    height:100vh;\r\n}\r\n\r\n.controls{ z-index:5000;}\r\n\r\n#left, #right { \r\n    margin: 30px;\r\n    -webkit-filter: brightness(0) invert(1); -moz-filter: brightness(0) invert(1);\r\n    filter: brightness(0) invert(1);\r\n    outline: none!important; cursor: pointer; z-index:5000;\r\n}\r\n\r\n.slide_bgs{ position: relative;}\r\n\r\n.myForm{ position: absolute; z-index: 500; top: 0; width: 70%; top: 38%; left: 0; right: 0; display: block;\r\n    margin:0px auto;\r\n}\r\n\r\n.slidecont{position: relative;}\r\n\r\n.loc_inp{ width: 34%; float: left; margin-right: 1%;\r\n    border-radius: 2px; border: none; height: 50px;\r\n}\r\n\r\n.plc_inp{ width: 55%; float: left; margin-right: 1%;\r\n    border-radius: 2px; border: none; height: 50px;\r\n}\r\n\r\n.nomar{ margin:0px!important;}\r\n\r\n.srch_btn{ background-color: #1ebef0; height: 50px; width: 80px; outline: none;}\r\n\r\n.intro-title{ text-align: left; color: #fff; font-size: 30px; font-weight: 600;}\r\n\r\n.sub-title{ color: #fff; font-size: 20px; text-align: left;}\r\n\r\n/*breadcrumb css*/\r\n\r\n.blue_breadcrumb{ background: #00afef; padding: 10px 0px; margin: 0px;}\r\n\r\n.bread_bg{ width: 20%; float: left;}\r\n\r\n.bread_bg img{ width: 100%; max-width: 60px; display: block; margin: 0px auto; padding: 10px 0px;}\r\n\r\n.brd_title{ font-size: 14px; color:#fff; text-align:center; padding-bottom: 10px;}\r\n\r\n.app_data{ padding: 65px 0px;}\r\n\r\n.app_disc h2 { font-family: 'Open Sans',sans-serif; font-weight: 400; line-height: initial;}\r\n\r\n.app_disc ul { margin: 0; padding: 0;}\r\n\r\n.app_disc ul li { color: #797985; list-style: none; font-size: 16px;\r\n    font-weight: 400; padding: 8px 0;\r\n}\r\n\r\n.app_disc ul li .fa-chevron-right {color: #14bef0; margin-right: 5px;}\r\n\r\n.sc_item_button { line-height: 38px; width: auto; padding: 0 25px; font-size: 16px;\r\n    color: #fff; background-color: #00aff0; border: #00aff0; cursor: pointer;\r\n    text-align: center; margin-top: 25px; border-radius: 2%;\r\n}\r\n\r\n.user-app {background: #f1f0f6;}\r\n\r\n.hm-of h2 { text-align: center; font-size: 30px; color: #3f3f3f; font-weight: 700; padding: 0 0 50px;}\r\n\r\n.of-disc { padding: 10px 0; display: inline-table;}\r\n\r\n.of-disc p { color: #6c6c79; font-size: 17px; font-family: 'Open Sans',sans-serif; font-weight: 600;}\r\n\r\n.of-img { margin: 0 auto; text-align: center;}\r\n\r\n.text-center { text-align: center !important;}\r\n\r\n.app_img img{ width: 100%;}\r\n\r\n.leftRs {position: absolute; margin: auto; top: 0; bottom: 0; width: 50px; height: 50px;\r\n     border-radius: 999px; left: 0; cursor: pointer; outline: none;  z-index: 100;\r\n     background-color: #fff; border: none; color:#00afef;  -webkit-box-shadow:0px 0px 2px #000;  box-shadow:0px 0px 2px #000;\r\n}\r\n\r\n.rightRs { position: absolute; margin: auto; top: 0; bottom: 0; width: 50px; height: 50px; border-radius: 999px; right: 0;\r\n    cursor: pointer; outline: none; color:#00afef;  background-color: #fff; border: none;  -webkit-box-shadow:0px 0px 2px #000;  box-shadow:0px 0px 2px #000;\r\n    z-index: 100;\r\n}\r\n\r\n.ngxcarouselPointDefault{ display: none!important;}\r\n\r\n.tilebg{ width: 100%;}\r\n\r\n.carous_wrap{ padding-bottom: 50px; padding-top: 80px;}\r\n\r\n.owlcardata{ padding: 0 10px; margin-bottom: 20px;}\r\n\r\n.gar-tittle{ font-size: 16px; font-weight: 600; color: #282828; margin-bottom: 10px; text-align: center; padding: 15px 0px;}\r\n\r\n.loc{ font-size: 12px;}\r\n\r\n.phn{ font-size: 12px; float: right; padding-top: 5px;}\r\n\r\ni.fa.fa-star.orange-color { color: #ffbe00;}\r\n\r\n.star .fa-star-o { color: #ffbe00 !important;}\r\n\r\n.star{ display: block;  max-width: 145px; margin: 10px auto;}\r\n\r\n.rat{ font-size: 12px; text-align: center;}\r\n\r\n.hgt{ display: block; height: 10px;}\r\n\r\n.rathdn{ margin-right: 10px;}\r\n\r\n.wht_footanch{ color: inherit; text-decoration: none;}\r\n\r\n.hdr{ display: none;}\r\n\r\n/* .datavwh{ position: absolute; top:0; height:100vh; width: 100%; padding: 0px; margin: 0px auto; left: 0; right: 0; } */\r\n\r\n.datavwh{ position: relative; top:0; height:100vh; width: 100%; padding: 0px; margin: 0px auto; left: 0; right: 0; }\r\n\r\n.myslider{ height:100vh; padding: 0px; margin:0px;}\r\n\r\n.slitem{ height:100vh; background-size:cover; background-repeat: no-repeat; background-attachment: fixed;}\r\n\r\n/* .qz_pop{ position: fixed;  top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); \r\n  -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%);\r\n   margin: 30px 0px;   z-index: 12000;\r\n} */\r\n\r\n.qz_pop{ \r\n   margin: 0px 0px;   z-index: 12000; background-size: cover; background-repeat: no-repeat; min-height: 990px; position: relative;\r\n}\r\n\r\n.quiz_masker{\r\n  width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); position: fixed;\r\n  top: 0; bottom: 0; left: 0; right: 0; z-index: 1000; cursor: crosshair; z-index: 100;\r\n}\r\n\r\n.prefform2{ max-width: 600px; padding: 50px; border-radius: 4px; color: #fff; margin-top: 0px;\r\n}\r\n\r\n.fp_timer{ background-color: #fff;}\r\n\r\n.cs_para{ font-size:18px; color: #000; line-height: 25px; text-align: center; font-weight: 400;}\r\n\r\n.app_feutures{ padding:80px 0px; background-size:cover; background-attachment: fixed;}\r\n\r\n.feut_hdng{ color:#fff; max-width: 480px; margin:0px auto; display: block; text-align: center; font-size: 26px;\r\n  padding-bottom: 30px; font-weight:600; font-family: 'Raleway', sans-serif; color: #2496ca;\r\n}\r\n\r\n.feut_list{ min-height: 120px; \tfont-family: 'Raleway', sans-serif;}\r\n\r\n.feut_list > h5{ color: #fff; font-size: 16px; text-align: center; padding:0px 0px 0px 0px;}\r\n\r\n.feut_list > img{ padding: 30px 0px 10px 0px; display: block; margin:0px auto; max-width: 40px;}\r\n\r\n.yu_feutes{ padding-top: 80px; padding-left: 0%;}\r\n\r\n.feut_hdng2{ text-align: left; max-width: 100%;  font-weight:600; color: #2496ca;}\r\n\r\n.add_ftlists{ list-style: none; padding: 0px; margin: 0px 0px 0px 10px; color: #fff; font-family: 'Raleway', sans-serif;}\r\n\r\n.add_ftlists > li{ padding-left: 0px; font-size: 14px; padding-top: 5px; padding-bottom: 5px;}\r\n\r\n.final_feutesa{ color: #fff; display: block; padding: 40px 10px 0px 10px;}\r\n\r\n.final_feutesa > p > b{ font-size: 20px; color: #2496ca;}\r\n\r\n.video_cirbg{ width: 130px; height: 130px;\r\n  border-radius:50%; background-color: #2496ca; display: block; margin: 30px auto;\r\n}\r\n\r\n.myvid{ color: #fff; text-align: center;  position: relative; top: 30px; left: 30px; font-size:5em;}\r\n\r\n.spc_btn{ margin-top: 30px;}\r\n\r\n.talk_hd{ text-align: center;}\r\n\r\n.cnt_hdr{ text-align: center; color:#2496ca; padding-top: 30px; }\r\n\r\n.tig_img{ width: 100%; }\r\n\r\n@media (min-width: 200px) and ( max-width: 1142px){\r\n    .myForm{ display: none;}\r\n   \r\n}\r\n\r\n@media only screen and (max-width: 660px){\r\n    .bread_bg{ width: 100%; float: none; margin: 10px auto; display: block;}\r\n    .app_disc h2 b{ display: block;}\r\n    .ceb_use_tbs li{ width: 50%;}\r\n    \r\n}\r\n\r\n@media (max-width:991px) {\r\n\t\r\n    .celb_wrp > img {right:-50px;}\r\n    .add_lftbord:before{ display: none;}\r\n    .dwn2{ padding-left: 0px;}\r\n    .sc_wrap{ padding-left: 0px; margin-left: 0px; margin-top: 10px;}\r\n    .add_btmspace{ margin-bottom: 30px;}\r\n    .hmpage_btnswrap{ padding:50px 0px 0px 30px;}\r\n}\r\n\r\n@media (max-width:767px) {\r\n\r\n  .top_row{ max-width: 100%;}\r\n  .site_hdng{ width: 100%; line-height: 1!important;}\r\n  .app_feutures { padding-left: 20px; padding-right: 20px;}\r\n\t\r\n\t.celb_wrp > img {\r\n\t\tright: -30px;\r\n\t\ttop: 30px;\r\n\t\twidth: 90%;\r\n    }\r\n    .about_container{ padding-bottom: 50px;}\r\n    .abt_title{ padding-top:50px;}\r\n\r\n.register_wrapper{ padding: 30px 10px;}\r\n    .regi_title{ font-size:30px; color: #666; font-weight: 200; margin-bottom: 30px; text-transform: uppercase; }\r\n\r\n.regtabs li{ width: 40px; height:40px; margin-right:30px; padding: 10px 0px; }\r\n.regtabs li p{ font-size:13px;}\r\n.regtabs li:after{ right: -80%;top: 20px; z-index: -1;}\r\n.regtabs > li > svg,.list_user > svg{ font-size: 1.2em;}\r\n.add_lftbord2:before{ display: none;}\r\n\r\n.celebs_hdng{ font-size: 20px; }\r\n}\r\n\r\n.profpage {\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  padding: 60px 0px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.inner_pages_wrap {\r\n  padding: 60px 0px;\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.lftnav_wrap {\r\n  list-style: none;\r\n  padding: 0px 0px 50px 0px;\r\n  margin: 0px;\r\n  background-color: #fff;\r\n  -webkit-box-shadow: 0px 0px 30px #ddd;\r\n  -ms-box-shadow: 0px 0px 30px #ddd;\r\n  box-shadow: 0px 0px 30px #ddd;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.lftnav_wrap li {\r\n    font-size: 14px;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n\r\n.lftnav_wrap li a {\r\n      display: block;\r\n      padding: 15px 20px;\r\n      -webkit-transition: 0.3s ease-in-out;\r\n      transition: 0.3s ease-in-out;\r\n      cursor: pointer;\r\n    }\r\n\r\n.lftnav_wrap li a:hover {\r\n        background-color: #259dd0;\r\n        color: #fff;\r\n      }\r\n\r\n.pad_bot {\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.spons_cont {\r\n  font-size: 18px;\r\n}\r\n\r\n.cbhdng {\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\n.prof_active {\r\n  background-color: #259dd0;\r\n  color: #fff;\r\n}\r\n\r\n.bc_btn {\r\n  width: 100%;\r\n  display: block;\r\n  background-color: #259dd0;\r\n  color: #fff;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  border-radius: 0px;\r\n  margin: 40px auto;\r\n  height: 50px;\r\n  -webkit-box-shadow: 0px 3px 0px #1c262a;\r\n  -ms-box-shadow: 0px 3px 0px #1c262a;\r\n  box-shadow: 0px 3px 0px #1c262a;\r\n  font-weight: 600;\r\n}\r\n\r\n/*profile page css*/\r\n\r\n.cvrwrap {\r\n  position: relative;\r\n}\r\n\r\n.profile_wrapper {\r\n  padding: 0px;\r\n  margin: 0px;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.addcred_btn {\r\n  float: right;\r\n  padding: 6px 15px 6px 15px;\r\n  outline: none;\r\n  -webkit-box-shadow: 0px 3px 0px #1c262a;\r\n  margin-bottom: 20px;\r\n  box-shadow: 0px 3px 0px #1c262a;\r\n  background-color: #259dd0;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.tb_hdr > th {\r\n  font-size: 13px;\r\n}\r\n\r\n.tbdy_clr {\r\n  list-style: none;\r\n}\r\n\r\n.tbdy_clr > tr:nth-child(odd) {\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n/*profile page css*/\r\n\r\n.c_page {\r\n  position: relative;\r\n}\r\n\r\n.title_mask {\r\n  padding: 0px 0px;\r\n  background-color: rgba(0,0,0,0.5);\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 90%;\r\n  z-index: 10;\r\n  right: 0;\r\n  margin: 0px;\r\n  padding-left: 150px;\r\n  list-style: none;\r\n}\r\n\r\n.title_mask li {\r\n    float: left;\r\n    color: #fff;\r\n    padding: 10px 80px 10px 0;\r\n  }\r\n\r\n.big {\r\n  display: block;\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.title_mask li > small {\r\n  font-size: 14px;\r\n}\r\n\r\n.profile_manager {\r\n  position: absolute;\r\n  left: 40px;\r\n  bottom: -80px;\r\n  z-index: 15;\r\n}\r\n\r\n.profile_box {\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 100%;\r\n  background-color: #fff;\r\n  z-index: 20;\r\n  overflow: hidden;\r\n  border: 1px solid #ccc;\r\n  -webkit-box-shadow: 0px 0px 30px #666;\r\n  -ms-box-shadow: 0px 0px 30px #666;\r\n  box-shadow: 0px 0px 30px #666;\r\n}\r\n\r\n.profile_edit {\r\n  color: #000;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  position: relative;\r\n  top: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.profile_info {\r\n  padding-left: 200px;\r\n}\r\n\r\n.profile_info ul {\r\n    list-style: none;\r\n    padding: 30px 0px 30px 0px;\r\n    margin: 0px;\r\n  }\r\n\r\n.profile_info ul li {\r\n      float: left;\r\n      width: 25%;\r\n    }\r\n\r\n.profile_info ul li span {\r\n        text-transform: uppercase;\r\n        color: #666;\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n        display: block;\r\n      }\r\n\r\n.profile_info ul li p {\r\n        text-transform: capitalize;\r\n        color: #000;\r\n        font-size: 16px;\r\n        font-weight: 600;\r\n      }\r\n\r\n#celebs_list {\r\n  padding: 0px 0px;\r\n}\r\n\r\n.lgn_hdng {\r\n  color: #000;\r\n  font-weight: 300;\r\n  font-size: 20px;\r\n  text-transform: uppercase;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.date_field {\r\n  margin-top: 12px !important;\r\n}\r\n\r\n.error_mes {\r\n  color: red;\r\n}\r\n\r\n.image-upload > input {\r\n  display: none;\r\n}\r\n\r\n.image-upload {\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 100%;\r\n  background-color: #fff;\r\n  z-index: 20;\r\n  overflow: hidden;\r\n  border: 1px solid #ccc;\r\n  -webkit-box-shadow: 0px 0px 30px #666;\r\n  -ms-box-shadow: 0px 0px 30px #666;\r\n  box-shadow: 0px 0px 30px #666;\r\n}\r\n\r\n.pfimger {\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.membername {\r\n  margin-left: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.card-title, .card-text {\r\n  padding-left: 1rem !important;\r\n}\r\n\r\n.img-fluid1 {\r\n  width: auto;\r\n}\r\n\r\n.cardspace {\r\n  padding: 30px 20px;\r\n}\r\n\r\n.feed_bg {\r\n  max-width: auto;\r\n  max-width: 100%;\r\n  padding: 30px !important;\r\n  overflow: hidden;\r\n}\r\n\r\n.space_imng {\r\n  margin-bottom: 25px !important;\r\n}\r\n\r\n.mycard_space {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n#mymedias {\r\n  margin-top: 30px;\r\n}\r\n\r\n.mybgspacer {\r\n  position: relative;\r\n  border: 3px solid #fff;\r\n  padding: 10px 10px;\r\n  min-height: 180px;\r\n  overflow: hidden;\r\n}\r\n\r\n.disable_btn {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.update_profileform {\r\n  padding: 30px;\r\n  -webkit-box-shadow: 0px 0px 60px #ccc;\r\n  -ms-box-shadow: 0px 0px 60px #ccc;\r\n  box-shadow: 0px 0px 60px #ccc;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  margin-bottom: 0px;\r\n  -webkit-transition: 0.3s ease-in-out;\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.show_updpform {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.lg_email {\r\n  border: none;\r\n  border-radius: 0px;\r\n  border-bottom: 1px solid #ccc;\r\n  outline: none;\r\n  box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  font-size: 12px;\r\n  -webkit-transition: 0.3s ease-in-out;\r\n  transition: 0.3s ease-in-out;\r\n  position: relative;\r\n  padding: 0 0 5px 0px;\r\n}\r\n\r\n.lg_email:focus {\r\n    border-color: #259dd0;\r\n    color: #259dd0;\r\n  }\r\n\r\n.lg_email::-webkit-input-placeholder {\r\n    color: #ccc;\r\n  }\r\n\r\n.embx {\r\n  position: relative;\r\n}\r\n\r\n.usicn {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 5px;\r\n  z-index: 10;\r\n  color: #ccc;\r\n}\r\n\r\n.lg_email:focus .usicn {\r\n  color: #259dd0 !important;\r\n}\r\n\r\n.embx > label {\r\n  color: #ccc;\r\n  font-size: 12px;\r\n}\r\n\r\n.embx2 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.lgnbtner {\r\n  float: right;\r\n  background-color: #259dd0;\r\n  border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.chk_box {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding-left: 24px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 13px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  color: #000;\r\n}\r\n\r\n.chk_box input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 16px;\r\n  width: 16px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 50%;\r\n}\r\n\r\n.chk_box:hover input ~ .checkmark {\r\n  background-color: #fff;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark {\r\n  background-color: #259dd0;\r\n  border-color: #259dd0;\r\n}\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n.chk_box .checkmark:after {\r\n  left: 6px;\r\n  top: 3px;\r\n  width: 4px;\r\n  height: 7px;\r\n  border: solid white;\r\n  border-width: 0 2px 2px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.fgp {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  left: 0;\r\n  padding: 12px 50px;\r\n  font-size: 13px;\r\n}\r\n\r\n.signup_hdng {\r\n  color: #259dd0;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.hp_blk {\r\n  list-style: none;\r\n  font-size: 12px;\r\n}\r\n\r\n.upd_btn {\r\n  -webkit-box-shadow: 0px 3px 0px #1c262a;\r\n  -ms-box-shadow: 0px 3px 0px #1c262a;\r\n  box-shadow: 0px 3px 0px #1c262a;\r\n  font-weight: 600;\r\n  background-color: #259dd0;\r\n}\r\n\r\n.media_bg {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  -mos-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.circle_celeb {\r\n  position: relative;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.circle_edit {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  right: 0px;\r\n  z-index: 50;\r\n  bottom: 30px;\r\n  border: 1px solid #ddd;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.myedit {\r\n  font-size: 1.2rem;\r\n  position: relative;\r\n  text-align: center;\r\n  left: 10px;\r\n  top: 10px;\r\n}\r\n\r\n.prefform1 {\r\n  padding: 50px 0px;\r\n  max-width: 480px;\r\n}\r\n\r\n.prefform1 > label {\r\n    font-size: 13px;\r\n  }\r\n\r\n.celeb_change {\r\n  border: none;\r\n  border-bottom: 1px solid #999;\r\n  border-radius: 0px;\r\n  padding: 0px 0px 8px 0px;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  font-size: 13px;\r\n  background-repeat: no-repeat;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n       appearance: none;\r\n  background-position: center right;\r\n}\r\n\r\n.celeb_change:focus{\r\n  border-color: #2496ca;\r\n  color: #2496ca;\r\n}\r\n\r\n.mysave_btn {\r\n  padding: 6px 30px 6px 30px;\r\n  outline: none; border-radius: 36px;\r\n  margin-bottom: 20px;\r\n  background-color: #2496ca;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n/*second pref*/\r\n\r\n.pref_celeb_bg {\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 100%;\r\n  /* border: 1px solid #999; */\r\n  margin: 30px 0px;\r\n  overflow: hidden;\r\n  /* -webkit-box-shadow: 0px 0px 30px #666;\r\n    -ms-box-shadow: 0px 0px 30px #666;\r\n    box-shadow: 0px 0px 30px #666; */\r\n    background-color: #fff;\r\n    margin: 130px 0px 60px 0px;\r\n    border: 5px solid #fff;\r\n}\r\n\r\n.pref_bgr{ position: relative; padding:  50% 0;}\r\n\r\n.pref_bgr > img{ position: absolute; top: 0px; width: 100%; height: 100%;}\r\n\r\n/*RADIO BUTTONS CODE*/\r\n\r\n.rad_cont {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.rad_cont input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n\r\n.radmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n  border-radius: 50%;\r\n}\r\n\r\n.rad_cont:hover input ~ .radmark {\r\n  background-color: #ccc;\r\n}\r\n\r\n.rad_cont input:checked ~ .radmark {\r\n  background-color: #2196F3;\r\n}\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.rad_cont input:checked ~ .radmark:after {\r\n  display: block;\r\n}\r\n\r\n.rad_cont .radmark:after {\r\n  top: 9px;\r\n  left: 9px;\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50%;\r\n  background: white;\r\n}\r\n\r\n.mylable{ width: 150px; height: 150px; position: relative;}\r\n\r\n.fix_bg{ position: relative; z-index: 7; padding: 50% 0;}\r\n\r\n.upd_image{ position: absolute; z-index: 12; width: 100%; height: 100%; top: 0;}\r\n\r\n.imge_box{  position: relative; cursor: pointer; overflow: hidden;}\r\n\r\n.imge_box > img{ width: 100%; cursor: pointer;}\r\n\r\n.prf_btn{ position: absolute; bottom: 10px; border-radius: 36px; left: 0; right: 0; display: block; margin: 0px auto; height: 25px;\r\n  background-color: #fff; color: #000; text-align: center; font-size: 13px; padding-left: 10px; padding-right: 10px;\r\n width: 80%; cursor: pointer; z-index: 300; padding-top: 3px;\r\n}\r\n\r\n.img_masker{  width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); position: absolute;\r\n  top: 0; bottom: 0; left: 0; right: 0;z-index: 100; color: #fff;\r\n}\r\n\r\n.chkb2{ width: 20%; float: left; position: relative; overflow: hidden; padding: 0px!important; margin: 0px!important;\r\n  border: 1px solid #fff;}\r\n\r\n.chkb2 > img{ width: 100%; }\r\n\r\n.ckmarker{ border: none; background: none; z-index: 500; right: 0; top: 93px;}\r\n\r\n/* .chkb2:hover .ckmarker{ border: none!important; background: none!important; } */\r\n\r\n.prfhcild{ bottom: 25px; font-size:11px; padding-top: 5px;}\r\n\r\n.item_titles{ max-width: 200px; display: block; margin: 0px auto 20px auto;  }\r\n\r\n.pname_btn{ width: 100%; border-radius: 36px; background-color: #2496ca;\r\n}\r\n\r\n.intrest_setupBox{ margin-top:60px;}\r\n\r\n.ply_timehdng{ padding: 0px;}\r\n\r\n.chbk2{ color: #fff;}\r\n\r\n.nopad_dv{ padding: 0px; margin: 0px;}\r\n\r\n.add_row{ margin-top:50px;}\r\n\r\n.ceb_use_tbs{ list-style: none; padding: 0px; margin:0px;}\r\n\r\n.ceb_use_tbs li{ float: left; padding: 15px 30px; border: 1px solid #2496ca; text-align: center; font-size: 16px; color: #bad1db;\r\n  font-weight: 600; cursor: pointer;\r\n}\r\n\r\n.cebs_data{ list-style: none; padding: 0px; margin:20px 0px 0px 0px;}\r\n\r\n.cebs_data li{ float: none; display: block; font-size: 16px; color: #fff;\r\n  font-weight: 200; padding: 10px 20px; width: 70%;\r\n}\r\n\r\n.mems_data{ list-style: none; padding: 0px; margin:20px 0px 0px 0px;}\r\n\r\n.mems_data li{ float: none; display: block; font-size: 16px; color: #fff;\r\n  font-weight: 200; padding: 10px 20px; width: 70%;\r\n}\r\n\r\n.checker_o{ position: relative; right: 10px;}\r\n\r\n.cfactive{ background-color: #2496ca; color: #fff;}\r\n\r\n.myicn{ position: absolute; right: 200px; top: 0; cursor: pointer;}\r\n\r\n.fx_inp{ max-width: 390px;}\r\n\r\n.full_inp{ width: 100%;}\r\n\r\n.selec_bg{  outline: none; -webkit-box-shadow: none; box-shadow: none; -webkit-appearance: none; -moz-appearance: none; appearance: none; background-repeat: no-repeat; background-position: center right;}\r\n\r\n.selec_bg::-webkit-input-placeholder{ color: #ccc;}\r\n\r\n.closer_pop{ position: relative; top: -20px; color: #666; cursor: pointer; left: -35px;}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid appload_cont\" [style.background-image]=\"'url(\\'assets/images/land_bg.jpg\\')'\">\r\n \r\n</div> -->\r\n\r\n\r\n\r\n\r\n<div class=\"container-fluid myslider\" [style.background-image]=\"'url(\\'assets/images/land_bg2.jpg\\')'\" id=\"hm\">\r\n\r\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    \r\n    <div class=\"carousel-inner\">\r\n\r\n      <div class=\"carousel-item slitem active\"  [style.background-image]=\"'url(\\'assets/images/land_bg666.jpg\\')'\">\r\n\r\n        <div class=\"container datavwh\">\r\n\r\n            <div class=\"row top_row\">\r\n              <div class=\"col-12 mydata\">\r\n                <h1 class=\"site_hdng\">\r\n                  \r\n                  <span class=\"konect_hdng\">For all Celebs and Fans </span><br/>\r\n                  <span class=\"celebs_hdng\">Rendezvous with CelebKonect</span>\r\n                </h1>\r\n                <button type=\"button\" (click)=\"showRegPopup()\" class=\"btn-btn-primary sgpbtn\">Sign Up</button>\r\n              </div>\r\n          \r\n            </div>\r\n          \r\n          \r\n         \r\n          \r\n          </div>\r\n       \r\n      </div>\r\n\r\n\r\n      \r\n      <div class=\"carousel-item slitem\"  [style.background-image]=\"'url(\\'assets/images/land_bg66.jpg\\')'\">\r\n\r\n        <div class=\"container datavwh\">\r\n\r\n            <div class=\"row top_row\">\r\n              <div class=\"col-12 mydata\">\r\n                <h1 class=\"site_hdng\">\r\n                    <!-- <span class=\"konect_hdng\">For all Celebs and Fans </span><br/> -->\r\n                    <span class=\"celebs_hdng\">Rock your life by Konecting with your favourite Celeb</span>\r\n                </h1>\r\n                <button type=\"button\" (click)=\"showRegPopup()\" class=\"btn-btn-primary sgpbtn\">Konect Now</button>\r\n              </div>\r\n          \r\n            </div>\r\n          \r\n          \r\n          \r\n          \r\n          </div>\r\n        \r\n      </div>\r\n\r\n\r\n      <div class=\"carousel-item slitem\"  [style.background-image]=\"'url(\\'assets/images/land_bg55.jpg\\')'\">\r\n\r\n        <div class=\"container datavwh\">\r\n\r\n            <div class=\"row top_row \">\r\n              <div class=\"col-12 mydata\">\r\n                <h1 class=\"site_hdng\">\r\n                    <!-- <span class=\"konect_hdng\">For all Celebs and Fans </span><br/> -->\r\n                    <span class=\"celebs_hdng\">Break all barriers between you & your Celeb with CelebKonect</span>\r\n                </h1>\r\n                <button type=\"button\" (click)=\"showRegPopup()\" class=\"btn-btn-primary sgpbtn\">Konect Now</button>\r\n              </div>\r\n          \r\n            </div>\r\n          \r\n          \r\n           \r\n          \r\n          </div>\r\n        \r\n      </div>\r\n\r\n\r\n\r\n      \r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--all sections goes here-->\r\n<div class=\"container-fluid about_container\" id=\"abt\">\r\n    <div class=\"container res_fix_width\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-md-6\">\r\n                    <div class=\"celb_wrp\">\r\n                            <img src=\"assets/images/animation.gif\" alt=\"CelebKonect\" title=\"CelebKonect\" width=\"100%\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-md-6\">\r\n                        <h1 class=\"abt_title\">About CelebKonect</h1>\r\n\t\t\t\t\t\t<p class=\"abt_data\"><strong>CelebKonect</strong>,  is an online social media and social networking service allowing Fans and Celebrities to interact with each other on a personal level. We provide a personalized engagement & entertainment platform with secure real-time communication features, ensuring the experience for you is live, personal, engaging and exhilarating.</p>\r\n\t\t\t\t\t\t\r\n                        <!-- <p class=\"abt_data\">We as a team trust that the world is about to witness an evolution in on-demand communications. We are creating a new social experience designed to provide personal access to people of interest. CelebKonect will foster learning, sharing, and collaboration while transcending geographical borders.\r\n                        </p> -->\r\n\r\n                        <p class=\"abt_data\">\r\n                          If your dream is to Konect with your favourite celebrities and influencers as you do with your friends, then CelebKonect will help you realize those dreams. Unlike other social media platforms, CelebKonect lets you stay Konected with celebrities and influencers from any industry through an option of chat, audio, and/or video calls.\r\n                        </p>\r\n                        <p class=\"abt_data\">Does it still feel like a dream? Not anymore. Join us and stay <strong>Konected!</strong></p>\r\n                        \r\n                      \r\n                </div>\r\n\r\n                       \r\n                </div>\r\n                   \r\n            </div>\r\n</div>\r\n<!--all sections goes here-->\r\n\r\n\r\n\r\n<!--owel carousel-->\r\n\r\n<!-- <div class=\"container carous_wrap\" id=\"cnt\">\r\n  <ngx-carousel\r\n      [inputs]=\"carouselTile\" \r\n      (carouselLoad)=\"carouselTileLoad($event)\">\r\n \r\n            <ngx-tile NgxCarouselItem *ngFor=\"let ceb of carouselTileItems\">\r\n             \r\n              <div class=\"allceleb_box\">\r\n                <div class=\"cb_avtar\"><img src=\"{{imageUrl+ceb.avtar_imgPath}}\" width=\"100%\" alt=\"{{ceb.name}}\" title=\"{{ceb.name}}\" /></div>\r\n      \r\n                <div class=\"allceleb_data\">\r\n                  <h3>{{ceb.firstName}}</h3>\r\n                  <p>{{ceb.profession}}</p>\r\n                </div>\r\n      \r\n               \r\n      \r\n              </div>\r\n               \r\n            </ngx-tile>\r\n \r\n          <button NgxCarouselPrev class='leftRs'><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></button>\r\n          <button NgxCarouselNext class='rightRs'><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></button>\r\n    </ngx-carousel>\r\n</div> -->\r\n\r\n\r\n\r\n\r\n<!--feautures starts-->\r\n<div class=\"container-fluid app_feutures\"  [style.background-image]=\"'url(\\'assets/images/land_bg2.jpg\\')'\" id=\"fet\">\r\n  <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n          <h3 class=\"feut_hdng\">CelebKonect helps you engage with your favourite Celebs via:</h3>\r\n          <div class=\"col-12\">\r\n            <div class=\"row\">\r\n          <div class=\"col-12 col-sm-6 col-md-4 col-lg-4 feut_list\">\r\n            <img src=\"assets/images/live-chat.png\" alt=\"Live Chat\" title=\"Live Chat\" width=\"100%\">\r\n            <h5>Live Chat</h5>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-md-4 col-lg-4 feut_list\">\r\n              <img src=\"assets/images/voice.png\" alt=\"Voice Call\" title=\"Voice Call\" width=\"100%\">\r\n            <h5>Voice Call</h5>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-md-4 col-lg-4 feut_list\">\r\n              <img src=\"assets/images/imchat.png\" alt=\"Instant Messaging\" title=\"Instant Messaging\" width=\"100%\">\r\n            <h5>Instant Messaging</h5>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-md-4 col-lg-4 feut_list\">\r\n              <img src=\"assets/images/vidcall.png\" alt=\"Video Call\" title=\"Video Call\" width=\"100%\">\r\n            <h5>Video Call</h5>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-md-4 col-lg-4 feut_list\">\r\n              <img src=\"assets/images/meeting.png\" alt=\"Greet & Meet\" title=\"Greet & Meet\" width=\"100%\">\r\n            <h5>Meet & Greet</h5>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-md-4 col-lg-4 feut_list\">\r\n              <img src=\"assets/images/tuning.png\" alt=\"Stay Tuned\" title=\"Stay Tuned\" width=\"100%\">\r\n            <h5>Stay tuned for updates in real-time through your celebrities posts & feeds</h5>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"col-12 \">\r\n          \r\n          <div class=\"row\">\r\n\r\n            <div class=\"col-12 col-sm-6 col-md-6 yu_feutes\">\r\n                <ul class=\"ceb_use_tbs\">\r\n                  <li class=\"cfactive\" id=\"CF\" (click)=\"showCelebsFeutes()\">Celeb Features</li>\r\n                  <li id=\"MF\" (click)=\"showMembersFeutes()\">Member  Features</li>\r\n                  <div class=\"clearfix\"></div>\r\n                </ul>\r\n\r\n                <ul class=\"cebs_data\" *ngIf=\"celebFeutues\">\r\n                  <li><i class=\"fas fa-check checker_o\"></i> Live Chat</li>\r\n                  <li><i class=\"fas fa-check checker_o\"></i> Voice Call</li>\r\n                  <li><i class=\"fas fa-check checker_o\"></i> Instant Messaging </li>\r\n                  <li><i class=\"fas fa-check checker_o\"></i> Video Call</li>\r\n                  <li><i class=\"fas fa-check checker_o\"></i> Meet & Greet </li>\r\n                  <li><i class=\"fas fa-check checker_o\"></i>Stay tuned for updates in real-time through your celebrities posts & feeds</li>\r\n                </ul>\r\n\r\n                <ul class=\"mems_data\" *ngIf=\"memberFeutues\">\r\n                  <li><i class=\"fas fa-check checker_o\"></i> Live Chat</li>\r\n                  <li><i class=\"fas fa-check checker_o\"></i> Voice Call</li>\r\n                  <li><i class=\"fas fa-check checker_o\"></i> Instant Messaging </li>\r\n                  <li><i class=\"fas fa-check checker_o\"></i> Video Call</li>\r\n                  <li><i class=\"fas fa-check checker_o\"></i> Meet & Greet </li>\r\n   \r\n                </ul>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-12 col-sm-6 col-md-6 yu_feutes\">\r\n                <h4 class=\"feut_hdng feut_hdng2\">You can also:</h4>\r\n                <ul class=\"add_ftlists\">\r\n                    <li><i class=\"fas fa-arrow-circle-right\"></i> Be inspired and mentored by your favourite Celebrity</li>\r\n                    <li><i class=\"fas fa-arrow-circle-right\"></i> Communicate your thoughts and open a healthy conversation with your main Influencers</li>\r\n                    <li><i class=\"fas fa-arrow-circle-right\"></i> Get their tips on various topics</li>\r\n                    <li><i class=\"fas fa-arrow-circle-right\"></i> Enter contests to win surprise gifts</li>\r\n                </ul><br>\r\n                <div class=\"row final_feutesa\">\r\n                    <p>These unique and awesome features are available ONLY on <strong>CelebKonect</strong></p>\r\n                    <p>We have celebrities from all types of industries such as Film & Television, Sports, Politics, Arts, Science, and Business, to name a few... with a lot more to come!</p>\r\n                    <p><b>Happy Konecting!</b></p>\r\n                </div>\r\n\r\n            </div>\r\n\r\n              \r\n\r\n              \r\n\r\n          </div>\r\n\r\n          \r\n\r\n\r\n      </div>\r\n\r\n        </div>\r\n  </div>\r\n</div>\r\n<!--feautures ends-->\r\n\r\n\r\n\r\n<!-- <div class=\"container-fluid allcb_cont\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n\r\n      <div class=\"col-12 col-sm-3 col-md-3 col-lg-3 \" *ngFor=\"let cb of allCelebs;\">\r\n        <div class=\"allceleb_box\">\r\n          <div class=\"cb_avtar\"><img src=\"{{imageUrl+cb.avtar_imgPath}}\" width=\"100%\" alt=\"{{cb.name}}\" title=\"{{cb.name}}\" /></div>\r\n\r\n          <div class=\"allceleb_data\">\r\n            <h3>{{cb.name}}</h3>\r\n            <p>{{cb.profession}}</p>\r\n          </div>\r\n\r\n         \r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<!--butttons strarts-->\r\n\r\n<div class=\"container-fluid hmpage_btnswrap\">\r\n  <div class=\"container\">\r\n    <div class=\"row cntr_box\">\r\n\r\n\r\n        <!-- <div class=\"col-12 col-sm-12 col-md-12 col-lg-4 add_lftbord2 add_btmspace\">\r\n            <h2 class=\"dwn_hdng\">Contact Us</h2>\r\n    \r\n            <p><i class=\"fas fa-phone\"></i>  040-23555521</p>\r\n            <p><a class=\"wht_footanch\" href=\"mailto:support@celebkonect.com\"> <i class=\"far fa-envelope\"></i> &nbsp; support@celebkonect.com </a></p>\r\n            \r\n\r\n    \r\n          </div> -->\r\n\r\n\r\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 add_btmspace\">\r\n        <h2 class=\"dwn_hdng\">Download the app</h2>\r\n\r\n        <div class=\"btn btn-app-store\">\r\n            <a href=\"https://play.google.com/store/apps/details?id=info.celebkonnect.flow.celebflow\">\r\n          <i class=\"fab fa-android fa-2x ibtn\"></i>\r\n          <span class=\"small\">Download on the</span>\r\n          <span class=\"big\">Play Store</span>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"btn btn-app-store\">\r\n          <i class=\"fab fa-apple fa-2x ibtn\"></i>\r\n          <span class=\"small\">Download on the</span>\r\n          <span class=\"big\">App Store</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 add_lftbord add_btmspace\">\r\n        \r\n        <h2 class=\"dwn_hdng dwn2\">Konect with us</h2>\r\n        <ul class=\"sc_wrap\">\r\n          <li class=\"fb\">\r\n            <!--<span><i class=\"fab fa-facebook-f\"></i> Facebook</span>-->\r\n            <iframe src=\"https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=63&layout=button&action=like&size=large&show_faces=false&share=false&height=65&appId\"\r\n                    style=\"border:none;\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" class=\"fbreq\">\r\n\r\n            </iframe>\r\n          </li>\r\n          \r\n          <li class=\"lin\">\r\n            <a href=\"https://www.instagram.com/celebkonect/\"><span><i class=\"fab fa-instagram\"></i> Instagram</span></a>\r\n           \r\n          </li>\r\n\r\n          <li class=\"tw\">\r\n            <!--<span><i class=\"fab fa-twitter\"></i> Twitter</span>-->\r\n            <a href=\"https://twitter.com/CelebKonect?ref_src=twsrc%5Etfw%22\" class=\"twitter-follow-button\" data-size=\"large\" data-show-screen-name=\"false\" data-show-count=\"false\"><i class=\"fab fa-twitter\"></i> Follow</a>\r\n            <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\r\n\r\n          </li>\r\n\r\n          <li class=\"yut\">\r\n            \r\n              <a href=\"https://www.youtube.com/channel/UC60xnw3PXZQR9ASvc74335g\"><span><i class=\"fab fa-youtube\"></i> YouTube</span></a>\r\n             \r\n            </li>\r\n\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!--Rgisteration Setup -->\r\n\r\n<div class=\"register_wrapper\" *ngIf=\"regPopup\" id=\"myreger\">\r\n  \r\n  <span (click)=\"closeRegiPop()\"><i class=\"far fa-times-circle fa-2x closer_pop\"></i></span>\r\n\r\n  <ul class=\"regtabs\" *ngIf=\"myTabksList\">\r\n      <h2 class=\"regi_title\">Create your Account</h2>\r\n    <li id=\"prof\" (click)=\"getRegiTabs('prof', $event)\" class=\"reg_active\">\r\n      <i class=\"far fa-user fa-2x\"></i>\r\n      <p>Profile</p>\r\n    </li>\r\n\r\n    <li id=\"inter\" (click)=\"getRegiTabs('inter', $event)\">\r\n      <i class=\"fas fa-sliders-h fa-2x\"></i>\r\n      <p>Preferences</p>\r\n    </li>\r\n\r\n    <li id=\"pref\" (click)=\"getRegiTabs('pref', $event)\">\r\n      <span class=\"list_user\"><i class=\"far fa-list-alt fa-2x\"></i></span>\r\n      <p>Interests</p>\r\n    </li>\r\n\r\n    <li class=\"list_latchild\" id=\"fin\" (click)=\"getRegiTabs('fin', $event)\">\r\n      <span class=\"list_user\"><i class=\"far fa-flag fa-2x\"></i></span>\r\n      <p>Finish</p>\r\n    </li>\r\n    <div class=\"clearfix\"></div>\r\n  </ul>\r\n\r\n  <!--tabs over-->\r\n\r\n  <div class=\"prof_setupBox\" *ngIf=\"tab1\">\r\n    <h3 class=\"pi_hdng\">Provide your profile Information</h3>\r\n\r\n    <form [formGroup]=\"formProfile\" (ngSubmit)=\"onProfileRegister()\">\r\n\r\n      <div class=\"form-group embx embx2\">\r\n        <label for=\"firstname\">First Name:</label><br/>\r\n        \r\n          <input type=\"text\" class=\"lg_email reg_email\" id=\"firstname\" [(ngModel)]=\"firstname\" formControlName=\"firstname\" placeholder=\"ex : john\" pattern=\"[a-zA-Z][a-zA-Z ]+\" required>\r\n          <ul class=\"help-block\">\r\n            <li class=\"err\" *ngIf=\"formProfile.controls.firstname.errors?.required && isSubmitted\">This field is Required</li>\r\n          </ul>\r\n          <div [hidden]=\"formProfile.controls.firstname.valid || formProfile.controls.firstname.pristine\" class=\"alert alert-danger err\">\r\n            <div [hidden]=\"!formProfile.controls.firstname.hasError('required')\">This field is Required</div>\r\n            <div [hidden]=\"!formProfile.controls.firstname.hasError('pattern')\">Only alphabetsallowed</div>\r\n        </div>\r\n      </div>\r\n      \r\n\r\n      <div class=\"form-group embx embx2\">\r\n        <label for=\"lastname\">Last Name:</label>\r\n          <input type=\"text\" class=\"form-control lg_email reg_email\" id=\"lastname\" [(ngModel)]=\"lastname\" formControlName=\"lastname\" placeholder=\"ex : Doe\" pattern=\"[a-zA-Z][a-zA-Z ]+\" required>\r\n          <ul class=\"help-block\">\r\n            <li class=\"err\" *ngIf=\"formProfile.controls.lastname.errors?.required && isSubmitted\">This field is Required</li>\r\n          </ul>\r\n          \r\n          <div [hidden]=\"formProfile.controls.lastname.valid || formProfile.controls.lastname.pristine\" class=\"alert alert-danger err\">\r\n          <div [hidden]=\"!formProfile.controls.lastname.hasError('required')\">This field is Required</div>\r\n          <div [hidden]=\"!formProfile.controls.lastname.hasError('pattern')\">Only alphabetsallowed</div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group embx embx2\">\r\n        <label for=\"mobileNumber\">Mobile:</label>\r\n        \r\n          <input type=\"text\" class=\"form-control lg_email reg_email\" id=\"mobile\" [(ngModel)]=\"mobileNumber\" formControlName=\"mobileNumber\" placeholder=\"ex : 9000000000\"\r\n            pattern=\"[0-9]*\"\r\n            minlength=\"10\"\r\n            maxlength=\"10\" >\r\n          <ul class=\"help-block\">\r\n            <li class=\"err\" *ngIf=\"formProfile.controls.mobileNumber.errors?.required && isSubmitted\">This field is Required</li>\r\n          </ul>\r\n\r\n          <div [hidden]=\"formProfile.controls.mobileNumber.valid || formProfile.controls.mobileNumber.pristine\" class=\"alert alert-danger err\">\r\n          <div [hidden]=\"!formProfile.controls.mobileNumber.hasError('minlength')\">Mobile should be 10digit</div>\r\n          <div [hidden]=\"!formProfile.controls.mobileNumber.hasError('required')\">Mobile is required</div>\r\n          <div [hidden]=\"!formProfile.controls.mobileNumber.hasError('pattern')\">Mobile numberr should be only numbers</div>\r\n        \r\n      </div>\r\n      </div>\r\n\r\n      <div class=\"form-group embx embx2\">\r\n        <label for=\"referralCode\">Referral Code:</label>\r\n       \r\n          <input type=\"text\" class=\"form-control lg_email reg_email\" id=\"referralCode\" [(ngModel)]=\"referralCode\" formControlName=\"referralCode\" placeholder=\"ex :CDR...\">\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"formProfile.controls.referralCode.hasError('required') && isSubmitted\" class=\"err\">This field is Required</li>\r\n          </ul>\r\n          <div [hidden]=\"formProfile.controls.referralCode.valid || formProfile.controls.referralCode.pristine\" class=\"alert alert-danger err\">\r\n            <div [hidden]=\"!formProfile.controls.referralCode.hasError('required')\">This field is Required</div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"form-group embx embx2\">\r\n        <label for=\"location\">Location:</label>\r\n       \r\n          <input type=\"text\" class=\"form-control lg_email reg_email\" id=\"location\" [(ngModel)]=\"location\" formControlName=\"location\"  placeholder=\"ex : NSW\"  pattern=\"[a-zA-Z][a-zA-Z ]+\" required>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"formProfile.controls.location.hasError('required') && isSubmitted\" class=\"err\">This field is Required</li>\r\n          </ul>\r\n          <div [hidden]=\"formProfile.controls.location.valid || formProfile.controls.location.pristine\" class=\"alert alert-danger err\">\r\n            <div [hidden]=\"!formProfile.controls.location.hasError('required')\">This field is Required</div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"form-group embx embx2\">\r\n        <label for=\"country\">Country:</label>\r\n       \r\n\r\n          <select class=\"form-control lg_email reg_email selec_bg\" [style.background-image]=\"'url(\\'assets/images/down-arrow2.png\\')'\" id=\"country\" [(ngModel)]=\"country\" formControlName=\"country\" placeholder=\"ex:IN (Country Code)\"  pattern=\"[a-zA-Z][a-zA-Z ]+\" required>\r\n            <option [ngValue]=\"undefined\" disabled  selected> Select Country </option>\r\n            <option *ngFor=\"let c of countryList\" value=\"{{c.value}}\">{{c.code}}</option>\r\n          </select>\r\n\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"formProfile.controls.country.hasError('required') && isSubmitted\" class=\"err\">This field is Required</li>\r\n          </ul>\r\n          <div [hidden]=\"formProfile.controls.country.valid || formProfile.controls.country.pristine\" class=\"alert alert-danger err\">\r\n            <div [hidden]=\"!formProfile.controls.country.hasError('required')\">Country is Required</div>\r\n          </div>\r\n       \r\n      </div>\r\n\r\n      <div class=\"form-group embx embx2\">\r\n        <label for=\"profession\">Profession:</label>\r\n        \r\n          <input type=\"text\" class=\"form-control lg_email reg_email\" id=\"profession\" [(ngModel)]=\"profession\" formControlName=\"profession\" placeholder=\"ex : Actor\"  pattern=\"[a-zA-Z][a-zA-Z ]+\" required>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"formProfile.controls.profession.hasError('required') && isSubmitted\" class=\"err\">This field is Required</li>\r\n          </ul>\r\n          <div [hidden]=\"formProfile.controls.profession.valid || formProfile.controls.profession.pristine\" class=\"alert alert-danger err\">\r\n            <div [hidden]=\"!formProfile.controls.profession.hasError('required')\">This field is Required</div>\r\n          </div>\r\n      </div>\r\n\r\n      <!--<div class=\"form-group embx embx2\">\r\n    <label for=\"aboutme\">About Me:</label>\r\n    <input type=\"text\" class=\"form-control lg_email reg_email\" id=\"aboutme\" [ngModel]=\"aboutme\" formControlName=\"aboutme\" placeholder=\"About Me\">\r\n  </div>-->\r\n\r\n      <div class=\"form-group embx embx2\">\r\n        <label for=\"email\">Email:</label>\r\n        \r\n          <input type=\"email\" class=\"form-control lg_email reg_email\" id=\"email\" [(ngModel)]=\"email\" formControlName=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"  placeholder=\"ex : John@indoz.com\" required>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"formProfile.controls.email.hasError('required') && isSubmitted\" class=\"err\">This field is Required</li>\r\n          </ul>\r\n\r\n          <div [hidden]=\"formProfile.controls.email.valid || formProfile.controls.email.pristine\" class=\"alert alert-danger err\">\r\n          <div [hidden]=\"!formProfile.controls.email.hasError('required')\">Email is required</div>\r\n          <div [hidden]=\"!formProfile.controls.email.hasError('pattern')\">Email format should be \r\n          <small> <b>john@something.com</b> </small>\r\n      </div>\r\n    </div>\r\n       \r\n      </div>\r\n\r\n      <div class=\"form-group embx embx2 fx_inp\">\r\n        <label for=\"password\">Password:</label>\r\n        \r\n          <input type=\"password\" class=\"form-control lg_email reg_email full_inp\" id=\"password\" [(ngModel)]=\"password\" passwordToggle  formControlName=\"password\" required placeholder=\"**********\">\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"formProfile.controls.password.hasError('required') && isSubmitted\" class=\"err\">This field is Required</li>\r\n            <li *ngIf=\"(formProfile.controls.password.errors?.minlength || formProfile.controls.password.errors?.maxlength) && formProfile.controls.password.dirty\" class=\"err\">Minimum Characters : 8, Maximum Characters : 8</li>\r\n          </ul>\r\n        \r\n        <div [hidden]=\"formProfile.controls.password.valid || formProfile.controls.password.pristine\" class=\"alert alert-danger err\"> Password is required </div>\r\n        \r\n      </div>\r\n\r\n\r\n      <div class=\"form-group embx embx2 fx_inp\">\r\n        <label for=\"confirmPassword\">Confirm Password:</label>\r\n        \r\n          <input type=\"password\" class=\"form-control lg_email reg_email full_inp\"  id=\"confirmPassword\" [(ngModel)]=\"confirmPassword\" passwordToggle formControlName=\"confirmPassword\" placeholder=\"**********\"\r\n          required \r\n          validateEqual=\"password\" >\r\n\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"formProfile.controls.confirmPassword.hasError('required') && isSubmitted\" class=\"err\">This field is Required</li>\r\n          </ul>\r\n        \r\n        <div [hidden]=\"formProfile.controls.confirmPassword.valid || formProfile.controls.confirmPassword.pristine\" class=\"alert alert-danger err\">\r\n             Passwords did not match\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group embx embx2\">\r\n        <label for=\"gender\">Gender:</label>\r\n        \r\n          <select class=\"form-control lg_email reg_email selec_bg\"  [style.background-image]=\"'url(\\'assets/images/down-arrow2.png\\')'\"  id=\"gender\" [(ngModel)]=\"gender\" formControlName=\"gender\">\r\n            <option [ngValue]=\"undefined\" disabled  selected> Select Gender </option>\r\n            <option value=\"male\" selected>Male</option>\r\n            <option value=\"female\">Female</option>\r\n            <option value=\"others\">Others</option>\r\n          </select>\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"formProfile.controls.gender.hasError('required') && isSubmitted\" class=\"err\">This field is Required</li>\r\n          </ul>\r\n       \r\n      </div>\r\n\r\n      <div class=\"form-group embx embx2\">\r\n        <label for=\"dateOfBirth\">Birthday:</label>\r\n        <div [ngClass]=\"{'has-error' : !formProfile.controls.dateOfBirth.valid &&  formProfile.controls.dateOfBirth.errors && formProfile.controls.dateOfBirth.dirty && formProfile.get('dateOfBirth').touched,\r\n                                  'text-success': formProfile.controls.dateOfBirth.valid && formProfile.controls.dateOfBirth.dirty}\">\r\n          <input type=\"date\" class=\"form-control lg_email reg_email\" format='mm-dd-yyyy' [(ngModel)]=\"dateOfBirth\" formControlName=\"dateOfBirth\" id=\"dateOfBirth\" placeholder=\"ex : 02-03-1992\" />\r\n          <ul class=\"help-block\">\r\n            <li *ngIf=\"formProfile.controls['dateOfBirth'].hasError('required') && isSubmitted\" class=\"err\">This field is Required</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <!--<div class=\"form-group embx embx2\">\r\n    <label for=\"profile\">Profile Pic:</label>\r\n    <input type=\"text\" class=\"form-control lg_email reg_email\" id=\"profile\" placeholder=\"ex : mypic.jpeg\">\r\n  </div>-->\r\n\r\n\r\n      <button type=\"submit\" class=\"btn btn-default lgnbtner rgbtnr\">Proceed <i class=\"fas fa-chevron-right\"></i> </button>\r\n      <div class=\"clearfix\"></div>\r\n\r\n    </form>\r\n\r\n  </div>\r\n\r\n  <!--profile tab over-->\r\n\r\n\r\n\r\n\r\n  <div class=\"pref_setupBox\" *ngIf=\"tab2\">\r\n    <h3 class=\"pi_hdng\">Select your Preferences</h3>\r\n\r\n    <form [formGroup]=\"myPreferenceForm\">\r\n\r\n      <div *ngIf=\"isError\">\r\n        <p class=\"err\">{{errorMessage}}</p>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col pref_catebox\" *ngFor=\"let item of preferences\">\r\n\r\n          <!-- <button type=\"button\" (click)=\"onPreferenceListByParentId(item._id)\" class=\"btn btn-default prefbtns\" id=\"prefSport\">{{item.logoURL}}</button> -->\r\n          <div class=\"imge_box\" (click)=\"onPreferenceListByParentId(item._id)\" id=\"prefSport\">\r\n              <img src=\"{{imageUrl+item.logoURL}}\"  width=\"100%\">\r\n              <div  class=\"img_masker\"></div>\r\n              <p class=\"prf_btn\">{{item.preferenceName}}</p>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"item_titles\" *ngIf=\"prefButtonsValue\">\r\n        <button type=\"button\" class=\"btn btn-primary pname_btn\" >{{parentName}}</button>\r\n      </div>\r\n      \r\n      <div class=\"pref_databox\" id=\"allSports\">\r\n\r\n        <div class=\"checkbox\" *ngFor=\"let item of preferencesChild\">\r\n          <label class=\"chk_box chkb2\">\r\n            <!-- <input type=\"checkbox\" (change)=\"onChange(item._id, $event.target.checked)\" [checked]=\"preferenceParentIds.includes(item._id)?'checked':''\"> {{item.preferenceName}}<br> -->\r\n\r\n            <input type=\"checkbox\" (change)=\"onChange(item._id, $event.target.checked)\" [checked]=\"preferenceParentIds.includes(item._id)?'checked':''\">\r\n            <p class=\"prf_btn prfhcild\">{{item.preferenceName}}</p>\r\n            <div  class=\"img_masker\"></div>\r\n            <img src=\"{{imageUrl+item.logoURL}}\"width=\"100%\">\r\n            <span class=\"checkmark ckmarker\"></span>\r\n          </label>\r\n          \r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n      \r\n\r\n\r\n<br/>\r\n      <button type=\"submit\" class=\"btn btn-default lgnbtner rgbtnr\" (click)=\"onAddPreferences()\">Proceed <i class=\"fas fa-chevron-right\"></i> </button>\r\n      <div class=\"clearfix\"></div>\r\n\r\n    </form>\r\n  </div>\r\n\r\n  <!--Preferences  tab over-->\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"intrest_setupBox\" *ngIf=\"tab3\">\r\n   \r\n    <div class=\"clearfix\"></div>\r\n    <!--<br />-->\r\n    <div class=\"col-12\">\r\n      <h2>Let Us Know !</h2>\r\n      <p>Who do you want to konect with ?</p>\r\n      \r\n      <div class=\"image-upload\">\r\n          \r\n\r\n          <label for=\"selectFile\" class=\"mylable\">\r\n              <div class=\"circle_edit\"><i class=\"fas fa-pencil-alt fa-2x myedit\"></i></div>\r\n            <!-- <img src=\"\" width=\"100%\" /> -->\r\n            <img *ngIf=\"celebImage==undefined\" src=\"assets/images/profile_pic.jpg\" width=\"100%\" alt=\"\" title=\"\" />\r\n            <div class=\"fix_bg\">\r\n            <img class=\"upd_image\" src=\"{{imageUrl+celebImage}}\" alt=\"\" title=\"\" width=\"100%\" />\r\n          </div>\r\n          </label>\r\n          <input type=\"file\" id=\"selectFile\" (change)=\"readURL($event)\" name=\"selectFile\" class=\"form-group\" />\r\n\r\n        </div>\r\n      \r\n      <!--form-->\r\n      <div class=\"prefform1\">\r\n        <form [formGroup]=\"formmemberChoice\" (ngSubmit)=\"onCreateMemberChoice()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"celebrityName\">Enter Celebrity Name</label>\r\n            <input type=\"text\" name=\"celebrityName\" class=\"form-control celeb_change\" [(ngModel)]=\"celebrityName\" id=\"celebrityName\" pattern=\"[a-zA-Z][a-zA-Z ]+\" required [formControl]=\"formmemberChoice.controls['celebrityName']\" placeholder=\"Ex : Chiranjeevi\">\r\n            <ul class=\"help-block\">\r\n              <li class=\"err\" *ngIf=\"formmemberChoice.controls.celebrityName.errors?.required && isSubmitted\">This field is Required</li>\r\n            </ul>\r\n            <div [hidden]=\"formmemberChoice.controls.celebrityName.valid || formmemberChoice.controls.celebrityName.pristine\" class=\"alert alert-danger err\">\r\n              <div [hidden]=\"!formmemberChoice.controls.celebrityName.hasError('required')\">This field is Required</div>\r\n              <div [hidden]=\"!formmemberChoice.controls.celebrityName.hasError('pattern')\">Only alphabetsallowed</div>\r\n          </div>\r\n\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"industry\">Which industry does the celeb belong to</label>\r\n            <select class=\"form-control celeb_change\" [(ngModel)]=\"industry\" id=\"industry\"  [style.background-image]=\"'url(\\'assets/images/down-arrow2.png\\')'\" [formControl]=\"formmemberChoice.controls['industry']\" required>\r\n              <option [ngValue]=\"undefined\" disabled  selected> Select Industry </option>\r\n              <option *ngFor=\"let item of preferences\" value=\"{{item.preferenceName}}\">{{item.preferenceName}}</option>\r\n            </select>\r\n            <ul class=\"help-block\">\r\n              <li class=\"err\" *ngIf=\"formmemberChoice.controls.industry.errors?.required && isSubmitted\">This field is Required</li>\r\n            </ul>\r\n            <div [hidden]=\"formmemberChoice.controls.industry.valid || formmemberChoice.controls.industry.pristine\" class=\"alert alert-danger err\">\r\n              <div [hidden]=\"!formmemberChoice.controls.industry.hasError('required')\">This field is Required</div>\r\n          </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"button\" class=\"btn btn-primary mysave_btn\" (click)=\"onCreateMemberChoice()\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-primary mysave_btn\">Save and Add New</button>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n      <!--form1 ends here-->\r\n\r\n    </div>\r\n\r\n    <div class=\"clearfix\"></div>\r\n    <!-- <button type=\"submit\" class=\"btn btn-default lgnbtner rgbtnr\" (click)=\"onAddIntrest()\">Save & Continue <i class=\"fas fa-chevron-right\"></i> </button> -->\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n\r\n  <!--Intrestes  tab over-->\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"intrest_setupBox\" *ngIf=\"tab4\">\r\n    <h3 class=\"pi_hdng pi_hdng2\">Thank You</h3>\r\n    <p class=\"thank_data\">Your Request hasbeen successfully sumitted.</p>\r\n\r\n    <div class=\"btn btn-app-store\">\r\n        <a href=\"https://play.google.com/store/apps/details?id=info.celebkonnect.flow.celebflow\">\r\n      <i class=\"fab fa-android fa-2x ibtn\"></i>\r\n      <span class=\"small\">Download on the</span>\r\n      <span class=\"big\">Play Store</span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"btn btn-app-store\">\r\n      <i class=\"fab fa-apple fa-2x ibtn\"></i>\r\n      <span class=\"small\">Download on the</span>\r\n      <span class=\"big\">App Store</span>\r\n    </div><br /><br /><br />\r\n\r\n    <button type=\"submit\" class=\"btn btn-default lgnbtner rgbtnr\" (click)=\"onFinish()\">Finish <i class=\"fas fa-chevron-right\"></i> </button>\r\n    <div class=\"clearfix\"></div>\r\n\r\n\r\n    \r\n\r\n\r\n  </div>\r\n\r\n  <!--finish  tab over-->\r\n\r\n  <div class=\"qz_pop\" *ngIf=\"prefFrm\"  [style.background-image]=\"'url(\\'assets/images/Campaign_bg.jpg\\')'\">\r\n      <div class=\"prefform2\">\r\n        <div class=\"pref_celeb_bg\">\r\n          <div class=\"pref_bgr\">\r\n          <img *ngIf=\"letUsKnowCelebImage!=undefined\" src=\"{{imageUrl+letUsKnowCelebImage}}\" alt=\"\" style=\"width:100%\"  />\r\n        </div>\r\n        </div>\r\n        <h3>It's Playtime</h3>\r\n        <h5>Win a chance to meet your favourite celebrity</h5>\r\n    \r\n        <form [formGroup]=\"formmemberSurvey\" (ngSubmit)=\"onCreateSurveySubmissions()\">\r\n          <div *ngFor=\"let item of surveyQuestions\">\r\n    \r\n          <p class=\"pref_quest\">{{item.questionsData[0].question}}</p>\r\n          <div class=\"form-group\">\r\n            <div *ngFor=\"let opt of item.questionsData[0].options\">\r\n             \r\n    \r\n             \r\n    \r\n              <label class=\"chk_box chbk2\">\r\n                {{opt}}\r\n                <input type=\"radio\" [(ngModel)]=\"answer\" value=\"{{opt}}\" formControlName=\"answer\" name=\"answer\">\r\n                <span class=\"checkmark\"></span>\r\n              </label>\r\n              </div>\r\n            </div>\r\n            \r\n          \r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button type=\"submit\" class=\"btn btn-primary mysave_btn\">Submit</button>\r\n            </div>\r\n         \r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- fullpage timer popup -->\r\n\r\n<div class=\"fp_timer\" *ngIf=\"my_fptim\">\r\n\r\n  <div id=\"parent_counter\">\r\n      <div class=\"innerparent\">\r\n         \r\n\r\n          <h2 class=\"cshdng\">Arriving Shortly...</h2>\r\n          <p class=\"cs_para\">Your favourite celebs are coming on board. Stay Tuned !</p>\r\n          <div class=\"video_cirbg\"><i class=\"fas fa-video fa-3x myvid\"></i></div>\r\n          <p class=\"talk_hd\">Talk LIVE with your favourite Celeb.</p>\r\n\r\n          <h5 class=\"cnt_hdr\">Countdown has begun !</h5>\r\n          <p id=\"demo\"></p>\r\n\r\n          <div class=\"btn btn-app-store spc_btn\">\r\n              <a href=\"https://play.google.com/store/apps/details?id=info.celebkonnect.flow.celebflow\">\r\n              <i class=\"fab fa-android fa-2x ibtn\"></i>\r\n              <span class=\"small\">Download on the</span>\r\n              <span class=\"big\">Play Store</span>\r\n              </a>\r\n            </div>\r\n        \r\n            <div class=\"btn btn-app-store spc_btn\">\r\n              <i class=\"fab fa-apple fa-2x ibtn\"></i>\r\n              <span class=\"small\">Download on the</span>\r\n              <span class=\"big\">App Store</span>\r\n            </div><br /><br /><br />\r\n\r\n      </div>\r\n      \r\n      <div class=\"tig_img\"><img src=\"assets/images/tiger_bg.jpg\" alt=\"Powered by Indoz\" title=\"Powered by Indoz\" width=\"100%\"></div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n</div>\r\n<div class=\"regimasker\" *ngIf=\"showMask2\" (click)=\"closeRegiPop()\"></div>\r\n\r\n\r\n<!--quiz popup-->\r\n\r\n<div class=\"qz_master\">\r\n  \r\n</div>\r\n\r\n\r\n<div class=\"quiz_masker\" *ngIf=\"prefMask\" (click)=\"closePrefForm()\"></div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__("./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_observable_service__ = __webpack_require__("./src/app/services/observable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_register_service__ = __webpack_require__("./src/app/services/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
var confirmPassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].equalTo(password));
var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, datepipe, registerService, router, route, cbOvc, document) {
        //this.members = new any();
        this.fb = fb;
        this.datepipe = datepipe;
        this.registerService = registerService;
        this.router = router;
        this.route = route;
        this.cbOvc = cbOvc;
        this.document = document;
        this.preferenceId = [];
        this.preferenceParentIds = [""];
        this.settings = {};
        this.itemList = [];
        this.selectedItems = [];
        // imageUrl: any = "http://13.58.150.195:4300/";
        //demo
        this.imageUrl = "http://18.219.37.107:4300/";
        //imageUrl: any = "http://192.168.2.134:4300/";
        //alpha url:
        //imageUrl : any = "http://prodapi.celebkonect.com:4300/";
        this.isSubmitted = false;
        this.isError = false;
        this.image = false;
        this.show = false;
        this.mobAppBg = "assets/images/mobile_app2.png";
        this.tabBg = "assets/images/tab_bg.png";
        this.regPopup = false;
        this.showMask2 = false;
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = false;
        this.image = false;
        this.sportstab = true;
        this.moviestab = false;
        this.politicstab = false;
        this.prefMask = false;
        this.prefFrm = false;
        this.prefButtonsValue = false;
        this.my_fptim = false;
        this.myTabksList = true;
        this.celebFeutues = true;
        this.memberFeutues = false;
        //this.surveyQuestions = new SurveyQuestions();
        // this.userId = "5aa37697a943b22efa4cf6ea";
        // this.carouselTileItems = [];
        this.items = [
            { name: 'assets/images/land_bg.jpg' },
            { name: 'assets/images/land_bg.jpg' },
            { name: 'assets/images/land_bg.jpg' }
        ];
        this.countryList = this.cbOvc.getCountryData();
    }
    /* Constructor ends here */
    HomeComponent.prototype.onWindowScroll = function () {
        var hometab = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        var hmtabid = document.getElementById("hm").offsetTop - 0;
        var abttab = document.getElementById("abt").offsetTop - 80;
        var cnttab = document.getElementById("cnt").offsetTop - 80;
        var feutab = document.getElementById("fet").offsetTop - 80;
        var hdr1tab = document.getElementById("hmrt");
        var hdr2tab = document.getElementById("abrt");
        var hdr3tab = document.getElementById("cnrt");
        var hdr4tab = document.getElementById("feut");
        if (hometab >= hmtabid) {
            hdr1tab.classList.add("list_active");
            hdr2tab.classList.remove("list_active");
            //hdr3tab.classList.remove("list_active");
            hdr4tab.classList.remove("list_active");
        }
        if (hometab > abttab) {
            hdr1tab.classList.remove("list_active");
            hdr2tab.classList.add("list_active");
            //hdr3tab.classList.remove("list_active");
            hdr4tab.classList.remove("list_active");
        }
        // if(hometab > cnttab){
        //   hdr1tab.classList.remove("list_active");
        //   hdr2tab.classList.remove("list_active");
        //   hdr3tab.classList.add("list_active");
        //   hdr4tab.classList.remove("list_active");
        // }
        if (hometab > feutab) {
            hdr1tab.classList.remove("list_active");
            hdr2tab.classList.remove("list_active");
            //hdr3tab.classList.remove("list_active");
            hdr4tab.classList.add("list_active");
        }
    };
    HomeComponent.prototype.showCelebsFeutes = function () {
        this.celebFeutues = true;
        this.memberFeutues = false;
        var celebTab = document.getElementById("CF");
        var memTab = document.getElementById("MF");
        celebTab.classList.add('cfactive');
        memTab.classList.remove('cfactive');
    };
    HomeComponent.prototype.showMembersFeutes = function () {
        this.celebFeutues = false;
        this.memberFeutues = true;
        var celebTab = document.getElementById("CF");
        var memTab = document.getElementById("MF");
        celebTab.classList.remove('cfactive');
        memTab.classList.add('cfactive');
    };
    HomeComponent.prototype.showPrefCategories = function (id, event) {
        var sptab = document.getElementById("prefSport");
        var smtab = document.getElementById("prefMovie");
        var spltab = document.getElementById("prefPolitic");
        switch (id) {
            case 'prefSport':
                this.sportstab = true;
                this.moviestab = false;
                this.politicstab = false;
                break;
            case 'prefMovie':
                this.sportstab = false;
                this.moviestab = true;
                this.politicstab = false;
                break;
            case 'prefPolitic':
                this.sportstab = false;
                this.moviestab = false;
                this.politicstab = true;
                break;
        }
    };
    HomeComponent.prototype.showRegPopup = function () {
        this.regPopup = true;
        this.showMask2 = true;
    };
    HomeComponent.prototype.closeRegiPop = function () {
        this.regPopup = false;
        this.showMask2 = false;
    };
    HomeComponent.prototype.appTimer = function () {
        var countDownDate = new Date("Apr 20, 2018 20:00:00").getTime();
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("demo").innerHTML = '<div class="mydar">' + days + "<br/><span>Days</span> " + '</div>' + '<div class="mydar">' + hours + "<br/><span>Hours</span> " + '</div>'
                + '<div class="mydar">' + minutes + "<br/><span>Minutes</span>" + '</div>' + '<div  class="mydar">' + seconds + "<br/><span>Seconds </span>" + '</div>';
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 10);
    };
    //timer ends
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllCBKCelebrities();
        this.carouselTile = {
            grid: { xs: 1, sm: 3, md: 3, lg: 4, all: 0 },
            slide: 1,
            speed: 400,
            interval: 2000,
            animation: 'lazy',
            point: {
                visible: false,
            },
            load: 2,
            touch: true,
            easing: 'ease',
            loop: true
        };
        this.onProfileFormGroup();
        this.onMemberChoicesFormGroup();
        this.onMemberSurveyFormGroup();
        this.onGetPreferencesList();
        this.myPreferenceForm = this.fb.group({
            preferenceId: this.fb.array([])
        });
    };
    HomeComponent.prototype.closePrefForm = function () {
        this.prefFrm = false;
        this.prefMask = false;
    };
    HomeComponent.prototype.carouselTileLoad = function (evt) {
        var len = this.carouselTileItems.length;
        if (len <= 4) {
            for (var i = len; i < len + 4; i++) {
                this.carouselTileItems.push(i);
            }
        }
    };
    HomeComponent.prototype.getAllCBKCelebrities = function () {
        var _this = this;
        this.cbOvc.getAllCelebrities().subscribe(function (result) {
            //  this.carouselTileItems = result.carouselTileItems;
            _this.carouselTileItems = result;
            _this.carouselTileItems = _this.carouselTileItems.filter(function (m) { return m.IsDeleted == false; });
            console.log(result);
        });
    };
    HomeComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    HomeComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    HomeComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    HomeComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    HomeComponent.prototype.onProfileRegister = function () {
        var _this = this;
        var user = {
            firstname: this.formProfile.get('firstname').value,
            lastname: this.formProfile.get('lastname').value,
            mobileNumber: this.formProfile.get('mobileNumber').value,
            dateOfBirth: this.formProfile.get('dateOfBirth').value,
            referralCode: this.formProfile.get('referralCode').value,
            //address: this.formProfile.get('address').value,
            profession: this.formProfile.get('profession').value,
            email: this.formProfile.get('email').value,
            gender: this.formProfile.get('gender').value,
            location: this.formProfile.get('location').value,
            country: this.formProfile.get('country').value,
            password: this.formProfile.get('password').value,
            confirmPassword: this.formProfile.get('confirmPassword').value
        };
        this.email = user.email;
        this.memberName = user.firstname;
        this.isSubmitted = true;
        if (this.formProfile.valid) {
            this.registerService.onRegisterMember(user).subscribe(function (data) {
                console.log(data);
                _this.userId = data.userdata._id;
                console.log("userId:" + _this.userId);
            });
            this.isSubmitted = false;
            this.registerService.onComLog(user).subscribe(function (result) {
                console.log(result);
            });
            this.registerService.onCreateInfo(user).subscribe(function (result) {
                console.log(result);
            });
            //this.onGetMemberByEmail();
            this.tab1 = false;
            this.tab2 = true;
            this.tab3 = false;
            this.tab4 = false;
            //event.target.classList.add('reg_active');
            //event.target.classList.add('reg_active');
            var myBx = document.getElementById('inter');
            myBx.classList.add('reg_active');
        }
    };
    HomeComponent.prototype.onGetPreferencesList = function () {
        var _this = this;
        this.registerService.onGetPreferencesList().subscribe(function (data) {
            _this.preferences = data;
            _this.preferences = _this.preferences.filter(function (p) { return p.parentPreferenceId == null; });
            //this.preferenceParentIds = this.preferences;
            console.log(_this.preferences);
        });
    };
    HomeComponent.prototype.onPreferenceListByParentId = function (id) {
        var _this = this;
        //console.log(this.preferenceParentId);
        this.parentName = "";
        this.registerService.onGetPreferencesList().subscribe(function (data) {
            _this.preferencesChild = data;
            _this.prefButtonsValue = true;
            _this.parentName = _this.preferencesChild.filter(function (m) { return m._id == id; })[0].preferenceName;
            _this.preferencesChild = _this.preferencesChild.filter(function (p) { return p.parentPreferenceId == id; });
            //this.settings = this.preferencesChild[0];
            //this.selectedItems = this.preferencesChild[0];
            //console.log(this.preferencesChild);
        });
    };
    HomeComponent.prototype.onPreferenceChildByParentId = function () {
        //console.log(this.preferenceId);
        var pids = [];
        pids.push(this.preferenceId);
        this.preferenceParentIds = pids;
        //this.preferenceParentIds.concat(this.preferenceParentIds);
        console.log(this.preferenceParentIds);
    };
    HomeComponent.prototype.onChange = function (id, isChecked) {
        var pids = [];
        var emailFormArray = this.myPreferenceForm.controls.preferenceId;
        console.log("emailFormArray" + emailFormArray.controls);
        if (isChecked) {
            emailFormArray.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](id));
        }
        else {
            var index = emailFormArray.controls.findIndex(function (x) { return x.value == id; });
            emailFormArray.removeAt(index);
        }
        for (var _i = 0, _a = emailFormArray.controls; _i < _a.length; _i++) {
            var item = _a[_i];
            pids.push(item.value);
        }
        this.preferenceParentIds = pids;
        console.log(this.preferenceParentIds);
    };
    HomeComponent.prototype.onAddPreferences = function () {
        var _this = this;
        console.log(this.preferenceId);
        console.log("userId:" + this.userId);
        console.log(this.preferenceParentIds);
        //let preferences= [];
        //for (let item of this.preferenceParentIds) {
        //  preferences.push(item);
        //}
        //console.log(preferences);
        if (this.userId != undefined && this.preferenceParentIds.length > 0) {
            this.isError = false;
            this.registerService.onAddPreferences(this.userId, this.preferenceParentIds).subscribe(function (preferences) {
                console.log(preferences);
                //this.isError = false;
                if (preferences.message == "Preferences Saved Successfully") {
                    _this.tab1 = false;
                    _this.tab2 = false;
                    _this.tab3 = true;
                    _this.tab4 = false;
                    var myBx2 = document.getElementById('pref');
                    myBx2.classList.add('reg_active');
                    _this.onGetCelebritiesByPreferences();
                }
                else {
                    _this.isError = true;
                    _this.errorMessage = "Please select your Preferences";
                }
            });
        }
        else {
            this.isError = true;
            this.errorMessage = "Please select your Preferences";
        }
    };
    HomeComponent.prototype.onAddIntrest = function () {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = true;
        var myBx3 = document.getElementById('fin');
        myBx3.classList.add('reg_active');
    };
    HomeComponent.prototype.onGetCelebritiesByPreferences = function () {
        var _this = this;
        this.registerService.onGetCelebritiesByPreferences(this.userId).subscribe(function (data) {
            console.log(data);
            _this.memberInterest = data;
            console.log("memberInterest:" + _this.memberInterest);
        });
    };
    //onCreateMemberChoice(survey) {
    //  this.registerService.onCreateMemberChoice(survey).subscribe(data => {
    //    console.log(data);
    //    if (data.message == "memberChoice added sucessfully") {
    //    }
    //  });
    //}
    HomeComponent.prototype.onFinish = function () {
        //this.regPopup = false;
        this.showMask2 = false;
        // window.location.reload();
        this.prefMask = true;
        this.prefFrm = true;
        this.tab4 = false;
        this.myTabksList = false;
        // this.onGetSurveyForMember();
        var popdiv = document.getElementById("myreger");
        popdiv.classList.add('nopad_dv');
    };
    HomeComponent.prototype.onProfileFormGroup = function () {
        this.formProfile = this.fb.group({
            //name: ['', Validators.required],
            firstname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            mobileNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            dateOfBirth: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            referralCode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            //address: ['', Validators.required],
            profession: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            //loginType: ['', Validators.required],
            country: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            location: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            //password: password,
            //confirmPassword: confirmPassword,
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(8),
                    this.validatePassword
                ])],
            confirmPassword: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        }, { validator: this.matchingPasswords('password', 'confirmPassword')
        });
    };
    HomeComponent.prototype.validatePassword = function (controls) {
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
    HomeComponent.prototype.matchingPasswords = function (password, confirmPassword) {
        return function (group) {
            if (group.controls[password].value === group.controls[confirmPassword].value) {
                return null;
            }
            else {
                return { 'matchingPasswords': true };
            }
        };
    };
    HomeComponent.prototype.onMemberChoicesFormGroup = function () {
        this.formmemberChoice = this.fb.group({
            celebrityName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            industry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
    };
    HomeComponent.prototype.onMemberSurveyFormGroup = function () {
        this.formmemberSurvey = this.fb.group({
            answer: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
    };
    HomeComponent.prototype.readURL = function (event) {
        var files = event.target.files;
        if (files.length > 0 && files.count != 0 && files != null) {
            var req = files;
            var formData = new FormData();
            var file = files[0];
            this.files = file;
            this.celebImage = "uploads/memberChoice/" + file.name;
            this.celebImage.reload();
            formData.append('selectFile', file, file.name);
            formData.append('avtars', file, file.id);
            console.log(formData);
            console.log(files);
            // let id: any;
            this.image = true;
            this.registerService.onupload(formData).subscribe(function (data) {
            });
            //this.adminService.onfileupload(id, formData).subscribe(res => console.log(res));
        }
    };
    HomeComponent.prototype.onCreateMemberChoice = function () {
        var _this = this;
        var memberChoice = {
            memberId: this.userId,
            celebrityName: this.formmemberChoice.get('celebrityName').value,
            industry: this.formmemberChoice.get('industry').value,
            createdBy: this.memberName
        };
        console.log(memberChoice);
        var formData = new FormData();
        if (this.files != undefined && this.files != null) {
            formData.append('selectFile', this.files, this.files.name);
            formData.append('avtars', this.files, this.files.id);
        }
        this.isSubmitted = true;
        if (this.formmemberChoice.valid) {
            this.registerService.onCreateMemberChoice(memberChoice, formData).subscribe(function (data) {
                console.log(data);
                _this.isSubmitted = false;
                if (data.message == "memberChoice added sucessfully") {
                    _this.letUsKnowCelebImage = data.newMemberChoice.memberChoice_imgPath;
                    _this.tab1 = false;
                    _this.tab2 = false;
                    _this.tab3 = false;
                    _this.tab4 = true;
                    var myBx3 = document.getElementById('fin');
                    myBx3.classList.add('reg_active');
                    _this.onGetSurveyForMember();
                }
                else {
                    console.log(data.message);
                }
            });
        }
    };
    HomeComponent.prototype.onGetSurveyForMember = function () {
        var _this = this;
        this.registerService.onGetSurveyForMember(this.userId).subscribe(function (data) {
            console.log("survey:" + data);
            _this.surveyQuestions = data;
            console.log("survey:" + _this.surveyQuestions);
        });
        return this.surveyQuestions;
    };
    HomeComponent.prototype.onCreateSurveySubmissions = function () {
        var _this = this;
        //this.regPopup = false;
        this.prefFrm = false;
        this.showMask2 = false;
        this.prefMask = false;
        this.my_fptim = true;
        this.appTimer();
        // alert(this.formmemberSurvey.controls["answer"].value);
        var memberSurvey = {
            memberId: this.userId,
            celebSurveyId: this.surveyQuestions[0]._id,
            qids: this.surveyQuestions[0].questionsData[0]._id,
            questions: this.surveyQuestions[0].questionsData[0].question,
            answer: this.answer,
            createdBy: this.memberName
        };
        console.log(memberSurvey);
        this.isSubmitted = true;
        if (this.formmemberSurvey.valid) {
            this.registerService.onCreateSurveySubmissions(memberSurvey).subscribe(function (data) {
                console.log(data);
                _this.isSubmitted = false;
                if (data.message == "memberChoice added sucessfully") {
                    _this.letUsKnowCelebImage = data.newMemberChoice.memberChoice_imgPath;
                    _this.tab1 = false;
                    _this.tab2 = false;
                    _this.tab3 = false;
                    _this.tab4 = true;
                    var myBx3 = document.getElementById('fin');
                    myBx3.classList.add('reg_active');
                    _this.onGetSurveyForMember();
                }
                else {
                    console.log(data.message);
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomeComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('showhideinput'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onWindowScroll", null);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]]
        }),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_7__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_observable_service__["a" /* ObservableService */],
            Document])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/password.match.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    EqualValidator_1 = EqualValidator;
    EqualValidator.prototype.validate = function (c) {
        var v = c.value;
        var e = c.root.get(this.validateEqual);
        if (e && v !== e.value)
            return {
                validateEqual: false
            };
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
        __metadata("design:paramtypes", [String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".lgr_frm{ margin-top: 85px; padding: 50px 0px 0px 0px; height: 100vh; }\r\n.sin_hdng{ font-weight:200; font-size: 30px; text-transform: uppercase;}\r\n.logi_bg{ max-width: 70px; display: block; margin: 0px auto;}\r\n.frm_tabs{ margin:0px 0px 0px 0px; padding: 0px; list-style: none;}\r\n.frm_tabs li{ float: left; padding: 5px 0px;  cursor: pointer; font-size: 16px; margin-right: 20px;}\r\n.clr{ clear: both;}\r\n.myemail{\r\n    height:45px; border-radius:2px; font-size: 13px; color: #666; \r\n}\r\n.myemail::-webkit-input-placeholder{ color: #ccc;}\r\n.brd_frm{ padding: 0px; margin: 5px 0px 20px 0px;}\r\n.chk_box {\r\n    display: inline-block;\r\n    position: relative;\r\n    padding-left: 30px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 13px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n.chk_box input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: #fff;\r\n    border: 1px solid #999;\r\n}\r\n.chk_box:hover input ~ .checkmark {\r\n    background-color: #fff;\r\n}\r\n.chk_box input:checked ~ .checkmark {\r\n    background-color: #259dd0; border-color: #259dd0;\r\n}\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n.chk_box input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n.chk_box .checkmark:after {\r\n    left: 7px;\r\n    top: 3px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n.lg_btnr{ float: right; border-color: #259dd0; color: #fff; background-color: #259dd0; padding: 8px 25px; border-radius: 2px;\r\n    font-size: 13px; text-transform: uppercase; font-weight: 600;\r\n}\r\n.bg-animation{\r\n   background-repeat: repeat;\r\n   background-position: 0 0;\r\n    -webkit-animation: animate_background 20s linear 0s infinite;\r\n    animation: animate_background 20s linear 0s infinite;\r\n    min-height:100vh;\r\n    height: 100%;\r\n}\r\n@-webkit-keyframes animate_background { \r\n    from { \r\n        background-position: 0 0;\r\n    } \r\n    to { \r\n        background-position: 0 -480px;\r\n    } \r\n}\r\n@keyframes animate_background { \r\n    from { \r\n        background-position: 0 0;\r\n    } \r\n    to { \r\n        background-position: 0 -480px;\r\n    } \r\n}\r\n.myrht_frm{ background-color: rgba(255,255,255,1);  padding: 50px 50px 50px 50px;}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid lgr_frm bg-animation\" [style.background-image] = \"'url(\\'assets/images/bgscroll.jpg\\')'\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7\"></div>\r\n        <div class=\"col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5\">\r\n          <div class=\"myrht_frm\">\r\n              <div class=\"form_wrapper\">\r\n                  <!-- <img [src]=\"logbg\" class=\"logi_bg\" width=\"100%\" alt=\"Login\" title=\"Login\"> -->\r\n                  <ul class=\"frm_tabs\">\r\n                    <li (click)=\"showLoginFrm()\">Signin</li>\r\n                    <li (click)=\"showRegisterFrm()\">Signup</li>\r\n                    <div class=\"clr\"></div>\r\n                  </ul>\r\n                  <hr class=\"brd_frm\">\r\n                  <!-- <h3 class=\"sin_hdng\">Signin To Your Account</h3> -->\r\n                    <form action=\"\" *ngIf=\"loginFrm\">\r\n                        <div class=\"form-group\">\r\n                          <label>Username</label>\r\n                          <input type=\"email\" class=\"form-control myemail\" id=\"email\" placeholder=\"anji@something.com\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label>Password</label>\r\n                          <input type=\"password\" class=\"form-control myemail\" id=\"pwd\" placeholder=\"**********\">\r\n                        </div>\r\n                        <div class=\"checkbox\">\r\n                            <label class=\"chk_box\">Remember me\r\n                                <input type=\"checkbox\">\r\n                                <span class=\"checkmark\"></span>\r\n                            </label>\r\n      \r\n                            <button (click)=\"showOnlyHomemenu()\" type=\"submit\" class=\"btn btn-outline-secondary lg_btnr\">Login</button>\r\n                            <div class=\"clr\"></div>\r\n                        </div>\r\n                        \r\n                      </form>\r\n      \r\n                      <form action=\"\" *ngIf=\"registerFrm\">\r\n                          <div class=\"form-group\">\r\n                            <label>Name</label>\r\n                            <input type=\"text\" class=\"form-control myemail\" id=\"name\" placeholder=\"ex : anji\">\r\n                          </div>\r\n      \r\n                          <div class=\"form-group\">\r\n                              <label>Email</label>\r\n                              <input type=\"email\" class=\"form-control myemail\" id=\"email\" placeholder=\"ex : anji@something.com\">\r\n                          </div>\r\n      \r\n                          <div class=\"form-group\">\r\n                              <label>Phone</label>\r\n                              <input type=\"text\" class=\"form-control myemail\" id=\"phone\" placeholder=\"ex : 9999999999\">\r\n                            </div>\r\n      \r\n                          <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" class=\"form-control myemail\" id=\"pwd\" placeholder=\"**********\">\r\n                          </div>\r\n      \r\n                         \r\n      \r\n                          <div class=\"form-group\">\r\n                              <button type=\"submit\" class=\"btn btn-outline-secondary lg_btnr\">Register</button>\r\n                              <div class=\"clr\"></div>\r\n                          </div>\r\n      \r\n                          \r\n                          \r\n                        </form>\r\n      \r\n                </div>\r\n          </div>\r\n\r\n         \r\n            \r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(routeSvc) {
        this.routeSvc = routeSvc;
        this.logbg = "assets/images/login.png";
        this.registerFrm = false;
        this.loginFrm = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.showRegisterFrm = function ($event) {
        this.registerFrm = true;
        this.loginFrm = false;
    };
    LoginComponent.prototype.showLoginFrm = function () {
        this.registerFrm = false;
        this.loginFrm = true;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/***/ (function(module, exports) {

module.exports = ".mainpage{ background-size: cover; background-repeat: no-repeat;  height: 100vh;\r\n    overflow: hidden; position: relative; font-family: 'Raleway', sans-serif;\r\n}\r\n.tabler_bg{  max-width: 768px; margin: 0px auto; bottom: 0; left: 0px; right: 0px;\r\n    position: absolute; background-size: 100% auto; background-repeat: no-repeat;\r\n    height: 80vh; overflow: hidden; z-index: 1;\r\n    \r\n}\r\n.tab_bg{ position: absolute; z-index: 10; bottom: -1%; width: 100%; left: 0; right: 0; overflow: hidden;\r\n    display: block; margin: 0px auto; background-size: 100% auto; background-repeat: no-repeat; background-position: bottom;\r\n    padding: 34% 0;\r\n}\r\n.ivideo{ position: absolute; width: 51.5%; height: 49%; z-index: -1; left: 26.9%; \r\n    top: 15%;\r\n}\r\n.inner_pages_wrap{ padding: 60px 0px; font-family: 'Raleway', sans-serif;}\r\n.lftnav_wrap{ list-style: none; padding: 0px 0px 50px 0px; margin: 0px; background-color: #fff;\r\n    -webkit-box-shadow:0px 0px 30px #ddd; box-shadow:0px 0px 30px #ddd;\r\n    border: 1px solid #ddd;\r\n}\r\n.lftnav_wrap li{ font-size: 14px; border-bottom: 1px solid #ddd;}\r\n.lftnav_wrap li a{ display: block; padding: 15px 20px; \r\n    -webkit-transition: 0.3s ease-in-out;\r\n    transition: 0.3s ease-in-out; cursor: pointer;\r\n}\r\n.lftnav_wrap li a:hover{ background-color: #259dd0; color: #fff;}\r\n.pad_bot{ padding-bottom: 20px;}\r\n.spons_cont{ font-size: 18px;}\r\n.cbhdng{ font-size:14px; font-weight:400;}\r\n@media screen and (max-width: 767px){\r\n\r\n    .lftnav_wrap{ margin-bottom: 50px;}\r\n    \r\n  }\r\n@media screen and (max-width: 660px){\r\n  \r\n  }\r\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mainpage\" [style.background-image]=\"'url(\\'assets/images/land_bg.jpg\\')'\">\r\n  <div class=\"container tabler_bg\">\r\n    <!-- <img src=\"assets/images/tabler.png\" class=\"tab_bg\" alt=\"\" title=\"\" width=\"100%\"> -->\r\n    <div class=\"tab_bg\" [style.background-image]=\"'url(\\'assets/images/tab_bg.png\\')'\">\r\n      <iframe class=\"ivideo\" width=\"100%\" src=\"https://www.youtube.com/embed/hpT_wBnS-JM?rel=0&amp;controls=0&amp;showinfo=0\"\r\n      frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen>\r\n     </iframe>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n\r\n<!--video container ends-->\r\n\r\n\r\n\r\n<div class=\"container-fluid inner_pages_wrap\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-sm-12 col-md-3 col-lg-3\">\r\n        <ul class=\"lftnav_wrap\">\r\n          <li><a (click)=\"profilePage()\"><i class=\"far fa-user-circle\"></i> My Profile</a></li>\r\n          <li><a (click)=\"celebPage()\"><i class=\"far fa-star\"></i> My Celebrities</a></li>\r\n          <li><a (click)=\"transactionPage()\"><i class=\"far fa-money-bill-alt\"></i> My Transactions</a></li>\r\n          <!-- <li><a (click)=\"preferencePage()\"><i class=\"far fa-money-bill-alt\"></i> My Preferences</a></li> -->\r\n        </ul> \r\n      </div>\r\n      <!--left side nav ends-->\r\n\r\n      <div class=\"col-12 col-sm-12 col-md-6 col-lg-6\">\r\n        <div class=\"row pad_bot\">\r\n            <div class=\"col-6 col-sm-12 col-md-6 col-lg-6\">\r\n                <iframe width=\"100%\" src=\"https://www.youtube.com/embed/fbhOCEAHOl4\"\r\n                frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen>\r\n               </iframe>\r\n               <h5 class=\"cbhdng\">Mumaith Khan | CelebKonect</h5>\r\n              </div>\r\n      \r\n              <div class=\"col-6 col-sm-12 col-md-6 col-lg-6\">\r\n                  <iframe width=\"100%\" src=\"https://www.youtube.com/embed/Ne4s2p8mqyI\"\r\n                  frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen>\r\n                 </iframe>\r\n                 <h5 class=\"cbhdng\">Ruby | CelebKonect</h5>\r\n              </div>\r\n        </div>\r\n\r\n        <div class=\"row pad_bot\">\r\n            <div class=\"col-6 col-sm-12 col-md-6 col-lg-6\">\r\n                <iframe width=\"100%\" src=\"https://www.youtube.com/embed/PIQyTw2UXwE\"\r\n                frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen>\r\n               </iframe>\r\n               <h5 class=\"cbhdng\">Seba koshy | CelebKonect</h5>\r\n              </div>\r\n      \r\n              <div class=\"col-6 col-sm-12 col-md-6 col-lg-6\">\r\n                  <iframe width=\"100%\" src=\"https://www.youtube.com/embed/Qy706jjeks4\"\r\n                  frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen>\r\n                 </iframe>\r\n                 <h5 class=\"cbhdng\"> CelebKonect</h5>\r\n                </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!--mid Cont ends-->\r\n\r\n\r\n      <div class=\"col-12 col-sm-12 col-md-3 col-lg-3\">\r\n        <p class=\"spons_cont\">Sponsored Content Goes Here</p>\r\n        <h6>Welcome {{this.email}}</h6>\r\n      </div>\r\n      <!--sponsored cont ends-->\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_observable_service__ = __webpack_require__("./src/app/services/observable.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(routSvc, route, cbOvc) {
        this.routSvc = routSvc;
        this.route = route;
        this.cbOvc = cbOvc;
        // imageUrl: any = "http://13.58.150.195:4300/";
        //demo
        this.imageUrl = "http://18.219.37.107:4300/";
        this.name = localStorage.getItem('loginSessId');
    }
    MainpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.email = params['email'];
            console.log("email:" + _this.email);
        });
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log("id:" + _this.id);
        });
        this.email = localStorage.getItem('loginSessId');
        this.getMemberByEmail(this.email);
        this.test = this.getMemberByEmail(this.email);
        this.getlistofinterests(this.test);
        this.getCelebrityById(this.id);
        this.ongetprofilebyemail(this.email);
    };
    MainpageComponent.prototype.profilePage = function () {
        //this.routSvc.navigateByUrl('/profile');
        this.routSvc.navigate(['/profile/']);
    };
    MainpageComponent.prototype.celebPage = function () {
        this.routSvc.navigate(['/celebrities/']);
        // this.routSvc.navigateByUrl('/celebrities' email:);
    };
    MainpageComponent.prototype.transactionPage = function () {
        this.routSvc.navigate(['/transactions/']);
    };
    MainpageComponent.prototype.preferencePage = function () {
        this.routSvc.navigate(['/mypreferences']);
    };
    //getMemberByEmail(email : any){
    //  this.email = email;
    //  this.cbOvc.getMemberByEmail(email).subscribe(data => {
    //    console.log(data);
    //    });
    //}
    MainpageComponent.prototype.getMemberByEmail = function (email) {
        var _this = this;
        email = this.email;
        this.cbOvc.getMemberByEmail(this.email).subscribe(function (x) {
            console.log("testingid" + x._id);
            _this.id = x._id;
            console.log("final" + _this.id);
        });
        return this.id;
    };
    MainpageComponent.prototype.getCelebrityById = function (id) {
        var _this = this;
        id = this.id;
        this.cbOvc.getCelebrityById(id).subscribe(function (data) {
            _this.celebsProfile = data;
            console.log("celebsProfile:" + data);
        });
        return this.celebsProfile;
    };
    MainpageComponent.prototype.getlistofinterests = function (id) {
        var _this = this;
        id = this.id;
        console.log("tr" + this.test);
        this.cbOvc.getCelebrityById(this.id).subscribe(function (interests) {
            _this.interests = interests;
            console.log(interests);
        });
        // return this.interests;
    };
    MainpageComponent.prototype.ongetprofilebyemail = function (email) {
        var _this = this;
        this.email = email;
        this.cbOvc.onGetProfileByEmail(email).subscribe(function (data) {
            _this.profile = data;
            console.log(data);
        });
    };
    MainpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mainpage',
            template: __webpack_require__("./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__("./src/app/mainpage/mainpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_observable_service__["a" /* ObservableService */]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/models/year.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Yearvalues; });
/* unused harmony export Month */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var YEARVALUES = [
    { year: "2018" }, { year: "2019" }, { year: "2020" },
    { year: "2021" }, { year: "2022" }, { year: "2023" }, { year: "2024" }, { year: "2025" },
    { year: "2026" }, { year: "2027" }, { year: "2028" }, { year: "2029" }, { year: "2030" },
    { year: "2031" }, { year: "2032" }, { year: "2033" }, { year: "2034" }, { year: "2035" },
    { year: "2036" }, { year: "2037" }, { year: "2038" }, { year: "2039" }, { year: "2040" },
    { year: "2041" }, { year: "2042" }, { year: "2043" }, { year: "2044" }, { year: "2045" },
    { year: "2046" }, { year: "2047" }, { year: "2048" }, { year: "2049" }, { year: "2050" },
    { year: "2051" }, { year: "2052" }, { year: "2053" }, { year: "2054" }, { year: "2055" },
    { year: "2056" }, { year: "2057" }, { year: "2058" }, { year: "2059" }, { year: "2060" },
    { year: "2061" }, { year: "2062" }, { year: "2063" }, { year: "2064" }, { year: "2065" }
];
var Yearvalues = /** @class */ (function () {
    function Yearvalues() {
    }
    Yearvalues.prototype.getAll = function () {
        return YEARVALUES;
    };
    Yearvalues = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Yearvalues);
    return Yearvalues;
}());

var Month = /** @class */ (function () {
    function Month() {
    }
    return Month;
}());



/***/ }),

/***/ "./src/app/mypreferences/mypreferences.component.css":
/***/ (function(module, exports) {

module.exports = ".profpage{ background-size: cover; background-repeat: no-repeat; padding: 60px 0px;\r\n    overflow: hidden; position: relative; font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.inner_pages_wrap{ padding: 60px 0px; font-family: 'Raleway', sans-serif;}\r\n\r\n.lftnav_wrap{ list-style: none; padding: 0px 0px 50px 0px; margin: 0px; background-color: #fff;\r\n    -webkit-box-shadow:0px 0px 30px #ddd; -ms-box-shadow:0px 0px 30px #ddd;\r\n    box-shadow:0px 0px 30px #ddd;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.lftnav_wrap li{ font-size: 14px; border-bottom: 1px solid #ddd;}\r\n\r\n.lftnav_wrap li a{ display: block; padding: 15px 20px; \r\n    -webkit-transition: 0.3s ease-in-out;\r\n    transition: 0.3s ease-in-out; cursor: pointer;\r\n}\r\n\r\n.lftnav_wrap li a:hover{ background-color: #259dd0; color: #fff;}\r\n\r\n.pad_bot{ padding-bottom: 20px;}\r\n\r\n.spons_cont{ font-size: 18px;}\r\n\r\n.cbhdng{ font-size:14px; font-weight:400;}\r\n\r\n.prof_active{ background-color: #259dd0; color: #fff;}\r\n\r\n.bc_btn{ width: 100%; display: block; background-color: #259dd0; color: #fff; text-align: center; font-size:16px; border-radius:0px; margin: 40px auto; height: 50px;\r\n        -webkit-box-shadow: 0px 3px 0px #1c262a; -ms-box-shadow: 0px 3px 0px #1c262a;\r\n    box-shadow: 0px 3px 0px #1c262a; font-weight:600;\r\n}\r\n\r\n/*profile page css*/\r\n\r\n.cvrwrap{ position: relative;}\r\n\r\n.profile_wrapper{ padding: 0px; margin: 0px; position: relative; width: 100%;}\r\n\r\n.addcred_btn{ float: right; padding: 6px 15px 6px 15px; outline: none; -webkit-box-shadow: 0px 3px 0px #1c262a; margin-bottom: 20px; box-shadow: 0px 3px 0px #1c262a; background-color: #259dd0; color: #fff;\r\n    font-weight:bold; font-size:14px; margin-bottom: 50px;\r\n}\r\n\r\n.tb_hdr > th{ font-size:13px;}\r\n\r\n.tbdy_clr{ list-style: none;}\r\n\r\n.tbdy_clr > tr:nth-child(odd){ background-color: #f5f5f5;}\r\n\r\n/*profile page css*/\r\n\r\n.c_page{ position: relative;}\r\n\r\n.title_mask{ padding: 0px 0px; background-color: rgba(0,0,0,0.5); position: absolute; bottom: 0; width: 90%;\r\n     z-index: 10; right: 0; margin: 0px; padding-left: 150px; list-style: none;\r\n}\r\n\r\n.title_mask li{ float: left; color: #fff; padding: 10px 80px 10px 0;}\r\n\r\n.big{ display: block; font-size: 25px; font-weight:600; text-transform: uppercase; padding: 0px; margin: 0px; line-height: 1.5;}\r\n\r\n.title_mask li > small{ font-size:14px;}\r\n\r\n.profile_manager{ position: absolute; left: 40px; bottom: -80px;  z-index: 15;\r\n}\r\n\r\n.profile_box{ width: 150px; height: 150px; border-radius:100%; \r\n    background-color: #fff; z-index: 20; overflow: hidden; border: 1px solid #ccc;\r\n    -webkit-box-shadow: 0px 0px 30px #666; -ms-box-shadow: 0px 0px 30px #666; box-shadow: 0px 0px 30px #666;\r\n}\r\n\r\n.profile_edit{ color: #000; font-size:14px; text-align: center; position: relative; top: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile_info{ padding-left: 200px;}\r\n\r\n.profile_info ul{ list-style: none; padding: 30px 0px 30px 0px; margin: 0px;}\r\n\r\n.profile_info ul li{ float: left; width: 25%;}\r\n\r\n.profile_info ul li span{ text-transform: uppercase; color: #666; font-size:14px; font-weight:400; display: block;}\r\n\r\n.profile_info ul li p{ text-transform: capitalize; color: #000; font-size:16px; font-weight:600;}\r\n\r\n#celebs_list{ padding: 0px 0px;}\r\n\r\n.lgn_hdng {\r\n    color: #000;\r\n    font-weight: 300;\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    padding-bottom: 30px;\r\n  }\r\n\r\n.date_field{ margin-top:12px!important;}\r\n\r\n.error_mes{ color:red;}\r\n\r\n.image-upload > input {\r\n    display: none;\r\n  }\r\n\r\n.image-upload {\r\n    width: 150px;\r\n    height: 150px;\r\n    border-radius: 100%;\r\n    background-color: #fff;\r\n    z-index: 20;\r\n    overflow: hidden;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-shadow: 0px 0px 30px #666;\r\n    -ms-box-shadow: 0px 0px 30px #666;\r\n    box-shadow: 0px 0px 30px #666;\r\n  }\r\n\r\n.pfimger{ width:150px; height:150px;}\r\n\r\n.membername {margin-left: 14px;cursor: pointer;}\r\n\r\n.card-title, .card-text {padding-left: 1rem !important;}\r\n\r\n.img-fluid1 { width: auto;}\r\n\r\n.cardspace{ padding: 30px 20px;}\r\n\r\n.feed_bg{ max-width: auto; max-width: 100%; padding: 30px!important; overflow: hidden;}\r\n\r\n.space_imng{ margin-bottom: 25px!important;}\r\n\r\n.mycard_space{ margin-bottom: 25px;}\r\n\r\n#mymedias{ margin-top: 30px;}\r\n\r\n.mybgspacer{ position: relative; border: 3px solid #fff; padding:10px 10px; min-height: 180px; overflow: hidden; }\r\n\r\n.disable_btn{ cursor:not-allowed;}\r\n\r\n.update_profileform{ padding:30px; -webkit-box-shadow:0px 0px 60px #ccc; -ms-box-shadow:0px 0px 60px #ccc;\r\n                     box-shadow:0px 0px 60px #ccc; background-color:#fff; border:1px solid #ddd; margin-bottom:0px;\r\n                      -webkit-transition: 0.3s ease-in-out;\r\n              transition: 0.3s ease-in-out;          \r\n}\r\n\r\n.show_updpform{   margin-bottom:50px;}\r\n\r\n.lg_email {\r\n  border: none;\r\n  border-radius: 0px;\r\n  border-bottom: 1px solid #ccc;\r\n  outline: none;\r\n  box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  font-size: 12px;\r\n  -webkit-transition: 0.3s ease-in-out;\r\n  transition: 0.3s ease-in-out;\r\n  position: relative;\r\n  padding: 0 0 5px 0px;\r\n}\r\n\r\n.lg_email:focus {\r\n    border-color: #259dd0;\r\n    color: #259dd0;\r\n  }\r\n\r\n.lg_email::-webkit-input-placeholder {\r\n    color: #ccc;\r\n  }\r\n\r\n.embx {\r\n  position: relative;\r\n}\r\n\r\n.usicn {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 5px;\r\n  z-index: 10;\r\n  color: #ccc;\r\n}\r\n\r\n.lg_email:focus .usicn {\r\n  color: #259dd0 !important;\r\n}\r\n\r\n.embx > label {\r\n  color: #ccc;\r\n  font-size: 12px;\r\n}\r\n\r\n.embx2 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.lgnbtner {\r\n  float: right;\r\n  background-color: #259dd0;\r\n  border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.chk_box {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding-left: 24px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 13px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  color: #000;\r\n}\r\n\r\n.chk_box input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 16px;\r\n  width: 16px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 50%;\r\n}\r\n\r\n.chk_box:hover input ~ .checkmark {\r\n  background-color: #fff;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark {\r\n  background-color: #259dd0;\r\n  border-color: #259dd0;\r\n}\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n.chk_box .checkmark:after {\r\n  left: 6px;\r\n  top: 3px;\r\n  width: 4px;\r\n  height: 7px;\r\n  border: solid white;\r\n  border-width: 0 2px 2px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.fgp {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  left: 0;\r\n  padding: 12px 50px;\r\n  font-size: 13px;\r\n}\r\n\r\n.signup_hdng {\r\n  color: #259dd0;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.hp_blk {\r\n  list-style: none;\r\n  font-size: 12px;\r\n}\r\n\r\n.upd_btn{\r\n  -webkit-box-shadow: 0px 3px 0px #1c262a; -ms-box-shadow: 0px 3px 0px #1c262a;\r\n  box-shadow: 0px 3px 0px #1c262a; font-weight:600; background-color: #259dd0;\r\n}\r\n\r\n.media_bg{ position: absolute; top: 50%; left: 50%; width: 100%; height: 100%;\r\n  -webkit-transform: translate(-50%, -50%); -mos-transform: translate(-50%, -50%); transform: translate(-50%, -50%);\r\n}\r\n\r\n.circle_celeb{ position: relative; width: 150px; height: 150px;}\r\n\r\n.circle_edit{\r\n  width:40px; height: 40px; \r\n  border-radius: 100%; position: absolute; right: -10px; bottom: 30px; border: 1px solid #ddd;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.myedit{ font-size:1.2rem; position: relative; text-align: center; left: 10px; top: 10px;}\r\n\r\n.prefform1{ padding: 50px 0px; max-width: 480px;}\r\n\r\n.prefform1 > label{ font-size:13px;}\r\n\r\n.celeb_change{ border: none; border-bottom: 1px solid #999; border-radius: 0px; padding: 0px 0px 8px 0px; -webkit-box-shadow: none; box-shadow: none; font-size: 13px;\r\n}\r\n\r\n.mysave_btn{padding: 6px 15px 6px 15px; outline: none; -webkit-box-shadow: 0px 3px 0px #1c262a; box-shadow: 0px 3px 0px #1c262a;\r\n  margin-bottom: 20px; background-color: #259dd0; color: #fff; font-weight: bold; font-size: 14px; margin-bottom: 50px;\r\n}\r\n\r\n/*second pref*/\r\n\r\n.pref_celeb_bg{ width: 150px; height: 150px;\r\n  border-radius: 100%; border: 1px solid #999; margin: 30px 0px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mypreferences/mypreferences.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid profpage\" [style.background-image]=\"'url(\\'assets/images/land_bg.jpg\\')'\">\n  <div class=\"container\">\n   \n    \n  </div>\n</div>\n\n<!--video container ends-->\n\n\n\n<div class=\"container-fluid inner_pages_wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-3 col-md-3 col-lg-3\">\n        <ul class=\"lftnav_wrap\">\n          <li><a (click)=\"profilePage()\"><i class=\"far fa-user-circle\"></i> My Profile</a></li>\n          <li><a (click)=\"celebPage()\"><i class=\"far fa-star\"></i> My Celebrities</a></li>\n          <li><a (click)=\"transactionPage()\"><i class=\"far fa-money-bill-alt\"></i> My Transactions</a></li>\n          <!-- <li class=\"prof_active\"><a (click)=\"preferencePage()\"><i class=\"far fa-list-alt\"></i> My Preferences</a></li> -->\n        </ul>\n        \n   \n      </div>\n      <!--left side nav ends-->\n\n      <div class=\"col-12 col-sm-9 col-md-9 col-lg-9\">\n\n        <div class=\"row\">\n            <div class=\"col-12\">\n                    <div class=\"row\">\n                            <div class=\"col-12\">\n                  \n                              <div class=\"cvrwrap\">\n                                  <div class=\"profile_wrapper\">\n                                    <img src=\"assets/images/coverpage.jpg\" class=\"c_page\" width=\"100%\" alt=\"coverpage\" title=\"coverpage\">\n                                    <ul class=\"title_mask\">\n                                      <li>\n                                        <span class=\"big\">500</span>\n                                        <small>Followers</small>\n                                      </li>\n                      \n                                      <li>\n                                        <span class=\"big\">200</span>\n                                        <small>Following</small>\n                                      </li>\n                      \n                                      <li>\n                                        <span class=\"big\">{{postlist}}</span>\n                                        <small>Posts</small>\n                                      </li>\n                                    </ul>\n                      \n                                    <div class=\"profile_manager\">\n                                      <!--<div class=\"profile_box\">\n                                      <img src=\"{{imageUrl+profile.avtar_imgPath}}\" class=\"act_bg\" width=\"100%\" alt=\"{{profile.name}}\" title=\"{{profile.name}}\">\n                                      </div>-->\n                      \n                                      <div class=\"image-upload\">\n                                          <!--<form [formGroup]=\"formProfile\" enctype=\"multipart/form-data\" method=\"post\" name=\"fileinfo\">-->\n                                          <label for=\"selectFile\">\n                                            <img src=\"{{imageUrl+profile.avtar_imgPath}}\" width=\"100%\"/>\n                                            <img *ngIf=\"profile.avtar_imgPath==''\"  src=\"assets/images/profile_pic.jpg\" width=\"100%\" alt=\"{{profile.name}}\" title=\"{{profile.name}}\" />\n                                          </label>\n                                          <input type=\"file\" id=\"selectFile\" (change)=\"readURL($event)\" name=\"selectFile\" class=\"form-group\" />\n                      \n                                          <!--<input type=\"file\" id=\"file-input\" (change)=\"readURL($event)\" />-->\n                                          <!--</form>-->\n                                        </div>\n                      \n                                        <p class=\"profile_edit\" (click)=\"openPform(profile._id)\"><i class=\"fas fa-pencil-alt\"></i> Edit</p>\n                                    </div>\n\n                                  </div>\n                              </div>\n                      \n                      \n                              <div class=\"profile_info\">\n                                <ul>\n                                  <li>\n                                    <span>Name</span>\n                                    <p>{{profile.name}}</p>\n                                </li>\n                                <li>\n                                    <span>Occupation</span>\n                                    <p>{{profile.profession}} </p>\n                                </li>\n                                <li>\n                                    <span>Country</span>\n                                    <p>{{profile.country}}</p>\n                                </li>\n\n\n                                <li>\n                                  <button type=\"button\" class=\"btn btn-default addcred_btn \">Buy Credits</button>\n                                </li>\n                                <div class=\"clearfix\"></div>\n                                </ul>\n                              </div>\n                  \n                            </div>\n                          </div>\n\n\n                           <div class=\"col-12 update_profileform\" *ngIf=\"pform\" id=\"pf\" style=\"margin-bottom:50px;\">\n\n          <form [formGroup]=\"profileForm\" (ngSubmit)=\"onUpdateProfile(profile)\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"name\">First Name</label>\n\n\n                <input type=\"text\" [(ngModel)]=\"profile.name\" class=\"form-control lg_email reg_email\" id=\"profile.name\" placeholder=\"First Name\" formControlName=\"profile.name\">\n              </div>\n\n              <div class=\"form-group col-md-6\">\n                <label for=\"lastname\">Last Name</label>\n                <input type=\"text\" [(ngModel)]=\"profile.lastName\" class=\"form-control lg_email reg_email\" id=\"profile.lastName\" placeholder=\"Last Name\" formControlName=\"profile.lastName\">\n              </div>\n\n              <div class=\"form-group col-md-6\">\n                <label for=\"mobileNumber\">Phone</label>\n                <input type=\"number\" [(ngModel)]=\"profile.mobileNumber\" class=\"form-control lg_email reg_email\" id=\"profile.mobileNumber\" placeholder=\"Mobile Number\" formControlName=\"profile.mobileNumber\">\n              </div>\n\n              <div class=\"form-group col-md-6\">\n                <label for=\"email\">Email</label>\n                <input type=\"email\" [(ngModel)]=\"profile.email\" class=\"form-control lg_email reg_email\" id=\"email\" placeholder=\"profile.email\" formControlName=\"profile.email\">\n              </div>\n\n\n            </div>\n\n\n\n            <div class=\"form-row\">\n\n              <div class=\"form-group col-md-6\">\n                <label for=\"gender\">Gender</label>\n                <select id=\"profile.gender\" [(ngModel)]=\"profile.gender\" class=\"form-control lg_email reg_email\" formControlName=\"profile.gender\">\n\n                  <option value=\"Male\" selected>Male</option>\n                  <option value=\"Female\">Female</option>\n                  <option value=\"Others\">Others</option>\n                </select>\n              </div>\n\n              <div class=\"form-group col-md-6\">\n                <label for=\"dateOfBirth\">Date of Birth</label>\n                <input type=\"date\" [(ngModel)]=\"profile.dateOfBirth\" class=\"form-control lg_email reg_email date_field\" id=\"profile.dateOfBirth\" formControlName=\"profile.dateOfBirth\" />\n              </div>\n\n              <div class=\"form-group col-md-6\">\n                <label for=\"location\">Location</label>\n                <input type=\"text\" [(ngModel)]=\"profile.location\" class=\"form-control lg_email reg_email\" id=\"profile.location\" placeholder=\"Location\" formControlName=\"profile.location\">\n              </div>\n\n\n              <div class=\"form-group col-md-6\">\n                <label for=\"about\">About</label>\n                <input type=\"text\" [(ngModel)]=\"profile.aboutMe\" class=\"form-control  lg_email reg_email\" id=\"profile.aboutMe\" placeholder=\"About Me\" formControlName=\"profile.aboutMe\">\n                <div class=\"clearfix\"></div>\n              </div>\n\n            </div>\n\n           \n\n            <div *ngIf=\"isValid\">\n              <p class=\"error_mes\">{{successMessage}}</p>\n            </div>\n\n            <button type=\"submit\" class=\"btn btn-primary upd_btn\">Update Profile </button>\n            <button type=\"button\" class=\"btn btn-primary upd_btn\" (click)=\"closePform()\">Close </button>\n\n          </form>\n\n        </div>\n\n\n            </div>\n        </div>\n\n\n\n\n\n\n\n        <!--preference html goes here-->\n\n          <div class=\"col-12\">\n                <h2>Let Us Know !</h2>\n                <p>Who do you want to konect with ?</p>\n\n                <div class=\"circle_celeb\">\n\n                    <div class=\"image-upload\">\n                      <div class=\"circle_edit\"><i class=\"fas fa-pencil-alt fa-2x myedit\"></i></div>\n                       \n                        <label for=\"selectFile\">\n                          <img src=\"\" width=\"100%\"/>\n                          <img *ngIf=\"profile.avtar_imgPath==''\"  src=\"assets/images/profile_pic.jpg\" width=\"100%\" alt=\"{{profile.name}}\" title=\"{{profile.name}}\" />\n                        </label>\n                        <input type=\"file\" id=\"selectFile\" (change)=\"readURL($event)\" name=\"selectFile\" class=\"form-group\" />\n    \n                      </div>\n                </div>\n\n                <!--form-->\n\n                <div class=\"prefform1\">\n\n                    <form>\n\n                        <div class=\"form-group\">\n                          <label for=\"celebrity\">Enter Celebrity Name</label>\n                          <input type=\"text\" name=\"celebrity\" class=\"form-control celeb_change\" id=\"celebrity\" formControlName=\"celebrity\" placeholder=\"Ex : Chiru\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"industry\">Which industry does the celeb belong to</label>\n                           <select class=\"form-control celeb_change\">\n                             <option value=\"\">Movies</option>\n                             <option value=\"\">Music</option>\n                             <option value=\"\">Sports</option>\n                             <option value=\"\">Politicians</option>\n                             <option value=\"\">Television</option>\n                           </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <button type=\"button\" class=\"btn btn-primary mysave_btn\">Save</button>\n                          <button type=\"button\" class=\"btn btn-primary mysave_btn\">Save and Add New</button>\n                        </div>\n      \n                      </form>\n\n                </div>\n\n                <!--form1 ends here-->\n\n                <div class=\"prefform2\">\n\n                  <div class=\"pref_celeb_bg\"></div>\n                  <h3><i class=\"far fa-question-circle\"></i> It's Playtime</h3>\n                  <h5>Win a chance to meet your favourite celebrity</h5>\n                  \n                    <form>\n                      <p class=\"pref_quest\">Before becoming a Make-up artist, Ruby Bal Was...</p>\n                      <div class=\"form-group\">\n\n                        <div>\n                          <label class=\"chk_box\">Banker\n                              <input type=\"radio\" name=\"radio\">\n                              <span class=\"checkmark\"></span>\n                          </label>\n                        </div>\n\n                        <div>\n                          <label class=\"chk_box\">Comedian\n                              <input type=\"radio\" name=\"radio\">\n                              <span class=\"checkmark\"></span>\n                          </label>\n                        </div>\n\n                        <div>\n                          <label class=\"chk_box\">Home Maker\n                              <input type=\"radio\" name=\"radio\">\n                              <span class=\"checkmark\"></span>\n                          </label>\n                        </div>\n\n                        <div>\n                          <label class=\"chk_box\">None\n                              <input type=\"radio\" name=\"radio\">\n                              <span class=\"checkmark\"></span>\n                          </label>\n                        </div>\n\n                      </div>\n\n                      <div class=\"form-group\">\n                          <button type=\"button\" class=\"btn btn-primary mysave_btn\">Submit</button> \n                      </div>\n                      \n                    </form>\n\n                </div>\n\n                \n\n\n          </div>  \n\n        <!--preference html ends here-->\n\n       \n\n      </div>\n      <!--mid Cont ends-->\n\n      \n\n\n      \n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mypreferences/mypreferences.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypreferencesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_observable_service__ = __webpack_require__("./src/app/services/observable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_register_service__ = __webpack_require__("./src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MypreferencesComponent = /** @class */ (function () {
    function MypreferencesComponent(routSvc, cbOvc, route, registerService, fb, ele) {
        this.routSvc = routSvc;
        this.cbOvc = cbOvc;
        this.route = route;
        this.registerService = registerService;
        this.fb = fb;
        this.ele = ele;
        // imageUrl: any = "http://13.58.150.195:4300/";
        this.imageUrl = "http://18.219.37.107:4300/";
        this.name = localStorage.getItem('loginSessId');
        this.isValid = false;
    }
    MypreferencesComponent.prototype.ngOnInit = function () {
        this.email = localStorage.getItem('loginSessId');
        console.log("seesion" + localStorage.getItem('loginSessId'));
        this.id = localStorage.getItem('memberId');
        this.ongetprofilebyemail(this.email);
        this.getMemberByEmail(this.email);
        this.onGetTransactions();
        this.onProfileFormGroup();
    };
    MypreferencesComponent.prototype.openPform = function (id) {
        this.pform = true;
        var frmwrap = document.getElementById('pf');
        frmwrap.classList.add('show_updpform');
    };
    MypreferencesComponent.prototype.onProfileFormGroup = function () {
        this.profileForm = this.fb.group({
            //firstname: ['', Validators.required],
            //lastname: ['', Validators.required],
            //mobileNumber: ['', Validators.required],
            //dateOfBirth: ['', Validators.required],
            //aboutMe: ['', Validators.required],
            //email: ['', Validators.required],
            //gender: ['', Validators.required],
            //country: ['', Validators.required],
            //location: ['', Validators.required],
            'profile.name': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.lastName': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.mobileNumber': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.email': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.location': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.aboutMe': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.gender': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.dateOfBirth': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
        });
    };
    MypreferencesComponent.prototype.closePform = function () {
        this.pform = false;
        var frmwrap = document.getElementById('pf');
        frmwrap.classList.remove('show_updpform');
    };
    MypreferencesComponent.prototype.profilePage = function () {
        //this.routSvc.navigateByUrl('/profile');
        this.routSvc.navigate(['/profile/']);
    };
    MypreferencesComponent.prototype.celebPage = function () {
        this.routSvc.navigate(['/celebrities/']);
    };
    MypreferencesComponent.prototype.transactionPage = function () {
        this.routSvc.navigate(['/transactions/']);
        this.onGetTransactions();
    };
    MypreferencesComponent.prototype.preferencePage = function () {
        this.routSvc.navigate(['/mypreferences']);
    };
    MypreferencesComponent.prototype.ongetprofilebyemail = function (email) {
        var _this = this;
        this.email = email;
        this.cbOvc.onGetProfileByEmail(email).subscribe(function (data) {
            _this.profile = data;
            console.log(data);
            _this.oldImage = _this.profile.avtar_imgPath;
        });
        return this.profile;
    };
    MypreferencesComponent.prototype.getMemberByEmail = function (email) {
        var _this = this;
        email = this.email;
        this.cbOvc.getMemberByEmail(this.email).subscribe(function (x) {
            console.log("testingid" + x._id);
            _this.id = x._id;
            localStorage.setItem('memberId', x._id);
            console.log("final" + _this.id);
            _this.onGetContentByID();
        });
        return this.id;
    };
    MypreferencesComponent.prototype.onGetTransactions = function () {
        var _this = this;
        //this.id = this.id
        this.cbOvc.onGetTransactions(this.id).subscribe(function (data) {
            _this.transactions = data;
            console.log(data);
        });
    };
    MypreferencesComponent.prototype.onGetContentByID = function () {
        var _this = this;
        this.cbOvc.onGetContentByID(this.id).subscribe(function (result) {
            _this.feedDetails = result;
            _this.postlist = result.length;
            console.log(_this.feedDetails);
        }, function (error) { return _this.errorMessage = error; });
        console.log(this.errorMessage);
        return this.feedDetails;
    };
    MypreferencesComponent.prototype.onUpdateProfile = function (profile) {
        if (this.profileForm.valid) {
            this.isValid = false;
            this.pform = false;
            this.cbOvc.onUpdateMember(profile).subscribe(function (result) {
                console.log(result);
            });
        }
        else {
            this.isValid = true;
            this.successMessage = "please Enter User Details";
            this.pform = true;
        }
    };
    MypreferencesComponent.prototype.readURL = function (event) {
        var files = this.ele.nativeElement.querySelector('#selectFile').files;
        if (files.length > 0 && files.count != 0 && files != null) {
            var req = files;
            var formData = new FormData();
            var file = files[0];
            this.images = file.name;
            formData.append('selectFile', file, file.name);
            formData.append('avtars', file, file.id);
            console.log(formData);
            console.log(files);
            if (this.images != null && this.images != "") {
                this.profile.avtar_originalname = this.images.toString();
                this.profile.avtar_imgPath = "avtars/" + this.images.toString();
            }
            else {
                this.profile.avtar_imgPath = this.oldImage;
            }
            this.cbOvc.onfileupload(this.id, formData).subscribe(function (res) { return console.log(res); });
            this.cbOvc.onUpdateMember(this.profile).subscribe(function (result) {
                console.log(result);
            });
        }
        this.getMemberByEmail(this.email);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MypreferencesComponent.prototype, "fileInput", void 0);
    MypreferencesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mypreferences',
            template: __webpack_require__("./src/app/mypreferences/mypreferences.component.html"),
            styles: [__webpack_require__("./src/app/mypreferences/mypreferences.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_observable_service__["a" /* ObservableService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], MypreferencesComponent);
    return MypreferencesComponent;
}());



/***/ }),

/***/ "./src/app/privacy/privacy.component.css":
/***/ (function(module, exports) {

module.exports = ".terms_page{ padding: 60px 50px; font-family: 'Raleway', sans-serif;}\r\n.terms_page ul{ list-style: none;}"

/***/ }),

/***/ "./src/app/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid terms_page\">\r\n                <div class=\"container\" style=\"width: 100%\">\r\n                    <div class=\"row\">\r\n\r\n<div>\r\n  <h1>\r\n    PRIVACY POLICY\r\n</h1>\r\n</div>\r\n<div>\r\n  <p>\r\n      Welcome, and thank you for your interest in CelebKonect (“CelebKonect”, “we,” or “us”), our web site at https://www.CelebKonect.com (the “Site”), and all related web sites, downloadable software, mobile applications (including tablet applications), and other services provided by us and on which a link to this Privacy Policy is displayed, and all other communications with individuals through written or oral means, such as email or phone (collectively, together with the Site, our “Service”).\r\n      This Privacy Policy (“Policy”) describes the information that we gather on or through the Service, how we use and disclose such information, and the steps we take to protect such information. By visiting the Site, or by purchasing or using the Service, you accept the privacy practices described in this Policy.\r\n      This Policy is incorporated into, and is subject to, the CelebKonect Terms of Service. Capitalized terms used but not defined in this Policy have the meaning given to them in the CelebKonect Terms of Service.\r\n  </p>\r\n</div>\r\n<div>\r\n  <h4>\r\n      Definitions\r\n  </h4>\r\n <ul>\r\n    <li> Client - means a customer of CelebKonect.</li>\r\n    <li>Client Data - means personal data, reports, addresses, and other files, folders or documents in electronic form that a User of the Service stores within the Service.</li>\r\n    <li>Personal Data - means any information relating to an identified or identifiable natural person.</li> \r\n    <li>Public Area - means the area of the Site that can be accessed both by Users and Visitors, without needing to log in.</li> \r\n    <li>Restricted Area - means the area of the Site that can be accessed only by Users, and where access requires logging in.</li> \r\n    <li> User- means an employee, agent, or representative of a Client, who primarily uses the restricted areas of the Site for the purpose of accessing the Service in such capacity.</li>\r\n    <li> Visitor - means an individual other than a User, who uses the public area, but has no access to the restricted areas of the Site or Service.</li>\r\n </ul>\r\n</div>\r\n<div>\r\n  <h3>\r\n      2. The Information We Collect on the Service:\r\n  </h3>\r\n  <p>\r\n      We collect different types of information from or through the Service. The legal bases for CelebKonect’s processing of personal data are primarily that the processing is necessary for providing the Service in accordance with CelebKonect’s Terms of Service and that the processing is carried out in CelebKonect’s legitimate interests, which are further explained in the section “How We Use the Information We Collect” of this Policy. We may also process data upon your consent, asking for it where appropriate.\r\n  </p>\r\n  <h4>\r\n      2.1 User-provided Information. \r\n  </h4>\r\n  <p>\r\n      When you use the Service, as a User or as a Visitor, you may provide, and we may collect Personal Data. Examples of Personal Data include name, email address, mailing address, mobile phone number, and credit card or other billing information. Personal Data also includes other information, such as geographic area or preferences, when any such information is linked to information that identifies a specific individual. You may provide us with Personal Data in various ways on the Service. For example, when you register for an Account, use the Service, post Client Data, interact with other users of the Service through communication or messaging capabilities, or send us customer service-related requests.\r\n  </p>\r\n  <h4>\r\n      2.2 Information Collected by Clients. \r\n  </h4>\r\n  <p>\r\n      A Client or User may store or upload into the Service Client Data. CelebKonect has no direct relationship with the individuals whose Personal Data it hosts as part of Client Data. Each Client is responsible for providing notice to its customers and third persons concerning the purpose for which a Client collects their Personal Data and how this Personal Data is processed in or through the Service as part of Client Data.\r\n  </p>\r\n  <h4>\r\n      2.3 Automatically Collected Information.</h4>\r\n      <p>\r\n          When a User or Visitor uses the Service, we may automatically record certain information from the User’s or Visitor’s device by using various types of technology, including cookies, “clear gifs\" or “web beacons.” This “automatically collected\" information may include IP address or other device address or ID, web browser and/or device type, the web pages or sites visited just before or just after using the Service, the pages or other content the User or Visitor views or interacts with on the Service, and the dates and times of the visit, access, or use of the Service. We also may use these technologies to collect information regarding a Visitor or User’s interaction with email messages, such as whether the Visitor or User opens, clicks on, or forwards a message. This information is gathered from all Users and Visitors.\r\n      </p>\r\n  \r\n  <h4>\r\n      2.4 Integrated Services. \r\n  </h4>\r\n  <p>\r\n      You may be given the option to access or register for the Service through the use of your user name and passwords for certain services provided by third parties (each, an “Integrated Service”), such as through the use of your Google account, or otherwise have the option to authorize an Integrated Service to provide Personal Data or other information to us. By authorizing us to connect with an Integrated Service, you authorize us to access and store your name, email address(es), date of birth, gender, current city, profile picture URL, and other information that the Integrated Service makes available to us, and to use and disclose it in accordance with this Policy. You should check your privacy settings on each Integrated Service to understand what information that Integrated Service makes available to us, and make changes as appropriate. Please review each Integrated Service’s terms of use and privacy policies carefully before using their services and connecting to our Service.\r\n  </p>\r\n  <h4>\r\n      2.5 Information from Other Sources\r\n  </h4>\r\n  <p>\r\n      We may obtain information, including Personal Data, from third parties and sources other than the Service, such as our partners, advertisers, credit rating agencies, and Integrated Services. If we combine or associate information from other sources with Personal Data that we collect through the Service, we will treat the combined information as Personal Data in accordance with this Policy.\r\n\r\n  </p>\r\n</div>\r\n<div>\r\n  <h3>3. How We Use the Information We Collect</h3>\r\n  <p>\r\n      We use the information that we collect in a variety of ways in providing the Service and operating our business, including the following:\r\n  </p>\r\n  <h4>\r\n      3.1 Operations\r\n  </h4>\r\n  <p>\r\n      We use the information – other than Client Data - to operate, maintain, enhance and provide all features of the Service, to provide the services and information that you request, to respond to comments and questions and to provide support to users of the Service. We process Client Data solely in accordance with the directions provided by the applicable Client or User.\r\n  </p>\r\n  <h4>\r\n      3.2 Improvements\r\n  </h4>\r\n  <p>\r\n      We use the information to understand and analyze the usage trends and preferences of our Visitors and Users, to improve the Service, and to develop new products, services, features, and functionality. Should this purpose require CelebKonect to process Client Data, then the data will only be used in anonymised or aggregated form.\r\n  </p>\r\n  <h4>\r\n      3.3 Communications\r\n  </h4>\r\n  <p>\r\n      We may use a Visitor’s or User’s email address or other information – other than Client Data – to contact that Visitor or User \r\n  </p>\r\n  <ul>\r\n    <li>for administrative purposes such as customer service, to address intellectual property infringement, right of privacy violations or defamation issues related to the Client Data or Personal Data posted on the Service or </li>\r\n    <li>With updates on promotions and events, relating to products and services offered by us and by third parties we work with. You have the ability to opt-out of receiving any promotional communications as described below under “Your Choices.”</li>\r\n    \r\n  </ul>\r\n  <h4>\r\n    3.4 Cookies and Tracking Technologies\r\n\r\n  </h4>\r\n  <p>\r\n      We use automatically collected information and other information collected on the Service through cookies and similar technologies to: \r\n  </p>\r\n  <ul>\r\n    <li>personalize our Service, such as remembering a User’s or Visitor’s information so that \r\n      the User or Visitor will not have to re-enter it during a visit or on subsequent visits; </li>\r\n      <li>\r\n           provide customized advertisements, content, and information; \r\n      </li>\r\n      <li>\r\n           monitor and analyze the effectiveness of Service and third-party marketing activities; \r\n      </li>\r\n      <li>\r\n           monitor aggregate site usage metrics such as total number of visitors and pages viewed; and \r\n      </li>\r\n      <li>\r\n           track your entries, submissions, and status in any promotions or other activities on the Service. You can obtain more information about cookies by visiting http://www.allaboutcookies.org.\r\n      </li>\r\n  </ul>\r\n  <h4>\r\n      3.5 Analytics\r\n  </h4>\r\n  <p>\r\n      We use Google Analytics to measure and evaluate access to and traffic on the Public Area of the Site, and create user navigation reports for our Site administrators. Google operates independently from us and has its own privacy policy, which we strongly suggest you review. Google may use the information collected through Google Analytics to evaluate Users' and Visitors’ activity on our Site. For more information, see Google Analytics Privacy and Data Sharing.\r\n  </p>\r\n  <p>\r\n      We take measures to protect the technical information collected by our use of Google Analytics. The data collected will only be used on a need-to-know basis to resolve technical issues, administer the Site and identify visitor preferences; but in this case, the data will be in non-identifiable form. We do not use any of this information to identify Visitors or Users.\r\n  </p>\r\n    \r\n</div>\r\n<div>\r\n  <h3>\r\n      4. To Whom We Disclose Information\r\n  </h3>\r\n  <p>Except as described in this Policy, we will not intentionally disclose the Personal Data\r\n     or Client Data that we collect or store on the Service to third parties without \r\n      consent of the applicable Visitor, User or Client. We may disclose information to\r\n       third parties if you consent to us doing so, as well as in the following circumstances:</p>\r\n       <h4>\r\n          4.1 Unrestricted Information\r\n       </h4>\r\n       <p>\r\n          Any information that you voluntarily choose to include in a Public Area of the Service, such as a public profile page, will be available to any Visitor or User who has access to that content.\r\n       </p>\r\n       <h4>\r\n          4.2 Service Providers\r\n       </h4>\r\n       <p>\r\n          We work with third party service providers who provide website, application development, hosting, maintenance, and other services for us. These third parties may have access to, or process Personal Data or Client Data as part of providing those services for us. We limit the information provided to these service providers to that which is reasonably necessary for them to perform their functions, and our contracts with them require them to maintain the confidentiality of such information.\r\n       </p>\r\n       <h4>\r\n          4.3 Non-Personally Identifiable Information\r\n       </h4>\r\n       <p>\r\n          We may make certain automatically-collected, aggregated, or otherwise non-personally-identifiable information available to third parties for various purposes, including:\r\n       </p>\r\n       <ul>\r\n         <li>compliance with various reporting obligations; </li>\r\n         <li>for business or marketing purposes; or </li>\r\n         <li> to assist such parties in understanding our Clients’, Users’ and Visitors’ interests, habits, and usage patterns for certain programs, content, services, and/or functionality available through the Service.\r\n          </li>\r\n       </ul>\r\n       <h4>\r\n          4.4 Law Enforcement, Legal Process and Compliance\r\n       </h4>\r\n       <p>\r\n          We may disclose Personal Data or other information if required to do so by law or in the good-faith belief that such action is necessary to comply with applicable laws, in response to a facially valid court order, judicial or other government subpoena or warrant, or to otherwise cooperate with law enforcement or other governmental agencies.\r\n       </p>\r\n       <p>\r\n          We also reserve the right to disclose Personal Data or other information that we believe, in good faith, is appropriate or necessary to:\r\n       </p>\r\n       <ul>\r\n       <li>\r\n           take precautions against liability;\r\n       </li>\r\n       <li>protect ourselves or others from fraudulent, abusive, or unlawful uses or activity;</li>\r\n       <li>\r\n         investigate and defend ourselves against any third-party claims or allegations;\r\n       </li>\r\n       <li>\r\n           protect the security or integrity of the Service and any facilities or equipment used to make the Service available; or\r\n       </li>\r\n       <li>\r\n           protect our property or other legal rights, enforce our contracts, or protect the rights, property, or safety of others.\r\n       </li>\r\n      </ul>\r\n      <h4>\r\n          4.5 Change of Ownership\r\n      </h4>\r\n      <p>\r\n          Information about Users and Visitors, including Personal Data, may be disclosed and otherwise transferred to an acquirer, successor or assignee as part of any merger, acquisition, debt financing, sale of assets, or similar transaction, as well as in the event of an insolvency, bankruptcy, or receivership in which information is transferred to one or more third parties as one of our business assets and only if the recipient of the User or Visitor Data commits to a Privacy Policy that has terms substantially consistent with this Privacy Policy.\r\n      </p>\r\n      <p>\r\n          Client Data may be physically or electronically transferred to an acquirer, or successor or assignee as part of any merger, acquisition, debt financing, sale of assets, or similar transaction, as well as in the event of an insolvency, bankruptcy, or receivership in which information is transferred to one or more third parties as one of our business assets, for the sole purpose of continuing the operation of the Service, and only if the recipient of the Client Data commits to a Privacy Policy that has terms substantially consistent with this Privacy Policy.\r\n\r\n      </p>\r\n</div>\r\n<div>\r\n  <h3>\r\n      5. Your Choices\r\n  </h3>\r\n  <h4>\r\n      5.1 Access, Correction, Deletion\r\n  </h4>\r\n  <p>We respect your privacy rights and provide you with reasonable access to the\r\n     Personal Data that you may have provided through your use of the Services. \r\n     If you wish to access or amend any other Personal Data we hold about you, or to \r\n     request that we delete or transfer any information about you that we have obtained from \r\n     an Integrated Service, you may contact us as set forth in the “How to Contact Us” section.\r\n      At your request, we will have any reference to you deleted or blocked in our database.</p>\r\n      <p>\r\n          We respect your privacy rights and provide you with reasonable access to the Personal Data that you may have provided through your use of the Services. If you wish to access or amend any other Personal Data we hold about you, or to request that we delete or transfer any information about you that we have obtained from an Integrated Service, you may contact us as set forth in the “How to Contact Us” section. At your request, we will have any reference to you deleted or blocked in our database.\r\n      </p>\r\n      <p>\r\n          You may decline to share certain Personal Data with us, in which case we may not be able to provide to you some of the features and functionality of the Service.\r\n      </p>\r\n      <p>\r\n          At any time, you may object to the processing of your Personal Data, on legitimate grounds, except if otherwise permitted by applicable law. \r\n      </p>\r\n      <p>\r\n          If you believe your right to privacy granted by applicable data protection laws has been infringed upon, please contact CelebKonect’s Data Protection Officer at dpo@CelebKonect.com. \r\n      </p>\r\n      <p>\r\n          You also have a right to lodge a complaint with data protection authorities.\r\n      </p>\r\n      <p>\r\n          This provision does not apply to Personal Data that is part of Client Data. In this case, the management of the Client Data is subject to the Client’s own Privacy Policy, and any request for access, correction or deletion should be made to the Client responsible for the uploading and storage of such data into the Service.\r\n      </p>\r\n      <h4>\r\n          5.2 Navigation Information\r\n      </h4>\r\n      <p>\r\n          You may opt out from the collection of navigation information about your visit to the Site by Google Analytics by using the Google Analytics Opt-out feature.\r\n      </p>\r\n      <h4>\r\n          5.3 Opting out from Commercial Communications\r\n      </h4>\r\n      <p>\r\n          If you receive commercial emails from us, you may unsubscribe at any time by following the instructions contained within the email or by sending an email to the address provided in the “How to Contact Us” section.\r\n      </p>\r\n      <p>\r\n          Users are able to view and modify settings relating to the nature and frequency of promotional communications that they receive from us by accessing the “Account functionality” tab on the Service.\r\n      </p>\r\n      <p>\r\n          Please be aware that if you opt-out of receiving commercial email from us or otherwise modify the nature or frequency of promotional communications you receive from us, it may take up to ten (10) business days for us to process your request. Additionally, even after you opt-out from receiving commercial messages from us, you will continue to receive administrative messages from us regarding the Service.\r\n      </p>\r\n      <p>\r\n          CelebKonect has no direct relationship with the Client’s customers or third party whose Personal Data it may process on behalf of a Client. \r\n      </p>\r\n      <p>\r\n          An individual who seeks access, or who seeks to correct, amend, delete inaccurate data or withdraw consent for further contact should direct his or her query to the Client or User they deal with directly. If the Client requests CelebKonect to remove the data, we will respond to its request within thirty (30) days. We will delete, amend or block access to any Personal Data that we are storing only if we receive a written request to do so from the Client who is responsible for such Personal Data, unless we have a legal right to retain such Personal Data. We reserve the right to retain a copy of such data for archiving purposes, or to defend our rights in litigation. Any such request regarding Client Data should be addressed as indicated in the “How to Contact Us” section, and include sufficient information for CelebKonect to identify the Client or its customer or third party and the information to delete or amend.\r\n      </p>\r\n      \r\n</div>\r\n<div>\r\n  <h3>\r\n      6. Third-Party Services\r\n  </h3>\r\n  <p>\r\n      The Service may contain features or links to web sites and services provided by third parties. Any information you provide on third-party sites or services is provided directly to the operators of such services and is subject to those operators’ policies, if any, governing privacy and security, even if accessed through the Service. We are not responsible for the content or privacy and security practices and policies of third-party sites or services to which links or access are provided through the Service. We encourage you to learn about third parties’ privacy and security policies before providing them with information.\r\n  </p>\r\n</div>\r\n<div>\r\n  <h3>\r\n      7. Privacy Shield\r\n  </h3>\r\n  <p>\r\n      CelebKonect’s US entity CelebKonect Inc. complies with the EU-U.S. Privacy Shield Framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal information transferred from the European Union to the United States.  \r\n  </p>\r\n  <p>\r\n      CelebKonect Inc. has certified to the Department of Commerce that it adheres to the Privacy Shield Principles.  If there is any conflict between the terms in this privacy policy and the Privacy Shield Principles, the Privacy Shield Principles shall govern. To learn more about the Privacy Shield program, and to view our certification, please visit https://www.privacyshield.gov/\r\n  </p>\r\n  <p>\r\n        In compliance with the Privacy Shield Principles, CelebKonect commits to resolve complaints about our collection or use of your personal information.  EU individuals with inquiries or complaints regarding our Privacy Shield policy should first contact CelebKonect’s Data Protection Officer at dpo@CelebKonect.com.\r\n  </p>\r\n  <p>\r\n        CelebKonect has further committed to cooperate with the panel established by the EU data protection authorities (DPAs) with regard to unresolved Privacy Shield complaints concerning human resources data transferred from the EU in the context of the employment relationship.\r\n  </p>\r\n  <p>\r\n        In any matters relating to the EU-U.S. Privacy Shield Framework, CelebKonect is subject to the investigatory and enforcement powers of the Federal Trade Commission (FTC).\r\n  </p>\r\n  <p>\r\n        Under certain conditions, more fully described on the Privacy Shield website at https://www.privacyshield.gov/article?id=How-to-Submit-a-Complaint, you may invoke binding arbitration when other dispute resolution procedures have been exhausted.\r\n  </p>\r\n  <p>\r\n        CelebKonect shall comply with the Privacy Shield Principles for all onward transfers of personal data from the EU, including the onward transfer liability provisions.\r\n  </p>\r\n</div>\r\n<div>\r\n    <h3>\r\n            8. Australian Privacy Principles or APPs\r\n    </h3>\r\n    <p>\r\n            We will not share any Personal Data with third-parties for their direct marketing purposes to the extent prohibited by Australian law as well. If our practices change, we will do so in accordance with applicable laws and will notify you in advance.\r\n    </p>\r\n    <p>\r\n            We refer you to the Office of Australian Information Commissioner website:\r\n    </p>\r\n    <p>\r\n            See www.oaic.gov.au;\r\n    </p>\r\n    \r\n\r\n    <ul>\r\n        <li>\r\n                APP 1 — Open and transparent management of personal information\r\n        </li>\r\n        <li>\r\n                APP 2 — Anonymity and pseudonymity\r\n        </li>\r\n        <li>\r\n                APP 3 — Collection of solicited personal information\r\n        </li>\r\n        <li>\r\n                APP 4 — Dealing with unsolicited personal information\r\n        </li>\r\n        <li>\r\nAPP 5 — Notification of the collection of personal </li>\r\n              <li> APP 6 — Use or disclosure of personal information</li> \r\n             <li>APP 7 — Direct marketing</li>   \r\n         \r\n        <li>APP 8 — Cross-border disclosure of personal information</li> \r\n       <li> APP 9 — Adoption, use or disclosure of government related identifiers</li>\r\n            <li>    APP 10 — Quality of personal information</li>\r\n             <li>   APP 11 — Security of personal information</li>\r\n                <li>APP 12 — Access to personal information</li>\r\n               <li> APP 13 — Correction of personal information</li>\r\n                \r\n        \r\n    </ul>\r\n</div>\r\n<div>\r\n    <h3>\r\n            9. Interest Based Advertising\r\n    </h3>\r\n    <p>\r\n            Interest based advertising is the collection of data from different sources and across different platforms in order to predict an individual’s preferences or interest and to deliver to that individual, or his/her computer, smart phone or tablet, advertising based on his/her assumed preference or interest inferred from the collection of data pertaining to that individual or others who may have a similar profile or similar interests.\r\n    </p>\r\n    <p>\r\n            We work with a variety of third parties to attempt to understand the profiles of the individuals who are most likely to be interested in the CelebKonect products or services so that we can send them promotional emails, or serve our advertisements to them on the websites and mobile apps of other entities.\r\n    </p>\r\n    <p>\r\n            These third parties include: \r\n    </p>\r\n    <ul>\r\n        <li>\r\n                Advertising networks, which collect information about a person’s interests when that person views or interacts with one of their advertisements; \r\n        </li>\r\n        <li>\r\n                Attribution partners, which measure the effectiveness of certain advertisements; and \r\n        </li>\r\n        <li>\r\n                Business partners, which collect information when a person views or interacts with one of their advertisements.\r\n        </li>\r\n       \r\n    </ul>\r\n    <p>\r\n            In collaboration with these third parties, we collect information about our customers, prospects and other individuals over time and across different platforms when they use these platforms or interact with them. Individuals may submit information directly on our Sites or on platforms run by third parties, or by interacting with us, our advertisements, or emails they receive from us or from third parties. We may use special tools that are commonly used for this purpose, such as cookies, beacons, pixels, tags, mobile advertising IDs, flash cookies, and similar technologies. We may have access to databases of information collected by our business partners.\r\n    </p>\r\n    <p>\r\n            The information we or third parties collect enables us to learn what purchases the person made, what ads or content the person sees, on which ads or links the person clicks, and other actions that the person takes on our Sites, or in response to our emails, or when visiting or using third parties’ platforms.\r\n    </p>\r\n    <p>\r\n            We, or the third parties with which we work, use the information collected as described above to understand the various activities and behaviours of our customers, Site visitors and others. We, or these third parties, do this for many reasons, including: \r\n    </p>\r\n    <ul>\r\n        <li>\r\n                to recognize new or past visitors to our Sites; \r\n        </li>\r\n        <li>\r\n                 to present more personalized content; to provide more useful and relevant ads - for example, if we know what ads you are shown we can try not to show you the same ones repeatedly; \r\n        </li>\r\n        <li>\r\n             to identify visitors across devices, sales channels, third party websites and Sites, or \r\n        </li>\r\n        <li>\r\n                 to display or send personalized or targeted ads and other custom content that is more focused on a person’s perceived interest in products or services similar to those that we offer.\r\n        </li>\r\n    </ul>\r\n    <p>\r\n            Our interest-based ads may be served to you in emails or on third-party platforms. We may serve these ads about our products or services or send commercial communications directly ourselves or through these third parties.\r\n    </p>\r\n    <p>\r\n            Visitors may opt out of receiving interest-based advertising by advertising networks that may be delivered to them on our platform and other websites by visiting the following websites: \r\n    </p>\r\n\r\n\r\n    <ul>\r\n        <li>\r\n                 http://www.aboutads.info/consumers; and \r\n   \r\n        </li>\r\n        <li>\r\n                 http://www.networkadvertising.org. \r\n        </li>\r\n    </ul>\r\n    <p>\r\n            These features will opt a Visitor out of many – but not all - of the interest-based advertising activities in which we or third parties engage.\r\n    </p>\r\n</div>\r\n<div>\r\n    <h3>\r\n        10. Do Not Track Policy</h3>\r\n        <p>\r\n         Australia law requires that operators of websites and online services disclose how they respond to a Do Not Track signal. Some browsers have incorporated “Do Not Track” features. Most of these features, when turned on, send a signal or preference to the website or online service that a user visits, indicating that the user does not wish to be tracked. \r\n        </p>\r\n        <p>\r\n                Because there is not yet a common understanding of how to interpret Do Not Track signals, we do not currently respond to Do Not Track signal. We continue to work with the online industry to define a common understanding of how to treat Do Not Track signals.\r\n        </p>\r\n        <p>\r\n                In the meantime, you may opt out of receiving interest based advertising from advertising networks that may be delivered on our platform and other websites by visiting the following websites. \r\n        </p>\r\n        <p>\r\n                If you want to opt out of this online behavioural advertising, visit the following sites: http://www.aboutads.info/consumers and http://www.networkadvertising.org.\r\n        </p>\r\n        <p>\r\n                This will opt you out of many – but not all - of the interest-based advertising activities in which we or third parties engage. Choices you make may be browser and device specific. If you delete your cookies or use a different browser or a different computer or device, you may need to update your opt-out choices. Other third-party Sites provide visitors with the ability to opt-out of receiving interest-based ads on their Sites that you need to control through your settings on that Site. For example, to opt out of Google’s use of your online behaviour for advertising purposes, visit Google’s Ad Settings page.\r\n        </p>\r\n</div>\r\n<div>\r\n    <h3>\r\n            11. Third Party Cookies\r\n    </h3>\r\n    <p>\r\n            Australia law requires that operators of websites and online services disclose whether other third parties may collect personally identifiable information about an individual's online activities from their site or service. We allow third parties with which we have a separate agreement to use cookies and other technologies to collect information about your use of the Site. \r\n    </p>\r\n    <p>\r\n            These third parties include:\r\n    </p>\r\n    <ul>\r\n        <li>\r\n                business partners, which collect information when you view or interact with one of their advertisements on the Site; and \r\n        </li>\r\n        <li>\r\n                Advertising networks, which collect information about your interests when you view or interact with one of their advertisements.\r\n        </li>\r\n       \r\n    </ul>\r\n    <p>\r\n            The information gathered by these third parties is used to make predictions about your interests or preferences so that they can display advertisements or promotional material on this Site and on other sites across the Internet tailored to your apparent interests.\r\n    </p>\r\n    <p>\r\n            The business partners and advertising networks that serve interest-based advertisements on the Services have limited access to a small amount of information about your profile and your device, which is necessary to serve you advertisements that are tailored to your apparent interests. It is possible that they may reuse this small amount of information on other sites or services. \r\n    </p>\r\n    <p>\r\n            We do not share with these third parties any information that would readily identify you (such as email address); however, these third parties may have access to information about your device (such as IP or MAC address). \r\n    </p>\r\n    <p>\r\n            We do not have access to, or control over, the technologies that these third parties may use to collect information about your interests, and the information practices of these third parties are not covered by this Privacy Notice. Other than as discussed in this document, we have no control over these third parties.\r\n\r\n    </p>\r\n    <h4>\r\n            11.1 The Following Types of Cookies Are Used in the Site:\r\n    </h4>\r\n    <p>\r\n            Strictly necessary/essential cookies - These cookies are essential in order to enable you to move around the website and use its features, such as accessing secure areas of the website. Without these cookies services you have asked for cannot be provided. These cookies don’t collect information that identifies a visitor.\r\n    </p>\r\n    <h5> Performance cookies -</h5>\r\n    <p>\r\n            These cookies collect information about how visitors use a website, for instance which pages visitors go to most often, and if they get error messages from web pages. These cookies don’t collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous. It is only used to improve how a website works.\r\n    </p>\r\n    <h5>\r\n            Functionality cookies -\r\n    </h5>\r\n    <p>\r\n            These cookies allow the website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features. For instance, a website may be able to provide you with local weather reports or traffic news by storing in a cookie the region in which you are currently located. \r\n    </p>\r\n    <p>\r\n            These cookies can also be used to remember changes you have made to text size, fonts and other parts of web pages that you can customise. They may also be used to provide services you have asked for such as watching a video or commenting on a blog. The information these cookies collect may be anonymised and they cannot track your browsing activity on other websites.\r\n    </p>\r\n    <p>\r\n            Behaviourally targeted advertising cookies - These cookies are used to deliver adverts more relevant to you and your interests, they are also used to limit the number of times you see an\r\n    </p>\r\n    <p>\r\n            The Service is not intended to be used by minors, and is not intended to be used to post content to share publicly or with friends. To the extent that a minor has posted such content on the Service, the minor has the right to have this content deleted or removed using the deletion or removal options detailed in this Privacy Policy. If you have any question regarding this topic, please contact us as indicated in the “How to Contact Us” section. Please be aware that, although we offer this deletion capability, the removal of content may not ensure complete or comprehensive removal of that content or information.\r\n\r\n    </p>\r\n</div>\r\n<div>\r\n    <h3>\r\n            12. Data Security\r\n    </h3>\r\n    <p>\r\n            We follow generally accepted industry standards to protect the information submitted to us, both during transmission and once we receive it. We maintain appropriate administrative, technical and physical safeguards to protect Personal Data against accidental or unlawful destruction, accidental loss, unauthorized alteration, unauthorized disclosure or access, misuse, and any other unlawful form of processing of the Personal Data in our possession. \r\n    </p>\r\n    <p>\r\n            This includes, for example, firewalls, password protection and other access and authentication controls. We use SSL technology to encrypt data during transmission through public internet, and we also employ application-layer security features to further anonymize Personal Data.\r\n    </p>\r\n    <p>\r\n            However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. We cannot ensure or warrant the security of any information you transmit to us or store on the Service, and you do so at your own risk. We also cannot guarantee that such information may not be accessed, disclosed, altered, or destroyed by breach of any of our physical, technical, or managerial safeguards. If you believe your Personal Data has been compromised, please contact us as set forth in the “How to Contact Us” section.\r\n    </p>\r\n    <p>\r\n            If we learn of a security systems breach, we will inform you and the authorities of the occurrence of the breach in accordance with applicable law.\r\n\r\n    </p>\r\n\r\n</div>\r\n<div>\r\n    <h3>\r\n            13. Data Retention\r\n    </h3>\r\n    <p>\r\n            We only retain the Personal Data collected from a User for as long as the User’s account is active or otherwise for a limited period of time as long as we need it to fulfil the purposes for which we have initially collected it, unless otherwise required by law. We will retain and use information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements as follows:\r\n    </p>\r\n    <p>\r\n            the contents of closed accounts are deleted within 3 months of the date of closure;\r\n    </p>\r\n   <ul>\r\n       <li>\r\n             backups are kept for 3 months; \r\n       </li>\r\n       <li>\r\n            billing information is retained for a period of 7 years as of their provision to CelebKonect in accordance with the Australian accounting and taxation laws information on legal transactions between Client and CelebKonect is retained for a period of 10 years as of their provision to CelebKonect in accordance with the general limitation period set for civil claims in the Australian General Part of the Civil Code Act\r\n       </li>\r\n   </ul>\r\n</div>\r\n<div>\r\n    <h3>\r\n            14. Settings\r\n    </h3>\r\n    <p>\r\n            Although we may allow you to adjust your privacy settings to limit access to certain Personal Data, please be aware that no security measures are perfect or impenetrable. We are not responsible for circumvention of any privacy settings or security measures on the Service.   \r\n    </p>\r\n    <p>\r\n            Additionally, we cannot control the actions of other users with whom you may choose to share your information. Further, even after information posted on the Service is removed, caching and archiving services may have saved that information, and other users or third parties may have copied or stored the information available on the Service. \r\n    </p>\r\n    <p>\r\n            We cannot and do not guarantee that information you post on or transmit to the Service will not be viewed by unauthorized persons.\r\n\r\n    </p>\r\n</div>\r\n<div>\r\n    <h3>\r\n            15. Data Transfer\r\n\r\n    </h3>\r\n    <p>\r\n            We may transfer, process and store Personal Data we collect through the Services in centralized databases and with service providers located in Hyderabad, India When we transfer Personal Data to any other centre., we will protect it as described in this Privacy Policy.\r\n    </p>\r\n    <p>\r\n            The Service is currently hosted from Hyderabad, India development centre and any info further to be provided for storage and processing by our service providers listed in the CelebKonect Terms of Service. \r\n    </p>\r\n    <p>\r\n            We will comply with GDPR requirements providing adequate protection for the transfer of personal information from Europe to the U.S. Also, we may transfer your data to the U.S., the EEA, or other countries or regions deemed by the European Commission to provide adequate protection of personal data in connection with storage and processing of data, fulfilling your requests, and operating the Service.\r\n    </p>\r\n    <p>\r\n            For Clients and Users subject to the jurisdiction of Germany, additional terms apply. If you are based in Germany and need these additional terms separately signed, please contact CelebKonect support.\r\n\r\n    </p>\r\n</div>\r\n<div>\r\n    <h3>\r\n            16. Data Controller and Data Processor\r\n    </h3>\r\n    <p>\r\n            CelebKonect does not own, control or direct the use of any of the Client Data stored or processed by a Client or User via the Service. Only the Client or Users are entitled to access, retrieve and direct the use of such Client Data. CelebKonect is largely unaware of what Client Data is actually being stored or made available by a Client or User to the Service and does not directly access such Client Data except as authorized by the Client, or as necessary to provide Services to the Client and its Users.\r\n    </p>\r\n    <p>\r\n            Because CelebKonect does not collect or determine the use of any Personal Data contained in the Client Data and because it does not determine the purposes for which such Personal Data is collected, the means of collecting such Personal Data, or the uses of such Personal Data, CelebKonect is not acting in the capacity of data controller in terms of the European Union’s General Data Protection Regulation (Regulation (EU) 2016/679, hereinafter “GDPR”)  and does not have the associated responsibilities under the GDPR. \r\n    </p>\r\n    <p>\r\n            CelebKonect should be considered only as a processor on behalf of its Clients and Users as to any Client Data containing Personal Data that is subject to the requirements of the GDPR. Except as provided in this Privacy Policy, CelebKonect does not independently cause Client Data containing Personal Data stored in connection with the Services to be transferred or otherwise made available to third parties, except to third party subcontractors who may process such data on behalf of CelebKonect in connection with CelebKonect’s provision of Services to Clients. Such actions are performed or authorized only by the applicable Client or User.\r\n    </p>\r\n    <p>\r\n            The Client or the User is the data controller under the Regulation for any Client Data containing Personal Data, meaning that such party controls the manner such Personal Data is collected and used as well as the determination of the purposes and means of the processing of such Personal Data.\r\n    </p>\r\n    <p>\r\n            CelebKonect is not responsible for the content of the Personal Data contained in the Client Data or other information stored on its servers (or its subcontractors’ servers) at the discretion of the Client or User nor is CelebKonect responsible for the manner in which the Client or User collects, handles disclosure, distributes or otherwise processes such information.\r\n    </p>\r\n</div>\r\n<div>\r\n    <h3>\r\n            17. Changes and Updates to this Policy\r\n    </h3>\r\n    <p>\r\n            Please revisit this page periodically to stay aware of any changes to this Policy, which we may update from time to time. If we modify the Policy, we will make it available through the Service, and indicate the date of the latest revision, and will comply with applicable law. Your continued use of the Service after the revised Policy has become effective indicates that you have read, understood and agreed to the current version of the Policy.\r\n    </p>\r\n   \r\n</div>\r\n<div>\r\n    <h3>\r\n            18. How to Contact Us\r\n    </h3>\r\n    <p>\r\n            Please contact us with any questions or comments about this Policy, your Personal Data, our use and disclosure practices, or your consent choices by email at privacy@CelebKonect.com. If you have any concerns or complaints about this Policy or your Personal Data, you may contact CelebKonect’s Data Protection Officer by email at dpo@CelebKonect.com.\r\n    </p>\r\n    \r\n</div>\r\n\r\n\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'privacypolicy',
            template: __webpack_require__("./src/app/privacy/privacy.component.html"),
            styles: [__webpack_require__("./src/app/privacy/privacy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".profpage{ background-size: cover; background-repeat: no-repeat; padding: 60px 0px;\r\n    overflow: hidden; position: relative; font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.inner_pages_wrap{ padding: 60px 0px; font-family: 'Raleway', sans-serif;}\r\n\r\n.lftnav_wrap{ list-style: none; padding: 0px 0px 50px 0px; margin: 0px; background-color: #fff;\r\n    -webkit-box-shadow:0px 0px 30px #ddd; -ms-box-shadow:0px 0px 30px #ddd;\r\n    box-shadow:0px 0px 30px #ddd;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.lftnav_wrap li{ font-size: 14px; border-bottom: 1px solid #ddd;}\r\n\r\n.lftnav_wrap li a{ display: block; padding: 15px 20px; \r\n    -webkit-transition: 0.3s ease-in-out;\r\n    transition: 0.3s ease-in-out; cursor: pointer;\r\n}\r\n\r\n.lftnav_wrap li a:hover{ background-color: #259dd0; color: #fff;}\r\n\r\n.pad_bot{ padding-bottom: 20px;}\r\n\r\n.spons_cont{ font-size: 18px;}\r\n\r\n.cbhdng{ font-size:14px; font-weight:400;}\r\n\r\n.prof_active{ background-color: #259dd0; color: #fff;}\r\n\r\n.bc_btn{ width: 100%; display: block; background-color: #259dd0; color: #fff; text-align: center; font-size:16px; border-radius:36px; margin: 40px auto; height: 50px;\r\n       font-weight:600;\r\n}\r\n\r\n.bc_btn > img{ position: relative; width: 24px; top: -3px; left: -4px;}\r\n\r\n/*profile page css*/\r\n\r\n.cvrwrap{ position: relative;}\r\n\r\n.profile_wrapper{ padding: 0px; margin: 0px; position: relative; width: 100%;}\r\n\r\n.c_page{ position: relative;}\r\n\r\n.title_mask{ padding: 0px 0px; background-color: rgba(0,0,0,0.5); position: absolute; bottom: 0; width: 90%;\r\n     z-index: 10; right: 0; margin: 0px; padding-left: 150px; list-style: none;\r\n}\r\n\r\n.title_mask li{ float: left; color: #fff; padding: 10px 80px 10px 0;}\r\n\r\n.big{ display: block; font-size: 25px; font-weight:600; text-transform: uppercase; padding: 0px; margin: 0px; line-height: 1.5;}\r\n\r\n.title_mask li > small{ font-size:14px;}\r\n\r\n.profile_manager{ position: absolute; left: 40px; bottom: -80px;  z-index: 15;\r\n}\r\n\r\n.profile_box{ width: 150px; height: 150px; border-radius:100%; \r\n    background-color: #fff; z-index: 20; overflow: hidden; border: 1px solid #ccc;\r\n    -webkit-box-shadow: 0px 0px 30px #666; -ms-box-shadow: 0px 0px 30px #666; box-shadow: 0px 0px 30px #666;\r\n}\r\n\r\n.profile_edit{ color: #000; font-size:14px; text-align: center; position: relative; top: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile_info{ padding-left: 200px;}\r\n\r\n.profile_info ul{ list-style: none; padding: 30px 0px 30px 0px; margin: 0px;}\r\n\r\n.profile_info ul li{ float: left; width: 25%;}\r\n\r\n.profile_info ul li span{ text-transform: uppercase; color: #666; font-size:14px; font-weight:400; display: block;}\r\n\r\n.profile_info ul li p{ text-transform: capitalize; color: #000; font-size:16px; font-weight:600;}\r\n\r\n.flw_btn{  background-color: #259dd0; color: #fff; text-align: center; font-size:16px; border-radius:0px; margin: 0px auto; height: 40px;\r\n    -webkit-box-shadow: 0px 3px 0px #1c262a; -ms-box-shadow: 0px 3px 0px #1c262a;\r\nbox-shadow: 0px 3px 0px #1c262a; font-weight:600; padding: 0 20px; float: right;border-radius: 2px;\r\n}\r\n\r\n.profile_tabs{ border-top:1px solid #ddd; border-bottom: 1px solid #ddd; list-style: none;}\r\n\r\n.tabs_header{ list-style: none; padding: 0px; margin: 0px;}\r\n\r\n.tabs_header li{ float: left; padding: 15px 8%; float: left; font-size:18px; font-weight:600; cursor: pointer;}\r\n\r\n.mytabicn{ font-size: 1.2rem; position: relative; top: 2px;}\r\n\r\n.prof_infodata,.prof_feedsdata,.prof_media{ padding: 30px 85px;}\r\n\r\n.prof_infodata h3{ font-size: 16px; font-weight:600; color: #000; padding-bottom: 10px; margin: 0px;}\r\n\r\n.prof_infodata p{ font-size: 14px; font-weight:400; color: #444; padding-bottom: 20px; line-height: 25px; margin: 0px;}\r\n\r\n.ptab_active2{ color: #000;}\r\n\r\n.ptab_active{ color: #fff; background-color: #259dd0;}\r\n\r\n.prof_infodata > h3{ display:block; width:100%;}\r\n\r\n.membername {margin-left: 14px;cursor: pointer;}\r\n\r\n.card-title, .card-text {padding-left: 1rem !important;}\r\n\r\n.img-fluid1 { width: auto;}\r\n\r\n.cardspace{ padding: 30px 20px;}\r\n\r\n.feed_bg{ max-width: auto; max-width: 100%; padding: 30px!important; overflow: hidden;}\r\n\r\n.space_imng{ margin-bottom: 25px!important;}\r\n\r\n.mycard_space{ margin-bottom: 25px;}\r\n\r\n#mymedias{ margin-top: 30px;}\r\n\r\n.mybgspacer{ position: relative; border: 3px solid #fff; padding:10px 10px; min-height: 180px; overflow: hidden; }\r\n\r\n.disable_btn{ cursor:not-allowed;}\r\n\r\n.update_profileform{ padding:30px; -webkit-box-shadow:0px 0px 60px #ccc; -ms-box-shadow:0px 0px 60px #ccc;\r\n                     box-shadow:0px 0px 60px #ccc; background-color:#fff; border:1px solid #ddd; margin-bottom:0px;\r\n                      -webkit-transition: 0.3s ease-in-out;\r\n              transition: 0.3s ease-in-out;          \r\n}\r\n\r\n.show_updpform{   margin-bottom:50px;}\r\n\r\n.lg_email {\r\n  border: none;\r\n  border-radius: 0px;\r\n  border-bottom: 1px solid #ccc;\r\n  outline: none;\r\n  box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  font-size: 12px;\r\n  -webkit-transition: 0.3s ease-in-out;\r\n  transition: 0.3s ease-in-out;\r\n  position: relative;\r\n  padding: 0 0 5px 0px;\r\n}\r\n\r\n.lg_email:focus {\r\n    border-color: #259dd0;\r\n    color: #259dd0;\r\n  }\r\n\r\n.lg_email::-webkit-input-placeholder {\r\n    color: #ccc;\r\n  }\r\n\r\n.embx {\r\n  position: relative;\r\n}\r\n\r\n.usicn {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 5px;\r\n  z-index: 10;\r\n  color: #ccc;\r\n}\r\n\r\n.lg_email:focus .usicn {\r\n  color: #259dd0 !important;\r\n}\r\n\r\n.embx > label {\r\n  color: #ccc;\r\n  font-size: 12px;\r\n}\r\n\r\n.embx2 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.lgnbtner {\r\n  float: right;\r\n  background-color: #259dd0;\r\n  border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.chk_box {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding-left: 30px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 13px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  color: #ccc;\r\n}\r\n\r\n.chk_box input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 16px;\r\n  width: 16px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.chk_box:hover input ~ .checkmark {\r\n  background-color: #fff;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark {\r\n  background-color: #259dd0;\r\n  border-color: #259dd0;\r\n}\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n.chk_box .checkmark:after {\r\n  left: 6px;\r\n  top: 3px;\r\n  width: 4px;\r\n  height: 7px;\r\n  border: solid white;\r\n  border-width: 0 2px 2px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.fgp {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  left: 0;\r\n  padding: 12px 50px;\r\n  font-size: 13px;\r\n}\r\n\r\n.signup_hdng {\r\n  color: #259dd0;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.hp_blk {\r\n  list-style: none;\r\n  font-size: 12px;\r\n}\r\n\r\n.lgn_hdng {\r\n  color: #000;\r\n  font-weight: 300;\r\n  font-size: 20px;\r\n  text-transform: uppercase;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.date_field{ margin-top:12px!important;}\r\n\r\n.error_mes{ color:red;}\r\n\r\n.image-upload > input {\r\n  display: none;\r\n}\r\n\r\n.image-upload {\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 100%;\r\n  background-color: #fff;\r\n  z-index: 20;\r\n  overflow: hidden;\r\n  border: 1px solid #ccc;\r\n  -webkit-box-shadow: 0px 0px 30px #666;\r\n  -ms-box-shadow: 0px 0px 30px #666;\r\n  box-shadow: 0px 0px 30px #666;\r\n}\r\n\r\n.img_boxer{ overflow: hidden; padding:0 0 75% 0; position: relative;}\r\n\r\n.bpc{ width: 100%; height: 100%; position: absolute; top: 0;}\r\n\r\n.pfimger{ width:150px; height:150px;}\r\n\r\n.upd_btn{\r\n  font-weight:600; background-color: #259dd0;\r\n  border-radius:36px; padding-left: 30px; padding-right: 30px;\r\n}\r\n\r\n.media_bg{ position: absolute; top: 50%; left: 50%; width: 100%; height: 100%;\r\n  -webkit-transform: translate(-50%, -50%); -mos-transform: translate(-50%, -50%); transform: translate(-50%, -50%);\r\n}\r\n\r\n.img_container{ position: relative;  padding:0 0 70% 0; overflow: hidden; margin-bottom: 30px; }\r\n\r\n.img_container > img{ width: 100%; position: absolute; }\r\n\r\n/*Responsive code */\r\n\r\n@media screen and (max-width: 990px){\r\n  .myresp_cont{ max-width: 100%;}\r\n  .title_mask{ width: 100%; padding-left: 120px;}\r\n  .profile_manager{ left: 10px;}\r\n  .image-upload{ width: 80px; height: 80px;}\r\n  .bc_btn{ font-size:12px;}\r\n}\r\n\r\n@media screen and (max-width: 767px){\r\n  .profile_info{ display: none;}\r\n  .profile_tabs{ margin-top:90px;}\r\n  .title_mask > li{ padding-right: 50px;}\r\n  .bc_btn{ font-size:14px;}\r\n  .inner_pages_wrap{ padding: 40px 0px;}\r\n  \r\n  \r\n}\r\n\r\n@media screen and (max-width: 660px){\r\n  .tabs_header > li{ font-size: 12px;}\r\n  .mytabicn{  font-size: 1rem;}\r\n\r\n  .prof_infodata, .prof_feedsdata, .prof_media {\r\n    padding: 30px 10px 0px 10px;\r\n}\r\n.celeb_logo{ width:80px;}\r\n.prof_infodata h3{ font-size:13px;}\r\n.prof_infodata p{ font-size: 12px;}\r\n\r\n}\r\n\r\n@media screen and (max-width: 480px){\r\n  .title_mask > li{ padding-right: 10px; font-size: 12px;}\r\n  .image-upload{ width: 60px; height: 60px;}\r\n  .profile_manager{ left: 10px; bottom: -64px;}\r\n  .title_mask{ padding-left: 90px;}\r\n  .tabs_header > li{  padding: 15px 5%;}\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid profpage\" [style.background-image]=\"'url(\\'assets/images/land_bg.jpg\\')'\">\r\n  <div class=\"container myresp_cont\">\r\n   \r\n    \r\n  </div>\r\n</div>\r\n\r\n<!--video container ends-->\r\n\r\n\r\n\r\n<div class=\"container-fluid inner_pages_wrap\">\r\n  <div class=\"container myresp_cont\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-sm-12 col-md-3 col-lg-3\">\r\n        <ul class=\"lftnav_wrap\">\r\n          <li class=\"prof_active\"><a (click)=\"profilePage()\"><i class=\"far fa-user-circle\"></i> My Profile</a></li>\r\n          <li><a (click)=\"celebPage()\"><i class=\"far fa-star\"></i> My Celebrities</a></li>\r\n          <li><a (click)=\"transactionPage()\"><i class=\"far fa-money-bill-alt\"></i> My Transactions</a></li>\r\n          <!-- <li><a (click)=\"preferencePage()\"><i class=\"far fa-money-bill-alt\"></i> My Preferences</a></li> -->\r\n        </ul>\r\n\r\n        <div [ngClass]=\"messageClass\">{{message}}</div>\r\n        <button type=\"button\" id=\"bcbtn\" class=\"btn btn-default bc_btn\" (click)=\"createCelebRequest(profile._id)\">\r\n          <img src=\"assets/images/king.png\" alt=\"Celebrity\" title=\"Celebrity\">Become a Celebrity</button>\r\n      </div>\r\n      <!--left side nav ends-->\r\n\r\n      <div class=\"col-12 col-sm-12 col-md-9 col-lg-9\">\r\n        <div class=\"cvrwrap\">\r\n            <div class=\"profile_wrapper\">\r\n              <img src=\"assets/images/coverpage.jpg\" class=\"c_page\" width=\"100%\" alt=\"coverpage\" title=\"coverpage\">\r\n              <ul class=\"title_mask\">\r\n                <li>\r\n                  <span class=\"big\">{{memPreferences.followers}}</span>\r\n                  <small>Followers</small>\r\n                </li>\r\n\r\n                <li>\r\n                  <span class=\"big\">{{memPreferences.fans}}</span>\r\n                  <small>Following</small>\r\n                </li>\r\n\r\n                <li>\r\n                  <span class=\"big\">{{memPreferences.posts}}</span>\r\n                  <small>Posts</small>\r\n                </li>\r\n              </ul>\r\n\r\n              <div class=\"profile_manager\">\r\n                <!--<div class=\"profile_box\">\r\n                <img src=\"{{imageUrl+profile.avtar_imgPath}}\" class=\"act_bg\" width=\"100%\" alt=\"{{profile.name}}\" title=\"{{profile.name}}\">\r\n                </div>-->\r\n\r\n                <div class=\"image-upload\">\r\n                  <div class=\"img_boxer\">\r\n                    <!--<form [formGroup]=\"formProfile\" enctype=\"multipart/form-data\" method=\"post\" name=\"fileinfo\">-->\r\n                    <label for=\"selectFile\">\r\n                      <img src=\"{{imageUrl+profile.avtar_imgPath}}\" width=\"100%\"  class=\"bpc\"/>\r\n                      <img *ngIf=\"profile.avtar_imgPath==''\"  src=\"assets/images/profile_pic.jpg\" width=\"100%\" alt=\"{{profile.name}}\" title=\"{{profile.name}}\" />\r\n                    </label>\r\n                    <input type=\"file\" id=\"selectFile\" (change)=\"readURL($event)\" name=\"selectFile\" class=\"form-group\" />\r\n\r\n                    <!--<input type=\"file\" id=\"file-input\" (change)=\"readURL($event)\" />-->\r\n                    <!--</form>-->\r\n                  </div>\r\n                </div>\r\n\r\n                  <p class=\"profile_edit\" (click)=\"openPform(profile._id)\"><i class=\"fas fa-pencil-alt\"></i> Edit</p>\r\n              </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"profile_info\">\r\n          <ul>\r\n            <li>\r\n              <span>Name</span>\r\n              <p>{{profile.name}}</p>\r\n          </li>\r\n          <li>\r\n              <span>Occupation</span>\r\n              <p>{{profile.profession}} </p>\r\n          </li>\r\n          <li>\r\n              <span>Country</span>\r\n              <p>{{profile.country}}</p>\r\n          </li>\r\n          <!--<li>\r\n              <button type=\"button\" class=\"btn btn-default flw_btn\">Follow</button>\r\n          </li>-->\r\n          <div class=\"clearfix\"></div>\r\n          </ul>\r\n        </div>\r\n\r\n\r\n        <!-- profile update form here-->\r\n\r\n        <div>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-12 update_profileform\" *ngIf=\"pform\" id=\"pf\">\r\n\r\n          <form [formGroup]=\"profileForm\" (ngSubmit)=\"onUpdateProfile(profile)\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"name\">First Name</label>\r\n\r\n\r\n                <input type=\"text\" [(ngModel)]=\"profile.name\" class=\"form-control lg_email reg_email\" id=\"profile.name\" placeholder=\"First Name\" formControlName=\"profile.name\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"lastname\">Last Name</label>\r\n                <input type=\"text\" [(ngModel)]=\"profile.lastName\" class=\"form-control lg_email reg_email\" id=\"profile.lastName\" placeholder=\"Last Name\" formControlName=\"profile.lastName\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"mobileNumber\">Phone</label>\r\n                <input type=\"number\" [(ngModel)]=\"profile.mobileNumber\" class=\"form-control lg_email reg_email\" id=\"profile.mobileNumber\" placeholder=\"Mobile Number\" formControlName=\"profile.mobileNumber\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" [(ngModel)]=\"profile.email\" class=\"form-control lg_email reg_email\" id=\"email\" placeholder=\"profile.email\" formControlName=\"profile.email\">\r\n              </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-row\">\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"gender\">Gender</label>\r\n                <select id=\"profile.gender\" [(ngModel)]=\"profile.gender\" class=\"form-control lg_email reg_email\" formControlName=\"profile.gender\">\r\n\r\n                  <option value=\"Male\" selected>Male</option>\r\n                  <option value=\"Female\">Female</option>\r\n                  <option value=\"Others\">Others</option>\r\n                </select>\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"dateOfBirth\">Date of Birth</label>\r\n                <input type=\"date\" [(ngModel)]=\"profile.dateOfBirth\" class=\"form-control lg_email reg_email date_field\" id=\"profile.dateOfBirth\" formControlName=\"profile.dateOfBirth\" />\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"location\">Location</label>\r\n                <input type=\"text\" [(ngModel)]=\"profile.location\" class=\"form-control lg_email reg_email\" id=\"profile.location\" placeholder=\"Location\" formControlName=\"profile.location\">\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"about\">About</label>\r\n                <input type=\"text\" [(ngModel)]=\"profile.aboutMe\" class=\"form-control  lg_email reg_email\" id=\"profile.aboutMe\" placeholder=\"About Me\" formControlName=\"profile.aboutMe\">\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n           \r\n\r\n            <div *ngIf=\"isValid\">\r\n              <p class=\"error_mes\">{{successMessage}}</p>\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary upd_btn\">Update Profile </button>\r\n            <button type=\"button\" class=\"btn btn-primary upd_btn\" (click)=\"closePform()\">Close </button>\r\n\r\n          </form>\r\n\r\n        </div>\r\n        <!--profile update form ends here-->\r\n\r\n\r\n\r\n        <!--tabs for profile feeds starts-->\r\n        <div class=\"profile_tabs\">\r\n            <ul class=\"tabs_header\">\r\n              <li id=\"infoT\" (click)=\"showProfileTabs('infoT', $event)\" class=\"ptab_active\">\r\n                <i class=\"fas fa-info-circle fa-2x mytabicn\"></i> Info\r\n              </li>\r\n              <li id=\"feedT\" (click)=\"showProfileTabs('feedT', $event)\">\r\n                <i class=\"fas fa-newspaper fa-2x mytabicn\"></i> My Posts\r\n              </li>\r\n              <li id=\"mediaT\" (click)=\"showProfileTabs('mediaT', $event)\">\r\n                <i class=\"far fa-images fa-2x mytabicn\"></i> My Media\r\n              </li>\r\n              <div class=\"clearfix\"></div>\r\n            </ul>\r\n\r\n           \r\n        </div>\r\n\r\n         <!-- tabs data here-->\r\n         <div class=\"prof_infodata\" *ngIf=\"infoTab\">\r\n\r\n            <div class=\"row \">\r\n              <div class=\"col\">\r\n                <h3>About Me</h3>\r\n                <p>{{profile.aboutMe}}</p>\r\n              </div>\r\n  \r\n              <div class=\"col\">\r\n                <h3>Date Of Birth</h3>\r\n                <p>{{profile.dateOfBirth}}</p>\r\n              </div>\r\n  \r\n              <div class=\"col\">\r\n                <h3>Email</h3>\r\n                <p>{{profile.email}}</p>\r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"row mb-3\">\r\n              <div class=\"col\">\r\n                <h3>Gender</h3>\r\n                <p>{{profile.gender}}</p>\r\n              </div>\r\n              <div class=\"col\">\r\n                <h3>Mobile Number</h3>\r\n                <p>{{profile.mobileNumber}}</p>\r\n              </div>\r\n              <div class=\"col\">\r\n                <h3>Location</h3>\r\n                <p>{{profile.location}}</p>\r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"row mb-3\">\r\n              <div class=\"col\">\r\n                <h3>Name</h3>\r\n                <p>{{profile.name}} {{profile.lastName}}</p>\r\n              </div>\r\n              <div class=\"col\">\r\n                <h3>Profession</h3>\r\n                <p>{{profile.profession}}</p>\r\n              </div>\r\n              <div class=\"col\">\r\n                <h3>Role</h3>\r\n                <p>{{profile.role}}</p>\r\n              </div>\r\n            </div>\r\n  \r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          <div *ngIf=\"feedsTab\">\r\n              <div class=\"row prof_feedsdata\" *ngFor=\"let feedList of feedDetails; let i = index\">\r\n                <div class=\"col\">\r\n                  <div class=\"card cardspace\">\r\n                    <div class=\"card-block\">\r\n                      <div class=\"pl-3\">\r\n                        <div class=\"row\">\r\n                          \r\n\r\n                            <div class=\"col-12 col-sm-2 col-md-2\">\r\n                              <span>\r\n                                  <a class=\"avatar-sm\" href=\"javascript:;\">\r\n                                      <img class=\"img-fluid rounded-circle\" src=\"{{imageUrl+feedList.profilePicPath}}\" />\r\n                                    </a>\r\n                              </span>\r\n                            </div>\r\n\r\n                            <div class=\"col-12 col-sm-10 col-md-10\">\r\n                                <h3>{{feedList.memberName}}</h3>\r\n                               \r\n                            </div>\r\n                            \r\n                            \r\n                          \r\n                        </div>\r\n                      </div>\r\n                      \r\n                    </div>\r\n\r\n                    <h4 class=\"card-title\">\r\n                        {{feedList.title}}\r\n                    </h4>\r\n                      <p class=\"card-text\">\r\n                        {{feedList.content}}\r\n                      </p>\r\n\r\n                    <div  class=\"img_container\">\r\n                    <img *ngIf=\"feedList.mediaSrc!=''\" class=\"card-img-bottom img-fluid space_imng\" width=\"100%\" src=\"{{imageUrl+feedList.mediaSrc}}\" alt=\"Card image cap\"  />\r\n                  </div>\r\n                    <div *ngFor=\"let imgList of feedList.mediaArray\">\r\n                      \r\n\r\n                          <img class=\"card-img-bottom img-fluid space_imng\" width=\"100%\" src=\"{{imageUrl+imgList.mediaUrl}}\" alt=\"Card image cap\" />\r\n\r\n                      \r\n                     \r\n                    </div>\r\n                    <div style=\"margin-left: 6px;\" class=\"row\" >\r\n                      <div class=\"col\">\r\n                          <i class=\"fas fa-eye fa-2x\"></i> &nbsp; 50\r\n                      </div>\r\n                      <div class=\"col\" >\r\n                          <i class=\"far fa-heart fa-2x\"></i> &nbsp; 100\r\n                      </div>\r\n                      <div class=\"col\" >\r\n                          <i class=\"fas fa-download fa-2x\"></i> &nbsp; 10\r\n                      </div>\r\n                      <div class=\"col\" >\r\n                          <i class=\"fas fa-share-alt fa-2x\"></i> &nbsp; 15\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"row\" *ngIf=\"mediaTab\" id=\"mymedias\">\r\n            <div class=\"col-12\">\r\n              <div class=\"row\">\r\n              <div class=\"col-12 col-sm-4 com-md-4 mybgspacer\" *ngFor=\"let feedList of feedDetails; let i = index\">\r\n                <figure class=\"media_bg\">\r\n                  <div *ngFor=\"let imgList of feedList.mediaArray\" > \r\n                    <img class=\"img-fluid\" src=\"{{imageUrl+imgList.mediaUrl}}\" width=\"100%\" alt=\"Card image cap\"  />\r\n                 </div>\r\n                  <img *ngIf=\"feedList.mediaSrc!=''\" src=\"{{imageUrl+feedList.mediaSrc}}\"  width=\"100%\" alt=\"Card image cap\" class=\"img-fluid\" />\r\n  \r\n                  <!--<figcaption>\r\n                    <h6 class=\"media-title fw-300\">{{ id }}</h6>\r\n                    <small class=\"media-subtitle\">Tile image {{ id }}</small>\r\n                  </figcaption>-->\r\n                </figure>\r\n              </div>\r\n              \r\n            </div>\r\n            </div>\r\n\r\n\r\n          \r\n\r\n      </div>\r\n      <!--mid Cont ends-->\r\n\r\n      \r\n\r\n\r\n      \r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_observable_service__ = __webpack_require__("./src/app/services/observable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_register_service__ = __webpack_require__("./src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(routSvc, cbOvc, route, registerService, fb, ele) {
        this.routSvc = routSvc;
        this.cbOvc = cbOvc;
        this.route = route;
        this.registerService = registerService;
        this.fb = fb;
        this.ele = ele;
        // imageUrl: any = "http://13.58.150.195:4300/";
        //demo
        this.imageUrl = "http://18.219.37.107:4300/";
        // imageUrl: any = "http://192.168.2.134:4300/";
        //alpha url:
        //imageUrl : any = "http://prodapi.celebkonect.com:4300/";
        this.name = localStorage.getItem('loginSessId');
        this.isValid = false;
        this.infoTab = true;
        this.feedsTab = false;
        this.mediaTab = false;
        this.pform = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.email = localStorage.getItem('loginSessId');
        console.log("seesion" + localStorage.getItem('loginSessId'));
        this.infoTab = true;
        this.ongetprofilebyemail(this.email);
        this.getMemberByEmail(this.email);
        console.log("session" + this.name);
        //this.openPform(this.id);
        this.onProfileFormGroup();
        //this.createCelebRequest(this.id);
    };
    ProfileComponent.prototype.openPform = function (id) {
        // alert(id);
        this.pform = true;
        var frmwrap = document.getElementById('pf');
        frmwrap.classList.add('show_updpform');
        //const user = {
        //  firstname: this.profileForm.get('firstname').value,
        //  lastname: this.profileForm.get('lastname').value,
        //  mobileNumber: this.profileForm.get('mobileNumber').value,
        //  dateOfBirth: this.profileForm.get('dateOfBirth').value,
        //  address: this.profileForm.get('address').value,
        //  profession: this.profileForm.get('profession').value,
        //  email: this.profileForm.get('email').value,
        //  gender: this.profileForm.get('gender').value,
        //  location: this.profileForm.get('location').value,
        //  country: this.profileForm.get('country').value,
        //  aboutMe: this.profileForm.get('about').value
        //}
        //this.email = user.email;
        //this.cbOvc.getMemberByID(id).subscribe(data => {
        //  console.log(data);
        //  this.user = data;
        //});
    };
    ProfileComponent.prototype.onProfileFormGroup = function () {
        this.profileForm = this.fb.group({
            //firstname: ['', Validators.required],
            //lastname: ['', Validators.required],
            //mobileNumber: ['', Validators.required],
            //dateOfBirth: ['', Validators.required],
            //aboutMe: ['', Validators.required],
            //email: ['', Validators.required],
            //gender: ['', Validators.required],
            //country: ['', Validators.required],
            //location: ['', Validators.required],
            'profile.name': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.lastName': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.mobileNumber': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.email': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.location': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.aboutMe': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.gender': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.dateOfBirth': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
        });
    };
    ProfileComponent.prototype.closePform = function () {
        this.pform = false;
        var frmwrap = document.getElementById('pf');
        frmwrap.classList.remove('show_updpform');
    };
    ProfileComponent.prototype.showProfileTabs = function (id, event) {
        var infotab = document.getElementById('infoT');
        var feedtab = document.getElementById('feedT');
        var mediatab = document.getElementById('mediaT');
        switch (id) {
            case 'infoT':
                this.infoTab = true;
                this.feedsTab = false;
                this.mediaTab = false;
                event.target.classList.add('ptab_active');
                feedtab.classList.remove('ptab_active');
                mediatab.classList.remove('ptab_active');
                break;
            case 'feedT':
                this.infoTab = false;
                this.feedsTab = true;
                this.mediaTab = false;
                event.target.classList.add('ptab_active');
                infotab.classList.remove('ptab_active');
                mediatab.classList.remove('ptab_active');
                this.onGetContentByID();
                break;
            case 'mediaT':
                this.infoTab = false;
                this.feedsTab = false;
                this.mediaTab = true;
                event.target.classList.add('ptab_active');
                infotab.classList.remove('ptab_active');
                feedtab.classList.remove('ptab_active');
                this.onGetContentByID();
                break;
            case 'defualt':
                this.infoTab = true;
                break;
        }
    };
    ProfileComponent.prototype.profilePage = function () {
        //this.routSvc.navigateByUrl('/profile');
        this.routSvc.navigate(['/profile/']);
    };
    ProfileComponent.prototype.celebPage = function () {
        this.routSvc.navigate(['/celebrities/']);
    };
    ProfileComponent.prototype.transactionPage = function () {
        //this.routSvc.navigateByUrl('/transactions');
        this.routSvc.navigate(['/transactions/']);
    };
    ProfileComponent.prototype.preferencePage = function () {
        this.routSvc.navigate(['/mypreferences']);
    };
    ProfileComponent.prototype.ongetprofilebyemail = function (email) {
        var _this = this;
        this.email = email;
        this.cbOvc.onGetProfileByEmail(email).subscribe(function (data) {
            _this.profile = data;
            console.log(data);
            _this.oldImage = _this.profile.avtar_imgPath;
        });
        return this.profile;
    };
    ProfileComponent.prototype.getMemberByEmail = function (email) {
        var _this = this;
        email = this.email;
        this.cbOvc.getMemberByEmail(this.email).subscribe(function (x) {
            console.log("testingid" + x._id);
            _this.id = x._id;
            localStorage.setItem('memberId', x._id);
            console.log("final" + _this.id);
            _this.onGetContentByID();
            _this.ongetFansandFolowers(_this.id);
        });
        return this.id;
    };
    ProfileComponent.prototype.onGetContentByID = function () {
        var _this = this;
        this.cbOvc.onGetContentByID(this.id).subscribe(function (result) {
            _this.feedDetails = result;
            _this.postlist = result.length;
            console.log(_this.feedDetails);
        }, function (error) { return _this.errorMessage = error; });
        //console.log(this.errorMessage);
        return this.feedDetails;
    };
    // createCelebRequest(id: any) {
    //     this.cbOvc.sendCelebRequest(this.id).subscribe(result => {
    //       this.celebrityRequest = result;
    //       console.log(this.celebrityRequest);
    //     });
    //   }
    ProfileComponent.prototype.createCelebRequest = function (id) {
        var _this = this;
        this.cbOvc.sendCelebRequest(id).subscribe(function (result) {
            //this.celebrityRequest = result;
            console.log(_this.celebrityRequest);
            if (result.message === "Request Sent Successfully") {
                _this.message = result.message;
                _this.messageClass = "alert alert-success";
            }
            else {
                _this.message = result.error;
                _this.messageClass = "alert alert-danger";
            }
        });
    };
    ProfileComponent.prototype.onUpdateProfile = function (profile) {
        if (this.profileForm.valid) {
            this.isValid = false;
            this.pform = false;
            this.cbOvc.onUpdateMember(profile).subscribe(function (result) {
                console.log(result);
            });
        }
        else {
            this.isValid = true;
            this.successMessage = "please Enter User Details";
            this.pform = true;
        }
    };
    ProfileComponent.prototype.readURL = function (event) {
        var files = this.ele.nativeElement.querySelector('#selectFile').files;
        if (files.length > 0 && files.count != 0 && files != null) {
            var req = files;
            var formData = new FormData();
            var file = files[0];
            this.images = file.name;
            formData.append('selectFile', file, file.name);
            formData.append('avtars', file, file.id);
            console.log(formData);
            console.log(files);
            if (this.images != null && this.images != "") {
                this.profile.avtar_originalname = this.images.toString();
                this.profile.avtar_imgPath = "avtars/" + this.images.toString();
            }
            else {
                this.profile.avtar_imgPath = this.oldImage;
            }
            this.cbOvc.onfileupload(this.id, formData).subscribe(function (res) { return console.log(res); });
            this.cbOvc.onUpdateMember(this.profile).subscribe(function (result) {
                console.log(result);
            });
        }
        this.getMemberByEmail(this.email);
    };
    ProfileComponent.prototype.ongetFansandFolowers = function (id) {
        var _this = this;
        this.cbOvc.getFansandFolowers(id).subscribe(function (data) {
            _this.memPreferences = data;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProfileComponent.prototype, "fileInput", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_observable_service__["a" /* ObservableService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  register works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuService = /** @class */ (function () {
    function MenuService() {
        this.menuList = ["home", "register", "login"];
    }
    MenuService.prototype.getMenuList = function () {
        return this.menuList;
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/services/observable.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {HttpHeaders} from '@angular/common/http';

//import { member } from '../models/member';

var ObservableService = /** @class */ (function () {
    //local
    // baseUrl = "http://192.168.2.134:4300/";
    //alpha url:
    //baseUrl = "http://prodapi.celebkonect.com:4300/";
    function ObservableService(http) {
        this.http = http;
        //baseUrl = "http://13.58.150.195:4300/";
        //demo
        this.baseUrl = "http://18.219.37.107:4300/";
        this.isUserLoggedIn = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Subject */]();
        this.recogList = [
            { text: 'Friends or Family', value: 'Friends or Family' },
            { text: 'Facebook', value: 'Facebook' },
            { text: 'Twitter', value: 'Twitter' },
            { text: 'Google', value: 'Google' },
            { text: 'Instagram', value: 'linkedIn' },
            { text: 'YouTube', value: 'Youtube' },
            { text: 'TV', value: 'TV' },
            { text: 'Movies', value: 'Movies' },
            { text: 'Billboards', value: 'Billboards' },
            { text: 'Newspapers', value: 'Newspapers' }
        ];
        //country starts
        this.countryList = [
            { code: "IN", value: "India" },
            { code: "AU", value: "Australia" },
            { code: "USA", value: "United States of America" },
            { code: "NZL", value: "New Zealand" },
            { code: "LK", value: "Sri Lanka" }
        ];
        //     this.headers = new HttpHeaders()
        // .set('Content-Type', 'application/json')
        // .set('X-API-Key', 'AQEohmfuXNWTK0Qc+iSZt2osovaPSYJDPadzSduT5NkOYgt9LHD6xRzL7RDBXVsNvuR83LVYjEgiTGAH-AjYdJBzcAinEd7cMtLkOYNR5ZZtQ03PaNDgZtpXHs+4=-SyPX4Yd9dWFpq8FV');
    }
    ObservableService.prototype.getRecoglist = function () {
        return this.recogList;
    };
    ObservableService.prototype.getCountryData = function () {
        return this.countryList;
    };
    ObservableService.prototype.createAuthenticationHeaders = function () {
        this.loadToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken
            })
        });
    };
    ObservableService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
    };
    ObservableService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    ObservableService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    ObservableService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])();
    };
    ObservableService.prototype.login = function (user) {
        var em = {};
        em.email = user.email;
        em.password = user.password;
        console.log(em);
        return this.http.post(this.baseUrl + "logininfo/login", em)
            .map(function (data) {
            console.log(data.json());
            return data.json();
        }, function (err) {
            return err.json();
        });
    };
    // getting celebrities from db
    ObservableService.prototype.getCelebrities = function (email) {
        var _this = this;
        return this.http.get(this.baseUrl + "memberpreferences/getMemberPreferencesByEmail/' + email + '")
            .map(function (result) { return _this.result = result.json().data; });
    };
    ObservableService.prototype.getMemberByEmail = function (email) {
        var body = [];
        body.email = email;
        console.log(email);
        return this.http.get(this.baseUrl + 'users/getMemberByEmail/' + email + '').map(function (res) { return res.json(); });
        // .map(result => this.result = result.json().data);
    };
    ObservableService.prototype.getCelebrityById = function (id) {
        this.id = id;
        console.log("Celeb id:" + id);
        return this.http.get(this.baseUrl + 'memberpreferences/getCelebritiesBySelectedPreferences/' + id + '')
            .map(function (res) { return res.json(); });
    };
    ObservableService.prototype.onGetProfileByEmail = function (emailid) {
        console.log("service" + emailid);
        return this.http.get(this.baseUrl + 'users/getMemberByEmail/' + emailid + '').map(function (res) {
            return res.json();
        });
    };
    ObservableService.prototype.onGetContentByID = function (id) {
        return this.http.get(this.baseUrl + 'feeddata/getFeedByMemberId/' + id + '').map(function (res) { return res.json(); });
    };
    ObservableService.prototype.onGetTransactions = function (id) {
        return this.http.get(this.baseUrl + 'financialTransaction/getByUserID/' + id + '').map(function (res) { return res.json(); });
    };
    ObservableService.prototype.getAllCelebrities = function () {
        return this.http.get(this.baseUrl + 'admin/getMemberByisCeleb').map(function (res) { return res.json(); });
    };
    ObservableService.prototype.getMemberByID = function (id) {
        return this.http.get(this.baseUrl + 'users/getMember/' + id + '').map(function (res) { return res.json(); });
    };
    ObservableService.prototype.sendCelebRequest = function (id) {
        var body = {};
        body.memberId = id;
        return this.http.post(this.baseUrl + 'celebrequest/create/', body).map(function (res) { return res.json(); });
    };
    //updateUserById(id) {
    //  return this.http.post('http://13.58.150.195:4300/users/editUser/', id).map((res: Response) => res.json());
    //}
    ObservableService.prototype.onUpdateMember = function (member) {
        var st = member.isCeleb.toString();
        var body = {};
        body.id = member._id.toString();
        body.status = member.status.toString();
        body.address = member.address;
        body.availableCredits = member.availableCredits;
        body.dateOfBirth = member.dateOfBirth;
        body.email = member.email;
        body.gender = member.gender;
        body.location = member.location;
        body.loginType = member.loginType;
        body.mobileNumber = member.mobileNumber;
        body.name = member.name;
        body.password = member.password;
        body.username = member.username;
        body.preferences = member.preferences;
        body.IsDeleted = member.IsDeleted.toString();
        body.aboutMe = member.aboutMe;
        body.avtar_imgPath = member.avtar_imgPath;
        body.avtar_originalname = member.avtar_originalname;
        body.created_at = member.created_at;
        body.isCeleb = st;
        body.lastName = member.lastName;
        body.prefix = member.prefix;
        body.role = member.role;
        body.isTrending = member.isTrending.toString();
        body.isEditorChoice = member.isEditorChoice.toString();
        body.isOnline = member.isOnline.toString();
        body.isPromoted = member.isPromoted.toString();
        // body.status = member.status.toString();
        //body.updated_at = member.updated_at;
        body.updated_at = member.updated_at == null ? "" : member.updated_at;
        body.v = member.__v.toString();
        body.celebToManager = member.celebToManager;
        console.log(body);
        return this.http.post(this.baseUrl + 'users/editUser', body).map(function (res) {
            return res.json();
        });
    };
    ObservableService.prototype.onfileupload = function (id, formdata) {
        //formdata.id = "5a9cd36741249d75a4d62834";
        //formdata.avtar_imgPath = "2";
        return this.http.post(this.baseUrl + 'users/editUser', formdata).map(function (res) {
            return res.json();
        });
    };
    ObservableService.prototype.onSendContactUs = function (contactUs) {
        var body = {};
        body.name = contactUs.name;
        body.email = contactUs.email;
        body.mobile = contactUs.mobile;
        body.subject = contactUs.subject;
        body.message = contactUs.message;
        body.howDoYouHearAboutUs = contactUs.howDoYouHearAboutUs;
        console.log(body);
        // return this.http.post(this.baseUrl+'http://192.168.2.166:4300/comLog/contactUs', body).map((res: Response) =>
        //   res.json());
        // return this.http.post('http://prodapi.celebkonect.com:4300/comLog/contactUs', body).map((res: Response) =>
        // res.json());
        return this.http.post(this.baseUrl + 'comLog/contactUs', body).map(function (res) {
            return res.json();
        });
    };
    //get fans and followers
    // getFansandFolowers(id : any){
    //   return this.http.get(this.baseUrl + 'memberpreferences/getProfileActivityCountsByMemberId/' + id + '').map((res: Response) => res.json());
    // }
    ObservableService.prototype.getFansandFolowers = function (id) {
        return this.http.get(this.baseUrl + 'memberpreferences/getProfileActivityCountsByMemberId/' + id + '').map(function (res) { return res.json(); });
    };
    ObservableService.prototype.onGetAllExchanges = function () {
        return this.http.get(this.baseUrl + 'creditExchange/getAll').map(function (res) {
            return res.json();
        });
    };
    ObservableService.prototype.onGetPackagesByCountryCode = function (countryCode) {
        return this.http.get(this.baseUrl + 'packageCollection/getCreditPackagesByCountry/' + countryCode + '').map(function (res) {
            return res.json();
        });
    };
    ObservableService.prototype.onCreatePaymentTransaction = function (paymentTransaction) {
        var body = {};
        body.memberId = paymentTransaction.memberId;
        body.creditValue = paymentTransaction.creditValue;
        body.equivalentAmount = paymentTransaction.equivalentAmount;
        body.paymentType = paymentTransaction.paymentType;
        body.createdBy = paymentTransaction.createdBy;
        console.log(body);
        return this.http.post(this.baseUrl + 'paymentTransaction/createPaymentTransaction', body).map(function (res) {
            return res.json();
        });
    };
    ObservableService.prototype.onCreatePaymentRequest = function (paymentTransaction) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append("Access-Control-Allow-Methods", "POST");
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept");
        headers.append('Allow', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
        headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization");
        headers.append('X-API-Key', 'AQEohmfuXNWTK0Qc+iSZt2osovaPSYJDPadzSduT5NkOYgt9LHD6xRzL7RDBXVsNvuR83LVYjEgiTGAH-AjYdJBzcAinEd7cMtLkOYNR5ZZtQ03PaNDgZtpXHs+4=-SyPX4Yd9dWFpq8FV');
        //headers.append('Content-Type', 'application/json');
        //headers.append('Access-Control-Allow-Origin', '*');
        //headers.append("Access-Control-Allow-Methods", "POST");
        //headers.append("Access-Control-Allow-Origin", "*");
        //headers.append("Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept");
        //headers.append('Allow', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
        //headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization");
        //headers.append('X-API-Key', 'AQEohmfuXNWTK0Qc+iSZt2osovaPSYJDPadzSduT5NkOYgt9LHD6xRzL7RDBXVsNvuR83LVYjEgiTGAH-AjYdJBzcAinEd7cMtLkOYNR5ZZtQ03PaNDgZtpXHs+4=-SyPX4Yd9dWFpq8FV');
        //let options = new RequestOptions({ method: RequestMethod.Post, headers: headers, body:JSON.stringify(GroupM),  url:this.GroupsUrl  });    
        //let myHeaders = new Headers();
        //myHeaders.append('Access-Control-Allow-Origin', '*');
        //myHeaders.append('Access-Control-Allow-Methods', 'POST');
        //myHeaders.append('Access-Control-Allow-Methods', 'X-API-Key,Content-Type');
        var body = {};
        body.reference = paymentTransaction.reference;
        body.merchantAccount = paymentTransaction.merchantAccount;
        body.shopperReference = paymentTransaction.shopperReference;
        body.paymentMethod = paymentTransaction.paymentMethod;
        body.amount = paymentTransaction.amount;
        body.origin = paymentTransaction.origin;
        body.returnUrl = paymentTransaction.returnUrl;
        body.countryCode = paymentTransaction.countryCode;
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var RequestOptionsArgs = {
            method: "POST",
            headers: headers,
            body: body
        };
        //console.log(options);
        // var inv = new XMLHttpRequest();
        // inv.open('POST', url, true);
        // inv.setRequestHeader('X-PINGOTHER', 'pingpong');
        // inv.setRequestHeader('Content-Type', 'application/json');
        // inv.setRequestHeader('X-API-Key', 'AQEohmfuXNWTK0Qc+iSZt2osovaPSYJDPadzSduT5NkOYgt9LHD6xRzL7RDBXVsNvuR83LVYjEgiTGAH-AjYdJBzcAinEd7cMtLkOYNR5ZZtQ03PaNDgZtpXHs+4=-SyPX4Yd9dWFpq8FV');
        //// inv.onreadystatechange = handler;
        // inv.send(body);
        return this.http.post('https://checkout-test.adyen.com/services/PaymentSetupAndVerification/v32/payments', body, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    ObservableService.prototype.onUpdatePaymentTransaction = function (paymentTransaction) {
        //let body: any = {};
        //body.transactionRefId = paymentTransaction.transactionRefId;
        //body.gatewayResponse = paymentTransaction.gatewayResponse;
        //body.updatedBy = paymentTransaction.updatedBy;
        //console.log(body);
        return this.http.put(this.baseUrl + 'paymentTransaction/editPaymentTransaction/' + paymentTransaction.id + '', paymentTransaction).map(function (res) {
            return res.json();
        });
    };
    ObservableService.prototype.onCreateCreditTransaction = function (creditTransaction) {
        var body = {};
        //body.creditRefCartId = creditTransaction.creditRefCartId;
        body.memberId = creditTransaction.memberId;
        body.creditType = creditTransaction.creditType;
        body.remarks = creditTransaction.remarks;
        body.creditValue = creditTransaction.creditValue;
        body.couponCode = creditTransaction.couponCode;
        body.createdBy = creditTransaction.createdBy;
        console.log(body);
        return this.http.post(this.baseUrl + 'credits/createCredits', body).map(function (res) {
            return res.json();
        });
    };
    ObservableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], ObservableService);
    return ObservableService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Recommendations } from '../models/recommendations';
//import { SurveyQuestions } from '../models/surveyquestions';
var RegisterService = /** @class */ (function () {
    //local
    // baseUrl = "http://192.168.2.134:4300/";
    //alpha url:
    //baseUrl = "http://prodapi.celebkonect.com:4300/";
    function RegisterService(http) {
        this.http = http;
        //http: Http;
        //baseUrl = "http://13.58.150.195:4300/";
        //demo
        this.baseUrl = "http://18.219.37.107:4300/";
    }
    RegisterService.prototype.onRegisterMember = function (member) {
        console.log(member);
        var body = {};
        body.name = member.firstname;
        body.username = member.firstname + member.lastname;
        body.mobileNumber = member.mobileNumber;
        body.location = member.location;
        body.profilePic = "";
        body.dateOfBirth = member.dateOfBirth;
        body.address = member.location;
        body.availableCredits = "0".toString();
        body.profession = member.profession;
        body.password = member.password;
        body.confirmPassword = member.confirmPassword;
        body.email = member.email;
        body.gender = member.gender;
        body.loginType = "Web Portal";
        body.country = member.country;
        body.role = "member";
        body.referralCode = member.referralCode.toString();
        console.log(body);
        return this.http.post(this.baseUrl + 'users/memberRegistrations', body).map(function (res) {
            return res.json();
        });
    };
    RegisterService.prototype.onComLog = function (member) {
        var comlog = {};
        comlog.mode_ids = "email";
        comlog.from_addr = "";
        comlog.to_addr = member.email;
        comlog.content = "";
        return this.http.post(this.baseUrl + 'comLog/createComLog', comlog).map(function (res) {
            return res.json();
        });
    };
    RegisterService.prototype.onCreateInfo = function (member) {
        var create = {};
        create.email = member.email;
        create.username = member.firstname + member.lastname;
        create.password = member.password;
        create.mobileNumber = member.mobileNumber;
        return this.http.post(this.baseUrl + 'logininfo/create', create).map(function (res) {
            return res.json();
        });
    };
    RegisterService.prototype.onGetMemberByEmail = function (email) {
        console.log("Service:" + email);
        return this.http.get(this.baseUrl + 'users/getMemberByEmail/' + email + '').map(function (res) { return res.json(); });
    };
    RegisterService.prototype.onGetPreferencesList = function () {
        return this.http.get(this.baseUrl + 'preferences/getPreferencesList').map(function (res) {
            return res.json();
        });
    };
    RegisterService.prototype.onAddPreferences = function (userId, preferences) {
        console.log(userId);
        console.log(preferences);
        var body = {};
        body.userId = userId;
        body.preferences = preferences;
        console.log(body);
        return this.http.post(this.baseUrl + 'memberpreferences/setMemberPreferences', body).map(function (res) {
            return res.json();
        });
    };
    RegisterService.prototype.onGetCelebritiesByPreferences = function (userid) {
        return this.http.get(this.baseUrl + 'memberpreferences/getCelebritiesBySelectedPreferences/' + userid + '').map(function (res) {
            return res.json();
        });
    };
    RegisterService.prototype.onCreateMemberChoice = function (memberChoice, formData) {
        formData.append('memberId', memberChoice.memberId);
        formData.append('celebrityName', memberChoice.celebrityName);
        formData.append('industry', memberChoice.industry);
        formData.append('createdBy', memberChoice.createdBy);
        return this.http.post(this.baseUrl + 'memberchoice/createMemberChoice', formData).map(function (res) { return res.json(); });
    };
    RegisterService.prototype.onupload = function (formData) {
        return this.http.post(this.baseUrl + 'memberchoice/createMemberChoice', formData).map(function (res) { return res.json(); });
    };
    RegisterService.prototype.onGetSurveyForMember = function (userid) {
        return this.http.get(this.baseUrl + 'celebSurvey/getSurveyForMember/' + userid + '').map(function (res) {
            return res.json();
        });
    };
    RegisterService.prototype.onCreateSurveySubmissions = function (surveys) {
        var body = {};
        body.memberId = surveys.memberId;
        body.celebSurveyId = surveys.celebSurveyId;
        body.qids = [surveys.qids];
        body.questions = [surveys.questions];
        body.answers = [surveys.answer];
        body.createdBy = surveys.createdBy;
        console.log(body);
        return this.http.post(this.baseUrl + 'celebSurveySubmissions/create', body).map(function (res) {
            return res.json();
        });
    };
    RegisterService.prototype.onGetMemberById = function (user_id) {
        //let headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        //let params = new URLSearchParams();
        //params.append("user_id", user_id)
        //let params = new HttpParams().set("user_id", user_id);
        return this.http.get(this.baseUrl + 'users/getMember/' + user_id + '').map(function (res) {
            return res.json();
        });
        // }
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/terms/terms.component.css":
/***/ (function(module, exports) {

module.exports = ".terms_page{ padding: 60px 50px; font-family: 'Raleway', sans-serif;}"

/***/ }),

/***/ "./src/app/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid terms_page\">\r\n  <div class=\"container\" style=\"width: 100%;\">\r\n      \r\n    <div class=\"row\">\r\n        <h3>TERMS OF SERVICE</h3>\r\n        <p>Welcome to www.celebkonect.com. These Terms of Service contain the terms and conditions that govern all use of our Platform (as defined below) and Services (as defined below) and all content, services and / or products available on or through the Platform (collectively, the “iEntertain Services”).</p>\r\n        <p>The iEntertain Services are offered to you subject to your acceptance, without modification (other than Special Terms (as defined below) agreed by the parties pursuant to these Terms of Service), of all of the terms and conditions contained herein and all other operating rules, policies (including, without limitation, our Privacy Policy at www.celebkonect.com/privacy), the Guidelines (as defined below) and any future modifications thereof, and procedures that may be published from time to time on the Platform or made available to you on or through the iEntertain Services (collectively, the “Terms”). When accepted by you (as defined below), these Terms form a legally binding contract between you and Supplier (as defined below). If you are entering into these Terms on behalf of an entity, such as your employer or the company you work for, you represent that you have the legal authority to bind that entity.</p>\r\n        <p>PLEASE READ THESE TERMS CAREFULLY. BY REGISTERING FOR, ACCESSING, BROWSING, AND/OR OTHERWISE USING THE iENTERTAIN SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO BE BOUND BY THESE TERMS, DO NOT ACCESS, BROWSE OR OTHERWISE USE THE PLATFORM OR THE iENTERTAIN SERVICES.</p>\r\n        <p>Supplier may, in its sole discretion, elect to suspend or terminate access to, or use of the iEntertain Services to anyone who violates these Terms.</p>\r\n        <p>If you register for a free trial of the iEntertain Services, the applicable provisions of these Terms will govern that free trial.</p>\r\n        <p>The original language of these Terms is English. Supplier may make available translations for convenience. In case of conflicts between the original English version and any translation, the English version shall prevail.</p>\r\n\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n          <h3>1.Definitions</h3>\r\n        <div class=\"table table-responsive \">\r\n          <table class=\"table\">\r\n           \r\n            <tbody>\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Account</strong></td>\r\n                <td>The primary means for accessing and using the CelebKonect Services, subject to payment of a Fee designated in the selected Plan;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Activity</strong></td>\r\n                <td>appointments, tasks, events and actions (such as call, meeting, lunch or a custom type) on a calendar that can be associated with a Deal, a person or an Organization;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Authorization</strong></td>\r\n                <td>the set of rights and privileges on the Web Site assigned to a User by a Client;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Client</strong></td>\r\n                <td>a natural or legal person who has accepted these Terms with the Supplier;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Client Data</strong></td>\r\n                <td>Files and any other digital data and information, which is subjected to the CelebKonect Services or otherwise inserted to the System by the Client (including the specific Users, Products, persons, Organizations, Activities, Pipelines, Stages and Deals associated with the Client);</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Content</strong></td>\r\n                <td>any data and information available through CelebKonect Services or contained within the structure of the System, articles, documents, brochures, presentations, pictures, images, audio-visual works, other informational materials and any comments;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Deal</strong></td>\r\n                <td>a Client’s ongoing, lost or won sales to an Organization or person;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Fee</strong></td>\r\n                <td>regular payment for using the activated Account;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Files</strong></td>\r\n                <td>documents of any kind (images, spreadsheets, text files, etc.) that are inserted to the System by the Client, and usually associated with a particular Deal, Person or Organization;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Free Trial</strong></td>\r\n                <td>temporary access for the purposes of trying out the Web Site and CelebKonect Services in accordance with any selected Plan without paying a Fee;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Guidelines</strong></td>\r\n                <td>additional guidelines or rules applicable to specific features, applications, products, or services which may be posted from time to time on the Platform or otherwise made available on or through the CelebKonect Services;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Organization</strong></td>\r\n                <td>legal persons (such as companies) and other entities with which that Client is making Deals;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>iEntertain Pty Ltd</strong></td>\r\n                <td>ACN: 619 375 021 a proprietary limited company established under the laws of theNew South Wales, Australia. </td>  \r\n              </tr>\r\n\r\n               <tr>\r\n                <td style=\"width: 150px\"><strong>CelebKonect Materials</strong></td>\r\n                <td>the visual interfaces, graphics, design, systems, methods, information, computer code, software, services, “look and feel”, organization, compilation of the content, code, data, and all other elements of the CelebKonect Services;</td>  \r\n              </tr>\r\n\r\n               <tr>\r\n                <td style=\"width: 150px\"><strong>CelebKonect Services</strong></td>\r\n                <td>the Web Site, System, Content, Platform and all content, services and/or products available on or through the Platform;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Pipeline</strong></td>\r\n                <td>the process of making a Deal, which consists of several Stages;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Plan</strong></td>\r\n                <td>various criteria related to the use and functionality of the CelebKonect Services and on which the Fee is based;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Platform</strong></td>\r\n                <td>the CelebKonect customer relationship management application;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Products</strong></td>\r\n                <td>the goods or services that a Client is offering to persons and Organizations;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Reseller</strong></td>\r\n                <td>third party entity that (i) purchases CelebKonect Services from Supplier and resells such CelebKonect Services to Clients, (ii) bills such Clients directly and (iii) provides such Clients with customer service;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Special Terms</strong></td>\r\n                <td>any particulars, specifications and conditions by which the parties have agreed to deviate from these Terms;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Stage</strong></td>\r\n                <td>the status of a Deal at a certain point in time;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>Supplier</strong></td>\r\n                <td>as the context requires, CelebKonect India, CelebKonect AUS, or CelebKonect US; and collectively, the “Suppliers” in their various jurisdictions, being owned by iEntertain Pty Ltd;</td>  \r\n              </tr>\r\n\r\n              <tr>\r\n                <td style=\"width: 150px\"><strong>System</strong></td>\r\n                <td>the integrated cloud computing solution for providing the CelebKonect Services, including applications, software, hardware, data bases, interfaces, associated media, documentation, updates, new releases and other components or materials provided therewith;</td>  \r\n              </tr>\r\n\r\n               <tr>\r\n                <td style=\"width: 150px\"><strong>User</strong></td>\r\n                <td>a natural person granted with the Authorization to use the Account on behalf of a Client;</td>  \r\n              </tr>\r\n\r\n               <tr>\r\n                <td style=\"width: 150px\"><strong>Web Site</strong></td>\r\n                <td>the compilation of all web documents (including images, php and html files) made available via <a href=\"http://www.celebkonect.com/\">www.CelebKonect.com</a> or its sub domains or domains with identical names under other top domains and owned by Supplier.</td>  \r\n              </tr>\r\n\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n          <h3>2.Authority to Enter into These Terms with Supplier</h3>\r\n\r\n          <p>The use of the iEntertain Services is subject to acceptance of these Terms. To accept these Terms for itself or on behalf of a Client, a person must have the legal capacity to do so. In the case of an individual, the individual must be at least 18 years of age or have valid authorization from his/her legal representative or custodian. In the case of a legal entity, the entity must be duly incorporated and in good standing.</p>\r\n          \r\n          <ul class=\"help-block\">\r\n            <p>The Terms are accepted as soon as one of the following occurs first:</p>\r\n            <li>a.\tthe person has received the confirmation of the creation of the Account and necessary credentials from Supplier in order to log in to his/her/its Account; or </li>\r\n            <li>b.\tfor those iEntertain Services and parts of the Web Site the use of which is not dependent on creating an Account, upon the moment of gaining access to such services.</li>\r\n          </ul>\r\n\r\n          <ul class=\"help-block\" style=\"margin-bottom: 20px;\">\r\n            <p>You may not, without Supplier’s prior written consent, access the iEntertain Services </p>\r\n            <li>(i)\tfor production purposes, </li>\r\n            <li>(ii)\tif you are a competitor of iEntertain, </li>\r\n            <li>(iii)\tto monitor the availability, performance or functionality of the iEntertain Services or </li>\r\n            <li>(iv)\tfor other benchmarking or competitive purposes.</li>\r\n          </ul>\r\n\r\n          <p>Once accepted, these Terms remain effective until terminated as provided for herein.</p>\r\n\r\n          <h3>3.\tModifications to Terms</h3>\r\n          <p>Supplier reserves the right, at its sole discretion, to change, modify, add, or remove portions of the Terms at any time by posting such changes on or through the Platform or the iEntertain Services. Please check these Terms periodically for changes. Your continued use of the iEntertain Services after such changes have been posted as provided above constitutes your binding acceptance of such changes. Such amended Terms will automatically be effective upon the earlier of (i) your continued use of the iEntertain Services, or (ii) 30 days from posting of such modified Terms on or through the Platform. Notwithstanding the foregoing, the resolution of any dispute that arises between you and Supplier will be governed by the Terms in effect at the time such dispute arose.</p>\r\n\r\n          \r\n\r\n          <h3 style=\"width: 100%\">4. Our Responsibilities</h3>\r\n          <p><strong>4.1\tProvision of iEntertain Services.</strong> Supplier will </p>\r\n          <ul class=\"help-block\">\r\n            <li>(a)\tmake the iEntertain Services, Content and Client Data available to a Client pursuant to these Terms, </li>\r\n            <li>(b)\tprovide applicable standard support for the iEntertain Services to Client at no additional charge, and/or upgraded support (for an additional charge, if applicable), </li>\r\n            <li>(c)\tuse commercially reasonable efforts to make the iEntertain Services available 24 hours a day, 7 days a week, except for: \r\n              <ul class=\"help-block\">\r\n                <li>(i)\tplanned downtime (of which Supplier shall give advance electronic notice as provided in the Guidelines), and </li>\r\n                <li>(ii)\tany unavailability caused by circumstances beyond Supplier’s reasonable control, including, for example, an act of God, act of government, flood, fire, earthquake, civil unrest, act of terror, strike or other labour problem, Internet service provider failure or delay, or denial of service attack.</li>\r\n              </ul>\r\n            </li>\r\n          \r\n          </ul>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\" style=\"margin-top: 30px;\">\r\n              <p><strong>4.2\tProtection of Client Data.</strong> Supplier will maintain administrative, physical, and technical safeguards for protection of the security, confidentiality and integrity of Client Data, as described in the Guidelines. Those safeguards will include, but will not be limited to, measures for preventing access, use, modification or disclosure of Client Data by Supplier personnel except </p>\r\n        \r\n              <ul class=\"help-block\">\r\n                  <li>(a)\tto provide the iEntertain Services and prevent or address service or technical problems, </li>\r\n                  <li>(b)\tas compelled by law in accordance with Section 7.4 (Compelled Disclosure) below, or </li>\r\n                  <li>(c)\tas a Client or User expressly permit in writing.</li>\r\n              </ul><div class=\"clearfix\">\r\n        \r\n      <p>The Services may at a later stage be  performed using equipment or facilities located in the European Union or the United States. Should that be the case the Supplier’s US service providers will either be Privacy Shield compliant or have executed Standard Contractual Clauses (as approved by the European Commission) that provide legal grounds for assuring </p>\r\n      <p>that, when processed in the United States, the personal data of EU citizens that are processed by iEntertain customers when using the iEntertain Service will receive from the Supplier and its service providers located outside the EU an adequate level of protection within the meaning of Article 46 of Regulation (EU) 2016/679* (General Data Protection Regulation).</p>\r\n     <h3 style=\"width: 100%\">List of processors:</h3>\r\n\r\n     <h5>Rackspace</h5>\r\n     <p>Hosting services in Germany and in the US (Privacy Shield certified).</p>\r\n\r\n     <h5>Amazon Web Services</h5>\r\n     <p>File storage and backup services in Ireland and the US (Privacy Shield certified).</p>\r\n\r\n     <h5>Clearbit</h5>\r\n     <p>Service provider for the Smart Data feature. Based in the US (Privacy Shield certified). See Clearbit’s Terms of Service and Privacy Policy.</p>\r\n    \r\n     <h5>Google Maps</h5>\r\n     <p>Processes address data into Google Maps links. Users are bound by the Google Maps/Google Earth Additional Terms of Service (including the Google Privacy Policy).</p>\r\n      \r\n      <h3 style=\"width: 100%\">5.\tUsing the iEntertain Services</h3>\r\n\r\n      <p><strong>5.1\tEstablishing an Account.</strong> Certain features, functions, parts or elements of the iEntertain Services can be used or accessed only by holders of an Account. The person who wishes to create an Account must:</p>\r\n\r\n      <ul class=\"help-block\">\r\n      <li>a.\tcomplete the sign-up form on the Web Site or alternative process provided by a Reseller if access to the iEntertain Services is purchased from a Reseller; and</li>\r\n      <li>b.\taccept these Terms by clicking “Sign up” or other similar button</li>\r\n      </ul>\r\n\r\n      <p>Each Client may have only one Account. If several persons need to use an Account on behalf of Client, Client must designate such persons as Users. Each such User shall be subject to the restrictions set forth in these Terms.</p>\r\n      <p>If Client has designated Users and granted them Authorization, such Users will be deemed to be authorized to act on behalf of Client when using the Account. Supplier is not responsible for and shall have no liability for verifying the validity of Authorization of any User. However, Supplier may, in its discretion, request additional information or proof of the person’s credentials. If Supplier is not certain if a User has been granted Authorization, Supplier may, in its sole discretion, prevent such User from accessing the iEntertain Services.</p>\r\n      <p>A User may be associated with multiple Clients and Accounts. Deleting a User from one Account will not remove the User from the Platform if he/she is connected to multiple Accounts.</p>\r\n      <p>The Client and any User associated with an Account must provide Supplier with true, accurate, current, and complete information about the Client, Users or Account and keep it up to date.</p>\r\n\r\n\r\n\r\n      <p><strong>5.2\tLogging Into an Account. </strong> Supplier shall provide Client with a username and password (“Login Credentials”) to be used to log in to its Account unless the Client uses the single sign-on feature or another service to log in. These Login Credentials must not be used by multiple persons. If Client has designated several Users, each User will be provided with separate Login Credentials. Client and each User are responsible for keeping confidential all login credentials associated with an Account. Client must promptly notify Supplier:</p>\r\n\r\n      <ul class=\"help-block\" style=\"margin-bottom: 30px;\">\r\n      <li>a.\tof any disclosure, loss or unauthorized use of any Login Credentials;</li>\r\n      <li>b.\tof a User’s departure from the Client’s organization;</li>\r\n      <li>c.\tof a change in a User’s role in the Client’s organization;</li>\r\n      <li>d.\tof any termination of a User’s right for any reason.</li>\r\n      </ul>\r\n\r\n\r\n      <p><strong>5.3\tTermination of Account. </strong> Client may terminate these Terms at any time as provided in Section 17. Supplier shall permanently delete the Account within six months of the effective date of the termination.</p>\r\n      <p><strong>5.4\tFees </strong> The use of an Account is subject to a Fee. Upon sign-up for an Account, the Client must select a Plan. Different rates apply to different Plans. The applicable Fee is charged in advance on monthly or annual payment intervals, unless agreed otherwise between parties. All Fees are non-refundable, i.e. there are no refunds or credits for periods where the Client did not use an activated Account, used it only partially, or deactivated the Account or terminated these Terms during an ongoing payment interval. If, after signing up, Client elects to upgrade to a more expensive Plan, the unused portion of any prepaid Fees shall be applied to the Fee of the more expensive Plan.</p>\r\n      <p>All Fees are exclusive of all taxes, levies or duties applicable under any applicable law, unless stated otherwise stated herein. Client is solely responsible for the payment of such taxes, levies or duties.</p>\r\n      <p><strong>Changing Plans.</strong>\t Any Client has the right to upgrade or downgrade a current Plan at any time by selecting a new Plan among the collection of Plans determined by the Supplier. In such an event, the Client’s credit card on file with the Supplier will automatically be charged with a Fee for the next payment interval with the rate stipulated in the new Plan.</p>\r\n      <p>Downgrading of the current Plan may cause the loss of features or capacity of the Account, as well as the loss of Client Data.</p>\r\n      <p><strong>5.6\tFree Trial. </strong>. A new Client may be entitled to a Free Trial, unless the Client has applied for the Account as a result of an ongoing marketing campaign organized by the Supplier in co-operation with its partners. If the parties have not agreed otherwise, the default Plan for the Free Trial shall be the Plan with the lowest rate of Fee. The Client is not required to provide any credit card information during the period of Free Trial. If the period of Free Trial has expired, the Account will be automatically deactivated. In order to prevent deactivation or to reactivate the Account, the Client is required to select a suitable Plan and pay the first Fee. If the Client does not pay the first Fee within 2 weeks as of the expiry of the Free Trial, Supplier has the right to permanently delete the Account, including all Client Data therein.</p>\r\n      <p>In addition to the current collection of Plans, Supplier may offer special discounts and motivation schemes (for example finder’s fees, etc.).</p>\r\n\r\n\r\n      <p><strong>\tPayment</strong>\r\n          The following provisions are applicable only if you purchase access to the iEntertain Services directly from Supplier.  If you purchase access to the iEntertain Services through a Reseller, the payment terms are set forth in the agreement with your Reseller.\r\n     </p>\r\n\r\n     <p><strong>6.1\tCredit Card Authorization. </strong>Supplier may seek pre-authorization of Client’s credit card account prior to your purchase of iEntertain Services in order to verify that the credit card is valid and has the necessary funds or credit available to cover your purchase. You authorize such credit card account to pay any amounts described herein, and authorize Supplier to charge all sums described in these Terms to such credit card account. You agree to provide Supplier updated information regarding your credit card account upon Supplier’s request and any time the information earlier provided is no longer valid.</p>\r\n     <p><strong>6.2\tElectronic Invoice. </strong> If Supplier has not sought pre-authorization of your credit card, then before the end of each payment interval, Client will be issued an electronic invoice for payment of the Fee of the next payment interval. Client must pay the invoice by the due date indicated on the invoice.</p>\r\n     <p><strong>Overage Charges.</strong> Upon delay with any payments, Supplier may require the Client to pay interest on the delay (penalty for late payment) for the period as of the time the payment obligation falls due until conforming performance is rendered. The interest rate of penalty for late payment dueis as per the Statute Law of Australia.</p>\r\n\r\n     <h3 style=\"width: 100%\">7.\tClient data</h3>\r\n     <p><strong>7.1\tUploading Client Data to Platform.</strong> If the Client uploads Client Data to the Platform, such Client Data and any processing of such Client Data must be in compliance with these Terms and applicable law. All rights, title and interest in and to the Client Data belong to the Client or third persons (including Users, persons and Organizations) whether posted and/or uploaded by you or made available on or through the iEntertain Services by Supplier. By uploading Client Data to the Platform, Client authorizes Supplier to process the Client Data. The Client is responsible for ensuring that:</p>\r\n     <ul class=\"help-block\">\r\n       <li>a.\tthe Client and any of the Users associated with the Account do not create, transmit, display or make otherwise available any Client Data that violates the terms of these Terms, the rights of Supplier, other Clients or Users, persons or Organizations or is harmful (for example viruses, worms, malware and other destructive codes), offensive, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, invasive of another’s privacy, defamatory, hateful or otherwise unlawful; and</li>\r\n       <li>b.\tthe Client and all of the Users associated with the Account have the necessary rights to use the Client Data, including to insert it into the Platform and process it by means of the Account.</li>\r\n    </ul>\r\n\r\n      <p><strong>7.2\tNo Guarantee of Accuracy.</strong> Supplier does not guarantee any accuracy with respect to any information contained in any Client Data, and strongly recommends that you think carefully about what you transmit, submit or post to or through the iEntertain Services. You understand that all information contained in Client Data is the sole responsibility of the person from whom such Client Data originated. This means that Client, and not Supplier, is entirely responsible for all Client Data that is uploaded, posted, transmitted, or otherwise made available through the iEntertain Services, as well as for any actions taken by the Suppliers or other Clients or Users as a result of such Client Data.</p>\r\n      <p><strong>7.3\tUnlawful Client Data.</strong> Supplier is not obliged to pre-screen, monitor or filter any Client Data or acts of its processing by the Client in order to discover any unlawful nature therein. However, if such unlawful Client Data or the action of its unlawful processing is discovered or brought to the attention of Supplier or if there is reason to believe that certain Client Data is unlawful, Supplier has the right to:</p>\r\n\r\n      <ul class=\"help-block\" style=\"margin-bottom: 20px;\">\r\n       <li>a.\tnotify the Client of such unlawful Client Data;</li>\r\n       <li>b.\tdeny its publication on the Web Site or its insertion to the System;</li>\r\n       <li>c.\tdemand that the Client bring the unlawful Client Data into compliance with these Terms and applicable law;</li>\r\n       <li>d.\tTemporarily or permanently remove the unlawful Client Data from the Web Site or Account, restrict access to it or delete it.</li>\r\n\r\n    </ul>\r\n\r\n    <p>If Supplier is presented convincing evidence that the Client Data is not unlawful, Supplier may, at its sole discretion, restore such Client Data, which was removed from the Web Site or Account or access to which was restricted.</p>\r\n    <p>In addition, in the event Supplier believes in its sole discretion Client Data violates applicable laws, rules or regulations or these Terms, Supplier may (but has no obligation), to remove such Client Data at any time with or without notice.</p>\r\n    <p><strong>7.4\tCompelled Disclosure.</strong> Supplier may disclose a Client’s confidential information to the extent compelled by law to do so. In such instance, Supplier will use commercially reasonable efforts to provide Client with prior notice of the compelled disclosure (to the extent legally permitted) and Client shall provide reasonable assistance, at its cost, if Client wishes to contest the disclosure. If Supplier is compelled by law to disclose Client’s confidential information as part of a civil proceeding to which Supplier is a party, and Client is not contesting the disclosure, Client will reimburse Supplier for its reasonable cost of compiling and providing secure access to that confidential information.</p>\r\n    \r\n    <h3 style=\"width: 100%\">8.\tServices</h3>\r\n\r\n    <p><strong>8.1\tUse of the iEntertain Services.</strong> Subject to these Terms, and the payment of the applicable service Fee, Supplier grants Client and its authorized users a non-exclusive, non-transferable, non-sub-licensable license to use the iEntertain Services to:</p>\r\n    <ul class=\"help-block\">\r\n      <li>a.\tcollect, store and organize Client Data, such as add new Persons and Organizations, create Pipelines and add Stages into these Pipelines, generate reports based on Client Data, add Deals into Stages and monitor their evolvement through the next Stages, add Products to be offered for sale to Persons and Organizations; add new Users and grant them Authorizations, assign Activities to a particular User;</li>\r\n      <li>b.\tmodify and delete Client Data;</li>\r\n      <li>c.\tcustomize the standard features of the iEntertain Services;</li>\r\n      <li>d.\treceive reasonable help and guidance and from Supplier regarding the use of the iEntertain Services.</li>\r\n    </ul>\r\n\r\n    <p><strong>8.2\tTechnical Support.</strong> Supplier shall provide reasonable technical support to Client and its authorized User at the reasonable request of the Client. Supplier shall respond to enquiries of support from a Client utilizing the contacts set forth below as soon as reasonably possible. Responding to enquiries of Clients and Users who have accepted these Terms but do not have an Account may be less expedient, or may not occur at all.</p>\r\n    <p>The contacts for all enquiries of support are:</p>\r\n    <ul class=\"help-block\">\r\n      <li>a.\tinstant messaging,</li>\r\n      <li>b.\tbuilt-in notification application on the Web Page, or</li>\r\n      <li>c.\te-mail: support@celebkonect.com</li>\r\n    </ul>\r\n\r\n    <p>Notwithstanding the foregoing, if you purchased access to the iEntertain Services from a Reseller, then first-line technical support will be provided by the Reseller and not by the Supplier.</p>\r\n\r\n<p><strong>8.3\tModifications to Service.</strong> Supplier reserves the right to modify the iEntertain Services or any part or element thereof from time to time without prior notice, including, without limitation:</p>\r\n    <ul class=\"help-block\" style=\"margin-bottom: 30px;\">\r\n        <li>a.\tRebranding the iEntertain Services at its sole discretion;</li>\r\n        <li>b.\tceasing providing or discontinuing the development any particular iEntertain Service or part or element of the Platform temporarily or permanently;</li>\r\n        <li>c.\tTaking such action as is necessary to preserve Supplier’s rights upon any use of the iEntertain Services that may be reasonably interpreted as violation of Supplier’s intellectual property rights, distribution of Internet viruses, worms, Trojan horses, malware, and other destructive activities or illegal activity.</li>\r\n    \r\n      </ul>\r\n\r\n\r\n      <p>As applicable, Client may be notified of such modifications when logging in to the Account. Modifications, including change in applicable rates for the iEntertain Services, will become effective thirty (30) days before the effective date of such modification.</p>\r\n      <p>If the Client does not accept the modification, the Client shall notify Supplier or Reseller (if Client purchased access to the iEntertain Services from a Reseller) before the effective date of the modification, and these Terms will terminate on the effective date of the modification. The Client’s continued use of the iEntertain Services, or any part or element thereof, after the effective date of a modification shall indicate its consent to the modifications. Supplier shall not be liable to the Client or to any third person for any modification, suspension or discontinuance of the iEntertain Services, or any part or element thereof.</p>\r\n\r\n      <p><strong>9.\tData Processing Contract</strong>\r\n          These Terms constitute the data processing contract between the Client as the data controller and the Supplier as the data processor. The Client hereby instructs the Supplier to process the data as described in these Terms.\r\n      </p>\r\n\r\n      <p><strong>9.1\tSubject matter and nature of processing. </strong>The Supplier provides the Platform where the Client, as the data controller, can collect, store and organize the personal data of data subjects determined by the Client. The Platform has been designed to work as a Social Networking tool but, to the extent not regulated by these Terms, the Client decides how they use the Platform.</p>\r\n      <p><strong>9.2\tDuration.</strong> The Supplier will process data on behalf of the Client until the termination of the iEntertain Services in accordance with these Terms. Upon termination, iEntertain will store the Client’s data for a period of six months, should the Client wish to reopen the Account to resume the use of the iEntertain Services or to export Client Data, unless instructed otherwise by the Client. The Supplier deletes or returns all the personal data to the controller after the end of the provision of services relating to processing, and deletes existing copies unless Union or Member State law requires storage of the personal data.</p>\r\n\r\n      <p><strong>9.3\tParties’ rights and obligations. </strong> The Client’s rights and obligations regarding Client Data are provided in sections 4 through 10 of these Terms. The Supplier ensures that persons authorised to process the personal data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality. The Supplier undertakes to make available to the controller all information necessary to demonstrate compliance with their obligations and to allow for and contribute to audits, including inspections, conducted or mandated by the Client as the data controller.</p>\r\n\r\n      <h3 style=\"width: 100%\">10.\tRestrictions</h3>\r\n\r\n      <p><strong>10.1\tProhibited Activities.</strong> Client and its authorized Users may use the iEntertain Services and any part or element thereof only in the scope, with the means and for purposes as identified in these Terms and applicable law. By way of example, neither the Client nor any User may:</p>\r\n      <ul class=\"help-block\">\r\n        <li>a.\tuse the iEntertain Services or any part or element thereof to commit a crime, breach any applicable law or entice or invite others to carry out such illegal actions;</li>\r\n        <li>b.\tcopy, duplicate, distribute, modify, adapt, hack, create derivative works, reverse engineer or decompile the iEntertain Services or any part or element thereof, or attempt to extract the source code thereof, unless (i) it is expressly allowed under applicable law, and (ii) to the extent that the Supplier is not permitted by that applicable law to exclude or limit the foregoing rights;</li>\r\n        <li>c.\tuse the iEntertain Services or any part or element thereof unless it has agreed to these Terms.</li>\r\n      </ul>\r\n\r\n      <p><strong>Certain Uses Require Supplier Consent. </strong> The Client or any User may not, without Supplier’s prior express written consent (e-mail, fax, Skype, etc.):</p>\r\n      <ul class=\"help-block\">\r\n        <li>a.\tsell, resell, lease, license, sublicense, distribute, provide, disclose, divulge, exploit or otherwise grant Access or make the iEntertain Services available in whole or in part to any third persons, unless such third person is another authorized User of the same Client;</li>\r\n        <li>b.\tuse the iEntertain Services or any part or element thereof in a scope, with means or for purposes other than those for which their functionality was created;</li>\r\n        <li>c.\tuse the iEntertain Services or any part or element thereof by means of programs that send them automatic enquiries or requests, unless such program has been made available by Supplier;</li>\r\n      </ul>\r\n\r\n      <h3 style=\"width: 100%\">11.\tPrivacy</h3>\r\n      <p>Supplier takes the privacy of its Clients and Users very seriously. Supplier’s Privacy Policy at www.celebkonect.com/privacy is hereby incorporated into these Terms by reference. Please read the Privacy Policy carefully as it governs Supplier’s collection, use, and disclosure of Client’s or User’s personal information.</p>\r\n      <h3 style=\"width: 100%\">12.\tIntellectual Property Rights</h3>\r\n\r\n      <p><strong>12.1\tiEntertain’s Intellectual Property Rights in the iEntertain Services.</strong> The iEntertain Services, iEntertain Materials, iEntertain trade names and trademarks, and any parts or elements thereof are solely and exclusively owned and operated by Supplier and its third party vendors and hosting partners. iEntertain Materials are protected by copyright, trade dress, patent, trade secrets, and trademark laws, international conventions and treaties, and all other relevant intellectual property and proprietary rights laws. Supplier, its affiliates and licensors retains all right, title and interest in such iEntertain Services, iEntertain Materials, iEntertain trade names and trademarks, and any parts or elements. \r\n          Your use of the iEntertain Services and iEntertain Materials, and any parts or elements does not grant to you any ownership right or intellectual property rights therein. Any commercial or promotional distribution, publishing or exploitation of the iEntertain Materials is strictly prohibited unless you have received the express prior written permission from Supplier or the otherwise applicable rights holder. Supplier reserves all rights to the iEntertain Services, iEntertain Materials and iEntertain trade names and trademarks not expressly granted in the Terms.\r\n      </p>\r\n\r\n      <p><strong>12.2\tContent Owned by iEntertain.</strong> Subject to these Terms and the payment of the applicable service Fee, Supplier grants Client and its authorized users a non-exclusive, non-transferable, non-sub-licensable license to download a single copy of any part of the Content solely for your personal, non-commercial use if you retain all copyright and proprietary notices that are contained in such part of the Content. You expressly acknowledge that you do not acquire any ownership rights by downloading any copyrighted material from or through the Platform or the iEntertain Services. You shall not copy, distribute or publish any Content or any information obtained or derived therefrom except as permitted on or through the iEntertain Services or as otherwise permitted by applicable law.</p>\r\n\r\n\r\n      <h3 style=\"width: 100%\">12.3\tClient Data.</h3>\r\n      <ul class=\"help-block\">\r\n        <li>a.\tSupplier may use Client Data in an aggregated or anonymized format for research, educational and other similar purposes. Supplier may not otherwise use or display Client Data without Client’s written consent. Supplier respects your right to exclusive ownership of your Client Data. Unless specifically permitted by you, your use of the iEntertain Services does not grant Supplier the license to use, reproduce, adapt, modify, publish or distribute the Client Data created by you or stored in your Account for Supplier’s commercial, marketing or any similar purpose. Client expressly grants Supplier the right to use and analyse aggregate system activity data associated with use of the iEntertain Services by Client and its Users for the purposes of optimizing, improving or enhancing the way the iEntertain Services operate, and to create new features and functionality in connection with the iEntertain Services in the sole discretion of Supplier.</li>\r\n        <li>b.\tClient is solely responsible for its own Client Data and the consequences of posting or publishing them on or through the iEntertain Service. In connection with Client Data, Client affirms, represents, and warrants that: (i) Client either owns its Client Data or has the necessary licenses, rights, consents, and permissions to use and authorize the Suppliers to display or otherwise use the Client Data under all patent, trademark, copyright, trade secrets, or other proprietary rights in and to your Client Data in a manner consistent with the intended features of the iEntertain Services and these Terms, and to grant the rights and license set forth in Section 11.3(a), and (ii) Client Data, Supplier’s or any iEntertain Licensee’s use of such Client Data pursuant to these Terms, and Supplier’s or any iEntertain Licensee’s exercise of the license rights set forth in Section 11.3(a), do not and will not: (a) infringe, violate, or misappropriate any third-party right, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right; (b) violate any applicable law or regulation anywhere in the world; or (c) require obtaining a license from or paying any fees and/or royalties by Supplier to any third party for the performance of any iEntertain Services Client has chosen to be performed by Supplier or for the exercise of any rights granted in these Terms, unless Client and Supplier otherwise agree.</li>\r\n      </ul>\r\n\r\n      <p><strong>12.4\tFeedback. </strong> If Client or a User provides Suppliers with any comments, bug reports, feedback, or modifications for the iEntertain Services (“Feedback”), Supplier shall have the right to use such Feedback at its discretion, including, but not limited to the incorporation of such suggested changes into the iEntertain Services. Client or User (as applicable) hereby grants Supplier a perpetual, irrevocable, nonexclusive, royalty free license under all rights necessary to incorporate, publish, reproduce, distribute, modify, adapt, prepare derivative works of, publicly display, publicly perform, exploit and use your Feedback for any purpose.</p>\r\n\r\n      <p><strong>13.\tThird-Party Sites, Products and Services</strong>\r\n          The iEntertain Services may include links to other websites or services (“Linked Sites”) solely as a convenience to Clients. Unless otherwise specifically and explicitly indicated, Supplier does not endorse any such Linked Sites or the information, material, products, or services contained on or accessible through Linked Sites. Furthermore, Supplier makes no express or implied warranties with regard to the information, material, products, or services that are contained on or accessible through Linked Sites. ACCESS AND USE OF LINKED SITES, INCLUDING THE INFORMATION, MATERIAL, PRODUCTS, AND SERVICES ON LINKED SITES OR AVAILABLE THROUGH LINKED SITES, IS SOLELY AT YOUR OWN RISK.\r\n      </p>\r\n\r\n      <p>Any content referred to as community provided is provided by third parties and not developed or maintained by iEntertain. By using any community marked code or libraries in your software development, you acknowledge and agree that iEntertain is not in any way responsible for the performance or damages caused by such community provided code or library.</p>\r\n\r\n      <h3 style=\"width: 100%\">14.\tDisclaimers; No Warranty</h3>\r\n      <p>UNLESS OTHERWISE EXPRESSLY STATED BY SUPPLIER, THE CELEBKONECT SERVICES, CELEBKONECT MATERIAL, AND ANY CONTENT, SERVICES, OR FEATURES MADE AVAILABLE IN CONJUNCTION WITH OR THROUGH THE CELEBKONECT SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, SUPPLIER AND ITS AFFILIATES DISCLAIM ALL WARRANTIES, STATUTORY, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OF PROPRIETARY RIGHTS, CORRECTNESS, ACCURACY, AND RELIABILITY.</p>\r\n      <p>UNLESS OTHERWISE EXPRESSLY STATED BY SUPPLIER, SUPPLIER AND ITS AFFILIATES DO NOT WARRANT THAT THE CELEBKONECT SERVICES AND ANY CONTENT, CLIENT DATA SERVICES, OR FEATURES MADE AVAILABLE IN CONJUNCTION WITH OR THROUGH THE CELEBKONECT SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE CELEBKONECT SERVICES AND ANY CONTENT, CLIENT DATA, SERVICES, OR FEATURES MADE AVAILABLE IN CONJUNCTION WITH OR THROUGH THE CELEBKONECT SERVICES OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>\r\n      <p>UNLESS OTHERWISE EXPRESSLY STATED BY SUPPLIER, SUPPLIER AND ITS AFFILIATES DO NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE PLATFORM, THE CELEBKONECT SERVICES, CELEBKONECT MATERIAL OR ANY LINKED SITES, IN TERMS OF CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE.</p>\r\n      <p>THE LAWS OF CERTAIN COUNTRIES AND STATES DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MIGHT HAVE ADDITIONAL RIGHTS.</p>\r\n\r\n      <h3 style=\"width: 100%\">15.\tIndemnification</h3>\r\n      <p>You agree to defend, indemnify and hold harmless Supplier and its affiliates, and their respective directors, officers, employees and agents, from any claims, losses, damages, liabilities, including attorney’s fees, arising out of your use or misuse of the iEntertain Services, iEntertain Materials, representations made to the Supplier, its affiliates and/or third parties, violation of these Terms, violation of the rights of any other person or entity, or any breach of the foregoing representations, warranties, and covenants. Supplier reserves the right, at its own expense, to assume the exclusive defence and control of any matter for which you are required to indemnify Supplier, and you agree to cooperate with such defence of these claims.</p>\r\n\r\n      <h3 style=\"width: 100%\">16.\tLimitation of Liability</h3>\r\n      <p><strong>16.1\tNo Liability:</strong> Supplier shall not be liable to the Client or User for any consequences resulting from:</p>\r\n\r\n      <ul class=\"help-block\">\r\n        <li>a.\tany modifications in these Terms, calculation and rates of Fees, the iEntertain Services, iEntertain Material, or any part or element thereof (including but not limited to Account), including any error, permanent or temporary interruption, discontinuance, suspension or other type of unavailability of the iEntertain Services or iEntertain Material;</li>\r\n        <li>b.\tdeletion of, corruption of, or failure to store any Client Data;</li>\r\n        <li>c.\tuse of Client Data by the Client or any of the Users associated with the Account;</li>\r\n        <li>d.\tupgrading or downgrading the current Plan;</li>\r\n        <li>e.\tany disclosure, loss or unauthorized use of the login credentials of Client or any authorized User due to Client’s failure to keep them confidential;</li>\r\n        <li>f.\tthe Client’s use of the Account or the iEntertain Services by means of browsers other than those accepted or supported by the Supplier;</li>\r\n        <li>g.\tthe application of any remedies against the Client or authorized Users by the Supplier, for example if the Client or User has committed a crime or conducted a breach of applicable law by using the iEntertain Services or any part or element thereof;</li>\r\n        <li>h.\tthe differences between technologies and platforms used for access, for example if certain features, functions, parts or elements of the iEntertain Services are designed for use on a personal computer or laptop and do not function on a mobile platform or a tablet;</li>\r\n        <li>i.\tthe Supplier’s application of the remedies described in these Terms, even if the reasonable grounds or legal basis for the application of these remedies turned out to be unfounded or invalid afterwards.</li>\r\n\r\n      </ul>\r\n\r\n      <p>In addition, Supplier and its affiliates shall not be liable to the Client for any claim by any User, person, Organization or third persons against the Client arising out of the Client’s failure to:</p>\r\n      <ul class=\"help-block\" style=\"margin-bottom: 40px;\">\r\n        <li>a.\tprovide Supplier with accurate information about the Client, Users or Account;</li>\r\n        <li>b.\tnotify Supplier of any reasons due to which a User does not have the right to use the Account on behalf of the Client;</li>\r\n        <li>c.\tprovide any Products which it has agreed to provide to such a person or Organization (whether such failure arises as a result of Supplier’s negligence, breach if these Terms or otherwise);</li>\r\n        <li>d.\tensure the lawfulness of the Client Data;</li>\r\n        <li>e.\tobtain the necessary rights to use the Client Data; or</li>\r\n        <li>f.\tabide by any of the restrictions described in these Terms.</li>\r\n      \r\n      </ul>\r\n\r\n      <p><strong>16.2\tLimitation of Liability.</strong> IN NO EVENT SHALL THE AGGREGATE LIABILITY OF CELEBKONECT AND ITS AFFILIATES ARISING OUT OF OR RELATED TO THESE TERMS EXCEED THE TOTAL AMOUNT PAID BY CLIENT HEREUNDER FOR THE CELEBKONECT SERVICES GIVING RISE TO THE LIABILITY IN THE SIX MONTHS PRECEDING THE FIRST INCIDENT OUT OF WHICH THE LIABILITY AROSE. THE FOREGOING LIMITATION WILL APPLY WHETHER AN ACTION IS IN CONTRACT OR TORT AND REGARDLESS OF THE THEORY OF LIABILITY, BUT WILL NOT LIMIT CLIENT’S PAYMENT OBLIGATIONS UNDER THE “PAYMENT” SECTION ABOVE.</p>\r\n      <p><strong>16.3\tExclusion of Consequential and Related Damages.</strong> IN NO EVENT WILL EITHER PARTY OR ITS AFFILIATES HAVE ANY LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS FOR ANY LOST PROFITS, REVENUES, GOODWILL, OR INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, COVER, BUSINESS INTERRUPTION OR PUNITIVE DAMAGES, WHETHER AN ACTION IS IN CONTRACT OR TORT AND REGARDLESS OF THE THEORY OF LIABILITY, EVEN IF A PARTY OR ITS AFFILIATES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR IF A PARTY’S OR ITS AFFILIATES’ REMEDY OTHERWISE FAILS OF ITS ESSENTIAL PURPOSE. THE FOREGOING DISCLAIMER WILL NOT APPLY TO THE EXTENT PROHIBITED BY LAW.</p>\r\n\r\n      <h3 style=\"width: 100%\">17.\tTermination of These Terms</h3>\r\n      <p><strong>17.1\tFor Convenience.</strong> These Terms may be terminated for convenience upon written notice to the other party as indicated in the “Notice” Section below:</p>\r\n\r\n      <ul class=\"help-block\">\r\n        <li>a.\tby the Client any time by clicking the no-questions-asked cancellation link on the Web Site, when logged in to the Account, or if the Client is paying for the Service with a PayPal account, by revoking the billing agreement on its PayPal profile; or if the client is paying for the Service via a Reseller, by means agreed upon between the Client and the Reseller;</li>\r\n        <li>b.\tby Supplier upon decision to end provision of the iEntertain Services and close the Platform; or</li>\r\n        <li>c.\tImmediately by either party, if proceedings are initiated for the other party’s liquidation or insolvency or a negotiated settlement with the other party’s creditors is concluded or an assignment is made on behalf of the other party for the benefit of creditors.</li>\r\n        \r\n      </ul>\r\n\r\n      <p><strong>17.2\tFor Default. </strong> These Terms may be terminated for default upon written notice to the other party as indicated in the “Notice” Section below:</p>\r\n      <ul class=\"help-block\">\r\n        <li>a.\tby either party in case of breach of these Terms by the other party, if the breach has not been cured within 30 days of receipt of a notice from the non-breaching party; or</li>\r\n        <li>b.\tImmediately by either party if the other party breaches its obligations, as applicable under Sections 12 [Intellectual Property Rights] or 15 [Indemnification] of these Terms.</li>\r\n      </ul>\r\n\r\n      <p><strong>17.3\tEffect of Termination.</strong> Upon termination of these Terms,</p>\r\n      <ul class=\"help-block\">\r\n        <li>a.\tSupplier shall deactivate and permanently delete the Account, within six months of the effective date of termination of these Terms. If the Client has specifically requested for an earlier deletion of the Account, Supplier shall fulfil such request within 1 month of its receipt of such request.</li>\r\n        <li><b>b.\tClient must:</b>\r\n            <ul>\r\n              <li>i.\tstop using and prevent the further usage of the iEntertain Services, including, without limitation, the Platform;</li>\r\n              <li>ii.\tpay any amounts owed to Supplier under these Terms; and</li>\r\n              <li>iii.\tdischarge any liability incurred by the Client before under these Terms prior to their termination; and</li>\r\n            </ul>\r\n        </li>\r\n        <li>c.\tThe following provisions shall survive the termination of these Terms: Sections 1, 7.4, 10, 11, 12, 14, 15, 16, 18 and 19.</li>\r\n      \r\n      </ul>\r\n\r\n      <h3 style=\"width: 100%\">17.4\tRemedies.</h3>\r\n      <p>If Supplier terminates these Terms as a result of an uncured breach by a Client or User, Supplier is entitled to use the same or similar remedies against any other persons who use the iEntertain Services in conflict with these Terms. Notwithstanding the foregoing, Supplier may also apply any other remedies available to it under the applicable law. Upon application of any remedies, the Client or User may lose Access or suffer a loss of certain features, functions, parts or elements of the iEntertain Services.</p>\r\n      <p>If Supplier has reasonable grounds to believe that the Client’s or User’s use of the iEntertain Services, including the Account may harm any third persons, Supplier has the right to take adequate measures under its control to prevent, stop and eliminate the harm, where possible, in order to protect those third persons.</p>\r\n\r\n      <h3 style=\"width: 100%\">18.\tWho You Are Contracting With</h3>\r\n      <p><strong>18.1\tGeneral.</strong> The Supplier with whom Client is contracting depends on the domicile of the Client. The Supplier determines the domicile of the Client based on the country indicated in the billing address of the User who concludes these Terms on behalf of the Client. During the Free Trial, the Supplier determines the domicile of the Client based on the location indicated in the IP-address of the User who concludes these Terms on behalf of the Client. By accepting these Terms, the Client is contracting with the Supplier listed opposite such Client’s domicile in the following table.</p>\r\n      <p><strong>18.2\tGoverning Law and Jurisdiction.</strong> In the event of a dispute, controversy or claim arising out of or in relation to these Terms, including but not limited to the formation, validity, breach or termination thereof, the parties shall attempt to solve the matter amicably in mutual negotiations. In the event a mutually acceptable resolution cannot be reached within a reasonable time, either party will be entitled to seek all available remedies, including legal remedies subject to the terms and conditions set forth below. Notwithstanding the foregoing and subject to the terms and conditions set forth below, either party may seek injunctive relief with respect to any disputed matter to the extent possible under applicable law. Should an amicable settlement between parties not be possible, the dispute shall be finally solved in court or by arbitration as designated herein subject to the terms and conditions set forth in the jurisdiction of New South Wales, Australia.</p>\r\n\r\n      <h3 style=\"width: 100%\">19.\tGeneral Provisions</h3>\r\n\r\n      <p> <strong>\tRelationship of the Parties.</strong> The parties will act solely as independent contractors. These Terms shall not be construed as creating an agency, partnership, joint venture, fiduciary duty, or any other form of legal association between the Client and either Supplier, and the Client shall not represent to the contrary, whether expressly, by implication, appearance or otherwise. These Terms are not for the benefit of any third parties. </p>\r\n      <p> <strong>19.2\tSeverability. </strong> If any term, condition or provision of these Terms is held to be invalid, unenforceable or illegal in whole or in part for any reason, that provision shall be enforced to the maximum extent permissible so as to effect the intent of the parties. The validity and enforceability of the remaining terms, conditions or provisions, or portions of them, shall not be affected.</p>\r\n\r\n      <p> <strong>19.3\tEntire Agreement. </strong> These Terms are the entire agreement between Client and Supplier regarding Client’s use of the iEntertain Services and supersedes all prior and contemporaneous agreements, proposals or representations, written or oral, concerning its subject matter. Except as otherwise provided herein, no modification, amendment, or waiver of any provision of these Terms will be effective unless in writing and signed by the party against whom the modification, amendment or waiver is to be asserted.</p>\r\n      <p> <strong>19.4\tAssignment. </strong> Client may not, directly or indirectly, in whole or in part, by operation of law or otherwise, assign or transfer these Terms or delegate any of its rights and/or obligations under these Terms without Supplier’s prior written consent. Any attempted assignment, transfer or delegation without such prior written consent will be void and unenforceable. Notwithstanding the foregoing, the Client, or its permitted successive assignees or transferees, may assign or transfer these Terms or delegate any rights or obligations hereunder without consent: </p>\r\n      <ul class=\"help-block\">\r\n        <li>(1)\tto any entity controlled by, or under common control with the Client, or its permitted successive assignees or transferees; or </li>\r\n        <li>(2)\tin connection with a merger, reorganization, transfer, sale of assets or product lines, or change of control or ownership of the Client, or its permitted successive assignees or transferees.</li>\r\n      </ul>\r\n\r\n      <p><strong>19.5\tNo Waiver. </strong> Failure of either Party to exercise or enforce any provision of or any of its rights under these Terms shall not be deemed a waiver of future enforcement of that or any other provision or right.</p>\r\n      <p><strong>19.6\tNotices. </strong> Except as otherwise specified in these Terms, all notices related to these Terms will be in writing and will be effective upon </p>\r\n\r\n      <ul class=\"help-block\">\r\n        <li>(a)\tpersonal delivery, </li>\r\n        <li>(b)\tthe second business day after mailing, or </li>\r\n        <li>(c)\texcept for notices of termination or an indemnifiable claim (“Legal Notices”), which shall clearly be identifiable as Legal Notices, the day of sending by email. Billing-related notices to you will be addressed to the relevant billing contact designated by you. All other notices to you will be addressed to the relevant Services system administrator designated by you.</li>\r\n\r\n\r\n      </ul>\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'termsandconditions',
            template: __webpack_require__("./src/app/terms/terms.component.html"),
            styles: [__webpack_require__("./src/app/terms/terms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "./src/app/transactions/transactions.component.css":
/***/ (function(module, exports) {

module.exports = ".profpage{ background-size: cover; background-repeat: no-repeat; padding: 60px 0px;\r\n    overflow: hidden; position: relative; font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.inner_pages_wrap{ padding: 60px 0px; font-family: 'Raleway', sans-serif;}\r\n\r\n.lftnav_wrap{ list-style: none; padding: 0px 0px 50px 0px; margin: 0px; background-color: #fff;\r\n    -webkit-box-shadow:0px 0px 30px #ddd; -ms-box-shadow:0px 0px 30px #ddd;\r\n    box-shadow:0px 0px 30px #ddd;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.lftnav_wrap li{ font-size: 14px; border-bottom: 1px solid #ddd;}\r\n\r\n.lftnav_wrap li a{ display: block; padding: 15px 20px; \r\n    -webkit-transition: 0.3s ease-in-out;\r\n    transition: 0.3s ease-in-out; cursor: pointer;\r\n}\r\n\r\n.lftnav_wrap li a:hover{ background-color: #259dd0; color: #fff;}\r\n\r\n.pad_bot{ padding-bottom: 20px;}\r\n\r\n.spons_cont{ font-size: 18px;}\r\n\r\n.cbhdng{ font-size:14px; font-weight:400;}\r\n\r\n.prof_active{ background-color: #259dd0; color: #fff;}\r\n\r\n.bc_btn{ width: 100%; display: block; background-color: #259dd0; color: #fff; text-align: center; font-size:16px; border-radius:0px; margin: 40px auto; height: 50px;\r\n        -webkit-box-shadow: 0px 3px 0px #1c262a; -ms-box-shadow: 0px 3px 0px #1c262a;\r\n    box-shadow: 0px 3px 0px #1c262a; font-weight:600;\r\n}\r\n\r\n/*profile page css*/\r\n\r\n.cvrwrap{ position: relative;}\r\n\r\n.profile_wrapper{ padding: 0px; margin: 0px; position: relative; width: 100%;}\r\n\r\n.addcred_btn{ float: right; padding: 6px 15px 6px 15px; outline: none;  background-color: #259dd0; color: #fff;\r\n    font-weight:bold; font-size:14px; margin-bottom: 50px;\r\n    border-radius:36px; padding-left: 30px; padding-right: 30px;\r\n}\r\n\r\n.tb_hdr > th{ font-size:13px;}\r\n\r\n.tbdy_clr{ list-style: none;}\r\n\r\n.tbdy_clr > tr:nth-child(odd){ background-color: #f5f5f5;}\r\n\r\n/*profile page css*/\r\n\r\n.c_page{ position: relative;}\r\n\r\n.title_mask{ padding: 0px 0px; background-color: rgba(0,0,0,0.5); position: absolute; bottom: 0; width: 90%;\r\n     z-index: 10; right: 0; margin: 0px; padding-left: 150px; list-style: none;\r\n}\r\n\r\n.title_mask li{ float: left; color: #fff; padding: 10px 80px 10px 0;}\r\n\r\n.big{ display: block; font-size: 25px; font-weight:600; text-transform: uppercase; padding: 0px; margin: 0px; line-height: 1.5;}\r\n\r\n.title_mask li > small{ font-size:14px;}\r\n\r\n.profile_manager{ position: absolute; left: 40px; bottom: -80px;  z-index: 15;\r\n}\r\n\r\n.profile_box{ width: 150px; height: 150px; border-radius:100%; \r\n    background-color: #fff; z-index: 20; overflow: hidden; border: 1px solid #ccc;\r\n    -webkit-box-shadow: 0px 0px 30px #666; -ms-box-shadow: 0px 0px 30px #666; box-shadow: 0px 0px 30px #666;\r\n}\r\n\r\n.profile_edit{ color: #000; font-size:14px; text-align: center; position: relative; top: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile_info{ padding-left: 200px;}\r\n\r\n.profile_info ul{ list-style: none; padding: 30px 0px 30px 0px; margin: 0px;}\r\n\r\n.profile_info ul li{ float: left; width: 25%;}\r\n\r\n.profile_info ul li span{ text-transform: uppercase; color: #666; font-size:14px; font-weight:400; display: block;}\r\n\r\n.profile_info ul li p{ text-transform: capitalize; color: #000; font-size:16px; font-weight:600;}\r\n\r\n#celebs_list{ padding: 0px 0px;}\r\n\r\n.lgn_hdng {\r\n    color: #000;\r\n    font-weight: 300;\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    padding-bottom: 30px;\r\n  }\r\n\r\n.date_field{ margin-top:12px!important;}\r\n\r\n.error_mes{ color:red;}\r\n\r\n.image-upload > input {\r\n    display: none;\r\n  }\r\n\r\n.image-upload {\r\n    width: 150px;\r\n    height: 150px;\r\n    border-radius: 100%;\r\n    background-color: #fff;\r\n    z-index: 20;\r\n    overflow: hidden;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-shadow: 0px 0px 30px #666;\r\n    -ms-box-shadow: 0px 0px 30px #666;\r\n    box-shadow: 0px 0px 30px #666;\r\n  }\r\n\r\n.img_boxer{ overflow: hidden; padding:0 0 75% 0; position: relative;}\r\n\r\n.bpc{ width: 100%; height: 100%; position: absolute; top: 0;}\r\n\r\n.pfimger{ width:150px; height:150px;}\r\n\r\n.membername {margin-left: 14px;cursor: pointer;}\r\n\r\n.card-title, .card-text {padding-left: 1rem !important;}\r\n\r\n.img-fluid1 { width: auto;}\r\n\r\n.cardspace{ padding: 30px 20px;}\r\n\r\n.feed_bg{ max-width: auto; max-width: 100%; padding: 30px!important; overflow: hidden;}\r\n\r\n.space_imng{ margin-bottom: 25px!important;}\r\n\r\n.mycard_space{ margin-bottom: 25px;}\r\n\r\n#mymedias{ margin-top: 30px;}\r\n\r\n.mybgspacer{ position: relative; border: 3px solid #fff; padding:10px 10px; min-height: 180px; overflow: hidden; }\r\n\r\n.disable_btn{ cursor:not-allowed;}\r\n\r\n.update_profileform{ padding:30px; -webkit-box-shadow:0px 0px 60px #ccc; -ms-box-shadow:0px 0px 60px #ccc;\r\n                     box-shadow:0px 0px 60px #ccc; background-color:#fff; border:1px solid #ddd; margin-bottom:0px;\r\n                      -webkit-transition: 0.3s ease-in-out;\r\n              transition: 0.3s ease-in-out;          \r\n}\r\n\r\n.show_updpform{   margin-bottom:50px;}\r\n\r\n.lg_email {\r\n  border: none;\r\n  border-radius: 0px;\r\n  border-bottom: 1px solid #ccc;\r\n  outline: none;\r\n  box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  font-size: 12px;\r\n  -webkit-transition: 0.3s ease-in-out;\r\n  transition: 0.3s ease-in-out;\r\n  position: relative;\r\n  padding: 0 0 5px 0px;\r\n}\r\n\r\n.lg_email:focus {\r\n    border-color: #259dd0;\r\n    color: #259dd0;\r\n  }\r\n\r\n.lg_email::-webkit-input-placeholder {\r\n    color: #ccc;\r\n  }\r\n\r\n.embx {\r\n  position: relative;\r\n}\r\n\r\n.usicn {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 5px;\r\n  z-index: 10;\r\n  color: #ccc;\r\n}\r\n\r\n.lg_email:focus .usicn {\r\n  color: #259dd0 !important;\r\n}\r\n\r\n.embx > label {\r\n  color: #ccc;\r\n  font-size: 12px;\r\n}\r\n\r\n.embx2 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.lgnbtner {\r\n  float: right;\r\n  background-color: #259dd0;\r\n  border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.chk_box {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding-left: 30px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 13px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  color: #ccc;\r\n}\r\n\r\n.chk_box input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 16px;\r\n  width: 16px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.chk_box:hover input ~ .checkmark {\r\n  background-color: #fff;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark {\r\n  background-color: #259dd0;\r\n  border-color: #259dd0;\r\n}\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.chk_box input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n.chk_box .checkmark:after {\r\n  left: 6px;\r\n  top: 3px;\r\n  width: 4px;\r\n  height: 7px;\r\n  border: solid white;\r\n  border-width: 0 2px 2px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.fgp {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  left: 0;\r\n  padding: 12px 50px;\r\n  font-size: 13px;\r\n}\r\n\r\n.signup_hdng {\r\n  color: #259dd0;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.hp_blk {\r\n  list-style: none;\r\n  font-size: 12px;\r\n}\r\n\r\n.upd_btn{\r\n  font-weight:600; background-color: #259dd0;\r\n  border-radius:36px; padding-left: 30px; padding-right: 30px;\r\n}\r\n\r\n.media_bg{ position: absolute; top: 50%; left: 50%; width: 100%; height: 100%;\r\n  -webkit-transform: translate(-50%, -50%); -mos-transform: translate(-50%, -50%); transform: translate(-50%, -50%);\r\n}\r\n\r\n/*Responsive code */\r\n\r\n@media screen and (max-width: 990px){\r\n  .myresp_cont{ max-width: 100%;}\r\n  .title_mask{ width: 100%; padding-left: 120px;}\r\n  .profile_manager{ left: 10px;}\r\n  .image-upload{ width: 80px; height: 80px;}\r\n  .bc_btn{ font-size:12px;}\r\n}\r\n\r\n@media screen and (max-width: 767px){\r\n    .profile_info{ display: none;}\r\n    .profile_tabs{ margin-top:90px;}\r\n    .title_mask > li{ padding-right: 50px;}\r\n    .bc_btn{ font-size:14px;}\r\n    .inner_pages_wrap{ padding: 40px 0px;}\r\n    .lftnav_wrap{ margin-bottom: 50px;}\r\n    .celeb_pic{ padding: 0 0 100% 0;}\r\n    .update_profileform{ margin-top:90px;}\r\n    #celebs_list{ margin-top:90px;}\r\n    #pf{ margin-bottom: 0px!important;}\r\n    \r\n  }\r\n\r\n@media screen and (max-width: 660px){\r\n    .tabs_header > li{ font-size: 12px;}\r\n    .mytabicn{  font-size: 1rem;}\r\n  \r\n    .prof_infodata, .prof_feedsdata, .prof_media {\r\n      padding: 30px 10px 0px 10px;\r\n  }\r\n  .celeb_logo{ width:80px;}\r\n  .prof_infodata h3{ font-size:13px;}\r\n  .prof_infodata p{ font-size: 12px;}\r\n  \r\n  }\r\n\r\n@media screen and (max-width: 480px){\r\n    .title_mask > li{ padding-right: 10px; font-size: 12px;}\r\n    .image-upload{ width: 60px; height: 60px;}\r\n    .profile_manager{ left: 10px; bottom: -64px;}\r\n    .title_mask{ padding-left: 90px;}\r\n    .tabs_header > li{  padding: 15px 5%;}\r\n    .upd_btn{ width: 100%; display: block; margin: 10px auto;}\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid profpage\" [style.background-image]=\"'url(\\'assets/images/land_bg.jpg\\')'\">\r\n  <div class=\"container\">\r\n   \r\n    \r\n  </div>\r\n</div>\r\n\r\n<!--video container ends-->\r\n\r\n\r\n\r\n<div class=\"container-fluid inner_pages_wrap\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-sm-12 col-md-3 col-lg-3\">\r\n        <ul class=\"lftnav_wrap\">\r\n          <li><a (click)=\"profilePage()\"><i class=\"far fa-user-circle\"></i> My Profile</a></li>\r\n          <li><a (click)=\"celebPage()\"><i class=\"far fa-star\"></i> My Celebrities</a></li>\r\n          <li class=\"prof_active\"><a (click)=\"transactionPage()\"><i class=\"far fa-money-bill-alt\"></i> My Transactions</a></li>\r\n          <!-- <li><a (click)=\"preferencePage()\"><i class=\"far fa-money-bill-alt\"></i> My Preferences</a></li> -->\r\n        </ul>\r\n        \r\n   \r\n      </div>\r\n      <!--left side nav ends-->\r\n\r\n      <div class=\"col-12 col-sm-12 col-md-9 col-lg-9\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                    <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                  \r\n                              <div class=\"cvrwrap\">\r\n                                  <div class=\"profile_wrapper\">\r\n                                    <img src=\"assets/images/coverpage.jpg\" class=\"c_page\" width=\"100%\" alt=\"coverpage\" title=\"coverpage\">\r\n                                    <ul class=\"title_mask\">\r\n                                      <li>\r\n                                        <span class=\"big\">{{memPreferences.followers}}</span>\r\n                                        <small>Followers</small>\r\n                                      </li>\r\n                      \r\n                                      <li>\r\n                                        <span class=\"big\">{{memPreferences.fans}}</span>\r\n                                        <small>Following</small>\r\n                                      </li>\r\n                      \r\n                                      <li>\r\n                                        <span class=\"big\">{{memPreferences.posts}}</span>\r\n                                        <small>Posts</small>\r\n                                      </li>\r\n                                    </ul>\r\n                      \r\n                                    <div class=\"profile_manager\">\r\n                                      <!--<div class=\"profile_box\">\r\n                                      <img src=\"{{imageUrl+profile.avtar_imgPath}}\" class=\"act_bg\" width=\"100%\" alt=\"{{profile.name}}\" title=\"{{profile.name}}\">\r\n                                      </div>-->\r\n                      \r\n                                      <div class=\"image-upload\">\r\n                                          <div class=\"img_boxer\">\r\n                                          <!--<form [formGroup]=\"formProfile\" enctype=\"multipart/form-data\" method=\"post\" name=\"fileinfo\">-->\r\n                                          <label for=\"selectFile\">\r\n                                            <img src=\"{{imageUrl+profile.avtar_imgPath}}\" width=\"100%\"  class=\"bpc\"/>\r\n                                            <img *ngIf=\"profile.avtar_imgPath==''\"  src=\"assets/images/profile_pic.jpg\" width=\"100%\" alt=\"{{profile.name}}\" title=\"{{profile.name}}\" />\r\n                                          </label>\r\n                                          <input type=\"file\" id=\"selectFile\" (change)=\"readURL($event)\" name=\"selectFile\" class=\"form-group\" />\r\n                      \r\n                                          <!--<input type=\"file\" id=\"file-input\" (change)=\"readURL($event)\" />-->\r\n                                          <!--</form>-->\r\n                                        </div>\r\n                                        </div>\r\n                      \r\n                                        <p class=\"profile_edit\" (click)=\"openPform(profile._id)\"><i class=\"fas fa-pencil-alt\"></i> Edit</p>\r\n                                    </div>\r\n\r\n                                  </div>\r\n                              </div>\r\n                      \r\n                      \r\n                              <div class=\"profile_info\">\r\n                                <ul>\r\n                                  <li>\r\n                                    <span>Name</span>\r\n                                    <p>{{profile.name}}</p>\r\n                                </li>\r\n                                <li>\r\n                                    <span>Occupation</span>\r\n                                    <p>{{profile.profession}} </p>\r\n                                </li>\r\n                                <li>\r\n                                    <span>Country</span>\r\n                                    <p>{{profile.country}}</p>\r\n                                </li>\r\n\r\n\r\n                                <li>\r\n                                  <button type=\"button\" (click)=\"CreditPage()\" class=\"btn btn-default addcred_btn \">Buy Credits</button>\r\n                                </li>\r\n                                <div class=\"clearfix\"></div>\r\n                                </ul>\r\n                              </div>\r\n                  \r\n                            </div>\r\n                          </div>\r\n\r\n\r\n                           <div class=\"col-12 update_profileform\" *ngIf=\"pform\" id=\"pf\" style=\"margin-bottom:50px;\">\r\n\r\n          <form [formGroup]=\"profileForm\" (ngSubmit)=\"onUpdateProfile(profile)\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"name\">First Name</label>\r\n\r\n\r\n                <input type=\"text\" [(ngModel)]=\"profile.name\" class=\"form-control lg_email reg_email\" id=\"profile.name\" placeholder=\"First Name\" formControlName=\"profile.name\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"lastname\">Last Name</label>\r\n                <input type=\"text\" [(ngModel)]=\"profile.lastName\" class=\"form-control lg_email reg_email\" id=\"profile.lastName\" placeholder=\"Last Name\" formControlName=\"profile.lastName\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"mobileNumber\">Phone</label>\r\n                <input type=\"number\" [(ngModel)]=\"profile.mobileNumber\" class=\"form-control lg_email reg_email\" id=\"profile.mobileNumber\" placeholder=\"Mobile Number\" formControlName=\"profile.mobileNumber\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" [(ngModel)]=\"profile.email\" class=\"form-control lg_email reg_email\" id=\"email\" placeholder=\"profile.email\" formControlName=\"profile.email\">\r\n              </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-row\">\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"gender\">Gender</label>\r\n                <select id=\"profile.gender\" [(ngModel)]=\"profile.gender\" class=\"form-control lg_email reg_email\" formControlName=\"profile.gender\">\r\n\r\n                  <option value=\"Male\" selected>Male</option>\r\n                  <option value=\"Female\">Female</option>\r\n                  <option value=\"Others\">Others</option>\r\n                </select>\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"dateOfBirth\">Date of Birth</label>\r\n                <input type=\"date\" [(ngModel)]=\"profile.dateOfBirth\" class=\"form-control lg_email reg_email date_field\" id=\"profile.dateOfBirth\" formControlName=\"profile.dateOfBirth\" />\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"location\">Location</label>\r\n                <input type=\"text\" [(ngModel)]=\"profile.location\" class=\"form-control lg_email reg_email\" id=\"profile.location\" placeholder=\"Location\" formControlName=\"profile.location\">\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"about\">About</label>\r\n                <input type=\"text\" [(ngModel)]=\"profile.aboutMe\" class=\"form-control  lg_email reg_email\" id=\"profile.aboutMe\" placeholder=\"About Me\" formControlName=\"profile.aboutMe\">\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n           \r\n\r\n            <div *ngIf=\"isValid\">\r\n              <p class=\"error_mes\">{{successMessage}}</p>\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary upd_btn\">Update Profile </button>\r\n            <button type=\"button\" class=\"btn btn-primary upd_btn\" (click)=\"closePform()\">Close </button>\r\n\r\n          </form>\r\n\r\n        </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n       \r\n\r\n      </div>\r\n      <!--mid Cont ends-->\r\n\r\n      \r\n\r\n      <div class=\"container\"  id=\"celebs_list\">\r\n        <div class=\"col-12\">\r\n      \r\n      <div class=\"clearfix\"></div>\r\n\r\n      <div class=\"table-responsive\"> \r\n          <table class=\"table table-bordered\">\r\n              <thead>\r\n                  <tr class=\"tb_hdr\">\r\n                      <th>ID</th>\r\n                      <th>Member Id</th>\r\n                      <th>Financial Type</th>\r\n                      <th>Updated At</th>\r\n                      <th>Created At</th>\r\n                      <th>Payment Gateway Response</th>\r\n                      <th>Transaction RefNumber</th>\r\n                      <th>Transaction AuthCode</th>\r\n                      <th>Transaction Value</th>\r\n                      <th>Transaction Mode</th>\r\n                      <th>Financial Status</th>\r\n                  </tr>\r\n              </thead>\r\n              <tbody class=\"tbdy_clr\">\r\n                <tr *ngFor=\"let t of transactions\">\r\n                  <td>{{t._id}}</td>\r\n                  <td>{{t.memberId}}</td>\r\n                  <td>{{t.financialType}}</td>\r\n                  <td>{{t.updated_at}}</td>\r\n                  <td>{{t.created_at}}</td>\r\n                  <td>{{t.paymentgatewayResponse}}</td>\r\n                  <td>{{t.transactionRefNumber}}</td>\r\n                  <td>{{t.transactionAuthCode}}</td>\r\n                  <td>{{t.transactionValue}}</td>\r\n                  <td>{{t.transactionMode}}</td>\r\n                  <td>{{t.financialStatus}}</td>\r\n                </tr>\r\n                  \r\n              </tbody>\r\n          </table>\r\n      </div>\r\n    </div>\r\n    </div>\r\n      \r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_observable_service__ = __webpack_require__("./src/app/services/observable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_register_service__ = __webpack_require__("./src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(routSvc, cbOvc, route, registerService, fb, ele) {
        this.routSvc = routSvc;
        this.cbOvc = cbOvc;
        this.route = route;
        this.registerService = registerService;
        this.fb = fb;
        this.ele = ele;
        this.imageUrl = "http://18.219.37.107:4300/";
        //demo
        //imageUrl: any = "http://prodapi.celebkonect.com:4300/";
        // imageUrl: any = "http://192.168.2.134:4300/";
        this.name = localStorage.getItem('loginSessId');
        this.isValid = false;
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        this.email = localStorage.getItem('loginSessId');
        console.log("seesion" + localStorage.getItem('loginSessId'));
        this.id = localStorage.getItem('memberId');
        this.ongetprofilebyemail(this.email);
        this.getMemberByEmail(this.email);
        this.onGetTransactions();
        this.onProfileFormGroup();
    };
    TransactionsComponent.prototype.openPform = function (id) {
        this.pform = true;
        var frmwrap = document.getElementById('pf');
        frmwrap.classList.add('show_updpform');
    };
    TransactionsComponent.prototype.onProfileFormGroup = function () {
        this.profileForm = this.fb.group({
            //firstname: ['', Validators.required],
            //lastname: ['', Validators.required],
            //mobileNumber: ['', Validators.required],
            //dateOfBirth: ['', Validators.required],
            //aboutMe: ['', Validators.required],
            //email: ['', Validators.required],
            //gender: ['', Validators.required],
            //country: ['', Validators.required],
            //location: ['', Validators.required],
            'profile.name': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.lastName': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.mobileNumber': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.email': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.location': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.aboutMe': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.gender': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            'profile.dateOfBirth': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
        });
    };
    TransactionsComponent.prototype.closePform = function () {
        this.pform = false;
        var frmwrap = document.getElementById('pf');
        frmwrap.classList.remove('show_updpform');
    };
    TransactionsComponent.prototype.profilePage = function () {
        //this.routSvc.navigateByUrl('/profile');
        this.routSvc.navigate(['/profile/']);
    };
    TransactionsComponent.prototype.celebPage = function () {
        this.routSvc.navigate(['/celebrities/']);
    };
    TransactionsComponent.prototype.transactionPage = function () {
        this.routSvc.navigate(['/transactions/']);
        this.onGetTransactions();
    };
    TransactionsComponent.prototype.preferencePage = function () {
        this.routSvc.navigate(['/mypreferences']);
    };
    TransactionsComponent.prototype.CreditPage = function () {
        this.routSvc.navigate(['/credits/']);
    };
    TransactionsComponent.prototype.ongetprofilebyemail = function (email) {
        var _this = this;
        this.email = email;
        this.cbOvc.onGetProfileByEmail(email).subscribe(function (data) {
            _this.profile = data;
            console.log(data);
            _this.oldImage = _this.profile.avtar_imgPath;
        });
        return this.profile;
    };
    TransactionsComponent.prototype.getMemberByEmail = function (email) {
        var _this = this;
        email = this.email;
        this.cbOvc.getMemberByEmail(this.email).subscribe(function (x) {
            console.log("testingid" + x._id);
            _this.id = x._id;
            localStorage.setItem('memberId', x._id);
            console.log("final" + _this.id);
            _this.onGetContentByID();
            _this.ongetFansandFolowers(_this.id);
        });
        return this.id;
    };
    TransactionsComponent.prototype.onGetTransactions = function () {
        var _this = this;
        //this.id = this.id
        this.cbOvc.onGetTransactions(this.id).subscribe(function (data) {
            _this.transactions = data;
            console.log(data);
        });
    };
    TransactionsComponent.prototype.onGetContentByID = function () {
        var _this = this;
        this.cbOvc.onGetContentByID(this.id).subscribe(function (result) {
            _this.feedDetails = result;
            _this.postlist = result.length;
            console.log(_this.feedDetails);
        }, function (error) { return _this.errorMessage = error; });
        console.log(this.errorMessage);
        return this.feedDetails;
    };
    TransactionsComponent.prototype.onUpdateProfile = function (profile) {
        if (this.profileForm.valid) {
            this.isValid = false;
            this.pform = false;
            this.cbOvc.onUpdateMember(profile).subscribe(function (result) {
                console.log(result);
            });
        }
        else {
            this.isValid = true;
            this.successMessage = "please Enter User Details";
            this.pform = true;
        }
    };
    TransactionsComponent.prototype.readURL = function (event) {
        var files = this.ele.nativeElement.querySelector('#selectFile').files;
        if (files.length > 0 && files.count != 0 && files != null) {
            var req = files;
            var formData = new FormData();
            var file = files[0];
            this.images = file.name;
            formData.append('selectFile', file, file.name);
            formData.append('avtars', file, file.id);
            console.log(formData);
            console.log(files);
            if (this.images != null && this.images != "") {
                this.profile.avtar_originalname = this.images.toString();
                this.profile.avtar_imgPath = "avtars/" + this.images.toString();
            }
            else {
                this.profile.avtar_imgPath = this.oldImage;
            }
            this.cbOvc.onfileupload(this.id, formData).subscribe(function (res) { return console.log(res); });
            this.cbOvc.onUpdateMember(this.profile).subscribe(function (result) {
                console.log(result);
            });
        }
        this.getMemberByEmail(this.email);
    };
    TransactionsComponent.prototype.ongetFansandFolowers = function (id) {
        var _this = this;
        this.cbOvc.getFansandFolowers(id).subscribe(function (data) {
            _this.memPreferences = data;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TransactionsComponent.prototype, "fileInput", void 0);
    TransactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'transactions',
            template: __webpack_require__("./src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__("./src/app/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_observable_service__["a" /* ObservableService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map