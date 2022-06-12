(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/fQS":
/*!*****************************************************************!*\
  !*** ./src/app/shared/notes-sidebar/notes-sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotesSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesSidebarComponent", function() { return NotesSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function NotesSidebarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesSidebarComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleNotes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesSidebarComponent_div_1_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesSidebarComponent_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleNotes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotesSidebarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesSidebarComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleNotes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesSidebarComponent_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggleNotes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class NotesSidebarComponent {
    constructor() {
        this.notesShow = false;
        this.toggleNotes = () => {
            this.notesShow = !this.notesShow;
        };
    }
    ngOnInit() {
    }
}
NotesSidebarComponent.ɵfac = function NotesSidebarComponent_Factory(t) { return new (t || NotesSidebarComponent)(); };
NotesSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotesSidebarComponent, selectors: [["app-notes-sidebar"]], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "container"], ["class", "modal-parent", 3, "click", 4, "ngIf"], ["class", "notes-placeholder", 3, "click", 4, "ngIf"], [1, "modal-parent", 3, "click"], [1, "notes", 3, "click"], ["title", "Hide Notes", 1, "hide-button", 3, "click"], ["viewBox", "0 0 32 32", 1, "icon", "circle-right"], ["d", "M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"], ["d", "M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"], [1, "notes-placeholder", 3, "click"], ["title", "Show Notes", 1, "show-button", 3, "click"], ["viewBox", "0 0 32 32", 1, "icon", "circle-left"], ["d", "M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"], ["d", "M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"]], template: function NotesSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotesSidebarComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotesSidebarComponent_div_2_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notesShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.notesShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".notes[_ngcontent-%COMP%], .notes-placeholder[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  background-color: white;\n}\n\n.notes-placeholder[_ngcontent-%COMP%] {\n  width: 24px;\n  cursor: pointer;\n}\n\n.show-button[_ngcontent-%COMP%], .hide-button[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 32px;\n  width: 32px;\n  top: 50%;\n  right: 16px;\n  position: relative;\n  border-radius: 50%;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  font-size: 32px;\n  cursor: pointer;\n}\n\n.show-button[_ngcontent-%COMP%]:hover, .hide-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25vdGVzLXNpZGViYXIvbm90ZXMtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFBSTtFQUNJLDJDQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbm90ZXMtc2lkZWJhci9ub3Rlcy1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGVzLCAubm90ZXMtcGxhY2Vob2xkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ub3Rlcy1wbGFjZWhvbGRlciB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNob3ctYnV0dG9uLCAuaGlkZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notes-sidebar',
                templateUrl: './notes-sidebar.component.html',
                styleUrls: ['./notes-sidebar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\syuga\Documents\School\SWE 632\swe-632-calendar\calendar\src\main.ts */"zUnb");


/***/ }),

/***/ "0zEo":
/*!*************************************************!*\
  !*** ./src/app/shared/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class ModalComponent {
    constructor() {
        this.closeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = (event) => {
            event.stopPropagation();
            this.closeClick.emit();
        };
    }
    ngOnInit() { }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], outputs: { closeClick: "closeClick" }, ngContentSelectors: _c0, decls: 5, vars: 0, consts: [[1, "modal-container"], [1, "close", 3, "click"], ["viewBox", "0 0 32 32", 1, "icon", "icon-cross"], ["d", "M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_div_click_1_listener($event) { return ctx.close($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".modal-container[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-left: 5vw;\n  margin-right: 5vw;\n  position: fixed;\n  top: 5vh;\n  width: calc(100% - 10vw);\n  max-height: calc(100% - 10vh);\n  padding: 10px;\n  color: black;\n  cursor: auto;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n}\n\n@media only screen and (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    font-size: 16px;\n    margin: 0;\n    padding: 20px;\n    width: 100%;\n  }\n}\n\n.close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 0;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.close[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFSTtFQUNJLG9DQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNXZoO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwdncpO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTB2aCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return []; }, { closeClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "1LP8":
/*!********************************************************!*\
  !*** ./src/app/activity-log/activity-log.component.ts ***!
  \********************************************************/
/*! exports provided: ActivityLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogComponent", function() { return ActivityLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ActivityLogComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActivityLogComponent.ɵfac = function ActivityLogComponent_Factory(t) { return new (t || ActivityLogComponent)(); };
ActivityLogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityLogComponent, selectors: [["app-activity-log"]], decls: 2, vars: 0, template: function ActivityLogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "activity-log works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXR5LWxvZy9hY3Rpdml0eS1sb2cuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityLogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activity-log',
                templateUrl: './activity-log.component.html',
                styleUrls: ['./activity-log.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2g2N":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/toast */ "jJzv");




class ToastService {
    constructor() {
        this.toastsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.addToast = (type, text, timeout) => {
            const toast = new src_app_models_toast__WEBPACK_IMPORTED_MODULE_2__["Toast"](type, text);
            this.toasts.push(toast);
            this.toastsSubject.next(this.toasts);
            if (timeout) {
                setTimeout(() => {
                    this.removeToast(toast);
                }, timeout * 1000);
            }
        };
        this.removeToast = (toast) => {
            const index = this.toasts.findIndex(t => t.uuid === toast.uuid);
            this.toasts.splice(index, 1);
            this.toastsSubject.next(this.toasts);
        };
        this.toasts = [];
        this.toastsSubject.next(this.toasts);
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); };
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2w8Z":
/*!*****************************************************************!*\
  !*** ./src/app/month-grid/month-title/month-title.component.ts ***!
  \*****************************************************************/
/*! exports provided: MonthTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthTitleComponent", function() { return MonthTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_monthNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/monthNames */ "5Pow");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MonthTitleComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r2);
} }
function MonthTitleComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", y_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](y_r4);
} }
class MonthTitleComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.previous = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.monthNames = [
            src_app_models_monthNames__WEBPACK_IMPORTED_MODULE_1__["MonthNames"].JAN,
            src_app_models_monthNames__WEBPACK_IMPORTED_MODULE_1__["MonthNames"].FEB,
            src_app_models_monthNames__WEBPACK_IMPORTED_MODULE_1__["MonthNames"].MAR,
            src_app_models_monthNames__WEBPACK_IMPORTED_MODULE_1__["MonthNames"].APR,
            src_app_models_monthNames__WEBPACK_IMPORTED_MODULE_1__["MonthNames"].MAY,
            src_app_models_monthNames__WEBPACK_IMPORTED_MODULE_1__["MonthNames"].JUN,
            src_app_models_monthNames__WEBPACK_IMPORTED_MODULE_1__["MonthNames"].JUL,
            src_app_models_monthNames__WEBPACK_IMPORTED_MODULE_1__["MonthNames"].AUG,
            src_app_models_monthNames__WEBPACK_IMPORTED_MODULE_1__["MonthNames"].SEP,
            src_app_models_monthNames__WEBPACK_IMPORTED_MODULE_1__["MonthNames"].OCT,
            src_app_models_monthNames__WEBPACK_IMPORTED_MODULE_1__["MonthNames"].NOV,
            src_app_models_monthNames__WEBPACK_IMPORTED_MODULE_1__["MonthNames"].DEC
        ];
        this.allowedYears = [];
        this.populateAllowedYears = () => {
            for (let i = 2000; i <= 2100; i++) {
                this.allowedYears.push(i);
            }
        };
        this.monthYearChange = (e) => {
            if (e.target.name === "mobileDate") {
                let split = e.target.value.split("-");
                this.formGroup.controls.year.setValue(split[0]);
                this.formGroup.controls.month.setValue(`${parseInt(split[1]) - 1}`);
                this.formGroup.controls.date.setValue(split[2]);
            }
            this.dateChange.emit(new Date(parseInt(this.formGroup.controls.year.value), parseInt(this.formGroup.controls.month.value), parseInt(this.formGroup.controls.date.value)));
        };
        this.goToToday = () => {
            this.formGroup.controls.month.setValue(new Date().getMonth());
            this.formGroup.controls.year.setValue(new Date().getFullYear());
            this.dateChange.emit(new Date());
        };
        this.goToNextMonth = (emit = true) => {
            if (emit)
                this.next.emit();
            this.formGroup.controls.month.setValue((parseInt(this.formGroup.controls.month.value) + 1) % 12);
            if (parseInt(this.formGroup.controls.month.value) === 0) {
                this.formGroup.controls.year.setValue(parseInt(this.formGroup.controls.year.value) + 1);
            }
            this.setDate();
        };
        this.goToPreviousMonth = (emit = true) => {
            if (emit)
                this.previous.emit();
            this.formGroup.controls.month.setValue((parseInt(this.formGroup.controls.month.value) + 11) % 12);
            if (parseInt(this.formGroup.controls.month.value) === 11) {
                this.formGroup.controls.year.setValue(parseInt(this.formGroup.controls.year.value) - 1);
            }
            this.setDate();
        };
        this.goToNextDay = () => {
            let newDay = ((this.formGroup.controls.date.value + 1) % this.getLastDayOfMonth()) === 0 ? this.getLastDayOfMonth() : (this.formGroup.controls.date.value + 1) % this.getLastDayOfMonth();
            if (newDay === 1) {
                this.goToNextMonth(false);
            }
            this.formGroup.controls.date.setValue(newDay);
            this.setDate();
            this.dateChange.emit(new Date(parseInt(this.formGroup.controls.year.value), parseInt(this.formGroup.controls.month.value), parseInt(this.formGroup.controls.date.value)));
        };
        this.goToPreviousDay = () => {
            let lastDayofPreviousMonth = this.getLastDayOfMonth(this.formGroup.controls.month.value - 1);
            let newDay = (this.formGroup.controls.date.value - 1) < 1 ? lastDayofPreviousMonth : this.formGroup.controls.date.value - 1;
            if (newDay === lastDayofPreviousMonth && (this.formGroup.controls.date.value - 1) < 1) {
                this.goToPreviousMonth(false);
            }
            this.formGroup.controls.date.setValue(newDay);
            this.setDate();
            this.dateChange.emit(new Date(parseInt(this.formGroup.controls.year.value), parseInt(this.formGroup.controls.month.value), parseInt(this.formGroup.controls.date.value)));
        };
        /**
         *
         * @param m the month that you want to get the last day of. It will default to the current month.
         * @param y  the year of the month that you want to get the last day of
         * @returns the last day of the given month
         */
        this.getLastDayOfMonth = (m = this.formGroup.controls.month.value, y = this.formGroup.controls.year.value) => {
            let d = new Date(y, m + 1, 0);
            return d.getDate();
        };
    }
    ngOnInit() {
        this.populateAllowedYears();
        this.formGroup = this.formBuilder.group({
            month: [this.month, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            year: [this.year, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            date: [this.date]
        });
        this.setDate();
    }
    setDate() {
        let month = parseInt(this.formGroup.controls.month.value) + 1 < 10 ? `0${parseInt(this.formGroup.controls.month.value) + 1}` : parseInt(this.formGroup.controls.month.value) + 1;
        let date = parseInt(this.formGroup.controls.date.value) < 10 ? `0${this.formGroup.controls.date.value}` : this.formGroup.controls.date.value;
        this.currentDate = `${this.formGroup.controls.year.value}-${month}-${date}`;
    }
}
MonthTitleComponent.ɵfac = function MonthTitleComponent_Factory(t) { return new (t || MonthTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
MonthTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonthTitleComponent, selectors: [["app-month-title"]], inputs: { month: "month", year: "year", date: "date" }, outputs: { next: "next", previous: "previous", dateChange: "dateChange" }, decls: 22, vars: 4, consts: [[3, "formGroup"], [1, "month-title-container"], ["title", "Previous Month", 1, "previous", 3, "click"], ["viewBox", "0 0 32 32", 1, "icon", "arrow-left"], ["d", "M1 16l15 15v-9h16v-12h-16v-9z"], ["name", "monthSelect", "id", "monthSelect", "title", "Month Input", "formControlName", "month", 3, "change"], ["ngFor", "", 3, "ngForOf"], ["name", "yearSelect", "id", "yearSelect", "title", "Year Input", "formControlName", "year", 3, "change"], ["title", "Next Month", 1, "next", 3, "click"], ["d", "M31 16l-15-15v9h-16v12h16v9z"], [1, "today", 3, "click"], [1, "mobile-title-container"], ["type", "date", "name", "mobileDate", 3, "value", "change"], [3, "value"]], template: function MonthTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTitleComponent_Template_button_click_2_listener() { return ctx.goToPreviousMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MonthTitleComponent_Template_select_change_5_listener($event) { return ctx.monthYearChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MonthTitleComponent_ng_template_6_Template, 2, 2, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MonthTitleComponent_Template_select_change_7_listener($event) { return ctx.monthYearChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MonthTitleComponent_ng_template_8_Template, 2, 2, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTitleComponent_Template_button_click_9_listener() { return ctx.goToNextMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTitleComponent_Template_button_click_12_listener() { return ctx.goToToday(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTitleComponent_Template_button_click_15_listener() { return ctx.goToPreviousDay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MonthTitleComponent_Template_input_change_18_listener($event) { return ctx.monthYearChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTitleComponent_Template_button_click_19_listener() { return ctx.goToNextDay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.monthNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allowedYears);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.currentDate);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: [".month-title-container[_ngcontent-%COMP%], .mobile-title-container[_ngcontent-%COMP%] {\n  margin: 4px;\n  padding: 4px;\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n}\n\n.previous[_ngcontent-%COMP%], .next[_ngcontent-%COMP%], .today[_ngcontent-%COMP%] {\n  font-size: x-large;\n  display: flex;\n  align-items: center;\n}\n\nselect[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  border: 0px;\n  cursor: pointer;\n  font-size: x-large;\n  width: -moz-fit-content;\n  width: fit-content;\n  box-shadow: 0px 0px 10px lightgray;\n}\n\nselect[_ngcontent-%COMP%]:hover, input[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px gray;\n}\n\n.mobile-title-container[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 768px) {\n  .mobile-title-container[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .month-title-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9udGgtZ3JpZC9tb250aC10aXRsZS9tb250aC10aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0NBQUE7QUFFRjs7QUFBRTtFQUNFLDZCQUFBO0FBRUo7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNJLGFBQUE7RUFBSjs7RUFFQTtJQUNJLGFBQUE7RUFDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9udGgtZ3JpZC9tb250aC10aXRsZS9tb250aC10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb250aC10aXRsZS1jb250YWluZXIsIC5tb2JpbGUtdGl0bGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiA0cHg7XHJcbn1cclxuLnByZXZpb3VzLCAubmV4dCwgLnRvZGF5IHtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zZWxlY3QsIGlucHV0IHtcclxuICBib3JkZXI6IDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggbGlnaHRncmF5O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBncmF5O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5tb2JpbGUtdGl0bGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpICB7XHJcbiAgLm1vYmlsZS10aXRsZS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAubW9udGgtdGl0bGUtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-month-title',
                templateUrl: './month-title.component.html',
                styleUrls: ['./month-title.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, { month: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], year: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], next: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], previous: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "3kzh":
/*!********************************!*\
  !*** ./src/app/models/task.ts ***!
  \********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
class Task {
    constructor(dueDate, name, recurring = false, recurringFrequency = null, recurringUntil = null) {
        this.uuid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.dueDate = dueDate;
        this.name = name;
        this.recurring = recurring;
        this.recurringFrequency = recurringFrequency;
        this.recurringUntil = recurringUntil;
    }
}


/***/ }),

/***/ "5Pow":
/*!**************************************!*\
  !*** ./src/app/models/monthNames.ts ***!
  \**************************************/
/*! exports provided: MonthNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthNames", function() { return MonthNames; });
var MonthNames;
(function (MonthNames) {
    MonthNames["JAN"] = "January";
    MonthNames["FEB"] = "February";
    MonthNames["MAR"] = "March";
    MonthNames["APR"] = "April";
    MonthNames["MAY"] = "May";
    MonthNames["JUN"] = "June";
    MonthNames["JUL"] = "July";
    MonthNames["AUG"] = "August";
    MonthNames["SEP"] = "September";
    MonthNames["OCT"] = "October";
    MonthNames["NOV"] = "November";
    MonthNames["DEC"] = "December";
})(MonthNames || (MonthNames = {}));


/***/ }),

/***/ "6f5k":
/*!*************************************************!*\
  !*** ./src/app/month-grid/day/day.component.ts ***!
  \*************************************************/
/*! exports provided: DayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayComponent", function() { return DayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/modal/modal.component */ "0zEo");
/* harmony import */ var _day_detail_day_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./day-detail/day-detail.component */ "I6Ip");






function DayComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", event_r3.name, " ");
} }
function DayComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r4.name, " ");
} }
function DayComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayComponent_div_6_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); $event.stopPropagation(); return ctx_r5.hideDayDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-modal", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayComponent_div_6_Template_app_modal_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); return $event.stopPropagation(); })("closeClick", function DayComponent_div_6_Template_app_modal_closeClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.hideDayDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-day-detail", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeClick", function DayComponent_div_6_Template_app_day_detail_closeClick_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.hideDayDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tasks", ctx_r2.tasks)("events", ctx_r2.events)("day", ctx_r2.date);
} }
const _c0 = function (a0, a1) { return { "other-month": a0, "today": a1 }; };
class DayComponent {
    constructor(eventService) {
        this.eventService = eventService;
        this.showDetail = false;
        this.numOfEvents = 0;
        this.numOfTasks = 0;
        this.isToday = true;
        /**
         * Return true if 2 dates are the same, not caring about their hours minutes seconds etc.
         * Else return false.
         */
        this.sameDay = (date1, date2) => {
            return (date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate());
        };
        /**
         * Return true if date1 is on or before date2, not caring about hours minutes seconds etc.
         * Else return false.
         */
        this.date1OnOrBeforeDate2 = (date1, date2) => {
            return (this.sameDay(date1, date2) || date1 < date2);
        };
        /**
         * Event should show up in day if either:
         * 1. It is not recurring and its date is on this day.
         * 2. It is recurring daily, and its first date is before or on this day, and its recurringUntil date is after or on this day.
         * 3. It is recurring weekly, and its first date is before or on this day, and its recurringUntil date is after or on this day, and the
         *    start date's weekday is the same as this day.
         * 4. It is recurring monthly, and its first date is before or on this day, and its recurringUntil date is after or on this day, and the
         *    start date's day of the month is the same as this day.
         */
        this.eventInDay = (event) => {
            // Case 1: Not recurring
            if (!event.recurring) {
                return (this.sameDay(event.startDate, this.date));
            }
            else {
                // Case 2: Recurring daily
                if (event.recurringFrequency === 'DAILY') {
                    return (this.date1OnOrBeforeDate2(event.startDate, this.date) &&
                        this.date1OnOrBeforeDate2(this.date, event.recurringUntil));
                }
                // Case 3: Recurring weekly
                if (event.recurringFrequency === 'WEEKLY') {
                    return (this.date1OnOrBeforeDate2(event.startDate, this.date) &&
                        this.date1OnOrBeforeDate2(this.date, event.recurringUntil) &&
                        this.date.getDay() === event.startDate.getDay());
                }
                // Case 4: Recurring monthly
                if (event.recurringFrequency === 'MONTHLY') {
                    return (this.date1OnOrBeforeDate2(event.startDate, this.date) &&
                        this.date1OnOrBeforeDate2(this.date, event.recurringUntil) &&
                        this.date.getDate() === event.startDate.getDate());
                }
            }
        };
        this.debug = () => {
            console.log(this.date);
        };
        /**
         * Task should show up in day if either:
         * 1. It is not recurring and its date is on this day.
         * 2. It is recurring daily, and its first date is before or on this day, and its recurringUntil date is after or on this day.
         * 3. It is recurring weekly, and its first date is before or on this day, and its recurringUntil date is after or on this day, and the
         *    start date's weekday is the same as this day.
         * 4. It is recurring monthly, and its first date is before or on this day, and its recurringUntil date is after or on this day, and the
         *    start date's day of the month is the same as this day.
         */
        this.taskInDay = (task) => {
            // Case 1: Not recurring
            if (!task.recurring) {
                return (this.sameDay(task.dueDate, this.date));
            }
            else {
                // Case 2: Recurring daily
                if (task.recurringFrequency === 'DAILY') {
                    return (this.date1OnOrBeforeDate2(task.dueDate, this.date) &&
                        this.date1OnOrBeforeDate2(this.date, task.recurringUntil));
                }
                // Case 3: Recurring weekly
                if (task.recurringFrequency === 'WEEKLY') {
                    return (this.date1OnOrBeforeDate2(task.dueDate, this.date) &&
                        this.date1OnOrBeforeDate2(this.date, task.recurringUntil) &&
                        this.date.getDay() === task.dueDate.getDay());
                }
                // Case 4: Recurring monthly
                if (task.recurringFrequency === 'MONTHLY') {
                    return (this.date1OnOrBeforeDate2(task.dueDate, this.date) &&
                        this.date1OnOrBeforeDate2(this.date, task.recurringUntil) &&
                        this.date.getDate() === task.dueDate.getDate());
                }
            }
        };
        this.showDayDetail = () => {
            this.showDetail = true;
        };
        this.hideDayDetail = () => {
            this.showDetail = false;
        };
        this.checkIfDayIsInCurrentMonth = () => {
            return this.date.getMonth() === this.month;
        };
    }
    set day(value) {
        this.date = value;
        this.ngOnInit();
    }
    ngOnInit() {
        this.eventService.eventsSubject.subscribe(events => {
            this.events = events.filter(event => this.eventInDay(event));
            this.numOfEvents = this.events.length;
        });
        this.eventService.tasksSubject.subscribe(tasks => {
            this.tasks = tasks.filter(task => this.taskInDay(task));
            this.numOfTasks = this.tasks.length;
        });
        this.isToday = (this.date.getFullYear() === new Date().getFullYear() &&
            this.date.getMonth() === new Date().getMonth() &&
            this.date.getDate() === new Date().getDate());
    }
}
DayComponent.ɵfac = function DayComponent_Factory(t) { return new (t || DayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"])); };
DayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayComponent, selectors: [["app-day"]], inputs: { day: "day", month: "month" }, decls: 7, vars: 11, consts: [[1, "day-container", 3, "ngClass", "click"], [1, "event-task-container"], ["class", "preview event", 4, "ngFor", "ngForOf"], ["class", "preview task", 4, "ngFor", "ngForOf"], ["class", "modal-parent", 3, "click", 4, "ngIf"], [1, "preview", "event"], ["viewBox", "0 0 32 32", 1, "icon", "icon-clock"], ["d", "M20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"], [1, "name"], [1, "preview", "task"], ["viewBox", "0 0 32 32", 1, "icon", "icon-checkmark"], ["d", "M27 4l-15 15-7-7-5 5 12 12 20-20z"], [1, "modal-parent", 3, "click"], [3, "click", "closeClick"], [1, "detail", 3, "tasks", "events", "day", "closeClick"]], template: function DayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayComponent_Template_div_click_0_listener() { return ctx.showDayDetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DayComponent_div_4_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DayComponent_div_5_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DayComponent_div_6_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.date.getMonth() !== ctx.month, ctx.isToday));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 5, ctx.date, "d"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDetail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], _day_detail_day_detail_component__WEBPACK_IMPORTED_MODULE_4__["DayDetailComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".day-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 100px;\n  padding: 4px;\n  cursor: pointer;\n  box-shadow: 0px 0px 10px lightgray;\n  margin: 4px;\n}\n.day-container[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px gray;\n}\n.event-task-container[_ngcontent-%COMP%] {\n  height: 80%;\n  overflow: auto;\n}\n.other-month[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  color: rgba(0, 0, 0, 0.5);\n}\n.preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  gap: 4px;\n  font-size: small;\n}\n.name[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.today[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 100, 0.3);\n}\n.today.other-month[_ngcontent-%COMP%] {\n  background-color: rgba(100, 100, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9udGgtZ3JpZC9kYXkvZGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxrQ0FBQTtFQUNBLFdBQUE7QUFBSjtBQUVJO0VBQ0ksNkJBQUE7QUFBUjtBQUlBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFESjtBQUlBO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtBQURKO0FBSUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7QUFJQTtFQUNJLDBDQUFBO0FBREo7QUFHSTtFQUNJLHdDQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC9tb250aC1ncmlkL2RheS9kYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF5LWNvbnRhaW5lciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGdyYXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ldmVudC10YXNrLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ub3RoZXItbW9udGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5wcmV2aWV3IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA0cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4udG9kYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMTAwLCAwLjMpO1xyXG5cclxuICAgICYub3RoZXItbW9udGgge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCAxMDAsIDAsIDAuMyk7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-day',
                templateUrl: './day.component.html',
                styleUrls: ['./day.component.scss']
            }]
    }], function () { return [{ type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"] }]; }, { day: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], month: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "8bow":
/*!******************************************************!*\
  !*** ./src/app/event-modal/event-modal.component.ts ***!
  \******************************************************/
/*! exports provided: EventModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalComponent", function() { return EventModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_models_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/event */ "Zgh0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_models_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/toast */ "jJzv");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "2g2N");










function EventModalComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* (Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventModalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventModalComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* (Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventModalComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventModalComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* (Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventModalComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid start time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventModalComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* (Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventModalComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid end time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventModalComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.formGroup.errors["startTimeBeforeEndTime"], " ");
} }
function EventModalComponent_div_43_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* (Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventModalComponent_div_43_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* (Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventModalComponent_div_43_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.formGroup.errors["dateBeforeRecurringUntil"], " ");
} }
function EventModalComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Event should repeat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Daily");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EventModalComponent_div_43_span_11_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Until: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EventModalComponent_div_43_span_15_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EventModalComponent_div_43_div_16_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.formGroup.controls.recurringFrequency.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.formGroup.controls.recurringUntil.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.formGroup.errors && ctx_r9.formGroup.errors["dateBeforeRecurringUntil"]);
} }
class EventModalComponent {
    constructor(formBuilder, eventService, toastService) {
        this.formBuilder = formBuilder;
        this.eventService = eventService;
        this.toastService = toastService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isEdit = false;
        this.validateStartTimeBeforeEndTime = () => (group) => {
            if (group.controls.startTime.value > group.controls.endTime.value) {
                return { startTimeBeforeEndTime: 'Start time must be before end time.' };
            }
            return null;
        };
        this.validateRecurringUntil = () => (group) => {
            if (group.controls.recurring.value && group.controls.date.value > group.controls.recurringUntil.value) {
                return { dateBeforeRecurringUntil: 'Please make sure the last recurring event is after the first event.' };
            }
        };
        this.validateRecurringRequired = () => (group) => {
            if (group.controls.recurring.value) {
                if (!group.controls.recurringFrequency.value || !group.controls.recurringUntil.value) {
                    return { recurring: 'Recurring frequency and until date are required.' };
                }
            }
            return null;
        };
        this.toggleRecurring = () => {
            this.formGroup.controls.recurring.setValue(!this.formGroup.controls.recurring.value);
        };
        this.save = () => {
            const startDate = new Date(`${this.formGroup.controls.date.value}T${this.formGroup.controls.startTime.value}:00`);
            const endDate = new Date(`${this.formGroup.controls.date.value}T${this.formGroup.controls.endTime.value}:00`);
            if (this.isEdit) {
                // edit
                this.event.startDate = startDate;
                this.event.endDate = endDate;
                this.event.name = this.formGroup.controls.name.value;
                this.event.recurring = this.formGroup.controls.recurring.value;
                this.event.recurringFrequency = this.formGroup.controls.recurringFrequency.value;
                this.event.recurringUntil = new Date(`${this.formGroup.controls.recurringUntil.value}T00:00:00`);
                this.eventService.updateEvent(this.event);
                this.toastService.addToast(src_app_models_toast__WEBPACK_IMPORTED_MODULE_4__["ToastType"].success, 'Event was edited successfully!', 5);
            }
            else {
                // create
                const event = new src_app_models_event__WEBPACK_IMPORTED_MODULE_2__["Event"](startDate, endDate, this.formGroup.controls.name.value, this.formGroup.controls.recurring.value, this.formGroup.controls.recurringFrequency.value, new Date(`${this.formGroup.controls.recurringUntil.value}T00:00:00`));
                this.eventService.addEvent(event);
                this.toastService.addToast(src_app_models_toast__WEBPACK_IMPORTED_MODULE_4__["ToastType"].success, 'Event was created successfully!', 5);
            }
            this.close.emit();
        };
        this.formGroup = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            startTime: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            endTime: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            recurring: [false],
            recurringFrequency: [''],
            recurringUntil: [null]
        }, {
            validators: [
                this.validateStartTimeBeforeEndTime(),
                this.validateRecurringRequired(),
                this.validateRecurringUntil()
            ]
        });
    }
    ngOnInit() {
        if (this.event) {
            this.formGroup.controls.name.setValue(this.event.name);
            this.formGroup.controls.date.setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.event.startDate, 'yyyy-MM-dd', 'en'));
            this.formGroup.controls.startTime.setValue(this.eventService.formatTime(this.event.startDate));
            this.formGroup.controls.endTime.setValue(this.eventService.formatTime(this.event.endDate));
            if (this.event.recurring) {
                this.formGroup.controls.recurring.setValue(this.event.recurring);
                this.formGroup.controls.recurringFrequency.setValue(this.event.recurringFrequency);
                this.formGroup.controls.recurringUntil.setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.event.recurringUntil, 'yyyy-MM-dd', 'en'));
            }
        }
    }
}
EventModalComponent.ɵfac = function EventModalComponent_Factory(t) { return new (t || EventModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"])); };
EventModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventModalComponent, selectors: [["app-event-modal"]], inputs: { event: "event", isEdit: "isEdit", index: "index" }, outputs: { close: "close" }, decls: 46, vars: 13, consts: [[3, "formGroup"], ["for", "inputName"], ["class", "red", 4, "ngIf"], ["id", "inputName", "type", "text", "formControlName", "name"], ["class", "errors", 4, "ngIf"], ["for", "inputDate"], ["id", "inputDate", "type", "date", "formControlName", "date"], [1, "start-end-time-container"], ["for", "inputStartTime"], ["id", "inputStartTime", "type", "time", "formControlName", "startTime"], ["for", "inputEndTime"], ["id", "inputEndTime", "type", "time", "formControlName", "endTime"], [1, "recurring-checkbox", 3, "click"], ["id", "inputReccuring", "type", "checkbox", "formControlName", "recurring"], ["for", "inputRecurring"], [4, "ngIf"], [3, "disabled", "click"], [1, "red"], [1, "errors"], [1, "recurring-frequency"], ["for", "recurringFrequency"], ["id", "recurringFrequency", "formControlName", "recurringFrequency", 1, "form-control"], ["value", "DAILY", "selected", ""], ["value", "WEEKLY"], ["value", "MONTHLY"], ["for", "recurringUntil"], ["id", "recurringUntil", "type", "date", "formControlName", "recurringUntil"]], template: function EventModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EventModalComponent_span_7_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EventModalComponent_div_10_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EventModalComponent_span_15_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EventModalComponent_div_18_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Start Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EventModalComponent_span_24_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EventModalComponent_div_27_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "End Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, EventModalComponent_span_34_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EventModalComponent_div_37_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EventModalComponent_div_38_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventModalComponent_Template_div_click_39_listener() { return ctx.toggleRecurring(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Make Event Recurring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, EventModalComponent_div_43_Template, 17, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventModalComponent_Template_button_click_44_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isEdit ? "Edit" : "Create", " Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls.name.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.controls.name.touched && ctx.formGroup.controls.name.errors && ctx.formGroup.controls.name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls.date.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.controls.date.touched && ctx.formGroup.controls.date.errors && ctx.formGroup.controls.date.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls.startTime.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.controls.startTime.touched && ctx.formGroup.controls.startTime.errors && ctx.formGroup.controls.startTime.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls.endTime.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.controls.endTime.touched && ctx.formGroup.controls.endTime.errors && ctx.formGroup.controls.endTime.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.errors && ctx.formGroup.errors["startTimeBeforeEndTime"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.controls.recurring.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".start-end-time-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQtbW9kYWwvZXZlbnQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LW1vZGFsL2V2ZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ0LWVuZC10aW1lLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-modal',
                templateUrl: './event-modal.component.html',
                styleUrls: ['./event-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }, { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }]; }, { close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ErY3":
/*!****************************************************!*\
  !*** ./src/app/month-grid/month-grid.component.ts ***!
  \****************************************************/
/*! exports provided: MonthGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthGridComponent", function() { return MonthGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _month_title_month_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./month-title/month-title.component */ "2w8Z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _day_day_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day/day.component */ "6f5k");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/modal/modal.component */ "0zEo");
/* harmony import */ var _task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task-modal/task-modal.component */ "h/Sr");
/* harmony import */ var _event_modal_event_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event-modal/event-modal.component */ "8bow");
/* harmony import */ var _note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../note-modal/note-modal.component */ "cjCF");









function MonthGridComponent_app_day_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-day", 7);
} if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("day", day_r4)("month", ctx_r0.month);
} }
function MonthGridComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthGridComponent_div_26_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.hideTaskModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-modal", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthGridComponent_div_26_Template_app_modal_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); return $event.stopPropagation(); })("closeClick", function MonthGridComponent_div_26_Template_app_modal_closeClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.hideTaskModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-task-modal", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function MonthGridComponent_div_26_Template_app_task_modal_close_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.hideTaskModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthGridComponent_div_27_app_modal_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthGridComponent_div_27_app_modal_1_Template_app_modal_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); return $event.stopPropagation(); })("closeClick", function MonthGridComponent_div_27_app_modal_1_Template_app_modal_closeClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.hideEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-event-modal", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function MonthGridComponent_div_27_app_modal_1_Template_app_event_modal_close_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.hideEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthGridComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthGridComponent_div_27_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.hideEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthGridComponent_div_27_app_modal_1_Template, 2, 0, "app-modal", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.eventShow);
} }
function MonthGridComponent_div_28_app_modal_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthGridComponent_div_28_app_modal_1_Template_app_modal_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); return $event.stopPropagation(); })("closeClick", function MonthGridComponent_div_28_app_modal_1_Template_app_modal_closeClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.hideNoteModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-note-modal", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function MonthGridComponent_div_28_app_modal_1_Template_app_note_modal_close_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.hideNoteModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MonthGridComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthGridComponent_div_28_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.hideNoteModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthGridComponent_div_28_app_modal_1_Template, 2, 0, "app-modal", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.noteShow);
} }
/**
 * MonthGridComponent shows the calendar grid of the days of the month, plus the month title.
 */
class MonthGridComponent {
    constructor() {
        // List of dates to be displayed in the month view.
        // Includes the last few days of the previous month and the next few days of the next month.
        this.days = [];
        this.taskShow = false;
        this.eventShow = false;
        this.noteShow = false;
        this.goToNextMonth = () => {
            this.singleDay.setMonth(this.singleDay.getMonth() + 1);
            this.populateDaysFromSingleDay(this.singleDay);
        };
        this.goToPreviousMonth = () => {
            this.singleDay.setMonth(this.singleDay.getMonth() - 1);
            this.populateDaysFromSingleDay(this.singleDay);
        };
        this.goToMonth = (newDate) => {
            this.singleDay = newDate;
            this.populateDaysFromSingleDay(this.singleDay);
        };
        /**
         * Input: singleDay, which can be any Date
         * Modifies: this.days, this.month, this.year
         * Effects: Populates this.days to be a list of Dates
         *  with the first date in the list being the last Sunday of the month before singleDay is in,
         *  or the first of the month singleDay is in if the first is a Sunday,
         *  and the last date in the list being the first Saturday of the month after singleDay is in,
         *  or the last of the month singleDay is in if the last is a Saturday
         */
        this.populateDaysFromSingleDay = (singleDay) => {
            this.days = [];
            // Get first day of month singleDay is in
            const firstDayOfMonth = new Date(singleDay.getFullYear(), singleDay.getMonth(), 1);
            // Get number of days to show from last month
            // If firstDayOfMonth is a Sunday, show 0 days from last month
            // If firstDayOfMonth is a Monday, show 1 day from last month
            // etc.
            const daysToShowFromLastMonth = firstDayOfMonth.getDay();
            const firstDayToShow = new Date(firstDayOfMonth);
            firstDayToShow.setDate(firstDayOfMonth.getDate() - daysToShowFromLastMonth);
            // Get last day of month singleDay is in
            const lastDayOfMonth = new Date(singleDay.getFullYear(), singleDay.getMonth() + 1, 0);
            // Get number of days to show from next month
            // If lastDayOfMonth is a Sunday, show 6 days from next month
            // If lastDayOfMonth is a Saturday, show 0 days from next month
            const daysToShowFromNextMonth = 6 - lastDayOfMonth.getDay();
            const lastDayToShow = new Date(lastDayOfMonth);
            lastDayToShow.setDate(lastDayOfMonth.getDate() + daysToShowFromNextMonth);
            const numberOfDaysToShow = (lastDayToShow.getTime() - firstDayToShow.getTime()) / (1000 * 60 * 60 * 24) + 1;
            for (let i = 0; i < numberOfDaysToShow; i++) {
                const dateToPush = new Date(firstDayToShow);
                dateToPush.setDate(firstDayToShow.getDate() + i);
                this.days.push(dateToPush);
            }
            this.month = singleDay.getMonth();
            this.year = singleDay.getFullYear();
            this.date = singleDay.getDate();
        };
        this.showTaskModal = () => { this.taskShow = true; };
        this.showEventModal = () => { this.eventShow = true; };
        this.showNoteModal = () => { this.noteShow = true; };
        this.hideTaskModal = () => { this.taskShow = false; };
        this.hideEventModal = () => { this.eventShow = false; };
        this.hideNoteModal = () => { this.noteShow = false; };
    }
    ngOnInit() {
        this.singleDay = new Date();
        this.populateDaysFromSingleDay(this.singleDay);
    }
}
MonthGridComponent.ɵfac = function MonthGridComponent_Factory(t) { return new (t || MonthGridComponent)(); };
MonthGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonthGridComponent, selectors: [["app-month-grid"]], decls: 29, vars: 9, consts: [[3, "month", "date", "year", "next", "previous", "dateChange"], [3, "click"], ["id", "desktopView"], ["id", "dayWrapper"], [1, "weekday-name"], [3, "day", "month", 4, "ngFor", "ngForOf"], ["id", "mobileView"], [3, "day", "month"], ["class", "modal-parent", 3, "click", 4, "ngIf"], [1, "modal-parent", 3, "click"], [3, "click", "closeClick"], [3, "close"], [3, "click", "closeClick", 4, "ngIf"]], template: function MonthGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-month-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function MonthGridComponent_Template_app_month_title_next_0_listener() { return ctx.goToNextMonth(); })("previous", function MonthGridComponent_Template_app_month_title_previous_0_listener() { return ctx.goToPreviousMonth(); })("dateChange", function MonthGridComponent_Template_app_month_title_dateChange_0_listener($event) { return ctx.goToMonth($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthGridComponent_Template_button_click_1_listener() { return ctx.showTaskModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+ Create New Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthGridComponent_Template_button_click_3_listener() { return ctx.showEventModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+ Create New Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthGridComponent_Template_button_click_5_listener() { return ctx.showNoteModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+ Create New Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sunday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Monday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tuesday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Wednesday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Thursday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Friday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Saturday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MonthGridComponent_app_day_23_Template, 1, 2, "app-day", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-day", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MonthGridComponent_div_26_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MonthGridComponent_div_27_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MonthGridComponent_div_28_Template, 2, 1, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("month", ctx.month)("date", ctx.date)("year", ctx.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.days);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("day", ctx.singleDay)("month", ctx.month);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eventShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noteShow);
    } }, directives: [_month_title_month_title_component__WEBPACK_IMPORTED_MODULE_1__["MonthTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _day_day_component__WEBPACK_IMPORTED_MODULE_3__["DayComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], _task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_5__["TaskModalComponent"], _event_modal_event_modal_component__WEBPACK_IMPORTED_MODULE_6__["EventModalComponent"], _note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_7__["NoteModalComponent"]], styles: ["#dayWrapper[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  margin-right: 40px;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);\n}\n\n.weekday-name[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#mobileView[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 768px) {\n  #mobileView[_ngcontent-%COMP%] {\n    display: block;\n    margin-right: 40px;\n  }\n\n  #desktopView[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9udGgtZ3JpZC9tb250aC1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwrSEFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFJQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0VBRE47O0VBSUU7SUFDSSxhQUFBO0VBRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vbnRoLWdyaWQvbW9udGgtZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkYXlXcmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDFmcik7XHJcbn1cclxuXHJcbi53ZWVrZGF5LW5hbWUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbW9iaWxlVmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgIHtcclxuICAgICNtb2JpbGVWaWV3IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2Rlc2t0b3BWaWV3IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-month-grid',
                templateUrl: './month-grid.component.html',
                styleUrls: ['./month-grid.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "I6Ip":
/*!*******************************************************************!*\
  !*** ./src/app/month-grid/day/day-detail/day-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: DayDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayDetailComponent", function() { return DayDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/task */ "3kzh");
/* harmony import */ var _models_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/event */ "Zgh0");
/* harmony import */ var _models_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/toast */ "jJzv");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/event.service */ "fTLw");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/toast.service */ "2g2N");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/modal/modal.component */ "0zEo");
/* harmony import */ var _event_modal_event_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../event-modal/event-modal.component */ "8bow");
/* harmony import */ var _task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../task-modal/task-modal.component */ "h/Sr");











function DayDetailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.hideNewEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-modal", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_13_Template_app_modal_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); return $event.stopPropagation(); })("closeClick", function DayDetailComponent_div_13_Template_app_modal_closeClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.hideNewEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-event-modal", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function DayDetailComponent_div_13_Template_app_event_modal_close_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.hideNewEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r0.newEventShow);
} }
function DayDetailComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No events on this day.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DayDetailComponent_div_16_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_16_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const event_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.deleteEventConfirm = event_r11; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83D\uDDD1\uFE0F Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DayDetailComponent_div_16_div_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "This will delete all events in the series.");
} }
function DayDetailComponent_div_16_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DayDetailComponent_div_16_div_11_ng_template_2_Template, 1, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_16_div_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const event_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.deleteEvent(event_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Yes, Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_16_div_11_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.deleteEventConfirm = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No, Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r11.recurring);
} }
function DayDetailComponent_div_16_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_16_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.hideEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-modal", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_16_div_12_Template_app_modal_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); return $event.stopPropagation(); })("closeClick", function DayDetailComponent_div_16_div_12_Template_app_modal_closeClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.hideEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-event-modal", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function DayDetailComponent_div_16_div_12_Template_app_event_modal_close_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.hideEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const event_r11 = ctx_r30.$implicit;
    const i_r12 = ctx_r30.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r11)("index", i_r12)("isEdit", true);
} }
function DayDetailComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_16_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const event_r11 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.showEventModal(event_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u270E Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DayDetailComponent_div_16_button_10_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DayDetailComponent_div_16_div_11_Template, 7, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DayDetailComponent_div_16_div_12_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, event_r11.startDate, "h:mm a"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 9, event_r11.endDate, "h:mm a"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.deleteEventConfirm !== event_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.deleteEventConfirm === event_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.eventShow === event_r11);
} }
function DayDetailComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_25_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.hideNewTaskModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-modal", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_25_Template_app_modal_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); return $event.stopPropagation(); })("closeClick", function DayDetailComponent_div_25_Template_app_modal_closeClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.hideNewTaskModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-task-modal", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function DayDetailComponent_div_25_Template_app_task_modal_close_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.hideNewTaskModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx_r3.newTaskShow);
} }
function DayDetailComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No tasks on this day.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DayDetailComponent_div_28_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_28_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const task_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.deleteTaskConfirm = task_r38; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83D\uDDD1\uFE0F Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DayDetailComponent_div_28_div_10_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "This will delete all tasks in the series.");
} }
function DayDetailComponent_div_28_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DayDetailComponent_div_28_div_10_ng_template_2_Template, 1, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_28_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const task_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.deleteTask(task_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Yes, Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_28_div_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.deleteTaskConfirm = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No, Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r38.recurring);
} }
function DayDetailComponent_div_28_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_28_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.hideTaskModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-modal", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_28_div_11_Template_app_modal_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); return $event.stopPropagation(); })("closeClick", function DayDetailComponent_div_28_div_11_Template_app_modal_closeClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.hideTaskModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-task-modal", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function DayDetailComponent_div_28_div_11_Template_app_task_modal_close_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.hideTaskModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const task_r38 = ctx_r57.$implicit;
    const i_r39 = ctx_r57.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", task_r38)("index", i_r39)("isEdit", true);
} }
function DayDetailComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_div_28_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const task_r38 = ctx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.showTaskModal(task_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u270E Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DayDetailComponent_div_28_button_9_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DayDetailComponent_div_28_div_10_Template, 7, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DayDetailComponent_div_28_div_11_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r38 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r38.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Due: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, task_r38.dueDate, "h:mm a"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.deleteTaskConfirm !== task_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.deleteTaskConfirm === task_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.taskShow === task_r38);
} }
class DayDetailComponent {
    constructor(eventService, toastService) {
        this.eventService = eventService;
        this.toastService = toastService;
        this.closeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Edit task/event modals
        this.taskShow = null;
        this.eventShow = null;
        // Create new task/event modals
        this.newTaskShow = null;
        this.newEventShow = null;
        this.deleteEventConfirm = null;
        this.deleteTaskConfirm = null;
        this.close = (event) => {
            event.stopPropagation();
            this.closeClick.emit();
        };
        this.showTaskModal = (task) => { this.taskShow = task; };
        this.hideTaskModal = () => { this.taskShow = null; };
        this.showEventModal = (event) => { this.eventShow = event; };
        this.hideEventModal = () => { this.eventShow = null; };
        this.showNewTaskModal = () => {
            const dueDate = new Date(this.day);
            dueDate.setHours(new Date().getHours() + 1);
            dueDate.setMinutes(0);
            this.newTaskShow = new _models_task__WEBPACK_IMPORTED_MODULE_1__["Task"](dueDate, '');
        };
        this.showNewEventModal = () => {
            const startDate = new Date(this.day);
            startDate.setHours(new Date().getHours() + 1);
            startDate.setMinutes(0);
            const endDate = new Date(this.day);
            endDate.setHours(new Date().getHours() + 2);
            endDate.setMinutes(0);
            this.newEventShow = new _models_event__WEBPACK_IMPORTED_MODULE_2__["Event"](startDate, endDate, '');
        };
        this.hideNewTaskModal = () => {
            this.newTaskShow = null;
        };
        this.hideNewEventModal = () => {
            this.newEventShow = null;
        };
        this.deleteTask = (task) => {
            this.eventService.deleteTask(task);
            this.toastService.addToast(_models_toast__WEBPACK_IMPORTED_MODULE_3__["ToastType"].success, 'Task was deleted successfully!', 5);
        };
        this.deleteEvent = (event) => {
            this.eventService.deleteEvent(event);
            this.toastService.addToast(_models_toast__WEBPACK_IMPORTED_MODULE_3__["ToastType"].success, 'Event was deleted successfully!', 5);
        };
    }
    ngOnInit() { }
}
DayDetailComponent.ɵfac = function DayDetailComponent_Factory(t) { return new (t || DayDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"])); };
DayDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayDetailComponent, selectors: [["app-day-detail"]], inputs: { tasks: "tasks", events: "events", day: "day" }, outputs: { closeClick: "closeClick" }, decls: 29, vars: 9, consts: [[1, "modal-container"], [1, "tasks-events-grid"], [1, "title-container"], ["viewBox", "0 0 32 32", 1, "icon", "icon-clock"], ["d", "M20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"], [1, "create-button", 3, "click"], ["class", "modal-parent", 3, "click", 4, "ngIf"], [1, "task-event-outer-container"], ["class", "no-events-tasks", 4, "ngIf"], ["class", "task-event-container", 4, "ngFor", "ngForOf"], ["viewBox", "0 0 32 32", 1, "icon", "icon-checkmark"], ["d", "M27 4l-15 15-7-7-5 5 12 12 20-20z"], [1, "modal-parent", 3, "click"], [3, "click", "closeClick"], [3, "event", "close"], [1, "no-events-tasks"], [1, "task-event-container"], [1, "name-container"], [3, "click"], [3, "click", 4, "ngIf"], ["class", "delete-confirm", 4, "ngIf"], [1, "delete-confirm"], [3, "ngIf"], [3, "event", "index", "isEdit", "close"], [3, "task", "close"], [3, "task", "index", "isEdit", "close"]], template: function DayDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_Template_button_click_11_listener() { return ctx.showNewEventModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "+ Create New Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DayDetailComponent_div_13_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DayDetailComponent_div_15_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DayDetailComponent_div_16_Template, 13, 12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayDetailComponent_Template_button_click_23_listener() { return ctx.showNewTaskModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "+ Create New Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DayDetailComponent_div_25_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DayDetailComponent_div_27_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DayDetailComponent_div_28_Template, 12, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx.day), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newEventShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.events.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newTaskShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tasks.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _event_modal_event_modal_component__WEBPACK_IMPORTED_MODULE_8__["EventModalComponent"], _task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_9__["TaskModalComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".name-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.task-event-outer-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  margin: 4px;\n  padding: 4px;\n  max-height: 75vh;\n}\n\n.task-event-container[_ngcontent-%COMP%] {\n  margin: 4px;\n  padding: 4px;\n  box-shadow: 0px 0px 10px lightgray;\n}\n\n.task-event-container[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px gray;\n}\n\n.title-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.tasks-events-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n}\n\n.no-events-tasks[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  font-style: italic;\n}\n\n@media (max-width: 768px) {\n  .tasks-events-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9udGgtZ3JpZC9kYXkvZGF5LWRldGFpbC9kYXktZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUNJO0VBQ0ksNkJBQUE7QUFDUjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0k7SUFDSSwyQkFBQTtFQUFOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb250aC1ncmlkL2RheS9kYXktZGV0YWlsL2RheS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWV2ZW50LW91dGVyLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgbWF4LWhlaWdodDogNzV2aDtcclxufVxyXG5cclxuLnRhc2stZXZlbnQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGxpZ2h0Z3JheTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggZ3JheTtcclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNHB4O1xyXG59XHJcblxyXG4udGFza3MtZXZlbnRzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxufVxyXG5cclxuLm5vLWV2ZW50cy10YXNrcyB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC50YXNrcy1ldmVudHMtZ3JpZHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-day-detail',
                templateUrl: './day-detail.component.html',
                styleUrls: ['./day-detail.component.scss']
            }]
    }], function () { return [{ type: _services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] }, { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }]; }, { tasks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], day: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "QLJT":
/*!********************************!*\
  !*** ./src/app/models/note.ts ***!
  \********************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
class Note {
    constructor(title, text, createDate = null, updateDate = null) {
        this.uuid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.createDate = createDate || new Date();
        this.updateDate = updateDate || new Date();
        this.text = text;
        this.title = title;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _month_grid_month_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./month-grid/month-grid.component */ "ErY3");
/* harmony import */ var _shared_notes_sidebar_notes_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/notes-sidebar/notes-sidebar.component */ "/fQS");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes/notes.component */ "TEms");
/* harmony import */ var _shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/toast/toast.component */ "XMJk");






class AppComponent {
    constructor() {
        this.title = 'calendar';
        this.currentMonth = new Date().getMonth();
        this.currentDate = new Date();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-month-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-notes-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-toast");
    } }, directives: [_month_grid_month_grid_component__WEBPACK_IMPORTED_MODULE_1__["MonthGridComponent"], _shared_notes_sidebar_notes_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["NotesSidebarComponent"], _notes_notes_component__WEBPACK_IMPORTED_MODULE_3__["NotesComponent"], _shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TEms":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/note */ "QLJT");
/* harmony import */ var src_app_models_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/toast */ "jJzv");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "2g2N");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/modal/modal.component */ "0zEo");
/* harmony import */ var _note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../note-modal/note-modal.component */ "cjCF");
/* harmony import */ var src_app_pipes_newline_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/newline.pipe */ "nK6g");










function NotesComponent_div_5_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_div_5_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const note_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteNoteConfirm = note_r2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83D\uDDD1\uFE0F Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotesComponent_div_5_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_div_5_div_15_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const note_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.deleteNote(note_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Yes, Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_div_5_div_15_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.deleteNoteConfirm = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No, Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotesComponent_div_5_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_div_5_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.hideNoteModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-modal", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_div_5_div_16_Template_app_modal_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); return $event.stopPropagation(); })("closeClick", function NotesComponent_div_5_div_16_Template_app_modal_closeClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.hideNoteModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-note-modal", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function NotesComponent_div_5_div_16_Template_app_note_modal_close_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.hideNoteModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const note_r2 = ctx_r19.$implicit;
    const i_r3 = ctx_r19.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", note_r2)("index", i_r3)("isEdit", true);
} }
function NotesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_div_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const note_r2 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.showNoteModal(note_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u270E Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "newline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NotesComponent_div_5_button_14_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NotesComponent_div_5_div_15_Template, 6, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NotesComponent_div_5_div_16_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, note_r2.createDate, "short"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Updated: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 10, note_r2.updateDate, "short"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 13, note_r2.text), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deleteNoteConfirm !== note_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deleteNoteConfirm === note_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.noteShow === note_r2);
} }
function NotesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.hideNoteModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-modal", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_div_6_Template_app_modal_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); return $event.stopPropagation(); })("closeClick", function NotesComponent_div_6_Template_app_modal_closeClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.hideNoteModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-note-modal", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function NotesComponent_div_6_Template_app_note_modal_close_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.hideNoteModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NotesComponent {
    constructor(eventService, toastService) {
        this.eventService = eventService;
        this.toastService = toastService;
        this.notes = [];
        this.noteShow = null;
        this.deleteNoteConfirm = null;
        this.showNoteModal = (note = null) => {
            if (note) {
                this.noteShow = note;
            }
            else {
                this.noteShow = new src_app_models_note__WEBPACK_IMPORTED_MODULE_1__["Note"]('', '');
            }
        };
        this.hideNoteModal = () => { this.noteShow = null; };
        this.deleteNote = (note) => {
            this.eventService.deleteNote(note);
            this.toastService.addToast(src_app_models_toast__WEBPACK_IMPORTED_MODULE_2__["ToastType"].success, 'Note was deleted successfully!', 5);
        };
    }
    ngOnInit() {
        this.eventService.notesSubject.subscribe(notes => {
            this.notes = notes;
        });
    }
}
NotesComponent.ɵfac = function NotesComponent_Factory(t) { return new (t || NotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"])); };
NotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotesComponent, selectors: [["app-notes"]], decls: 7, vars: 2, consts: [[1, "title-left"], [3, "click"], ["class", "note-container", 4, "ngFor", "ngForOf"], ["class", "modal-parent", 3, "click", 4, "ngIf"], [1, "note-container"], [3, "innerHTML"], [3, "click", 4, "ngIf"], ["class", "delete-confirm", 4, "ngIf"], [1, "delete-confirm"], [1, "modal-parent", 3, "click"], [3, "click", "closeClick"], [3, "note", "index", "isEdit", "close"], [3, "close"]], template: function NotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesComponent_Template_button_click_3_listener() { return ctx.showNoteModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+ Create New Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotesComponent_div_5_Template, 17, 15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotesComponent_div_6_Template, 3, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noteShow && ctx.noteShow.title === "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], _note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_7__["NoteModalComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], src_app_pipes_newline_pipe__WEBPACK_IMPORTED_MODULE_8__["NewlinePipe"]], styles: [".note-container[_ngcontent-%COMP%] {\n  margin: 8px 16px;\n  padding: 8px;\n  box-shadow: 0px 0px 10px lightgray;\n  width: 300px;\n}\n.note-container[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px gray;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 4px;\n}\nh4[_ngcontent-%COMP%] {\n  color: darkgray;\n  font-size: 10;\n}\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.title-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMvbm90ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0ksNkJBQUE7QUFDUjtBQUdBO0VBQ0ksV0FBQTtBQUFKO0FBR0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUFKO0FBR0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHQTtFQUNJLGlCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDhweCAxNnB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGxpZ2h0Z3JheTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggZ3JheTtcclxuICAgIH1cclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTA7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udGl0bGUtbGVmdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notes',
                templateUrl: './notes.component.html',
                styleUrls: ['./notes.component.scss']
            }]
    }], function () { return [{ type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"] }, { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "XMJk":
/*!*************************************************!*\
  !*** ./src/app/shared/toast/toast.component.ts ***!
  \*************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/toast */ "jJzv");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toast.service */ "2g2N");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0, a1, a2) { return { "success": a0, "error": a1, "info": a2 }; };
function ToastComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastComponent_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const toast_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.close(toast_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dismiss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, toast_r1.type === ctx_r0.ToastType.success, toast_r1.type === ctx_r0.ToastType.error, toast_r1.type === ctx_r0.ToastType.info));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", toast_r1.text, " ");
} }
class ToastComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.ToastType = src_app_models_toast__WEBPACK_IMPORTED_MODULE_1__["ToastType"];
        this.close = (toast) => {
            this.toastService.removeToast(toast);
        };
    }
    ngOnInit() {
        this.toastService.toastsSubject.subscribe(toasts => {
            this.toasts = toasts;
        });
    }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"])); };
ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastComponent, selectors: [["app-toast"]], decls: 2, vars: 1, consts: [[1, "toaster"], ["class", "toast", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "toast", 3, "ngClass"], [1, "text"], [1, "close", 3, "click"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastComponent_div_1_Template, 5, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toasts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".toaster[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-right: 5vw;\n  position: fixed;\n  bottom: 0;\n  width: calc(100% - 10vw);\n  padding: 4px;\n  display: flex;\n  flex-direction: column;\n  z-index: 2;\n}\n\n.toast[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4px;\n  margin: 4px;\n  box-shadow: 0px 0px 10px gray;\n}\n\n.toast.success[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.toast.error[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.toast.info[_ngcontent-%COMP%] {\n  background-color: goldenrod;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUNJO0VBQ0ksdUJBQUE7QUFDUjs7QUFFSTtFQUNJLHFCQUFBO0FBQVI7O0FBR0k7RUFDSSwyQkFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYXN0ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICAgIG1hcmdpbi1yaWdodDogNXZ3O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwdncpO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4udG9hc3Qge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBncmF5O1xyXG5cclxuICAgICYuc3VjY2VzcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcblxyXG4gICAgJi5lcnJvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgICYuaW5mbyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toast',
                templateUrl: './toast.component.html',
                styleUrls: ['./toast.component.scss']
            }]
    }], function () { return [{ type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _month_grid_month_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./month-grid/month-grid.component */ "ErY3");
/* harmony import */ var _month_grid_month_title_month_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./month-grid/month-title/month-title.component */ "2w8Z");
/* harmony import */ var _month_grid_day_day_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./month-grid/day/day.component */ "6f5k");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/toast.service */ "2g2N");
/* harmony import */ var _month_grid_day_day_detail_day_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./month-grid/day/day-detail/day-detail.component */ "I6Ip");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/modal/modal.component */ "0zEo");
/* harmony import */ var _task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./task-modal/task-modal.component */ "h/Sr");
/* harmony import */ var _event_modal_event_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event-modal/event-modal.component */ "8bow");
/* harmony import */ var _note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./note-modal/note-modal.component */ "cjCF");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./notes/notes.component */ "TEms");
/* harmony import */ var src_app_pipes_newline_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/pipes/newline.pipe */ "nK6g");
/* harmony import */ var _shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/toast/toast.component */ "XMJk");
/* harmony import */ var _shared_notes_sidebar_notes_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/notes-sidebar/notes-sidebar.component */ "/fQS");
/* harmony import */ var _shared_activity_log_sidebar_activity_log_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/activity-log-sidebar/activity-log-sidebar.component */ "lPDh");
/* harmony import */ var _activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./activity-log/activity-log.component */ "1LP8");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        src_app_services_event_service__WEBPACK_IMPORTED_MODULE_8__["EventService"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _month_grid_month_grid_component__WEBPACK_IMPORTED_MODULE_5__["MonthGridComponent"],
        _month_grid_month_title_month_title_component__WEBPACK_IMPORTED_MODULE_6__["MonthTitleComponent"],
        _month_grid_day_day_component__WEBPACK_IMPORTED_MODULE_7__["DayComponent"],
        _month_grid_day_day_detail_day_detail_component__WEBPACK_IMPORTED_MODULE_10__["DayDetailComponent"],
        _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"],
        _task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_12__["TaskModalComponent"],
        _event_modal_event_modal_component__WEBPACK_IMPORTED_MODULE_13__["EventModalComponent"],
        _note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_14__["NoteModalComponent"],
        _notes_notes_component__WEBPACK_IMPORTED_MODULE_15__["NotesComponent"],
        src_app_pipes_newline_pipe__WEBPACK_IMPORTED_MODULE_16__["NewlinePipe"],
        _shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_17__["ToastComponent"],
        _shared_notes_sidebar_notes_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["NotesSidebarComponent"],
        _shared_activity_log_sidebar_activity_log_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["ActivityLogSidebarComponent"],
        _activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_20__["ActivityLogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [src_app_pipes_newline_pipe__WEBPACK_IMPORTED_MODULE_16__["NewlinePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _month_grid_month_grid_component__WEBPACK_IMPORTED_MODULE_5__["MonthGridComponent"],
                    _month_grid_month_title_month_title_component__WEBPACK_IMPORTED_MODULE_6__["MonthTitleComponent"],
                    _month_grid_day_day_component__WEBPACK_IMPORTED_MODULE_7__["DayComponent"],
                    _month_grid_day_day_detail_day_detail_component__WEBPACK_IMPORTED_MODULE_10__["DayDetailComponent"],
                    _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"],
                    _task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_12__["TaskModalComponent"],
                    _event_modal_event_modal_component__WEBPACK_IMPORTED_MODULE_13__["EventModalComponent"],
                    _note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_14__["NoteModalComponent"],
                    _notes_notes_component__WEBPACK_IMPORTED_MODULE_15__["NotesComponent"],
                    src_app_pipes_newline_pipe__WEBPACK_IMPORTED_MODULE_16__["NewlinePipe"],
                    _shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_17__["ToastComponent"],
                    _shared_notes_sidebar_notes_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["NotesSidebarComponent"],
                    _shared_activity_log_sidebar_activity_log_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["ActivityLogSidebarComponent"],
                    _activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_20__["ActivityLogComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                providers: [
                    src_app_services_event_service__WEBPACK_IMPORTED_MODULE_8__["EventService"],
                    src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                exports: [src_app_pipes_newline_pipe__WEBPACK_IMPORTED_MODULE_16__["NewlinePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zgh0":
/*!*********************************!*\
  !*** ./src/app/models/event.ts ***!
  \*********************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
class Event {
    constructor(startDate, endDate, name, recurring = false, recurringFrequency = null, recurringUntil = null) {
        this.uuid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = name;
        this.recurring = recurring;
        this.recurringFrequency = recurringFrequency;
        this.recurringUntil = recurringUntil;
    }
}


/***/ }),

/***/ "cjCF":
/*!****************************************************!*\
  !*** ./src/app/note-modal/note-modal.component.ts ***!
  \****************************************************/
/*! exports provided: NoteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteModalComponent", function() { return NoteModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_models_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/toast */ "jJzv");
/* harmony import */ var src_app_models_note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/note */ "QLJT");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "2g2N");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function NoteModalComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* (Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoteModalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a title. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoteModalComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* (Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoteModalComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter some text. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NoteModalComponent {
    constructor(formBuilder, eventService, toastService) {
        this.formBuilder = formBuilder;
        this.eventService = eventService;
        this.toastService = toastService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isEdit = false;
        this.save = () => {
            if (this.isEdit) {
                // edit
                this.note.updateDate = new Date();
                this.note.title = this.formGroup.controls.title.value;
                this.note.text = this.formGroup.controls.text.value;
                this.eventService.updateNote(this.note);
                this.toastService.addToast(src_app_models_toast__WEBPACK_IMPORTED_MODULE_2__["ToastType"].success, 'Note was edited successfully!', 5);
            }
            else {
                // create
                const note = new src_app_models_note__WEBPACK_IMPORTED_MODULE_3__["Note"](this.formGroup.controls.title.value, this.formGroup.controls.text.value, new Date(), new Date());
                this.eventService.addNote(note);
                this.toastService.addToast(src_app_models_toast__WEBPACK_IMPORTED_MODULE_2__["ToastType"].success, 'Note was created successfully!', 5);
            }
            this.close.emit();
        };
        this.formGroup = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    ngOnInit() {
        if (this.note) {
            this.formGroup.controls.title.setValue(this.note.title);
            this.formGroup.controls.text.setValue(this.note.text);
        }
    }
}
NoteModalComponent.ɵfac = function NoteModalComponent_Factory(t) { return new (t || NoteModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"])); };
NoteModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteModalComponent, selectors: [["app-note-modal"]], inputs: { note: "note", isEdit: "isEdit", index: "index" }, outputs: { close: "close" }, decls: 21, vars: 7, consts: [[3, "formGroup"], ["for", "inputTitle"], ["class", "red", 4, "ngIf"], ["id", "inputTitle", "type", "text", "formControlName", "title"], ["class", "errors", 4, "ngIf"], ["for", "inputText"], ["id", "inputText", "type", "text", "formControlName", "text"], [3, "disabled", "click"], [1, "red"], [1, "errors"]], template: function NoteModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NoteModalComponent_span_7_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NoteModalComponent_div_10_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NoteModalComponent_span_15_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NoteModalComponent_div_18_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteModalComponent_Template_button_click_19_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isEdit ? "Edit" : "Create", " Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls.title.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.controls.title.touched && ctx.formGroup.controls.title.errors && ctx.formGroup.controls.title.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls.text.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.controls.text.touched && ctx.formGroup.controls.text.errors && ctx.formGroup.controls.text.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["textarea[_ngcontent-%COMP%] {\n  height: 20vh;\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS1tb2RhbC9ub3RlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25vdGUtbW9kYWwvbm90ZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcclxuICAgIGhlaWdodDogMjB2aDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-note-modal',
                templateUrl: './note-modal.component.html',
                styleUrls: ['./note-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] }, { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }]; }, { close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], note: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fTLw":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/task */ "3kzh");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/note */ "QLJT");
/* harmony import */ var _models_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/event */ "Zgh0");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");






class EventService {
    constructor() {
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.tasksSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.notesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.addEvent = (event) => {
            this.events.push(event);
            this.eventsSubject.next(this.events);
        };
        this.updateEvent = (event) => {
            const index = this.events.findIndex((e => e.uuid === event.uuid));
            this.events[index] = event;
            this.eventsSubject.next(this.events);
        };
        this.deleteEvent = (event) => {
            const index = this.events.findIndex((e => e.uuid === event.uuid));
            this.events.splice(index, 1);
            this.eventsSubject.next(this.events);
        };
        this.addTask = (task) => {
            this.tasks.push(task);
            this.tasksSubject.next(this.tasks);
        };
        this.updateTask = (task) => {
            const index = this.tasks.findIndex((t => t.uuid === task.uuid));
            this.tasks[index] = task;
            this.tasksSubject.next(this.tasks);
        };
        this.deleteTask = (task) => {
            const index = this.tasks.findIndex((t => t.uuid === task.uuid));
            this.tasks.splice(index, 1);
            this.tasksSubject.next(this.tasks);
        };
        this.addNote = (note) => {
            this.notes.push(note);
            this.notesSubject.next(this.notes);
        };
        this.updateNote = (note) => {
            const index = this.notes.findIndex((n => n.uuid === note.uuid));
            this.notes[index] = note;
            this.notesSubject.next(this.notes);
        };
        this.deleteNote = (note) => {
            const index = this.notes.findIndex((t => t.uuid === note.uuid));
            this.notes.splice(index, 1);
            this.notesSubject.next(this.notes);
        };
        this.mockData = () => {
            this.events.push(new _models_event__WEBPACK_IMPORTED_MODULE_3__["Event"](new Date('2022-02-14T11:00:00'), new Date('2022-02-14T13:00:00'), 'Birthday Party: Hannah'));
            this.tasks.push(new _models_task__WEBPACK_IMPORTED_MODULE_1__["Task"](new Date('2022-02-16T16:30:00'), 'SWE 632 HW1 Due'));
            this.notes.push(new _models_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('Grocery List', 'Eggs, bread, butter', new Date('2022-02-06T10:00:00'), new Date('2022-02-08T11:00:00')));
        };
        this.formatTime = (inputDate) => {
            return `${(inputDate.getHours() < 10 ? '0' : '') + inputDate.getHours()}:${(inputDate.getMinutes() < 10 ? '0' : '') +
                inputDate.getMinutes()}`;
        };
        this.events = [];
        this.tasks = [];
        this.notes = [];
        this.mockData();
        this.eventsSubject.next(this.events);
        this.tasksSubject.next(this.tasks);
        this.notesSubject.next(this.notes);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "h/Sr":
/*!****************************************************!*\
  !*** ./src/app/task-modal/task-modal.component.ts ***!
  \****************************************************/
/*! exports provided: TaskModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModalComponent", function() { return TaskModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_models_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/task */ "3kzh");
/* harmony import */ var src_app_models_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/toast */ "jJzv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "2g2N");










function TaskModalComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* (Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskModalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskModalComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* (Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskModalComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskModalComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* (Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskModalComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskModalComponent_div_31_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " * (Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskModalComponent_div_31_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " * (Required)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskModalComponent_div_31_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.formGroup.errors["dateBeforeRecurringUntil"], " ");
} }
function TaskModalComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Task should repeat: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Daily");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TaskModalComponent_div_31_span_11_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Until: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskModalComponent_div_31_span_15_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TaskModalComponent_div_31_div_16_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.formGroup.controls.recurringFrequency.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.formGroup.controls.recurringUntil.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.formGroup.errors && ctx_r6.formGroup.errors["dateBeforeRecurringUntil"]);
} }
class TaskModalComponent {
    constructor(formBuilder, eventService, toastService) {
        this.formBuilder = formBuilder;
        this.eventService = eventService;
        this.toastService = toastService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isEdit = false;
        this.validateRecurringRequired = () => (group) => {
            if (group.controls.recurring.value) {
                if (!group.controls.recurringFrequency.value || !group.controls.recurringUntil.value) {
                    return { recurring: 'Recurring frequency and until date are required.' };
                }
            }
            return null;
        };
        this.validateRecurringUntil = () => (group) => {
            if (group.controls.recurring.value && group.controls.dueDate.value > group.controls.recurringUntil.value) {
                return { dateBeforeRecurringUntil: 'Please make sure the last recurring task is after the first task.' };
            }
        };
        this.toggleRecurring = () => {
            this.formGroup.controls.recurring.setValue(!this.formGroup.controls.recurring.value);
        };
        this.save = () => {
            const dueDate = new Date(`${this.formGroup.controls.dueDate.value}T${this.formGroup.controls.dueTime.value}:00`);
            if (this.isEdit) {
                // edit
                this.task.dueDate = dueDate;
                this.task.name = this.formGroup.controls.name.value;
                this.task.recurring = this.formGroup.controls.recurring.value;
                this.task.recurringFrequency = this.formGroup.controls.recurringFrequency.value;
                this.task.recurringUntil = new Date(`${this.formGroup.controls.recurringUntil.value}T00:00:00`);
                this.eventService.updateTask(this.task);
                this.toastService.addToast(src_app_models_toast__WEBPACK_IMPORTED_MODULE_3__["ToastType"].success, 'Event was edited successfully!', 5);
            }
            else {
                // create
                const task = new src_app_models_task__WEBPACK_IMPORTED_MODULE_2__["Task"](dueDate, this.formGroup.controls.name.value, this.formGroup.controls.recurring.value, this.formGroup.controls.recurringFrequency.value, new Date(`${this.formGroup.controls.recurringUntil.value}T00:00:00`));
                this.eventService.addTask(task);
                this.toastService.addToast(src_app_models_toast__WEBPACK_IMPORTED_MODULE_3__["ToastType"].success, 'Event was created successfully!', 5);
            }
            this.close.emit();
        };
        this.formGroup = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dueDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dueTime: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            recurring: [false],
            recurringFrequency: [''],
            recurringUntil: [null]
        }, {
            validators: [
                this.validateRecurringRequired(),
                this.validateRecurringUntil()
            ]
        });
    }
    ngOnInit() {
        if (this.task) {
            this.formGroup.controls.name.setValue(this.task.name);
            this.formGroup.controls.dueDate.setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.task.dueDate, 'yyyy-MM-dd', 'en'));
            this.formGroup.controls.dueTime.setValue(this.eventService.formatTime(this.task.dueDate));
            if (this.task.recurring) {
                this.formGroup.controls.recurring.setValue(this.task.recurring);
                this.formGroup.controls.recurringFrequency.setValue(this.task.recurringFrequency);
                this.formGroup.controls.recurringUntil.setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.task.recurringUntil, 'yyyy-MM-dd', 'en'));
            }
        }
    }
}
TaskModalComponent.ɵfac = function TaskModalComponent_Factory(t) { return new (t || TaskModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"])); };
TaskModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskModalComponent, selectors: [["app-task-modal"]], inputs: { task: "task", isEdit: "isEdit", index: "index" }, outputs: { close: "close" }, decls: 34, vars: 10, consts: [[3, "formGroup"], ["for", "inputName"], ["class", "red", 4, "ngIf"], ["id", "inputName", "type", "text", "formControlName", "name"], ["class", "errors", 4, "ngIf"], ["for", "inputDate"], ["id", "inputDate", "type", "date", "formControlName", "dueDate"], ["for", "inputTime"], ["id", "inputTime", "type", "time", "formControlName", "dueTime"], [1, "recurring-checkbox", 3, "click"], ["id", "inputReccuring", "type", "checkbox", "formControlName", "recurring"], ["for", "inputRecurring"], [4, "ngIf"], [3, "disabled", "click"], [1, "red"], [1, "errors"], [1, "recurring-frequency"], ["for", "recurringFrequency"], ["id", "recurringFrequency", "formControlName", "recurringFrequency", 1, "form-control"], ["value", "DAILY", "selected", ""], ["value", "WEEKLY"], ["value", "MONTHLY"], ["for", "recurringUntil"], ["id", "recurringUntil", "type", "date", "formControlName", "recurringUntil"]], template: function TaskModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TaskModalComponent_span_7_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskModalComponent_div_10_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Due Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskModalComponent_span_15_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TaskModalComponent_div_18_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Due Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TaskModalComponent_span_23_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TaskModalComponent_div_26_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskModalComponent_Template_div_click_27_listener() { return ctx.toggleRecurring(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Make Task Recurring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TaskModalComponent_div_31_Template, 17, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskModalComponent_Template_button_click_32_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isEdit ? "Edit" : "Create", " Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls.name.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.controls.name.touched && ctx.formGroup.controls.name.errors && ctx.formGroup.controls.name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls.dueDate.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.controls.dueDate.touched && ctx.formGroup.controls.dueDate.errors && ctx.formGroup.controls.dueDate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup.controls.dueTime.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.controls.dueTime.touched && ctx.formGroup.controls.dueTime.errors && ctx.formGroup.controls.dueTime.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.controls.recurring.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stbW9kYWwvdGFzay1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-modal',
                templateUrl: './task-modal.component.html',
                styleUrls: ['./task-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }, { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }]; }, { close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "jJzv":
/*!*********************************!*\
  !*** ./src/app/models/toast.ts ***!
  \*********************************/
/*! exports provided: Toast, ToastType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastType", function() { return ToastType; });
class Toast {
    constructor(type, text) {
        this.uuid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.type = type;
        this.text = text;
    }
}
var ToastType;
(function (ToastType) {
    ToastType["success"] = "SUCCESS";
    ToastType["error"] = "ERROR";
    ToastType["info"] = "INFO";
})(ToastType || (ToastType = {}));


/***/ }),

/***/ "lPDh":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/activity-log-sidebar/activity-log-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ActivityLogSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogSidebarComponent", function() { return ActivityLogSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ActivityLogSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActivityLogSidebarComponent.ɵfac = function ActivityLogSidebarComponent_Factory(t) { return new (t || ActivityLogSidebarComponent)(); };
ActivityLogSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityLogSidebarComponent, selectors: [["app-activity-log-sidebar"]], decls: 2, vars: 0, template: function ActivityLogSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "alsw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hY3Rpdml0eS1sb2ctc2lkZWJhci9hY3Rpdml0eS1sb2ctc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityLogSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activity-log-sidebar',
                templateUrl: './activity-log-sidebar.component.html',
                styleUrls: ['./activity-log-sidebar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nK6g":
/*!***************************************!*\
  !*** ./src/app/pipes/newline.pipe.ts ***!
  \***************************************/
/*! exports provided: NewlinePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewlinePipe", function() { return NewlinePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NewlinePipe {
    transform(value) {
        return value.replace(/\n/g, '<br/>');
    }
}
NewlinePipe.ɵfac = function NewlinePipe_Factory(t) { return new (t || NewlinePipe)(); };
NewlinePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "newline", type: NewlinePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewlinePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'newline'
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map