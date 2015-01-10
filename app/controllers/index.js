var webapi = require('webapi');
var barcode = require('barcode');
Ti.include("mask.js");

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
	Mask.mask($.txtCartao, Mask.postcode);
});

$.txtTitular.addEventListener("change", function() {
	Mask.mask($.txtTitular, Mask.postcode);
});

$.txtValidade.addEventListener("change", function() {
	Mask.mask($.txtValidade, Mask.postcode);
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

$.tabGroup.open();
