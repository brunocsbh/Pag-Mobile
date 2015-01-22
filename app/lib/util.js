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

function exibirMensagem(titMsg, msg) {
	if (titMsg && msg) {
		Ti.UI.createAlertDialog({
			message : msg,
			title : titMsg,
			ok : 'OK'
		}).show();
	}
}

function exibirMensagemCodigo(codigoMensagem) {
	if (codigoMensagem) {
		Ti.UI.createAlertDialog({
			message : getMsgErro(codigoMensagem),
			title : getTituloMsgErro(codigoMensagem),
			ok : 'OK'
		}).show();
	}
}

function getMsgErro(codigoMensagem) {
	if (codigoMensagem) {
		switch (codigoMensagem) {
		case 1:
			return 'Favor preencher os dados.';
			break;
		case 12:
			return 'Verifique sua configuração de internet.';
			break;
		default :
			return 'Erro durante execução.';
		}

	} else
		return 'Erro durante execução.';
}

function getTituloMsgErro(codigoMensagem) {
	if (codigoMensagem) {
		switch (codigoMensagem) {
		case 1:
			return 'Dados incompletos';
			break;
		case 12:
			return 'Sem sinal de internet';
			break;
		default :
			return 'Erro.';
		}

	} else
		return 'Código da mensagem não encontrado.';

}

exports.getTokenApp = getTokenApp;
exports.exibirMensagem = exibirMensagem;
exports.exibirMensagemCodigo = exibirMensagemCodigo;
