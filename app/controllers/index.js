var webapi = require('webapi');
var barcode = require('barcode');
var util = require('util');
Ti.include("mask.js");

//Chama função sem preocupar com retorno. Usado no iniciar do app.
util.getTokenApp(function(err, data) {
	if (!err) {
		console.log('Token gerado no iniciar do app');
		console.log(data);
		return data;
	}
});

if ($.tbScan) {
	$.tbScan.top = Alloy.Globals.TheTop;
}

$.tabPagamento.addEventListener('focus', function(e) {
	//Verifica dados cadastrados e carrega view correspondente
	if (1 == 2) {
		$.vwInstrucaoCadastro.show();
		//$.vwIniciarPagamento.setVisible(false);
	} else {
		$.vwIniciarPagamento.show();
		//$.vwInstrucaoCadastro.setVisible(false);
	}
});

$.txtCartao.addEventListener("change", function() {
	Mask.mask($.txtCartao, Mask.creditcard);
});

$.txtValidade.addEventListener("change", function() {
	Mask.mask($.txtValidade, Mask.creditcardvalid);
});

function btnCadastrarCartao_onClick() {
	$.tabCartoes.setActive(true);
}

function btnLerCodigo_onClick() {
	barcode.capture(loadConsumidorSearch, $.vwScan, function(err, data) {
		if (!err) {
			var winConsumidor = Alloy.createController('consumidor').getView();
			winConsumidor.initView(data);
			winConsumidor.open();
		} else {
			ExibirWindowErro();
		}
	});
}

function ExibirWindowErro() {
	var winErro = Alloy.createController('erro').getView();
	winErro.open();
}

function btnBuscarConsumidor_onClick() {
	Ti.App.Properties.removeProperty('TokenApp');

	util.getTokenApp(function(err, data) {
		if (!err) {
			var winConsumidor = Alloy.createController('consumidor').getView();
			winConsumidor.initView(data);
			winConsumidor.open();
		} else {
			ExibirWindowErro();
		}
	});
}

function btnBuscarConsumidor_onClick____OLD() {
	loadConsumidorSearch('http://www.pagaai.com.br/?id=1213-1-19', function(err, data) {
		if (!err) {
			var winConsumidor = Alloy.createController('consumidor').getView();
			winConsumidor.initView(data);
			winConsumidor.open();
		} else {
			ExibirWindowErro();
		}
	});
}

function btnCancelScan_onClick() {
	barcode.cancel();
}

function loadConsumidorSearch(p_qrcode, cb) {
	console.log('--->loadConsumidorSearch');
	console.log(p_qrcode);
	var searchConsumidor = {
		qrCode : p_qrcode
	};
	webapi.getConsumidorSearch(searchConsumidor, function(err, data) {
		if (err) {
			cb(err, null);
			alert(JSON.stringify(err));
		} else if (data.length == 0) {
			console.log('log data: ');
			console.log(data);
			/* alert('QrCode não encontrado.');*/
			cb('QrCode não encontrado.', null);
		} else {
			console.log(data[0]);
			cb(false, data[0]);
		}
	});
}

function teste() {
	//Gera token com verificacao do retorno
	util.getTokenApp(function(err, data) {
		if (!err) {
			var winConsumidor = Alloy.createController('consumidor').getView();
			winConsumidor.initView(data);
			winConsumidor.open();
		} else {
			ExibirWindowErro();
		}
	});
}

function hideKeyboard(){
	$.txtTitular.blur();
	$.txtCartao.blur();
	$.txtValidade.blur();
}

function btnProxCartao()
{
	$.txtTitular.focus();	
}

function btnAntTitular()
{
	$.txtCartao.focus();	
}

function btnProxTitular()
{
	$.txtValidade.focus();	
}

function btnAntValidade()
{
	$.txtTitular.focus();	
}

$.tabGroup.open();
