/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cloudui5/cloudui5/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});