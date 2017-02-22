function addWidgetsfrmSlide3() {
    frmSlide3.setDefaultUnit(kony.flex.DP);
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
        "src": "image2.png",
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
        "onClick": AS_Button_bed0d7ab72304d49bf7f874a341ba26b,
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
    frmSlide3.add(SlideCont, skipBtn);
};

function frmSlide3Globals() {
    frmSlide3 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSlide3,
        "enabledForIdleTimeout": false,
        "id": "frmSlide3",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onTouchEnd": AS_Form_e9120bd7d3f645ee8d6aa85c12427582,
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
    frmSlide3.info = {
        "kuid": "388eba7d6a274d7090d2f00825365764"
    };
};