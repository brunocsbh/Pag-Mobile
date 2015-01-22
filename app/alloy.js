// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.WebApiBaseAddress = 'http://api.pagaai.com.br/api/v1/';

Alloy.Globals.WebApiErrorCodes = {};
Alloy.Globals.WebApiErrorCodes.Unknown = 1;
Alloy.Globals.WebApiErrorCodes.ConnectionError = 2;
Alloy.Globals.WebApiErrorCodes.CollectionError = 3;
Alloy.Globals.WebApiErrorCodes.CommandError = 4;

Alloy.Globals.ErrorCodes = {};
Alloy.Globals.ErrorCodes.DadosIncompletos = 1;
Alloy.Globals.ErrorCodes.Unknown = 11;
Alloy.Globals.ErrorCodes.NoInternetConnection = 12;
Alloy.Globals.ErrorCodes.BadServerResponse = 13;

// Function to test if device is iOS 7 or later
Alloy.Globals.IsiOS7 = function() {
	// iOS-specific test
	if (Titanium.Platform.name == 'iPhone OS') {
		var version = Titanium.Platform.version.split(".");
		var major = parseInt(version[0], 10);
		// Can only test this support on a 3.2+ device
		if (major >= 7) {
			return true;
		}
	}
	return false;
};

Alloy.Globals.TheTop = Alloy.Globals.IsiOS7() ? 20 : 0;



