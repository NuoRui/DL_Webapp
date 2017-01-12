require('./home.less');

var utils = require('../core/utils');
var indentPageHtml = require('../indent/indent.html');
var quotationPageHtml = require('../quotation/quotation.html');
var companiesTemplate = require('./home.tpl.html');


var homeModule = {
	init: function() {
		this.bindEvent();

		this.showCompanies();
	},

	pageAfterAnimation: function (page) {
		nrApp.showToolbar('.main-toolbar');

		this.bindEvent();
		this.showCompanies();
	},

	bindEvent: function () {
		var bindings = [{
			element: '#homePage',
			selector: '.indent-selector',
			event: 'click',
			handler: this.indentSelector
		},{
			element: '#homePage',
			selector: '.quotation-selector',
			event: 'click',
			handler: this.quotationSelector
		}];

		utils.bindEvents(bindings);
	},

	indentSelector: function () {
		nrApp.getCurrentView().router.loadContent(indentPageHtml);
	},

	quotationSelector: function () {
		nrApp.getCurrentView().router.loadContent(quotationPageHtml)
	},

	showCompanies: function () {
		if (!gRepository['companies']) {
			return;
		}

		var output = utils.renderTpl(companiesTemplate, {repository: gRepository});
		$$('#companySelection').html(output);

		var self = this;
		utils.bindEvents([{
			element: '#companySelection',
			selector: 'select[name="company"]',
			event: 'change',
			handler: self.refreshCurrentCompany
		}]);

		this.refreshCurrentCompany();
	},

	refreshCurrentCompany: function () {
		gCurrentCompany.id = $$('#companySelection select[name="company"]')[0].value;
	}
};

module.exports = homeModule;

