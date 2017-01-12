var utils = require('./utils');

module.exports = {
    getUser: function () {
		return JSON.parse(localStorage.getItem('user') || '{}');
    },
    setUser: function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    },
    delUser: function () {
        localStorage.removeItem('user');
    },

    getCompanies: function () {
        return JSON.parse(localStorage.getItem('companies') || '[]');
    },
    setCompanies: function (companies) {
        localStorage.setItem('companies', JSON.stringify(companies));
    },
    delCompanies: function () {
        localStorage.removeItem('companies');
    },

	getOrders: function () {
		return JSON.parse(localStorage.getItem('orders') || '[]');
	},
	setOrders: function (orders) {
		localStorage.setItem('orders', JSON.stringify(orders));
	},
	delOrders: function () {
		localStorage.removeItem('orders');
	},

    getMaterials: function () {
        return JSON.parse(localStorage.getItem('materials') || '[]');
    },
    setMaterials: function (materials) {
        localStorage.setItem('materials', JSON.stringify(materials));
    },
    delMaterials: function () {
        localStorage.removeItem('materials');
    },

    getCrafts: function () {
        return JSON.parse(localStorage.getItem('crafts') || '[]');
    },
    setCrafts: function (crafts) {
        localStorage.setItem('crafts', JSON.stringify(crafts));
    },
    delCrafts: function () {
        localStorage.removeItem('crafts');
    },

    getColors: function () {
        return JSON.parse(localStorage.getItem('colors') || '[]');
    },
    setColors: function (colors) {
        localStorage.setItem('colors', JSON.stringify(colors));
    },
    delColors: function () {
        localStorage.removeItem('colors');
    }


    // getMfgstorages: function () {
    //     return JSON.parse(localStorage.getItem('mfgstorages') || '[]');
    // },
    // setMfgstorages: function (mfgstorages) {
    //     localStorage.setItem('mfgstorages', JSON.stringify(mfgstorages));
    // },
    // delMfgstorages: function () {
    //     localStorage.removeItem('mfgstorages');
    // },



    // getTradeCompanies: function () {
		// return JSON.parse(localStorage.getItem('tradeCompanies') || '[]');
    // },
    // setTradeCompanies: function (tradeCompanies) {
		// localStorage.setItem('tradeCompanies', JSON.stringify(tradeCompanies));
    // },
    // delTradeCompanies: function () {
		// localStorage.removeItem('tradeCompanies');
    // },
    //
    // getCompanies: function () {
		// return JSON.parse(localStorage.getItem('companies') || '[]');
    // },
    // setCompanies: function (companies) {
		// localStorage.setItem('companies', JSON.stringify(companies));
    // },
    // delCompanies: function () {
		// localStorage.removeItem('companies');
    // },
    //
    // getBillCompanies: function () {
		// return JSON.parse(localStorage.getItem('billCompanies') || '[]');
    // },
    // setBillCompanies: function (companyId, billCompanies) {
		// var data = this.getBillCompanies();
    // 	data.push({
    // 		'id': companyId,
		// 	'billCompanies': billCompanies
		// });
    //
		// localStorage.setItem('billCompanies', JSON.stringify(data));
    // },
    // delBillCompanies: function () {
		// localStorage.removeItem('billCompanies');
    // },
    //
    // getSuppliers: function () {
		// return JSON.parse(localStorage.getItem('suppliers') || '[]');
    // },
    // setSuppliers: function (suppliers) {
		// localStorage.setItem('suppliers', JSON.stringify(suppliers));
    // },
    // delSuppliers: function () {
		// localStorage.removeItem('suppliers');
    // },
    //
    // getPayments: function () {
		// return JSON.parse(localStorage.getItem('payments') || '[]');
    // },
    // setPayments: function (payments) {
		// localStorage.setItem('payments', JSON.stringify(payments));
    // },
    // delPayments: function () {
		// localStorage.removeItem('payments');
    // },
    //
    // getMaterials: function () {
		// return JSON.parse(localStorage.getItem('materials') || '[]');
    // },
    // setMaterials: function (materials) {
		// localStorage.setItem('materials', JSON.stringify(materials));
    // },
    // delMaterials: function () {
		// localStorage.removeItem('materials');
    // },
    //
    // getMaterialLots: function () {
    //     return JSON.parse(localStorage.getItem('materialLots') || '[]');
    // },
    // setMaterialLots: function (materialId, materialLots) {
    //     var data = this.getMaterialLots();
    //     data.push({
    //         'id': materialId,
    //         'materialLots': materialLots
    //     });
    //
    //     localStorage.setItem('materialLots', JSON.stringify(data));
    // },
    // delMaterialLots: function () {
    //     localStorage.removeItem('materialLots');
    // }

};
