function initializetempMyEvent() {
    flxMyEvent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "flxMyEvent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox055a0b23b23bc49"
    }, {}, {});
    flxMyEvent.setDefaultUnit(kony.flex.DP);
    var ScheduleCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "49.33%",
        "centerY": "50.36%",
        "clipBounds": true,
        "height": "100%",
        "id": "ScheduleCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "90%",
        "zIndex": 2
    }, {}, {});
    ScheduleCont.setDefaultUnit(kony.flex.DP);
    var lblSeparater = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblSeparater",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0530664e3f97947",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false,
            "baseline": 0
        },
        "top": "0%",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblSep2 = new kony.ui.Label({
        "height": "10%",
        "id": "lblSep2",
        "isVisible": false,
        "left": "10.00%",
        "skin": "CopyslLabel052248d411e4044",
        "text": "------------------",
        "top": "45%",
        "width": "10.04%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flxMyEventDetail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxMyEventDetail",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "14%",
        "skin": "CopyslFbox0d40d80636da145",
        "top": "10%",
        "width": "70%",
        "zIndex": 2
    }, {}, {});
    flxMyEventDetail.setDefaultUnit(kony.flex.DP);
    var lblStageName = new kony.ui.Label({
        "id": "lblStageName",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslLabel017459d0842b644",
        "text": "Session - 1",
        "top": "35%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Label08b194af0dc3d41 = new kony.ui.Label({
        "id": "Label08b194af0dc3d41",
        "isVisible": false,
        "left": "75%",
        "skin": "CopyslLabel082bfd907af1a44",
        "text": "Ongoing",
        "top": "80%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var DateNTimeCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "DateNTimeCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "1%",
        "skin": "slFbox",
        "top": "60%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    DateNTimeCont.setDefaultUnit(kony.flex.DP);
    var lblDateName = new kony.ui.Label({
        "id": "lblDateName",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel00da8d2989eaf43",
        "text": "Date : ",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDate = new kony.ui.Label({
        "id": "lblDate",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslLabel00da8d2989eaf43",
        "text": "22 Jan 2017",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Linelbl = new kony.ui.Label({
        "centerY": "50%",
        "height": "65%",
        "id": "Linelbl",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslLabel0ee77d860fc7f4a",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblTime = new kony.ui.Label({
        "id": "lblTime",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel00da8d2989eaf43",
        "text": "10 AM - 2 PM",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    DateNTimeCont.add(lblDateName, lblDate, Linelbl, lblTime);
    flxMyEventDetail.add(lblStageName, Label08b194af0dc3d41, DateNTimeCont);
    var CkeckBox = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "13dp",
        "id": "CkeckBox",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3.14%",
        "skin": "CopyslFbox015cfb9ef32b54f",
        "top": "16dp",
        "width": "13dp",
        "zIndex": 3
    }, {}, {});
    CkeckBox.setDefaultUnit(kony.flex.DP);
    CkeckBox.add();
    var CheckImg = new kony.ui.Image2({
        "centerX": "5.06%",
        "centerY": "49.65%",
        "height": "25dp",
        "id": "CheckImg",
        "isVisible": true,
        "left": "5.47%",
        "skin": "slImage",
        "src": "ovals.png",
        "top": "16dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    ScheduleCont.add(lblSeparater, lblSep2, flxMyEventDetail, CkeckBox, CheckImg);
    flxMyEvent.add(ScheduleCont);
}