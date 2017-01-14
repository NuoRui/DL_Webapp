require('./mfgpicker.detail.item.popup.less');

var utils = require('../../core/utils');
var api = require('../../core/api');
var mfgpickerDetailItemPopup = require('./mfgpicker.detail.item.popup.html');

var indentNewDetailItemPopupModule = {

    init: function (pid) {
        var popup = utils.renderTpl(mfgpickerDetailItemPopup, {pid: pid});
        nrApp.popup(popup);

        this.bindEvents();
    },

    bindEvents: function () {
        var self = this;

        var bindings = [{
            element: '#mfgpickerDetailItemPopup',
            selector: '.mfgpicker-detail-submit-button',
            event: 'click',
            handler: self.addMfgpickerDetailItem
        }];

        utils.bindEvents(bindings);
    },

    addMfgpickerDetailItem: function () {
        var savedData = {
            pid: $$('#mfgpickerDetailItemPopup').data('pid'),
            name: $$('#mfgpickerDetailItemPopup select[name="follow"]')[0].value,
            confirmer: gUser.employee_id,
            confirmtime: moment($$('#mfgpickerDetailItemPopup input[name="confirmtime"]')[0].value).format('YYYY-MM-DD hh:mm:ss'),
            remark: $$('#mfgpickerDetailItemPopup textarea[name="remark"]')[0].value
        };

        api.addMfgpickerItem(function (data) {
            nrApp.alert('添加成功', '', function () {
                nrApp.closeModal('#mfgpickerDetailItemPopup');
                $$('#mfgpickerDetailPage').trigger('refresh');
            });
        }, savedData);
    }
};

module.exports = indentNewDetailItemPopupModule;
