function getConsumidorOLD(cb) {
	if (!Ti.Network.online) {
		cb({
			errorCode : Alloy.Globals.ErrorCodes.NoInternetConnection
		});
		return;
	}

	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			var statusCode = this.status;
			if (statusCode == 200) {
				var response = JSON.parse(this.responseText);
				cb(false, response);
			} else {
				cb({
					errorCode : Alloy.Globals.ErrorCodes.BadServerResponse
				});
			}
		},
		onerror : function(e) {
			cb({
				errorCode : Alloy.Globals.ErrorCodes.Unknown
			});
		}
	});
	xhr.enableKeepAlive = true;
	xhr.setTimeout = 5000;
	xhr.open('GET', 'http://pagws.herokuapp.com/api/consumidor');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send();
}

function getConsumidorSearch(search, cb) {
	if (!Ti.Network.online) {
		cb({
			errorCode : Alloy.Globals.ErrorCodes.NoInternetConnection
		});
		return;
	}

	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			var statusCode = this.status;
			if (statusCode == 200) {
				var response = JSON.parse(this.responseText);
				cb(false, response);
			} else {
				cb({
					errorCode : Alloy.Globals.ErrorCodes.BadServerResponse
				});
			}
		},
		onerror : function(e) {
			cb({
				errorCode : Alloy.Globals.ErrorCodes.Unknown
			});
		}
	});
	xhr.setTimeout = 5000;
	xhr.open('POST', 'http://pagws.herokuapp.com/api/consumidor/search');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Connection', 'close');
	xhr.send(JSON.stringify(search));
}

//------- CONSUMIDOR

function getConsumidor(cb) {
	if (!Ti.Network.online) {
		cb({
			errorCode : Alloy.Globals.ErrorCodes.NoInternetConnection
		});
		return;
	}

	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			var statusCode = this.status;
			if (statusCode == 200) {
				var response = JSON.parse(this.responseText);
				cb(false, response);
			} else {
				cb({
					errorCode : Alloy.Globals.ErrorCodes.BadServerResponse
				});
			}
		},
		onerror : function(e) {
			cb({
				errorCode : Alloy.Globals.ErrorCodes.Unknown
			});
		}
	});
	xhr.enableKeepAlive = true;
	xhr.setTimeout = 5000;
	xhr.open('GET', Alloy.Globals.WebApiBaseAddress + 'consumidor');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send();
}

function postConsumidor(consumidor, cb) {
	console.log('--->post consumidor!!!!!');
	if (!Ti.Network.online) {
		cb({
			errorCode : Alloy.Globals.ErrorCodes.NoInternetConnection
		});
		return;
	}

	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			var statusCode = this.status;
			if (statusCode == 200) {
				var response = JSON.parse(this.responseText);
				cb(false, response);
			} else {
				cb({
					errorCode : Alloy.Globals.ErrorCodes.BadServerResponse
				});
			}
		},
		onerror : function(e) {
			cb({
				errorCode : Alloy.Globals.ErrorCodes.Unknown
			});
		}
	});
	xhr.enableKeepAlive = true;
	xhr.setTimeout = 5000;
	xhr.open('POST', Alloy.Globals.WebApiBaseAddress + 'consumidor');

	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Connection', 'close');
	xhr.send(JSON.stringify(consumidor));
}

//------- CARTAO DE CREDITO

function postCartao(tokenApp, cartao, cb) {
	console.log('--->post cartao!!!');
	console.log('p_tokenApp: ' + tokenApp);
	console.log('p_cartao: ' + cartao);
	if (!Ti.Network.online) {
		cb({
			errorCode : Alloy.Globals.ErrorCodes.NoInternetConnection
		});
		return;
	}

	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			var statusCode = this.status;
			if (statusCode == 200) {
				var response = JSON.parse(this.responseText);
				cb(false, response);
			} else {
				console.log('1: ' + this.status);
				cb({
					errorCode : Alloy.Globals.ErrorCodes.BadServerResponse
				});
			}
		},
		onerror : function(e) {
			console.log('2: ' + e.error);
			console.log('2.1: ' + this.responseText);
			cb(this.responseText);
		}
	});
	xhr.enableKeepAlive = true;
	xhr.setTimeout = 5000;
	xhr.open('POST', Alloy.Globals.WebApiBaseAddress + 'cartaocredito');

	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('consumidor_token', tokenApp);
	xhr.setRequestHeader('Connection', 'close');
	xhr.send(JSON.stringify(cartao));
}

exports.getConsumidor = getConsumidor;
exports.getConsumidorSearch = getConsumidorSearch;
exports.postConsumidor = postConsumidor;
exports.postCartao = postCartao;
