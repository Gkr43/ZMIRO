sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zmiro',
            componentId: 'ZMM_C_SUPPLIER_DATAList',
            contextPath: '/ZMM_C_SUPPLIER_DATA'
        },
        CustomPageDefinitions
    );
});