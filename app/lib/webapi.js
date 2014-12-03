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
	xhr.open('POST', Alloy.Globals.WebApiBaseAddress + 'consumidor/search');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Connection', 'close');
	xhr.send(JSON.stringify(search));
}


exports.getConsumidor = getConsumidor;
exports.getConsumidorSearch = getConsumidorSearch;