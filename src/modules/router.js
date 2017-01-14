var homeModule = require('./home/home');
var settingModule = require('./setting/setting');
var aboutModule = require('./about/about');
var mfgpickerModule = require('./mfgpicker/mfgpicker');
var mfgpickerDetailModule = require('./mfgpicker/detail/mfgpicker.detail');
var indentModule = require('./indent/indent');



module.exports = {
    init: function () {
        var self = this;

		$$(document).on('pageBeforeInit', function (e) {
			var page = e.detail.page;
			self.pageBeforeInit(page);
		});

		$$(document).on('pageInit', function (e) {
			var page = e.detail.page;
			self.pageInit(page);
		});

		$$(document).on('pageBeforeAnimation', function (e) {
			var page = e.detail.page;
			self.pageBeforeAnimation(page);
		});

        $$(document).on('pageAfterAnimation', function (e) {
            var page = e.detail.page;
			self.pageAfterAnimation(page);
        });

		$$(document).on('pageBack', function (e) {
			var page = e.detail.page;
			self.pageBack(page);
		});

		$$(document).on('pageBeforeRemove', function (e) {
			var page = e.detail.page;
			self.pageBeforeRemove(page);
		});
    },

	pageBeforeInit: function (page) {
		var name = page.name;

		switch (name) {
			case 'home.page':
				homeModule.pageBeforeInit && homeModule.pageBeforeInit(page);
				break;

			case 'setting.page':
				settingModule.pageBeforeInit && settingModule.pageBeforeInit(page);
				break;

			case 'about.page':
				aboutModule.pageBeforeInit && aboutModule.pageBeforeInit(page);
				break;

			case 'mfgpicker.page':
				mfgpickerModule.pageBeforeInit && mfgpickerModule.pageBeforeInit(page);
				break;

			case 'mfgpicker.detail.page':
				mfgpickerDetailModule.pageBeforeInit && mfgpickerDetailModule.pageBeforeInit(page);
				break;

			case 'indent.page':
				indentModule.pageBeforeInit && indentModule.pageBeforeInit(page);
				break;
		}
	},

	pageInit: function (page) {
		var name = page.name;

		switch (name) {
			case 'home.page':
				homeModule.pageInit && homeModule.pageInit(page);
				break;

			case 'setting.page':
				settingModule.pageInit && settingModule.pageInit(page);
				break;

			case 'about.page':
				aboutModule.pageInit && aboutModule.pageInit(page);
				break;

			case 'mfgpicker.page':
				mfgpickerModule.pageInit && mfgpickerModule.pageInit(page);
				break;

			case 'mfgpicker.detail.page':
				mfgpickerDetailModule.pageInit && mfgpickerDetailModule.pageInit(page);
				break;

			case 'indent.page':
				indentModule.pageInit && indentModule.pageInit(page);
				break;
		}
	},

	pageBeforeAnimation: function (page) {
		var name = page.name;

		switch (name) {
			case 'home.page':
				homeModule.pageBeforeAnimation && homeModule.pageBeforeAnimation(page);
				break;

			case 'setting.page':
				settingModule.pageBeforeAnimation && settingModule.pageBeforeAnimation(page);
				break;

			case 'about.page':
				aboutModule.pageBeforeAnimation && aboutModule.pageBeforeAnimation(page);
				break;

			case 'mfgpicker.page':
				mfgpickerModule.pageBeforeAnimation && mfgpickerModule.pageBeforeAnimation(page);
				break;

			case 'mfgpicker.detail.page':
				mfgpickerDetailModule.pageBeforeAnimation && mfgpickerDetailModule.pageBeforeAnimation(page);
				break;

			case 'indent.page':
				indentModule.pageBeforeAnimation && indentModule.pageBeforeAnimation(page);
				break;
		}
	},

    pageAfterAnimation: function (page) {
        var name = page.name;

		switch (name) {
			case 'home.page':
				homeModule.pageAfterAnimation && homeModule.pageAfterAnimation(page);
				break;

			case 'setting.page':
				settingModule.pageAfterAnimation && settingModule.pageAfterAnimation(page);
				break;

			case 'about.page':
				aboutModule.pageAfterAnimation && aboutModule.pageAfterAnimation(page);
				break;

			case 'mfgpicker.page':
				mfgpickerModule.pageAfterAnimation && mfgpickerModule.pageAfterAnimation(page);
				break;

			case 'mfgpicker.detail.page':
				mfgpickerDetailModule.pageAfterAnimation && mfgpickerDetailModule.pageAfterAnimation(page);
				break;

			case 'indent.page':
				indentModule.pageAfterAnimation && indentModule.pageAfterAnimation(page);
				break;
		}
    },

	pageBack: function (page) {
		var name = page.name;

		switch (name) {
			case 'home.page':
				homeModule.pageBack && homeModule.pageBack(page);
				break;

			case 'setting.page':
				settingModule.pageBack && settingModule.pageBack(page);
				break;

			case 'about.page':
				aboutModule.pageBack && aboutModule.pageBack(page);
				break;

			case 'mfgpicker.page':
				mfgpickerModule.pageBack && mfgpickerModule.pageBack(page);
				break;

			case 'mfgpicker.detail.page':
				mfgpickerDetailModule.pageBack && mfgpickerDetailModule.pageBack(page);
				break;

			case 'indent.page':
				indentModule.pageBack && indentModule.pageBack(page);
				break;
		}
	},

	pageBeforeRemove: function (page) {
		var name = page.name;

		switch (name) {
			case 'home.page':
				homeModule.pageBeforeRemove && homeModule.pageBeforeRemove(page);
				break;

			case 'setting.page':
				settingModule.pageBeforeRemove && settingModule.pageBeforeRemove(page);
				break;

			case 'about.page':
				aboutModule.pageBeforeRemove && aboutModule.pageBeforeRemove(page);
				break;

			case 'mfgpicker.page':
				mfgpickerModule.pageBeforeRemove && mfgpickerModule.pageBeforeRemove(page);
				break;

			case 'mfgpicker.detail.page':
				mfgpickerDetailModule.pageBeforeRemove && mfgpickerDetailModule.pageBeforeRemove(page);
				break;

			case 'indent.page':
				indentModule.pageBeforeRemove && indentModule.pageBeforeRemove(page);
				break;
		}
	}
};
