require('./mfgpicker.detail.less');

var utils = require('../../core/utils');
var api = require('../../core/api');
var mfgpickerDetailItemTemplate = require('./mfgpicker.detail.tpl.html');
var mfgpickerDetailItemPopupModule = require('./mfgpicker.detail.item.popup.js');

// var indentNewBaseModule = require('./indent.new.base.js');
// var indentNewDetailModule = require('./indent.new.detail.js');
// var indentNewBaseTemplate = require('./indent.new.base.tpl.html');
// var indentNewDetailTemplate = require('./indent.new.detail.tpl.html');

var mfgpickerDetailModule = {
    pageInit: function () {

		this.bindEvents();

		// this.initRenderNewBaseItem();
		// this.initRenderNewDetailItem();

		// indentNewBaseModule.init();
		// indentNewDetailModule.init();
    },

    pageBeforeAnimation: function (page) {
        this.refreshDetailItems();
    },

	bindEvents: function () {
		var self = this;

		var bindings = [{
            element: '#mfgpickerDetailPage',
            event: 'refresh',
            handler: self.refreshDetailItems
		}, {
			element: '#mfgpickerDetailPage',
			selector: 'a.detail-item-add',
			event: 'click',
			handler: self.popupMfgpickerDetailAction
		}, {
			element: '#mfgpickerDetailPage',
			selector: '.swipeout',
			event: 'deleted',
			handler: self.removeMfgpickerDetailAction
		}];

		utils.bindEvents(bindings);
	},

	popupMfgpickerDetailAction: function (e) {
		mfgpickerDetailItemPopupModule.init($$(e.target).data('pid'));
	},

	removeMfgpickerDetailAction: function (e) {
		// detailItems.splice($$(e.target).data('idx'), 1);
		//
		// var counter = 0;
		// var items = $$('#indentDetailItems .swipeout');
		// items.each(function (idx, item) {
		// 	if (!$$(item).hasClass('deleting')) {
		// 		$$(item).attr('data-idx', counter++);
		// 	}
		// });
	},

	refreshDetailItems: function() {
    	api.getMfgpickerItems(function (data) {
            var output = utils.renderTpl(mfgpickerDetailItemTemplate, {detailItems: data});
            $$('#mfgpickerDetailItems').html(output);
        }, $$('#mfgpickerDetailPage').data('pid'));
	},
};

module.exports = mfgpickerDetailModule;
