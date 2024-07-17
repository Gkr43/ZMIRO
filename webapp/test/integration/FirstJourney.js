sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZMM_C_SUPPLIER_DATAList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZMM_C_SUPPLIER_DATAList.onFilterBar().iExecuteSearch();
                
                Then.onTheZMM_C_SUPPLIER_DATAList.onTable().iCheckRows();

                When.onTheZMM_C_SUPPLIER_DATAList.onTable().iPressRow(0);
                Then.onTheZMM_C_SUPPLIER_DATAObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});