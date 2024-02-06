"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_global_foundation_js-assets_js_theme_global_modal_js"],{

/***/ "./assets/js/theme/global/foundation.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/global/foundation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.tab */ "./node_modules/foundation-sites/js/foundation/foundation.tab.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _reveal_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reveal-close */ "./assets/js/theme/global/reveal-close.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($element) {
  $element.foundation({
    dropdown: {
      // specify the class used for active dropdowns
      active_class: 'is-open'
    },
    reveal: {
      bg_class: 'modal-background',
      dismiss_modal_class: 'modal-close',
      close_on_background_click: true
    },
    tab: {
      active_class: 'is-active'
    }
  });
  (0,_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-reveal]', {
    $context: $element
  });
  (0,_reveal_close__WEBPACK_IMPORTED_MODULE_5__["default"])('[data-reveal-close]', {
    $context: $element
  });
}

/***/ }),

/***/ "./assets/js/theme/global/modal.js":
/*!*****************************************!*\
  !*** ./assets/js/theme/global/modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal),
/* harmony export */   ModalEvents: () => (/* binding */ ModalEvents),
/* harmony export */   alertModal: () => (/* binding */ alertModal),
/* harmony export */   "default": () => (/* binding */ modalFactory),
/* harmony export */   defaultModal: () => (/* binding */ defaultModal),
/* harmony export */   showAlertModal: () => (/* binding */ showAlertModal)
/* harmony export */ });
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation */ "./assets/js/theme/global/foundation.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var bodyActiveClass = 'has-activeModal';
var loadingOverlayClass = 'loadingOverlay';
var modalBodyClass = 'modal-body';
var modalContentClass = 'modal-content';
var SizeClasses = {
  small: 'modal--small',
  large: 'modal--large',
  normal: ''
};
var ModalEvents = {
  close: 'close.fndtn.reveal',
  closed: 'closed.fndtn.reveal',
  open: 'open.fndtn.reveal',
  opened: 'opened.fndtn.reveal',
  loaded: 'loaded.data.custom'
};
function getSizeFromModal($modal) {
  if ($modal.hasClass(SizeClasses.small)) {
    return 'small';
  }
  if ($modal.hasClass(SizeClasses.large)) {
    return 'large';
  }
  return 'normal';
}
function getViewportHeight(multipler) {
  if (multipler === void 0) {
    multipler = 1;
  }
  var viewportHeight = $(window).height();
  return viewportHeight * multipler;
}
function wrapModalBody(content) {
  var $modalBody = $('<div>');
  $modalBody.addClass(modalBodyClass).html(content);
  return $modalBody;
}
function restrainContentHeight($content) {
  if ($content.length === 0) return;
  var $body = $("." + modalBodyClass, $content);
  if ($body.length === 0) return;
  var bodyHeight = $body.outerHeight();
  var contentHeight = $content.outerHeight();
  var viewportHeight = getViewportHeight(0.9);
  var maxHeight = viewportHeight - (contentHeight - bodyHeight);
  $body.css('max-height', maxHeight);
}
function createModalContent($modal) {
  var $content = $("." + modalContentClass, $modal);
  if ($content.length === 0) {
    var existingContent = $modal.children();
    $content = $('<div>').addClass(modalContentClass).append(existingContent).appendTo($modal);
  }
  return $content;
}
function createLoadingOverlay($modal) {
  var $loadingOverlay = $("." + loadingOverlayClass, $modal);
  if ($loadingOverlay.length === 0) {
    $loadingOverlay = $('<div>').addClass(loadingOverlayClass).appendTo($modal);
  }
  return $loadingOverlay;
}

/**
 * Require foundation.reveal
 * Decorate foundation.reveal with additional methods
 * @param {jQuery} $modal
 * @param {Object} [options]
 * @param {string} [options.size]
 */
var Modal = /*#__PURE__*/function () {
  function Modal($modal, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? null : _ref$size;
    this.$modal = $modal;
    this.$content = createModalContent(this.$modal);
    this.$overlay = createLoadingOverlay(this.$modal);
    this.defaultSize = size || getSizeFromModal($modal);
    this.size = this.defaultSize;
    this.pending = false;
    this.$preModalFocusedEl = null;
    this.focusTrap = null;
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalOpened = this.onModalOpened.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalClosed = this.onModalClosed.bind(this);
    this.bindEvents();

    /* STRF-2471 - Multiple Wish Lists - prevents double-firing
     * of foundation.dropdown click.fndtn.dropdown event */
    this.$modal.on('click', '.dropdown-menu-button', function (e) {
      e.stopPropagation();
    });
  }
  var _proto = Modal.prototype;
  _proto.bindEvents = function bindEvents() {
    this.$modal.on(ModalEvents.close, this.onModalClose);
    this.$modal.on(ModalEvents.closed, this.onModalClosed);
    this.$modal.on(ModalEvents.open, this.onModalOpen);
    this.$modal.on(ModalEvents.opened, this.onModalOpened);
  };
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      size = _ref2.size,
      _ref2$pending = _ref2.pending,
      pending = _ref2$pending === void 0 ? true : _ref2$pending,
      _ref2$clearContent = _ref2.clearContent,
      clearContent = _ref2$clearContent === void 0 ? true : _ref2$clearContent;
    this.pending = pending;
    if (size) {
      this.size = size;
    }
    if (clearContent) {
      this.clearContent();
    }
    this.$modal.foundation('reveal', 'open');
  };
  _proto.close = function close() {
    this.$modal.foundation('reveal', 'close');
  };
  _proto.updateContent = function updateContent(content, _temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$wrap = _ref3.wrap,
      wrap = _ref3$wrap === void 0 ? false : _ref3$wrap;
    var $content = $(content);
    if (wrap) {
      $content = wrapModalBody(content);
    }
    this.pending = false;
    this.$content.html($content);
    this.$modal.trigger(ModalEvents.loaded);
    restrainContentHeight(this.$content);
    (0,_foundation__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$content);
  };
  _proto.clearContent = function clearContent() {
    this.$content.html('');
  };
  _proto.setupFocusTrap = function setupFocusTrap() {
    var _this = this;
    if (!this.$preModalFocusedEl) this.$preModalFocusedEl = $(document.activeElement);
    if (!this.focusTrap) {
      this.focusTrap = focus_trap__WEBPACK_IMPORTED_MODULE_1__.createFocusTrap(this.$modal[0], {
        escapeDeactivates: false,
        returnFocusOnDeactivate: false,
        allowOutsideClick: true,
        fallbackFocus: function fallbackFocus() {
          var fallbackNode = _this.$preModalFocusedEl && _this.$preModalFocusedEl.length ? _this.$preModalFocusedEl[0] : $('[data-header-logo-link]')[0];
          return fallbackNode;
        }
      });
    }
    this.focusTrap.deactivate();
    this.focusTrap.activate();
  };
  _proto.onModalClose = function onModalClose() {
    $('body').removeClass(bodyActiveClass);
  };
  _proto.onModalClosed = function onModalClosed() {
    this.size = this.defaultSize;
    if (this.focusTrap) this.focusTrap.deactivate();
    if (this.$preModalFocusedEl) this.$preModalFocusedEl.focus();
    this.$preModalFocusedEl = null;
  };
  _proto.onModalOpen = function onModalOpen() {
    $('body').addClass(bodyActiveClass);
  };
  _proto.onModalOpened = function onModalOpened() {
    var _this2 = this;
    if (this.pending) {
      this.$modal.one(ModalEvents.loaded, function () {
        if (_this2.$modal.hasClass('open')) _this2.setupFocusTrap();
      });
    } else {
      this.setupFocusTrap();
    }
    restrainContentHeight(this.$content);
  };
  _createClass(Modal, [{
    key: "pending",
    get: function get() {
      return this._pending;
    },
    set: function set(pending) {
      this._pending = pending;
      if (pending) {
        this.$overlay.show();
      } else {
        this.$overlay.hide();
      }
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(size) {
      this._size = size;
      this.$modal.removeClass(SizeClasses.small).removeClass(SizeClasses.large).addClass(SizeClasses[size] || '');
    }
  }]);
  return Modal;
}();

/**
 * Return an array of modals
 * @param {string} selector
 * @param {Object} [options]
 * @param {string} [options.size]
 * @returns {array}
 */
function modalFactory(selector, options) {
  if (selector === void 0) {
    selector = '[data-reveal]';
  }
  if (options === void 0) {
    options = {};
  }
  var $modals = $(selector, options.$context);
  return $modals.map(function (index, element) {
    var $modal = $(element);
    var instanceKey = 'modalInstance';
    var cachedModal = $modal.data(instanceKey);
    if (cachedModal instanceof Modal) {
      return cachedModal;
    }
    var modal = new Modal($modal, options);
    $modal.data(instanceKey, modal);
    return modal;
  }).toArray();
}

/*
 * Return the default page modal
 */
function defaultModal() {
  return modalFactory('#modal')[0];
}

/*
 * Return the default alert modal
 */
function alertModal() {
  return modalFactory('#alert-modal')[0];
}

/*
 * Display the given message in the default alert modal
 */
function showAlertModal(message, options) {
  if (options === void 0) {
    options = {};
  }
  var modal = alertModal();
  var $cancelBtn = modal.$modal.find('.cancel');
  var $confirmBtn = modal.$modal.find('.confirm');
  var _options = options,
    _options$icon = _options.icon,
    icon = _options$icon === void 0 ? 'error' : _options$icon,
    _options$$preModalFoc = _options.$preModalFocusedEl,
    $preModalFocusedEl = _options$$preModalFoc === void 0 ? null : _options$$preModalFoc,
    showCancelButton = _options.showCancelButton,
    onConfirm = _options.onConfirm;
  if ($preModalFocusedEl) {
    modal.$preModalFocusedEl = $preModalFocusedEl;
  }
  modal.open();
  modal.$modal.find('.alert-icon').hide();
  if (icon === 'error') {
    modal.$modal.find('.error-icon').show();
  } else if (icon === 'warning') {
    modal.$modal.find('.warning-icon').show();
  }
  modal.updateContent("<span>" + message + "</span>");
  if (onConfirm) {
    $confirmBtn.on('click', onConfirm);
    modal.$modal.one(ModalEvents.closed, function () {
      $confirmBtn.off('click', onConfirm);
    });
  }
  if (showCancelButton) {
    $cancelBtn.show();
  } else {
    $cancelBtn.hide();
  }
}

/***/ }),

/***/ "./assets/js/theme/global/reveal-close.js":
/*!************************************************!*\
  !*** ./assets/js/theme/global/reveal-close.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ revealCloseFactory)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var revealCloseAttr = 'revealClose';
var revealCloseSelector = "[data-" + revealCloseAttr + "]";
var revealSelector = '[data-reveal]';
var RevealClose = /*#__PURE__*/function () {
  function RevealClose($button) {
    this.$button = $button;
    this.modalId = $button.data(revealCloseAttr);
    this.onClick = this.onClick.bind(this);
    this.bindEvents();
  }
  var _proto = RevealClose.prototype;
  _proto.bindEvents = function bindEvents() {
    this.$button.on('click', this.onClick);
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$button.off('click', this.onClick);
  };
  _proto.onClick = function onClick(event) {
    var modal = this.modal;
    if (modal) {
      event.preventDefault();
      modal.close();
    }
  };
  _createClass(RevealClose, [{
    key: "modal",
    get: function get() {
      var $modal;
      if (this.modalId) {
        $modal = $("#" + this.modalId);
      } else {
        $modal = this.$button.parents(revealSelector).eq(0);
      }
      return $modal.data('modalInstance');
    }
  }]);
  return RevealClose;
}();
/*
 * Extend foundation.reveal with the ability to close a modal by clicking on any of its child element
 * with data-reveal-close attribute.
 *
 * @example
 *
 * <div data-reveal id="helloModal">
 *   <button data-reveal-close>Continue</button>
 * </div>
 *
 * <div data-reveal id="helloModal"></div>
 * <button data-reveal-close="helloModal">Continue</button>
 */
function revealCloseFactory(selector, options) {
  if (selector === void 0) {
    selector = revealCloseSelector;
  }
  if (options === void 0) {
    options = {};
  }
  var $buttons = $(selector, options.$context);
  return $buttons.map(function (index, element) {
    var $button = $(element);
    var instanceKey = revealCloseAttr + "Instance";
    var cachedButton = $button.data(instanceKey);
    if (cachedButton instanceof RevealClose) {
      return cachedButton;
    }
    var button = new RevealClose($button);
    $button.data(instanceKey, button);
    return button;
  }).toArray();
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9nbG9iYWxfZm91bmRhdGlvbl9qcy1hc3NldHNfanNfdGhlbWVfZ2xvYmFsX21vZGFsX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1M7QUFDRjtBQUNIO0FBQ3BCO0FBQ2E7QUFFaEQsNkJBQWUsb0NBQVVFLFFBQVEsRUFBRTtFQUMvQkEsUUFBUSxDQUFDQyxVQUFVLENBQUM7SUFDaEJDLFFBQVEsRUFBRTtNQUNOO01BQ0FDLFlBQVksRUFBRTtJQUNsQixDQUFDO0lBQ0RDLE1BQU0sRUFBRTtNQUNKQyxRQUFRLEVBQUUsa0JBQWtCO01BQzVCQyxtQkFBbUIsRUFBRSxhQUFhO01BQ2xDQyx5QkFBeUIsRUFBRTtJQUMvQixDQUFDO0lBQ0RDLEdBQUcsRUFBRTtNQUNETCxZQUFZLEVBQUU7SUFDbEI7RUFDSixDQUFDLENBQUM7RUFFRkwsa0RBQVksQ0FBQyxlQUFlLEVBQUU7SUFBRVcsUUFBUSxFQUFFVDtFQUFTLENBQUMsQ0FBQztFQUNyREQseURBQWtCLENBQUMscUJBQXFCLEVBQUU7SUFBRVUsUUFBUSxFQUFFVDtFQUFTLENBQUMsQ0FBQztBQUNyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnNDO0FBQ0U7QUFFeEMsSUFBTVcsZUFBZSxHQUFHLGlCQUFpQjtBQUN6QyxJQUFNQyxtQkFBbUIsR0FBRyxnQkFBZ0I7QUFDNUMsSUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDbkMsSUFBTUMsaUJBQWlCLEdBQUcsZUFBZTtBQUV6QyxJQUFNQyxXQUFXLEdBQUc7RUFDaEJDLEtBQUssRUFBRSxjQUFjO0VBQ3JCQyxLQUFLLEVBQUUsY0FBYztFQUNyQkMsTUFBTSxFQUFFO0FBQ1osQ0FBQztBQUVNLElBQU1DLFdBQVcsR0FBRztFQUN2QkMsS0FBSyxFQUFFLG9CQUFvQjtFQUMzQkMsTUFBTSxFQUFFLHFCQUFxQjtFQUM3QkMsSUFBSSxFQUFFLG1CQUFtQjtF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QUMsQ0FBQ1MsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUN2RDtNQUVBLE9BQU94SCxNQUFNLENBQUM0RixJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3ZDO0VBQUM7RUFBQSxPQUFBb0IsV0FBQTtBQUFBO0FBcUJMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBUzNJLGtCQUFrQkEsQ0FBQytHLFFBQVEsRUFBd0JDLE9BQU8sRUFBTztFQUFBLElBQTlDRCxRQUFRO0lBQVJBLFFBQVEsR0FBRzBCLG1CQUFtQjtFQUFBO0VBQUEsSUFBRXpCLE9BQU87SUFBUEEsT0FBTyxHQUFHLENBQUMsQ0FBQztFQUFBO0VBQ25GLElBQU1vQyxRQUFRLEdBQUdwSCxDQUFDLENBQUMrRSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ3RHLFFBQVEsQ0FBQztFQUU5QyxPQUFPMEksUUFBUSxDQUFDbEMsR0FBRyxDQUFDLFVBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO0lBQ3BDLElBQU13QixPQUFPLEdBQUc1RyxDQUFDLENBQUNvRixPQUFPLENBQUM7SUFDMUIsSUFBTUMsV0FBVyxHQUFNbUIsZUFBZSxhQUFVO0lBQ2hELElBQU1hLFlBQVksR0FBR1QsT0FBTyxDQUFDckIsSUFBSSxDQUFDRixXQUFXLENBQUM7SUFFOUMsSUFBSWdDLFlBQVksWUFBWVYsV0FBVyxFQUFFO01BQ3JDLE9BQU9VLFlBQVk7SUFDdkI7SUFFQSxJQUFNQyxNQUFNLEdBQUcsSUFBSVgsV0FBVyxDQUFDQyxPQUFPLENBQUM7SUFFdkNBLE9BQU8sQ0FBQ3JCLElBQUksQ0FBQ0YsV0FBVyxFQUFFaUMsTUFBTSxDQUFDO0lBRWpDLE9BQU9BLE1BQU07RUFDakIsQ0FBQyxDQUFDLENBQUM3QixPQUFPLENBQUMsQ0FBQztBQUNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvcmV2ZWFsLWNsb3NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5kcm9wZG93bic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnRhYic7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHJldmVhbENsb3NlRmFjdG9yeSBmcm9tICcuL3JldmVhbC1jbG9zZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgkZWxlbWVudCkge1xuICAgICRlbGVtZW50LmZvdW5kYXRpb24oe1xuICAgICAgICBkcm9wZG93bjoge1xuICAgICAgICAgICAgLy8gc3BlY2lmeSB0aGUgY2xhc3MgdXNlZCBmb3IgYWN0aXZlIGRyb3Bkb3duc1xuICAgICAgICAgICAgYWN0aXZlX2NsYXNzOiAnaXMtb3BlbicsXG4gICAgICAgIH0sXG4gICAgICAgIHJldmVhbDoge1xuICAgICAgICAgICAgYmdfY2xhc3M6ICdtb2RhbC1iYWNrZ3JvdW5kJyxcbiAgICAgICAgICAgIGRpc21pc3NfbW9kYWxfY2xhc3M6ICdtb2RhbC1jbG9zZScsXG4gICAgICAgICAgICBjbG9zZV9vbl9iYWNrZ3JvdW5kX2NsaWNrOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB0YWI6IHtcbiAgICAgICAgICAgIGFjdGl2ZV9jbGFzczogJ2lzLWFjdGl2ZScsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBtb2RhbEZhY3RvcnkoJ1tkYXRhLXJldmVhbF0nLCB7ICRjb250ZXh0OiAkZWxlbWVudCB9KTtcbiAgICByZXZlYWxDbG9zZUZhY3RvcnkoJ1tkYXRhLXJldmVhbC1jbG9zZV0nLCB7ICRjb250ZXh0OiAkZWxlbWVudCB9KTtcbn1cbiIsImltcG9ydCBmb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyBmb2N1c1RyYXAgZnJvbSAnZm9jdXMtdHJhcCc7XG5cbmNvbnN0IGJvZHlBY3RpdmVDbGFzcyA9ICdoYXMtYWN0aXZlTW9kYWwnO1xuY29uc3QgbG9hZGluZ092ZXJsYXlDbGFzcyA9ICdsb2FkaW5nT3ZlcmxheSc7XG5jb25zdCBtb2RhbEJvZHlDbGFzcyA9ICdtb2RhbC1ib2R5JztcbmNvbnN0IG1vZGFsQ29udGVudENsYXNzID0gJ21vZGFsLWNvbnRlbnQnO1xuXG5jb25zdCBTaXplQ2xhc3NlcyA9IHtcbiAgICBzbWFsbDogJ21vZGFsLS1zbWFsbCcsXG4gICAgbGFyZ2U6ICdtb2RhbC0tbGFyZ2UnLFxuICAgIG5vcm1hbDogJycsXG59O1xuXG5leHBvcnQgY29uc3QgTW9kYWxFdmVudHMgPSB7XG4gICAgY2xvc2U6ICdjbG9zZS5mbmR0bi5yZXZlYWwnLFxuICAgIGNsb3NlZDogJ2Nsb3NlZC5mbmR0bi5yZXZlYWwnLFxuICAgIG9wZW46ICdvcGVuLmZuZHRuLnJldmVhbCcsXG4gICAgb3BlbmVkOiAnb3BlbmVkLmZuZHRuLnJldmVhbCcsXG4gICAgbG9hZGVkOiAnbG9hZGVkLmRhdGEuY3VzdG9tJyxcbn07XG5cbmZ1bmN0aW9uIGdldFNpemVGcm9tTW9kYWwoJG1vZGFsKSB7XG4gICAgaWYgKCRtb2RhbC5oYXNDbGFzcyhTaXplQ2xhc3Nlcy5zbWFsbCkpIHtcbiAgICAgICAgcmV0dXJuICdzbWFsbCc7XG4gICAgfVxuXG4gICAgaWYgKCRtb2RhbC5oYXNDbGFzcyhTaXplQ2xhc3Nlcy5sYXJnZSkpIHtcbiAgICAgICAgcmV0dXJuICdsYXJnZSc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdub3JtYWwnO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydEhlaWdodChtdWx0aXBsZXIgPSAxKSB7XG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cbiAgICByZXR1cm4gdmlld3BvcnRIZWlnaHQgKiBtdWx0aXBsZXI7XG59XG5cbmZ1bmN0aW9uIHdyYXBNb2RhbEJvZHkoY29udGVudCkge1xuICAgIGNvbnN0ICRtb2RhbEJvZHkgPSAkKCc8ZGl2PicpO1xuXG4gICAgJG1vZGFsQm9keVxuICAgICAgICAuYWRkQ2xhc3MobW9kYWxCb2R5Q2xhc3MpXG4gICAgICAgIC5odG1sKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuICRtb2RhbEJvZHk7XG59XG5cbmZ1bmN0aW9uIHJlc3RyYWluQ29udGVudEhlaWdodCgkY29udGVudCkge1xuICAgIGlmICgkY29udGVudC5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGNvbnN0ICRib2R5ID0gJChgLiR7bW9kYWxCb2R5Q2xhc3N9YCwgJGNvbnRlbnQpO1xuXG4gICAgaWYgKCRib2R5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgYm9keUhlaWdodCA9ICRib2R5Lm91dGVySGVpZ2h0KCk7XG4gICAgY29uc3QgY29udGVudEhlaWdodCA9ICRjb250ZW50Lm91dGVySGVpZ2h0KCk7XG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSBnZXRWaWV3cG9ydEhlaWdodCgwLjkpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IHZpZXdwb3J0SGVpZ2h0IC0gKGNvbnRlbnRIZWlnaHQgLSBib2R5SGVpZ2h0KTtcblxuICAgICRib2R5LmNzcygnbWF4LWhlaWdodCcsIG1heEhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsQ29udGVudCgkbW9kYWwpIHtcbiAgICBsZXQgJGNvbnRlbnQgPSAkKGAuJHttb2RhbENvbnRlbnRDbGFzc31gLCAkbW9kYWwpO1xuXG4gICAgaWYgKCRjb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBleGlzdGluZ0NvbnRlbnQgPSAkbW9kYWwuY2hpbGRyZW4oKTtcblxuICAgICAgICAkY29udGVudCA9ICQoJzxkaXY+JylcbiAgICAgICAgICAgIC5hZGRDbGFzcyhtb2RhbENvbnRlbnRDbGFzcylcbiAgICAgICAgICAgIC5hcHBlbmQoZXhpc3RpbmdDb250ZW50KVxuICAgICAgICAgICAgLmFwcGVuZFRvKCRtb2RhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRjb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2FkaW5nT3ZlcmxheSgkbW9kYWwpIHtcbiAgICBsZXQgJGxvYWRpbmdPdmVybGF5ID0gJChgLiR7bG9hZGluZ092ZXJsYXlDbGFzc31gLCAkbW9kYWwpO1xuXG4gICAgaWYgKCRsb2FkaW5nT3ZlcmxheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJGxvYWRpbmdPdmVybGF5ID0gJCgnPGRpdj4nKVxuICAgICAgICAgICAgLmFkZENsYXNzKGxvYWRpbmdPdmVybGF5Q2xhc3MpXG4gICAgICAgICAgICAuYXBwZW5kVG8oJG1vZGFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJGxvYWRpbmdPdmVybGF5O1xufVxuXG4vKipcbiAqIFJlcXVpcmUgZm91bmRhdGlvbi5yZXZlYWxcbiAqIERlY29yYXRlIGZvdW5kYXRpb24ucmV2ZWFsIHdpdGggYWRkaXRpb25hbCBtZXRob2RzXG4gKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc2l6ZV1cbiAqL1xuZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgICBjb25zdHJ1Y3RvcigkbW9kYWwsIHtcbiAgICAgICAgc2l6ZSA9IG51bGwsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuJG1vZGFsID0gJG1vZGFsO1xuICAgICAgICB0aGlzLiRjb250ZW50ID0gY3JlYXRlTW9kYWxDb250ZW50KHRoaXMuJG1vZGFsKTtcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9IGNyZWF0ZUxvYWRpbmdPdmVybGF5KHRoaXMuJG1vZGFsKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U2l6ZSA9IHNpemUgfHwgZ2V0U2l6ZUZyb21Nb2RhbCgkbW9kYWwpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRlZmF1bHRTaXplO1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWwgPSBudWxsO1xuICAgICAgICB0aGlzLmZvY3VzVHJhcCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5vbk1vZGFsT3BlbiA9IHRoaXMub25Nb2RhbE9wZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vZGFsT3BlbmVkID0gdGhpcy5vbk1vZGFsT3BlbmVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb2RhbENsb3NlID0gdGhpcy5vbk1vZGFsQ2xvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vZGFsQ2xvc2VkID0gdGhpcy5vbk1vZGFsQ2xvc2VkLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLyogU1RSRi0yNDcxIC0gTXVsdGlwbGUgV2lzaCBMaXN0cyAtIHByZXZlbnRzIGRvdWJsZS1maXJpbmdcbiAgICAgICAgICogb2YgZm91bmRhdGlvbi5kcm9wZG93biBjbGljay5mbmR0bi5kcm9wZG93biBldmVudCAqL1xuICAgICAgICB0aGlzLiRtb2RhbC5vbignY2xpY2snLCAnLmRyb3Bkb3duLW1lbnUtYnV0dG9uJywgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgcGVuZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BlbmRpbmc7XG4gICAgfVxuXG4gICAgc2V0IHBlbmRpbmcocGVuZGluZykge1xuICAgICAgICB0aGlzLl9wZW5kaW5nID0gcGVuZGluZztcblxuICAgICAgICBpZiAocGVuZGluZykge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICB9XG5cbiAgICBzZXQgc2l6ZShzaXplKSB7XG4gICAgICAgIHRoaXMuX3NpemUgPSBzaXplO1xuXG4gICAgICAgIHRoaXMuJG1vZGFsXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoU2l6ZUNsYXNzZXMuc21hbGwpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoU2l6ZUNsYXNzZXMubGFyZ2UpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoU2l6ZUNsYXNzZXNbc2l6ZV0gfHwgJycpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJG1vZGFsLm9uKE1vZGFsRXZlbnRzLmNsb3NlLCB0aGlzLm9uTW9kYWxDbG9zZSk7XG4gICAgICAgIHRoaXMuJG1vZGFsLm9uKE1vZGFsRXZlbnRzLmNsb3NlZCwgdGhpcy5vbk1vZGFsQ2xvc2VkKTtcbiAgICAgICAgdGhpcy4kbW9kYWwub24oTW9kYWxFdmVudHMub3BlbiwgdGhpcy5vbk1vZGFsT3Blbik7XG4gICAgICAgIHRoaXMuJG1vZGFsLm9uKE1vZGFsRXZlbnRzLm9wZW5lZCwgdGhpcy5vbk1vZGFsT3BlbmVkKTtcbiAgICB9XG5cbiAgICBvcGVuKHtcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgcGVuZGluZyA9IHRydWUsXG4gICAgICAgIGNsZWFyQ29udGVudCA9IHRydWUsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IHBlbmRpbmc7XG5cbiAgICAgICAgaWYgKHNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xlYXJDb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyQ29udGVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kbW9kYWwuZm91bmRhdGlvbigncmV2ZWFsJywgJ29wZW4nKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy4kbW9kYWwuZm91bmRhdGlvbigncmV2ZWFsJywgJ2Nsb3NlJyk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ29udGVudChjb250ZW50LCB7IHdyYXAgPSBmYWxzZSB9ID0ge30pIHtcbiAgICAgICAgbGV0ICRjb250ZW50ID0gJChjb250ZW50KTtcblxuICAgICAgICBpZiAod3JhcCkge1xuICAgICAgICAgICAgJGNvbnRlbnQgPSB3cmFwTW9kYWxCb2R5KGNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGNvbnRlbnQuaHRtbCgkY29udGVudCk7XG4gICAgICAgIHRoaXMuJG1vZGFsLnRyaWdnZXIoTW9kYWxFdmVudHMubG9hZGVkKTtcblxuICAgICAgICByZXN0cmFpbkNvbnRlbnRIZWlnaHQodGhpcy4kY29udGVudCk7XG4gICAgICAgIGZvdW5kYXRpb24odGhpcy4kY29udGVudCk7XG4gICAgfVxuXG4gICAgY2xlYXJDb250ZW50KCkge1xuICAgICAgICB0aGlzLiRjb250ZW50Lmh0bWwoJycpO1xuICAgIH1cblxuICAgIHNldHVwRm9jdXNUcmFwKCkge1xuICAgICAgICBpZiAoIXRoaXMuJHByZU1vZGFsRm9jdXNlZEVsKSB0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbCA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmZvY3VzVHJhcCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAgPSBmb2N1c1RyYXAuY3JlYXRlRm9jdXNUcmFwKHRoaXMuJG1vZGFsWzBdLCB7XG4gICAgICAgICAgICAgICAgZXNjYXBlRGVhY3RpdmF0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmYWxsYmFja0ZvY3VzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrTm9kZSA9IHRoaXMuJHByZU1vZGFsRm9jdXNlZEVsICYmIHRoaXMuJHByZU1vZGFsRm9jdXNlZEVsLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAkKCdbZGF0YS1oZWFkZXItbG9nby1saW5rXScpWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxsYmFja05vZGU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb2N1c1RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmZvY3VzVHJhcC5hY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIG9uTW9kYWxDbG9zZSgpIHtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKGJvZHlBY3RpdmVDbGFzcyk7XG4gICAgfVxuXG4gICAgb25Nb2RhbENsb3NlZCgpIHtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kZWZhdWx0U2l6ZTtcblxuICAgICAgICBpZiAodGhpcy5mb2N1c1RyYXApIHRoaXMuZm9jdXNUcmFwLmRlYWN0aXZhdGUoKTtcblxuICAgICAgICBpZiAodGhpcy4kcHJlTW9kYWxGb2N1c2VkRWwpIHRoaXMuJHByZU1vZGFsRm9jdXNlZEVsLmZvY3VzKCk7XG5cbiAgICAgICAgdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWwgPSBudWxsO1xuICAgIH1cblxuICAgIG9uTW9kYWxPcGVuKCkge1xuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoYm9keUFjdGl2ZUNsYXNzKTtcbiAgICB9XG5cbiAgICBvbk1vZGFsT3BlbmVkKCkge1xuICAgICAgICBpZiAodGhpcy5wZW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLiRtb2RhbC5vbmUoTW9kYWxFdmVudHMubG9hZGVkLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJG1vZGFsLmhhc0NsYXNzKCdvcGVuJykpIHRoaXMuc2V0dXBGb2N1c1RyYXAoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXR1cEZvY3VzVHJhcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdHJhaW5Db250ZW50SGVpZ2h0KHRoaXMuJGNvbnRlbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgb2YgbW9kYWxzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaXplXVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbEZhY3Rvcnkoc2VsZWN0b3IgPSAnW2RhdGEtcmV2ZWFsXScsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRtb2RhbHMgPSAkKHNlbGVjdG9yLCBvcHRpb25zLiRjb250ZXh0KTtcblxuICAgIHJldHVybiAkbW9kYWxzLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VLZXkgPSAnbW9kYWxJbnN0YW5jZSc7XG4gICAgICAgIGNvbnN0IGNhY2hlZE1vZGFsID0gJG1vZGFsLmRhdGEoaW5zdGFuY2VLZXkpO1xuXG4gICAgICAgIGlmIChjYWNoZWRNb2RhbCBpbnN0YW5jZW9mIE1vZGFsKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkTW9kYWw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgkbW9kYWwsIG9wdGlvbnMpO1xuXG4gICAgICAgICRtb2RhbC5kYXRhKGluc3RhbmNlS2V5LCBtb2RhbCk7XG5cbiAgICAgICAgcmV0dXJuIG1vZGFsO1xuICAgIH0pLnRvQXJyYXkoKTtcbn1cblxuLypcbiAqIFJldHVybiB0aGUgZGVmYXVsdCBwYWdlIG1vZGFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TW9kYWwoKSB7XG4gICAgcmV0dXJuIG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF07XG59XG5cbi8qXG4gKiBSZXR1cm4gdGhlIGRlZmF1bHQgYWxlcnQgbW9kYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0TW9kYWwoKSB7XG4gICAgcmV0dXJuIG1vZGFsRmFjdG9yeSgnI2FsZXJ0LW1vZGFsJylbMF07XG59XG5cbi8qXG4gKiBEaXNwbGF5IHRoZSBnaXZlbiBtZXNzYWdlIGluIHRoZSBkZWZhdWx0IGFsZXJ0IG1vZGFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxlcnRNb2RhbChtZXNzYWdlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBtb2RhbCA9IGFsZXJ0TW9kYWwoKTtcbiAgICBjb25zdCAkY2FuY2VsQnRuID0gbW9kYWwuJG1vZGFsLmZpbmQoJy5jYW5jZWwnKTtcbiAgICBjb25zdCAkY29uZmlybUJ0biA9IG1vZGFsLiRtb2RhbC5maW5kKCcuY29uZmlybScpO1xuICAgIGNvbnN0IHtcbiAgICAgICAgaWNvbiA9ICdlcnJvcicsXG4gICAgICAgICRwcmVNb2RhbEZvY3VzZWRFbCA9IG51bGwsXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b24sXG4gICAgICAgIG9uQ29uZmlybSxcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICgkcHJlTW9kYWxGb2N1c2VkRWwpIHtcbiAgICAgICAgbW9kYWwuJHByZU1vZGFsRm9jdXNlZEVsID0gJHByZU1vZGFsRm9jdXNlZEVsO1xuICAgIH1cblxuICAgIG1vZGFsLm9wZW4oKTtcbiAgICBtb2RhbC4kbW9kYWwuZmluZCgnLmFsZXJ0LWljb24nKS5oaWRlKCk7XG5cbiAgICBpZiAoaWNvbiA9PT0gJ2Vycm9yJykge1xuICAgICAgICBtb2RhbC4kbW9kYWwuZmluZCgnLmVycm9yLWljb24nKS5zaG93KCk7XG4gICAgfSBlbHNlIGlmIChpY29uID09PSAnd2FybmluZycpIHtcbiAgICAgICAgbW9kYWwuJG1vZGFsLmZpbmQoJy53YXJuaW5nLWljb24nKS5zaG93KCk7XG4gICAgfVxuXG4gICAgbW9kYWwudXBkYXRlQ29udGVudChgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5gKTtcblxuICAgIGlmIChvbkNvbmZpcm0pIHtcbiAgICAgICAgJGNvbmZpcm1CdG4ub24oJ2NsaWNrJywgb25Db25maXJtKTtcblxuICAgICAgICBtb2RhbC4kbW9kYWwub25lKE1vZGFsRXZlbnRzLmNsb3NlZCwgKCkgPT4ge1xuICAgICAgICAgICAgJGNvbmZpcm1CdG4ub2ZmKCdjbGljaycsIG9uQ29uZmlybSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgICAgICRjYW5jZWxCdG4uc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRjYW5jZWxCdG4uaGlkZSgpO1xuICAgIH1cbn1cbiIsImNvbnN0IHJldmVhbENsb3NlQXR0ciA9ICdyZXZlYWxDbG9zZSc7XG5jb25zdCByZXZlYWxDbG9zZVNlbGVjdG9yID0gYFtkYXRhLSR7cmV2ZWFsQ2xvc2VBdHRyfV1gO1xuY29uc3QgcmV2ZWFsU2VsZWN0b3IgPSAnW2RhdGEtcmV2ZWFsXSc7XG5cbmNsYXNzIFJldmVhbENsb3NlIHtcbiAgICBjb25zdHJ1Y3RvcigkYnV0dG9uKSB7XG4gICAgICAgIHRoaXMuJGJ1dHRvbiA9ICRidXR0b247XG4gICAgICAgIHRoaXMubW9kYWxJZCA9ICRidXR0b24uZGF0YShyZXZlYWxDbG9zZUF0dHIpO1xuXG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGdldCBtb2RhbCgpIHtcbiAgICAgICAgbGV0ICRtb2RhbDtcblxuICAgICAgICBpZiAodGhpcy5tb2RhbElkKSB7XG4gICAgICAgICAgICAkbW9kYWwgPSAkKGAjJHt0aGlzLm1vZGFsSWR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbW9kYWwgPSB0aGlzLiRidXR0b24ucGFyZW50cyhyZXZlYWxTZWxlY3RvcikuZXEoMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJG1vZGFsLmRhdGEoJ21vZGFsSW5zdGFuY2UnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRidXR0b24ub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGJ1dHRvbi5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgbW9kYWwgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuICogRXh0ZW5kIGZvdW5kYXRpb24ucmV2ZWFsIHdpdGggdGhlIGFiaWxpdHkgdG8gY2xvc2UgYSBtb2RhbCBieSBjbGlja2luZyBvbiBhbnkgb2YgaXRzIGNoaWxkIGVsZW1lbnRcbiAqIHdpdGggZGF0YS1yZXZlYWwtY2xvc2UgYXR0cmlidXRlLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogPGRpdiBkYXRhLXJldmVhbCBpZD1cImhlbGxvTW9kYWxcIj5cbiAqICAgPGJ1dHRvbiBkYXRhLXJldmVhbC1jbG9zZT5Db250aW51ZTwvYnV0dG9uPlxuICogPC9kaXY+XG4gKlxuICogPGRpdiBkYXRhLXJldmVhbCBpZD1cImhlbGxvTW9kYWxcIj48L2Rpdj5cbiAqIDxidXR0b24gZGF0YS1yZXZlYWwtY2xvc2U9XCJoZWxsb01vZGFsXCI+Q29udGludWU8L2J1dHRvbj5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV2ZWFsQ2xvc2VGYWN0b3J5KHNlbGVjdG9yID0gcmV2ZWFsQ2xvc2VTZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGJ1dHRvbnMgPSAkKHNlbGVjdG9yLCBvcHRpb25zLiRjb250ZXh0KTtcblxuICAgIHJldHVybiAkYnV0dG9ucy5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRidXR0b24gPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZUtleSA9IGAke3JldmVhbENsb3NlQXR0cn1JbnN0YW5jZWA7XG4gICAgICAgIGNvbnN0IGNhY2hlZEJ1dHRvbiA9ICRidXR0b24uZGF0YShpbnN0YW5jZUtleSk7XG5cbiAgICAgICAgaWYgKGNhY2hlZEJ1dHRvbiBpbnN0YW5jZW9mIFJldmVhbENsb3NlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQnV0dG9uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IFJldmVhbENsb3NlKCRidXR0b24pO1xuXG4gICAgICAgICRidXR0b24uZGF0YShpbnN0YW5jZUtleSwgYnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH0pLnRvQXJyYXkoKTtcbn1cbiJdLCJuYW1lcyI6WyJtb2RhbEZhY3RvcnkiLCJyZXZlYWxDbG9zZUZhY3RvcnkiLCIkZWxlbWVudCIsImZvdW5kYXRpb24iLCJkcm9wZG93biIsImFjdGl2ZV9jbGFzcyIsInJldmVhbCIsImJnX2NsYXNzIiwiZGlzbWlzc19tb2RhbF9jbGFzcyIsImNsb3NlX29uX2JhY2tncm91bmRfY2xpY2siLCJ0YWIiLCIkY29udGV4dCIsImZvY3VzVHJhcCIsImJvZHlBY3RpdmVDbGFzcyIsImxvYWRpbmdPdmVybGF5Q2xhc3MiLCJtb2RhbEJvZHlDbGFzcyIsIm1vZGFsQ29udGVudENsYXNzIiwiU2l6ZUNsYXNzZXMiLCJzbWFsbCIsImxhcmdlIiwibm9ybWFsIiwiTW9kYWxFdmVudHMiLCJjbG9zZSIsImNsb3NlZCIsIm9wZW4iLCJvcGVuZWQiLCJsb2FkZWQiLCJnZXRTaXplRnJvbU1vZGFsIiwiJG1vZGFsIiwiaGFzQ2xhc3MiLCJnZXRWaWV3cG9ydEhlaWdodCIsIm11bHRpcGxlciIsInZpZXdwb3J0SGVpZ2h0IiwiJCIsIndpbmRvdyIsImhlaWdodCIsIndyYXBNb2RhbEJvZHkiLCJjb250ZW50IiwiJG1vZGFsQm9keSIsImFkZENsYXNzIiwiaHRtbCIsInJlc3RyYWluQ29udGVudEhlaWdodCIsIiRjb250ZW50IiwibGVuZ3RoIiwiJGJvZHkiLCJib2R5SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjb250ZW50SGVpZ2h0IiwibWF4SGVpZ2h0IiwiY3NzIiwiY3JlYXRlTW9kYWxDb250ZW50IiwiZXhpc3RpbmdDb250ZW50IiwiY2hpbGRyZW4iLCJhcHBlbmQiLCJhcHBlbmRUbyIsImNyZWF0ZUxvYWRpbmdPdmVybGF5IiwiJGxvYWRpbmdPdmVybGF5IiwiTW9kYWwiLCJfdGVtcCIsIl9yZWYiLCJfcmVmJHNpemUiLCJzaXplIiwiJG92ZXJsYXkiLCJkZWZhdWx0U2l6ZSIsInBlbmRpbmciLCIkcHJlTW9kYWxGb2N1c2VkRWwiLCJvbk1vZGFsT3BlbiIsImJpbmQiLCJvbk1vZGFsT3BlbmVkIiwib25Nb2RhbENsb3NlIiwib25Nb2RhbENsb3NlZCIsImJpbmRFdmVudHMiLCJvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJfdGVtcDIiLCJfcmVmMiIsIl9yZWYyJHBlbmRpbmciLCJfcmVmMiRjbGVhckNvbnRlbnQiLCJjbGVhckNvbnRlbnQiLCJ1cGRhdGVDb250ZW50IiwiX3RlbXAzIiwiX3JlZjMiLCJfcmVmMyR3cmFwIiwid3JhcCIsInRyaWdnZXIiLCJzZXR1cEZvY3VzVHJhcCIsIl90aGlzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiY3JlYXRlRm9jdXNUcmFwIiwiZXNjYXBlRGVhY3RpdmF0ZXMiLCJyZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSIsImFsbG93T3V0c2lkZUNsaWNrIiwiZmFsbGJhY2tGb2N1cyIsImZhbGxiYWNrTm9kZSIsImRlYWN0aXZhdGUiLCJhY3RpdmF0ZSIsInJlbW92ZUNsYXNzIiwiZm9jdXMiLCJfdGhpczIiLCJvbmUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJnZXQiLCJfcGVuZGluZyIsInNldCIsInNob3ciLCJoaWRlIiwiX3NpemUiLCJzZWxlY3RvciIsIm9wdGlvbnMiLCIkbW9kYWxzIiwibWFwIiwiaW5kZXgiLCJlbGVtZW50IiwiaW5zdGFuY2VLZXkiLCJjYWNoZWRNb2RhbCIsImRhdGEiLCJtb2RhbCIsInRvQXJyYXkiLCJkZWZhdWx0TW9kYWwiLCJhbGVydE1vZGFsIiwic2hvd0FsZXJ0TW9kYWwiLCJtZXNzYWdlIiwiJGNhbmNlbEJ0biIsImZpbmQiLCIkY29uZmlybUJ0biIsIl9vcHRpb25zIiwiX29wdGlvbnMkaWNvbiIsImljb24iLCJfb3B0aW9ucyQkcHJlTW9kYWxGb2MiLCJzaG93Q2FuY2VsQnV0dG9uIiwib25Db25maXJtIiwib2ZmIiwicmV2ZWFsQ2xvc2VBdHRyIiwicmV2ZWFsQ2xvc2VTZWxlY3RvciIsInJldmVhbFNlbGVjdG9yIiwiUmV2ZWFsQ2xvc2UiLCIkYnV0dG9uIiwibW9kYWxJZCIsIm9uQ2xpY2siLCJ1bmJpbmRFdmVudHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50cyIsImVxIiwiJGJ1dHRvbnMiLCJjYWNoZWRCdXR0b24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9