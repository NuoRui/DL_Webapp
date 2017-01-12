var api = require('./api');
var utils = require('./utils');
var storage = require('./storage');

module.exports = {

	loadData: function (repository) {
		api.getCompanies(function (data) {
			storage.setCompanies(data);

			repository['companies'] = storage.getCompanies();
		});

        api.getMaterials(function (data) {
            storage.setMaterials(data);

            repository['materials'] = storage.getMaterials();
        });

        api.getCrafts(function (data) {
            storage.setCrafts(data);

            repository['crafts'] = storage.getCrafts();
        });

        api.getColors(function (data) {
            storage.setColors(data);

            repository['colors'] = storage.getColors();
        });

        // api.getMfgstorages(function (data) {
        //     storage.setMfgstorages(data);
        //
        //     repository['mfgstorages'] = storage.getMfgstorages();
        // });



		// api.getCompanies(function (data) {
		// 	storage.setCompanies(data);
		// 	repository['companies'] = storage.getCompanies();
        //
		// 	data.forEach(function(company) {
		// 		api.getBillCompanies(function (data) {
		// 			storage.setBillCompanies(company.id, data);
        //
		// 			repository['billCompanies'] = storage.getBillCompanies();
		// 		}, company.id, gUser.employee_id);
		// 	});
		// }, gUser.employee_id);
        //
		// api.getSuppliers(function (data) {
		// 	storage.setSuppliers(data);
        //
		// 	repository['suppliers'] = storage.getSuppliers();
		// }, gUser.employee_id);
        //
		// api.getPayments(function (data) {
		// 	storage.setPayments(data);
        //
		// 	repository['payments'] = storage.getPayments();
		// }, gUser.employee_id);
        //
		// api.getMaterials(function (data) {
		// 	storage.setMaterials(data);
		// 	repository['materials'] = storage.getMaterials();
        //
         //    data.forEach(function(material) {
         //        api.getMaterialLots(function (data) {
         //            storage.setMaterialLots(material.id, data);
        //
         //            repository['materialLots'] = storage.getMaterialLots();
         //        }, material.id, gUser.employee_id);
         //    });
		// }, gUser.employee_id);
	},

	getRepository: function() {
		var repository = {};

		var mfgstorages = storage.getMfgstorages();
		if (!utils.isEmpty(mfgstorages)) {
			repository['mfgstorages'] = mfgstorages;
		}

        // var companies = storage.getCompanies();
        // if (!utils.isEmpty(companies)) {
			// repository['companies'] = companies;
        // }
        //
        // var billCompanies = storage.getBillCompanies();
        // if (!utils.isEmpty(billCompanies)) {
			// repository['billCompanies'] = billCompanies;
        // }
        //
        // var suppliers = storage.getSuppliers();
        // if (!utils.isEmpty(suppliers)) {
			// repository['suppliers'] = suppliers;
        // }
        //
        // var payments = storage.getPayments();
        // if (!utils.isEmpty(payments)) {
			// repository['payments'] = payments;
        // }
        //
        // var materials = storage.getMaterials();
        // if (!utils.isEmpty(materials)) {
			// repository['materials'] = materials;
        // }
        //
        // var materialLots = storage.getMaterialLots();
        // if (!utils.isEmpty(materialLots)) {
        //     repository['materialLots'] = materialLots;
        // }

		return repository;
	},

	delRepository: function() {
        storage.delMfgstorages();
        // storage.delTradeCompanies();
        // storage.delCompanies();
        // storage.delBillCompanies();
        // storage.delSuppliers();
        // storage.delPayments();
        // storage.delMaterials();
        // storage.delMaterialLots();
	}

};
