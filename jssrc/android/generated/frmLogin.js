function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var flxImgBack = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxImgBack",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxImgBack.setDefaultUnit(kony.flex.DP);
    var imgBack = new kony.ui.Image2({
        "height": "100%",
        "id": "imgBack",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "back_converted.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLogo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxLogo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLogo.setDefaultUnit(kony.flex.DP);
    var imgLogo = new kony.ui.Image2({
        "height": "100%",
        "id": "imgLogo",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "logo_converted.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLogo.add(imgLogo);
    flxImgBack.add(imgBack, flxLogo);
    var flxOutlook = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "12%",
        "id": "flxOutlook",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_0268bf079e5c4840a7286b769cd9c7ed,
        "skin": "CopyslFbox0e531eacfb7be44",
        "top": "40.19%",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    flxOutlook.setDefaultUnit(kony.flex.DP);
    var img = new kony.ui.Image2({
        "centerY": "50%",
        "height": "60%",
        "id": "img",
        "isVisible": true,
        "left": "40%",
        "skin": "CopyslImage095536460781e49",
        "src": "outlook.png",
        "top": "20%",
        "width": "20%",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxOutlook.add(img);
    var SignInBtn = new kony.ui.Button({
        "centerX": "49.97%",
        "focusSkin": "loginBtnSkn",
        "height": "8.20%",
        "id": "SignInBtn",
        "isVisible": true,
        "onClick": AS_Button_a884707aea9947d487ce884aae03b566,
        "skin": "loginBtnSkn",
        "text": "Sign In using Outlook",
        "top": "74.28%",
        "width": "86.50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmLogin.add(flxImgBack, flxOutlook, SignInBtn);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_09a8ff578ca04620956942e05b106af0,
        "preShow": AS_Form_55edb0dc1055436c9bf3fe12dba3fa35,
        "skin": "CopyslForm074e4ff5981124a"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmLogin.info = {
        "kuid": "d8f7bd9b038e4a71ac3b501721ef3f0a"
    };
};