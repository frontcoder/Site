// Generated by CoffeeScript 1.4.0
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.SiteView = (function(_super) {
    var TPL;

    __extends(SiteView, _super);

    TPL = Handlebars.compile($('#content-template').html());

    function SiteView() {
      this.render = __bind(this.render, this);
      SiteView.__super__.constructor.apply(this, arguments);
    }

    SiteView.prototype.render = function() {
      this.replace(TPL(this.siteModel));
      return this;
    };

    return SiteView;

  })(Spine.Controller);

}).call(this);