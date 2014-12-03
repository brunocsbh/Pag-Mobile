function winConsumidorInit(resultConsumidor) {
	/*alert(resultConsumidor);*/
}

function doCloseWindow() {
	$.WinConsumidor.close();
}

$.WinConsumidor.initView = winConsumidorInit;
exports.initView = winConsumidorInit; 