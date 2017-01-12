require('./indent.less');

var utils = require('../core/utils');
var api = require('../core/api');
var indentNewPageHtml = require('./indent.new.tpl.html');
var indentNewColorTpl = require('./indent.new.color.tpl.html');

var indentRepository = {};

var indentModule = {
    pageInit: function () {
		nrApp.hideToolbar('.main-toolbar');
		nrApp.showIndicator();

		api.getOrders(function (data) {
			indentRepository['orders'] = data;
			indentRepository['orderColors'] = {};

			data.forEach(function (order) {
				api.getOrderColors(function (data) {
					indentRepository['orderColors'][order.id] = [].concat(data).concat(gRepository['colors']);
				}, order.id);
			});

			api.getMaterials(function (data) {
				indentRepository['materials'] = data;

				api.getCrafts(function (data) {
					indentRepository['crafts'] = data;

					api.getMfgstorages(function (data) {
						indentRepository['mfgstorages'] = data;

						setTimeout(function () {
							nrApp.hideIndicator();

							var output = utils.renderTpl(indentNewPageHtml, {repository: indentRepository});
							$$('#indentContent').html(output);
						}, 1000);
					});
				});
			});
		});

		this.bindEvents();
    },

	pageBack: function () {
		indentRepository = {};
	},

	bindEvents: function () {
		var self = this;

		var bindings = [{
			element: '#indentPage',
			selector: 'select[name="mfgstorage"]',
			event: 'change',
			handler: self.mfgstorageChange
		}, {
			element: '#indentPage',
			selector: 'select[name="order"]',
			event: 'change',
			handler: self.orderChange
		}, {
			element: '#indentPage',
			selector: '.indent-save-button',
			event: 'click',
			handler: self.newIndentAction
		}];

		utils.bindEvents(bindings);
	},

	mfgstorageChange: function(e) {
		var mfgstorages = indentRepository['mfgstorages'];

		var mfgstorage = {};
		$$.each(mfgstorages, function (idx, item) {
			if (item.id == $$(e.target)[0].value) {
				mfgstorage = item;
			}
		});

		if (utils.isEmpty(mfgstorage)) {
			return;
		}
log(mfgstorage)
		$$.each(indentRepository['orders'], function (idx, item) {
			if (item.customcode == mfgstorage.customcode) {
				$$('select[name="order"]')[0].selectedIndex = idx + 1;
				$$('.indent-order .item-after').html(mfgstorage.customcode);
				$$('#indentPage select[name="order"]').trigger('change');
			}
		});

		$$.each(indentRepository['orderColors'][$$('#indentPage select[name="order"]')[0].value], function (idx, item) {
			if (item.color == mfgstorage.color) {
				$$('select[name="color"]')[0].selectedIndex = idx + 1;
				$$('.indent-color .item-after').html(mfgstorage.color);
			}
		});

		$$.each(indentRepository['materials'], function (idx, item) {
			if (item.material == mfgstorage.material) {
				$$('select[name="material"]')[0].selectedIndex = idx + 1;
				$$('.indent-material .item-after').html(mfgstorage.material);
			}
		});

		$$.each(indentRepository['crafts'], function (idx, item) {
			if (item.craft == mfgstorage.craft) {
				$$('select[name="craft"]')[0].selectedIndex = idx + 1;
				$$('.indent-craft .item-after').html(mfgstorage.craft);
			}
		});
	},

	orderChange: function(e) {
    	log(22222)
		var colors = indentRepository['orderColors'][$$(e.target)[0].value];
		var output = utils.renderTpl(indentNewColorTpl, {colors: colors});
		$$('#orderColor').html(output);
	},

	newIndentAction: function() {
		log()
    	var savedData = {
			mfgstorage: $$('select[name="mfgstorage"]')[0].value,
			order: $$('select[name="order"]')[0].value,
			color: $$('select[name="color"]')[0].value,
			material: $$('select[name="material"]')[0].value,
			craft: $$('select[name="craft"]')[0].value,
			lot: $$('input[name="lot"]')[0].value,
			volume: $$('input[name="volume"]')[0].value,
			quantity: $$('input[name="quantity"]')[0].value,
			remark: $$('textarea[name="remark"]')[0].value,
			employee_: gUser.employee_id
		};
    	log('save');
		log(savedData);
		// nrApp.getCurrentView().router.loadContent(indentNewPageHtml);
	}
};

module.exports = indentModule;