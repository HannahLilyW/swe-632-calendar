(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n.modal-parent {\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  cursor: auto;\n  z-index: 1;\n}\n.errors {\n  color: red;\n  margin: 4px;\n}\ninput, label, textarea, button, select {\n  margin: 4px;\n}\nh1, h2, h3, h4 {\n  margin: 0;\n}\n.red {\n  color: red;\n}\nbutton {\n  cursor: pointer;\n}\nbutton:hover {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n}\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\nsvg {\n  display: block;\n  fill: white;\n  flex-shrink: 0;\n  stroke: white;\n}\n.recurring-checkbox {\n  padding: 4px;\n  cursor: pointer;\n}\n.recurring-checkbox input, .recurring-checkbox label {\n  cursor: pointer;\n}\n.recurring-checkbox:hover {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\nbutton {\n  border: 0px;\n  background-color: rgba(64, 156, 255, 0.8);\n  color: white;\n  border-radius: 200px;\n  padding: 8px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\nbutton:disabled {\n  background-color: rgba(0, 0, 0, 0.25) !important;\n}\n.dangerous {\n  background-color: rgba(255, 0, 0, 0.6) !important;\n}\n.icon-pencil, .edit-button, .icon-bin, .delete-button {\n  width: 24px;\n  height: 24px;\n  box-sizing: content-box;\n}\nselect, input, textarea {\n  background-color: rgba(64, 156, 255, 0.8);\n  border: 0px;\n  border-radius: 15px;\n  color: white;\n  cursor: pointer;\n  padding: 8px;\n  width: -moz-fit-content;\n  width: fit-content;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\nselect:hover, input:hover, textarea:hover {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n}\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.25);\n}\n.slider:hover {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\ninput:checked + .slider {\n  background-color: rgba(64, 156, 255, 0.8);\n}\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"AAEA;EACI,0CAAA;AAAJ;AAGA;EACI,YAAA;EACA,OAAA;EACA,eAAA;EACA,MAAA;EACA,WAAA;EACA,8BAAA;EACA,YAAA;EACA,UAAA;AAAJ;AAGA;EACI,UAAA;EACA,WAAA;AAAJ;AAGA;EACI,WAAA;AAAJ;AAGA;EACI,SAAA;AAAJ;AAGA;EACI,UAAA;AAAJ;AAGA;EACI,eAAA;AAAJ;AAEI;EACI,2CAAA;AAAR;AAIA;EACI,qBAAA;EACA,UAAA;EACA,WAAA;EACA,eAAA;EACA,oBAAA;EACA,kBAAA;AADJ;AAKA;EACI,cAAA;EACA,WAAA;EACA,cAAA;EACA,aAAA;AAFJ;AAKA;EACI,YAAA;EACA,eAAA;AAFJ;AAGI;EACI,eAAA;AADR;AAII;EACI,2CAAA;AAFR;AAMA;EACI,WAAA;EACA,yCAAA;EACA,YAAA;EACA,oBAAA;EACA,YAAA;EACA,2CAAA;AAHJ;AAII;EACI,gDAAA;AAFR;AAMA;EACI,iDAAA;AAHJ;AAMA;EACI,WAAA;EACA,YAAA;EACA,uBAAA;AAHJ;AAMA;EACI,yCAAA;EACA,WAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,uBAAA;EAAA,kBAAA;EACA,2CAAA;AAHJ;AAKI;EACE,2CAAA;AAHN;AAQA,2CAAA;AACA;EACI,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AALJ;AAQA,+BAAA;AACA;EACI,UAAA;EACA,QAAA;EACA,SAAA;AALJ;AAQA,eAAA;AACA;EACI,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,qCAAA;AALJ;AAMI;EACI,2CAAA;AAJR;AAQE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EAEA,gBAAA;AALJ;AAQE;EACE,yCAAA;AALJ;AAQE;EAGE,2BAAA;AALJ;AAQE,oBAAA;AACA;EACE,mBAAA;AALJ;AAQE;EACE,kBAAA;AALJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');\r\n\r\n* {\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.modal-parent {\r\n    height: 100%;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    cursor: auto;\r\n    z-index: 1;\r\n}\r\n\r\n.errors {\r\n    color: red;\r\n    margin: 4px;\r\n}\r\n\r\ninput, label, textarea, button, select {\r\n    margin: 4px;\r\n}\r\n\r\nh1, h2, h3, h4 {\r\n    margin: 0;\r\n}\r\n\r\n.red {\r\n    color: red;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n\r\n    &:hover {\r\n        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);\r\n    }\r\n}\r\n\r\n.icon {\r\n    display: inline-block;\r\n    width: 1em;\r\n    height: 1em;\r\n    stroke-width: 0;\r\n    stroke: currentColor;\r\n    fill: currentColor;\r\n    \r\n}\r\n\r\nsvg {\r\n    display: block;\r\n    fill: white;\r\n    flex-shrink: 0;\r\n    stroke: white;\r\n}\r\n\r\n.recurring-checkbox {\r\n    padding: 4px;\r\n    cursor: pointer;\r\n    input, label {\r\n        cursor: pointer;\r\n    }\r\n\r\n    &:hover {\r\n        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\r\n    }\r\n}\r\n\r\nbutton {\r\n    border: 0px;\r\n    background-color: rgba(64, 156, 255, 0.8);\r\n    color: white;\r\n    border-radius: 200px;\r\n    padding: 8px;\r\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\r\n    &:disabled {\r\n        background-color: rgba(0, 0, 0, 0.25) !important; \r\n    }\r\n}\r\n\r\n.dangerous {\r\n    background-color: rgba(255, 0, 0, 0.6) !important;\r\n}\r\n\r\n.icon-pencil, .edit-button, .icon-bin, .delete-button {\r\n    width: 24px;\r\n    height: 24px;\r\n    box-sizing: content-box;\r\n}\r\n\r\nselect, input, textarea {\r\n    background-color: rgba(64, 156, 255, 0.8);\r\n    border: 0px;\r\n    border-radius: 15px;\r\n    color: white;\r\n    cursor: pointer;\r\n    padding: 8px;\r\n    width: fit-content;\r\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\r\n  \r\n    &:hover {\r\n      box-shadow: 0px 0px 10px rgba(0,0,0,0.5);\r\n    }\r\n  \r\n}\r\n\r\n/* The switch - the box around the slider */\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n.switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n/* The slider */\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.25);\r\n    &:hover {\r\n        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);\r\n    }\r\n  }\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  input:checked + .slider {\r\n    background-color: rgba(64, 156, 255, 0.8);\r\n  }\r\n\r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    -ms-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\syuga\Documents\School\SWE 632\swe-632-calendar\calendar\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map