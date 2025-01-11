sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'uploadingfile/test/integration/FirstJourney',
		'uploadingfile/test/integration/pages/SampleMain'
    ],
    function(JourneyRunner, opaJourney, SampleMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('uploadingfile') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSampleMain: SampleMain
                }
            },
            opaJourney.run
        );
    }
);