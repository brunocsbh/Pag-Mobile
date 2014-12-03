var Barcode = require('ti.barcode');
Barcode.allowRotation = false;
Barcode.useLED = false;
Barcode.displayedMessage = 'Focalize o código.';

var _delegateValidacao = false;
var _cb = false;

Barcode.addEventListener('success', function(e) {
	Ti.API.info('Success called with barcode: ' + e.result);
	if (_delegateValidacao) {
		_delegateValidacao(e.result, function(err, data) {
			if (!err) {
				Barcode.cancel();
				_cb(false, e.result);
			}
		});
	} else {
		Barcode.cancel();
		_cb(false, e.result);
	}
});

Barcode.addEventListener('error', function(e) {
	_cb(e.message, null);
});

var capture = function(delegateValidacao, overlay, cb) {
	Barcode.capture({
		animate : true,
		overlay : overlay,
		showCancel : false,
		showRectangle : true,
		keepOpen : true,
		acceptedFormats : [Barcode.FORMAT_QR_CODE]
	});
	_delegateValidacao = delegateValidacao;
	_cb = cb;
};

var cancel = function() {
	Barcode.cancel();
};

exports.capture = capture;
exports.cancel = cancel;
