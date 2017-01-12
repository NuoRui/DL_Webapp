require('./home.less');

var utils = require('../core/utils');
var indentPageHtml = require('../indent/indent.html');
var mfgpickerPageHtml = require('../mfgpicker/mfgpicker.html');
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
			selector: '.mfgpicker-selector',
			event: 'click',
			handler: this.mfgpickerSelector
		}];

		utils.bindEvents(bindings);
	},

	indentSelector: function () {
		nrApp.getCurrentView().router.loadContent(indentPageHtml);
	},

	mfgpickerSelector: function () {
		nrApp.getCurrentView().router.loadContent(mfgpickerPageHtml)
	},

	showCompanies: function () {
		if (!gRepository['companies']) {
			return;
		}

		var output = utils.renderTpl(companiesTemplate, {repository: gRepository, curCompanyId: gCurrentCompany.id});
		$$('#companySelection').html(output);

		var self = this;
		utils.bindEvents([{
			element: '#companySelection',
			selector: 'select[name="company"]',
			event: 'change',
			handler: self.refreshCurrentCompany
		}]);

		if (!gCurrentCompany.id) {
			this.refreshCurrentCompany();
		}
	},

	refreshCurrentCompany: function () {
		gCurrentCompany.id = $$('#companySelection select[name="company"]')[0].value;
	}
};

module.exports = homeModule;

