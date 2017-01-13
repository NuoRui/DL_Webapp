require('./mfgpicker.less');

var utils = require('../core/utils');
var api = require('../core/api');
var mfgpickerItemTemplate = require('./mfgpicker.item.tpl.html');
var mfgpickerDetailPageHtml = require('./detail/mfgpicker.detail.html');

var mfgpickerModule = {
    pageInit: function () {
    	var self = this;

		nrApp.hideToolbar('.main-toolbar');

		utils.bindEvents([{
			element: '#mfgpickerPage',
			selector: '#mfgpicker-list div.item-content',
			event: 'click',
			handler: self.detailMfgpickerAction
		}, {
			element: '#mfgpickerPage',
			selector: '#mfgpicker-list .swipeout',
			event: 'delete',
			handler: self.removeMfgpickerAction
		}, {
			element: '#mfgpickerPage',
			selector: '.pull-to-refresh-content',
			event: 'refresh',
			handler: self.refreshMfgpickers
		}]);
    },

	pageAfterAnimation: function () {
		$$('#indentPage .pull-to-refresh-content').scrollTop(0, 300);

		nrApp.pullToRefreshTrigger('#mfgpickerPage .pull-to-refresh-content');
		this.refreshMfgpickers();
	},

	refreshMfgpickers: function() {
		api.getMfgpickers(function (data) {
			if (data.length > 0) {
				var output = utils.renderTpl(mfgpickerItemTemplate, {mfgpickers: data});
				$$('#mfgpicker-list').html(output);
			}

			nrApp.pullToRefreshDone();
		});
	},

	detailMfgpickerAction: function (e) {
		nrApp.getCurrentView().router.load({
			content: mfgpickerDetailPageHtml,
			context: {
				pid: $$(e.target).parents('li.mfgpicker-item').data('id'),
				customcode: $$(e.target).parents('li.mfgpicker-item').data('customcode')
			}
		});
	},

	removeMfgpickerAction: function() {
		api.removeMfgpicker(function (data) {
		}, $$(this).data('id'));
	}
};

module.exports = mfgpickerModule;