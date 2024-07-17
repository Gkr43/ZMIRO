sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zmiro',
            componentId: 'ZMM_C_SUPPLIER_DATAObjectPage',
            contextPath: '/ZMM_C_SUPPLIER_DATA'
        },
        CustomPageDefinitions
    );
});