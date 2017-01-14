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
						}, 500);
					});
				});
			});

            data.forEach(function (order) {
                api.getOrderColors(function (data) {
                    indentRepository['orderColors'][order.id] = [].concat(data);
                    for (var i = 0; i < gRepository['colors'].length; i++) {
                        var existed = data.some(function (item) {
                            if (gRepository['colors'][i].id == item.id) {
								return true;
                            }
                        });

						if (!existed) {
                            indentRepository['orderColors'][order.id].push(gRepository['colors'][i]);
						}
					}
                }, order.id);
            });
		});

		this.bindEvents();
    },

    pageBeforeAnimation: function (page) {
        if ($$(page.fromPage.container).data('select-name') == 'mfgstorage') {
        	var text = $$('.mfgstorage-select .item-content .item-after').html();
            var exp = /&lt;div style="display:none" &gt;([\s\S]+)&lt;\/div&gt;/;
            $$('.mfgstorage-select .item-content .item-after').html((exp.exec(text)[1]).trim());
		}
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
		var colors = indentRepository['orderColors'][$$(e.target)[0].value];
		var output = utils.renderTpl(indentNewColorTpl, {colors: colors});
		$$('#orderColor').html(output);
	},

	newIndentAction: function() {
    	var savedData = {
            order_id: $$('select[name="mfgstorage"]')[0].value,
            customcode: $$('select[name="order"]')[0].options[$$('select[name="order"]')[0].selectedIndex].text,
			color_: $$('select[name="color"]')[0].value,
			material_: $$('select[name="material"]')[0].value,
			craft_: $$('select[name="craft"]')[0].value,
			lot: $$('input[name="lot"]')[0].value,
			volume: $$('input[name="volume"]')[0].value,
			quantity: $$('input[name="quantity"]')[0].value,
			remark: $$('textarea[name="remark"]')[0].value,
			employee_: gUser.employee_id
		};

        api.addPackMfgstorage(function (data) {
            nrApp.alert('点胚成功', '', function () {
                nrApp.getCurrentView().router.back();
            });
        }, savedData);
		// nrApp.getCurrentView().router.loadContent(indentNewPageHtml);
	}
};

module.exports = indentModule;