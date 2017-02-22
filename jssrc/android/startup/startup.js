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
    isturlbase: "https://mobilefabric-demo.konycloud.com/services",
    isMFApp: true,
    appKey: "122c07164e6f6cea1ea42b6c3d7304f0",
    appSecret: "df66163ed9b0f12a08fde05fd32304f6",
    serviceUrl: "https://100003520.auth.konycloud.com/appconfig",
    svcDoc: {
        "appId": "bc26a189-1654-40ff-bd65-01da567e8697",
        "baseId": "9d23ebaf-5f61-4b1b-85ec-ad84766fe353",
        "name": "EnablementGo",
        "selflink": "https://100003520.auth.konycloud.com/appconfig",
        "login": [{
            "type": "oauth2",
            "prov": "MSLogin",
            "url": "https://100003520.auth.konycloud.com",
            "alias": "MSLogin"
        }, {
            "type": "saml",
            "prov": "MsActiveDir",
            "url": "https://100003520.auth.konycloud.com",
            "alias": "MsActiveDir"
        }],
        "messagingsvc": {
            "appId": "bc26a189-1654-40ff-bd65-01da567e8697",
            "url": "https://mobilefabric-demo.messaging.konycloud.com/api/v1"
        },
        "integsvc": {
            "IntServ": "https://mobilefabric-demo.konycloud.com/services/IntServ",
            "IntServDummy": "https://mobilefabric-demo.konycloud.com/services/IntServDummy"
        },
        "reportingsvc": {
            "custom": "https://mobilefabric-demo.konycloud.com/services/CMS",
            "session": "https://mobilefabric-demo.konycloud.com/services/IST"
        },
        "services_meta": {
            "IntServ": {
                "version": "1.0",
                "url": "https://mobilefabric-demo.konycloud.com/services/IntServ",
                "type": "integsvc"
            },
            "IntServDummy": {
                "version": "1.0",
                "url": "https://mobilefabric-demo.konycloud.com/services/IntServDummy",
                "type": "integsvc"
            }
        }
    },
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://mobilefabric-demo.konycloud.com/enablementGoViz/MWServlet",
    secureurl: "https://mobilefabric-demo.konycloud.com/enablementGoViz/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeMyEventSegNew();
    initializenewSegLeadBoard();
    initializesegEvents();
    initializetempEventDetails();
    initializetempMyEvent();
    frmEventDetailGlobals();
    frmHomeGlobals();
    frmLoginGlobals();
    frmMyEventDetailedGlobals();
    frmSlide1Globals();
    frmSlide2Globals();
    frmSlide3Globals();
    frmSlide4Globals();
    frmSlide5Globals();
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
            frmSlide1.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_barcode"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
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