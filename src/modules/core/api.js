var xhr = require('./xhr');

module.exports = {

    login: function(callback, username, password) {
        xhr.simplePost('auth/login', null, {
            username: username,
            password: password
        }, function(res) {
            if (res.status) {
                if (callback && typeof(callback) == 'function') {
                    callback(res.result);
                }
            } else {
                nrApp.alert(res.result);
            }
        });
    },

    getCompanies: function(callback) {
        xhr.simpleGet('mfgstorage/listcompany', {
		}, function(res) {
            if (res.status) {
                if (callback && typeof(callback) == 'function') {
                    callback(res.result);
                }
            } else {
                nrApp.alert(res.result);
            }
        });
    },

	getOrders: function(callback) {
		xhr.simpleGet('mfgstorage/listorder', {
		}, function(res) {
			if (res.status) {
				if (callback && typeof(callback) == 'function') {
					callback(res.result);
				}
			} else {
				nrApp.alert(res.result);
			}
		});
	},

	getMaterials: function (callback) {
        xhr.simpleGet('mfgstorage/listmaterial', {
        }, function(res) {
            if (res.status) {
                if (callback && typeof(callback) == 'function') {
                    callback(res.result);
                }
            } else {
                nrApp.alert(res.result);
            }
        });
    },

    getCrafts: function (callback) {
        xhr.simpleGet('mfgstorage/listcraft', {
        }, function(res) {
            if (res.status) {
                if (callback && typeof(callback) == 'function') {
                    callback(res.result);
                }
            } else {
                nrApp.alert(res.result);
            }
        });
    },

    getColors: function (callback) {
        xhr.simpleGet('mfgstorage/listcolor', {
        }, function(res) {
            if (res.status) {
                if (callback && typeof(callback) == 'function') {
                    callback(res.result);
                }
            } else {
                nrApp.alert(res.result);
            }
        });
    },

	getOrderColors: function (callback, orderId) {
		xhr.simpleGet('mfgstorage/listcolori', {
			order_id: orderId
		}, function(res) {
			if (res.status) {
				if (callback && typeof(callback) == 'function') {
					callback(res.result);
				}
			} else {
				nrApp.alert(res.result);
			}
		});
	},

    getMfgstorages: function(callback) {
        xhr.simpleGet('mfgstorage/list', {
			company_id: gCurrentCompany.id
        }, function(res) {
            if (res.status) {
                if (callback && typeof(callback) == 'function') {
                    callback(res.result);
                }
            } else {
                nrApp.alert(res.result);
            }
        });
    },


    // getQuotationDetail: function(callback, supplier_id) {
     //    xhr.simpleGet('supplier/listdata', {
     //        supplier_id:supplier_id
     //    }, function(res) {
    //
     //        if (res.status) {
     //            if (callback && typeof(callback) == 'function') {
     //                callback(res.result);
     //            }
     //        } else {
     //            nrApp.alert(res.result);
     //        }
     //    });
    // },
    //
    // getIndents: function(callback, employeeId) {
	// 	xhr.simpleGet('indent/list', {
	// 		employee_id: employeeId
	// 	}, function (res) {
	// 		if (res.status) {
	// 			if (callback && typeof(callback) == 'function') {
	// 				callback(res.result);
	// 			}
	// 		} else {
	// 			nrApp.alert(res.result);
	// 		}
	// 	});
	// },
    //
	// getIndent: function(callback, employeeId, indentId) {
	// 	xhr.simpleGet('indent/orderinfo', {
	// 		employee_id: employeeId,
	// 		id: indentId
	// 	}, function (res) {
	// 		if (res.status) {
	// 			if (callback && typeof(callback) == 'function') {
	// 				callback(res.result);
	// 			}
	// 		} else {
	// 			nrApp.alert(res.result);
	// 		}
	// 	});
	// },
    //
	// saveIndent: function (callback, employeeId, data) {
	// 	xhr.simplePost('indent/addlist', {employee_id: employeeId}, data, function (res) {
	// 		if (res.status) {
	// 			if (callback && typeof(callback) == 'function') {
	// 				callback(res.result);
	// 			}
	// 		} else {
	// 			nrApp.alert(res.result);
	// 		}
	// 	});
	// },
    //
	// removeIndent: function(callback, employeeId, indentId) {
	// 	xhr.simplePost('indent/deletelist', {
	// 		employee_id: employeeId
	// 	}, {
	// 		id: indentId
	// 	}, function (res) {
	// 		if (res.status) {
	// 			if (callback && typeof(callback) == 'function') {
	// 				callback(res.result);
	// 			}
	// 		} else {
	// 			nrApp.alert(res.result);
	// 		}
	// 	});
	// },
    //
	// // 公司抬头
	// getTradeCompanies: function (callback, employeeId) {
	// 	xhr.simpleGet('company/tradelist', {
	// 		employee_id: employeeId
	// 	}, function (res) {
	// 		if (res.status) {
	// 			if (callback && typeof(callback) == 'function') {
	// 				callback(res.result);
	// 			}
	// 		} else {
	// 			nrApp.alert(res.result);
	// 		}
	// 	});
	// },
    //
	// // 客户
	// getCompanies: function (callback, employeeId) {
	// 	xhr.simpleGet('company/companylist', {
	// 		employee_id: employeeId
	// 	}, function (res) {
	// 		if (res.status) {
	// 			if (callback && typeof(callback) == 'function') {
	// 				callback(res.result);
	// 			}
	// 		} else {
	// 			nrApp.alert(res.result);
	// 		}
	// 	});
	// },
    //
	// // 开票抬头
	// getBillCompanies: function (callback, companyId, employeeId) {
	// 	xhr.simpleGet('company/billist', {
	// 		company_id: companyId,
	// 		employee_id: employeeId
	// 	}, function (res) {
	// 		if (res.status) {
	// 			if (callback && typeof(callback) == 'function') {
	// 				callback(res.result);
	// 			}
	// 		} else {
	// 			nrApp.alert(res.result);
	// 		}
	// 	});
	// },
    //
	// // 供应商
	// getSuppliers: function (callback, employeeId) {
	// 	xhr.simpleGet('supplier/list', {
	// 		employee_id: employeeId
	// 	}, function (res) {
	// 		if (res.status) {
	// 			if (callback && typeof(callback) == 'function') {
	// 				callback(res.result);
	// 			}
	// 		} else {
	// 			nrApp.alert(res.result);
	// 		}
	// 	});
	// },
    //
	// // 付款方式
	// getPayments: function (callback, employeeId) {
	// 	xhr.simpleGet('pay/list', {
	// 		employee_id: employeeId
	// 	}, function (res) {
	// 		if (res.status) {
	// 			if (callback && typeof(callback) == 'function') {
	// 				callback(res.result);
	// 			}
	// 		} else {
	// 			nrApp.alert(res.result);
	// 		}
	// 	});
	// },
    //
	// // 材料产品
	// getMaterials: function (callback, employeeId) {
	// 	xhr.simpleGet('material/list', {
	// 		employee_id: employeeId
	// 	}, function (res) {
	// 		if (res.status) {
	// 			if (callback && typeof(callback) == 'function') {
	// 				callback(res.result);
	// 			}
	// 		} else {
	// 			nrApp.alert(res.result);
	// 		}
	// 	});
	// },
    //
    // // 材料批号
	// getMaterialLots: function (callback, materialId, employeeId) {
     //    xhr.simpleGet('material/lotlist', {
     //        material_id: materialId,
     //        employee_id: employeeId
     //    }, function (res) {
     //        if (res.status) {
     //            if (callback && typeof(callback) == 'function') {
     //                callback(res.result);
     //            }
     //        } else {
     //            nrApp.alert(res.result);
     //        }
     //    });
	// },
    //
	// getUnits: function (callback, employeeId) {
	// 	xhr.simpleGet('material/unitlist', {
	// 		employee_id: employeeId
	// 	}, function (res) {
	// 		if (res.status) {
	// 			if (callback && typeof(callback) == 'function') {
	// 				callback(res.result);
	// 			}
	// 		} else {
	// 			nrApp.alert(res.result);
	// 		}
	// 	});
	// },
    //
	// getGrades: function (callback, employeeId) {
	// 	xhr.simpleGet('grade/list', {
	// 		employee_id: employeeId
	// 	}, function (res) {
	// 		if (res.status) {
	// 			if (callback && typeof(callback) == 'function') {
	// 				callback(res.result);
	// 			}
	// 		} else {
	// 			nrApp.alert(res.result);
	// 		}
	// 	});
	// }
};
