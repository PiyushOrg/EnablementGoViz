function addWidgetsfrmSlide4() {
    frmSlide4.setDefaultUnit(kony.flex.DP);
    var SlideCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "SlideCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    SlideCont.setDefaultUnit(kony.flex.DP);
    var Slide = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "Slide",
        "isVisible": true,
        "skin": "slImage",
        "src": "image3.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    SlideCont.add(Slide);
    var skipBtn = new kony.ui.Button({
        "centerX": "90%",
        "centerY": "93%",
        "focusSkin": "skipBtnSkin",
        "height": "7%",
        "id": "skipBtn",
        "isVisible": true,
        "onClick": AS_Button_a51c83099c6e46bc8452337784d321c9,
        "skin": "skipBtnSkin",
        "text": "Skip",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmSlide4.add(SlideCont, skipBtn);
};

function frmSlide4Globals() {
    frmSlide4 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSlide4,
        "enabledForIdleTimeout": false,
        "id": "frmSlide4",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onTouchEnd": AS_Form_34e4e5a98c484215b4d5f1c8e926ef11,
        "skin": "CopyslForm0b4fb36700a2f42"
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
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmSlide4.info = {
        "kuid": "afeab22d3e9d42129312c6b2c4523e29"
    };
};