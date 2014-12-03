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
Alloy.Globals.WebApiBaseAddress = 'http://pagws.herokuapp.com/api/';

Alloy.Globals.WebApiErrorCodes = {};
Alloy.Globals.WebApiErrorCodes.Unknown = 1;
Alloy.Globals.WebApiErrorCodes.ConnectionError = 2;
Alloy.Globals.WebApiErrorCodes.CollectionError = 3;
Alloy.Globals.WebApiErrorCodes.CommandError = 4;

Alloy.Globals.ErrorCodes = {};
Alloy.Globals.ErrorCodes.Unknown = 11;
Alloy.Globals.ErrorCodes.NoInternetConnection = 12;
Alloy.Globals.ErrorCodes.BadServerResponse = 13;
