/**
 * 
 */

sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "sap.ui.accessibilityplatform.view.Index"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});