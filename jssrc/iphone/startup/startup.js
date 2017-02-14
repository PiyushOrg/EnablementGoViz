//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "enablementGoViz",
    appName: "EnablementGo",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.30.100",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "enablementGoViz",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeMyEventSegNew();
    initializenewSegLeadBoard();
    initializesegEvents();
    initializetempEventDetails();
    initializetempMyEvent();
    frmEventDetailGlobals();
    frmHomeGlobals();
    frmLoginGlobals();
    frmMyEventDetailedGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7200
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        preappinit: AS_AppEvents_457245f58d09465a86a236a5bed832b6,
        init: appInit,
        postappinit: AS_AppEvents_ee86c84e5b134efd8546ebad61c19c23,
        showstartupform: function() {
            frmLogin.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;