var webapi = require('webapi');

var objConsumidor = {
	Nome : Ti.Platform.username,
	MarcaAparelho : Ti.Platform.manufacturer,
	ModeloAparelho : Ti.Platform.model,
	Os : Ti.Platform.osname,
	VersaoOs : Ti.Platform.version,
	VersaoAplicativo : Ti.App.version,
	UID : Ti.Platform.id,
	Idioma : Ti.Platform.locale
};

function getTokenApp(cb) {
	var token = Ti.App.Properties.getString('TokenApp');
	if (token && token != '') {
		console.log('Pegou da properties');
		console.log(token);
		cb(false, token);
	} else {
		//Chama API e pega o Token
		console.log('Chamou API Token');

		webapi.postConsumidor(objConsumidor, function(err, data) {
			if (err) {
				cb(err, null);
			} else {
				console.log('Gerou token API');
				console.log(data.Conteudo);
				Ti.App.Properties.setString('TokenApp', data.Conteudo);
				cb(false, data.Conteudo);
			}
		});
	}
};

exports.getTokenApp = getTokenApp;