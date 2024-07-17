sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zmiro/test/integration/FirstJourney',
		'zmiro/test/integration/pages/ZMM_C_SUPPLIER_DATAList',
		'zmiro/test/integration/pages/ZMM_C_SUPPLIER_DATAObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZMM_C_SUPPLIER_DATAList, ZMM_C_SUPPLIER_DATAObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zmiro') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZMM_C_SUPPLIER_DATAList: ZMM_C_SUPPLIER_DATAList,
					onTheZMM_C_SUPPLIER_DATAObjectPage: ZMM_C_SUPPLIER_DATAObjectPage
                }
            },
            opaJourney.run
        );
    }
);