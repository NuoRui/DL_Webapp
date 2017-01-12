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

	bindEvents: function () {
		var self = this;

		var bindings = [{
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
		mfgpickerDetailItemPopupModule.init();
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

	// initRenderNewBaseItem: function() {
	// 	var output = utils.renderTpl(indentNewBaseTemplate, {repository: gRepository});
	// 	$$('#tabBase').html(output);
    //
     //    $$('.bill-companies').hide();
     //    $$('#billCompanies0').show();
	// },
    //
	// initRenderNewDetailItem: function() {
	// 	var output = utils.renderTpl(indentNewDetailTemplate, {});
	// 	$$('#tabDetail').html(output);
	// },

	refreshDetailItems: function() {
		var output = utils.renderTpl(mfgpickerDetailItemTemplate, {});
		$$('#mfgpickerDetailItems').html(output);
	},

	indentSaveAction: function () {
		var baseData = indentNewBaseModule.getBaseData();
		var detailItemsData = indentNewDetailModule.getDetailItems();
        var saveItemsData = detailItemsData.map(function (data) {
			return {
				material_: data.materialId,
				grade: data.gradeId,
				quantity: data.quantity,
				unit_: data.unitId,
				convert: data.convert,
				kilo: data.kilo,
				price: data.price,
				fare_price: data.farePrice,
				remark: data.remark
			}
        });

		api.saveIndent(function (data) {
			nrApp.alert('订单保存成功', '', function () {
				nrApp.getCurrentView().router.back();
			});

		}, gUser.employee_id, {data: baseData, items: JSON.stringify(saveItemsData)});
	}
};

module.exports = mfgpickerDetailModule;
