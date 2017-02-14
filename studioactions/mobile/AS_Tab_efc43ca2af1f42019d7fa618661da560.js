function AS_Tab_efc43ca2af1f42019d7fa618661da560(eventobject, x, y) {
    kony.application.showLoadingScreen("loadskin", "LoadingScreen", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, {
        enableMenuKey: true,
        enableBackKey: true,
        progressIndicatorColor: "ffffff77"
    });
    myEvents();
    kony.application.dismissLoadingScreen();
}