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

    addPackMfgstorage: function (callback, data) {
        xhr.simplePost('mfgstorage/addpack', {
        }, data, function (res) {
            if (res.status) {
                if (callback && typeof(callback) == 'function') {
                    callback(res.result);
                }
            } else {
                nrApp.alert(res.result);
            }
        });
    },

	getMfgpickers: function (callback) {
		xhr.simpleGet('mfgpicker/listpack', {
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

	removeMfgpicker: function (callback, id) {
		xhr.simplePost('mfgstorage/delpack', {
		}, {
			id: id
		}, function (res) {
			if (res.status) {
				if (callback && typeof(callback) == 'function') {
					callback(res.result);
				}
			} else {
				nrApp.alert(res.result);
			}
		});
	},

	getMfgpickerItems: function(callback, id) {
		xhr.simpleGet('mfgpicker/listfollow', {
			pid: id
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
    
    addMfgpickerItem: function (callback, data) {
        xhr.simplePost('mfgpicker/addfollow', {
        }, data, function (res) {
            if (res.status) {
                if (callback && typeof(callback) == 'function') {
                    callback(res.result);
                }
            } else {
                nrApp.alert(res.result);
            }
        });
    }
};
