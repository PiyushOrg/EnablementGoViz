function addWidgetsfrmMyEventDetailed() {
    frmMyEventDetailed.setDefaultUnit(kony.flex.DP);
    var flxEvent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxEvent",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0f4e882bb155845",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxEvent.setDefaultUnit(kony.flex.DP);
    var flxImage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxImage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxImage.setDefaultUnit(kony.flex.DP);
    var imgMyEvent = new kony.ui.Image2({
        "height": "100%",
        "id": "imgMyEvent",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "bck.PNG",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxBack = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxBack",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "onClick": AS_FlexContainer_7b0b6360174741f69e9b63f1252e2483,
        "skin": "CopyslFbox032615557e77347",
        "top": "3%",
        "width": "12%",
        "zIndex": 2
    }, {}, {});
    flxBack.setDefaultUnit(kony.flex.DP);
    var imgBack = new kony.ui.Image2({
        "height": "100%",
        "id": "imgBack",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "backblack.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBack.add(imgBack);
    flxImage.add(imgMyEvent, flxBack);
    var segMyEvent = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "CheckImg": "tickicn.png",
            "Linelbl": "",
            "descrpition": "Ongoing",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSeparater": "| | | | | | | | | | | | | | | | |",
            "lblStageName": "Session - 1",
            "lblTime": "10 AM - 2 PM"
        }, {
            "CheckImg": "tickicn.png",
            "Linelbl": "",
            "descrpition": "Ongoing",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSeparater": "| | | | | | | | | | | | | | | | |",
            "lblStageName": "Session - 1",
            "lblTime": "10 AM - 2 PM"
        }, {
            "CheckImg": "tickicn.png",
            "Linelbl": "",
            "descrpition": "Ongoing",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSeparater": "| | | | | | | | | | | | | | | | |",
            "lblStageName": "Session - 1",
            "lblTime": "10 AM - 2 PM"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segMyEvent",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0d5bc363cc8e64b",
        "rowTemplate": CopyflxMyEvent0db10d8d616a84e,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "30%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CheckImg": "CheckImg",
            "CkeckBox": "CkeckBox",
            "CopyflxMyEvent0db10d8d616a84e": "CopyflxMyEvent0db10d8d616a84e",
            "DateNTimeCont": "DateNTimeCont",
            "Linelbl": "Linelbl",
            "ScheduleCont": "ScheduleCont",
            "descrpition": "descrpition",
            "flxMyEventDetail": "flxMyEventDetail",
            "lblDate": "lblDate",
            "lblDateName": "lblDateName",
            "lblSeparater": "lblSeparater",
            "lblStageName": "lblStageName",
            "lblTime": "lblTime"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxEvent.add(flxImage, segMyEvent);
    var flxMain = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox02259c466840a45",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxEventPic = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "29.81%",
        "id": "flxEventPic",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "CopyslFbox0f0c22e46ae7047",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxEventPic.setDefaultUnit(kony.flex.DP);
    var CopyflxBack0609409ffb19542 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "24%",
        "id": "CopyflxBack0609409ffb19542",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "onClick": AS_FlexContainer_f66434714ddb4351a709e691622b0ed1,
        "skin": "CopyslFbox032615557e77347",
        "top": "0%",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    CopyflxBack0609409ffb19542.setDefaultUnit(kony.flex.DP);
    var CopyimgBack0ed0b98618fc14c = new kony.ui.Image2({
        "centerY": "50%",
        "height": "15dp",
        "id": "CopyimgBack0ed0b98618fc14c",
        "isVisible": true,
        "left": "6%",
        "skin": "slImage",
        "src": "back_btn.png",
        "top": "0%",
        "width": "15dp",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var BtnBack = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "15dp",
        "id": "BtnBack",
        "isVisible": true,
        "left": "6%",
        "skin": "CopyslButtonGlossBlue05af6c63cd0374e",
        "width": "15dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var LblTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "LblTitle",
        "isVisible": true,
        "left": "106%",
        "skin": "CopyslLabel04c792dce97d640",
        "text": "Event Details",
        "textStyle": {
            "strikeThrough": false
        },
        "top": "1dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxBack0609409ffb19542.add(CopyimgBack0ed0b98618fc14c, BtnBack, LblTitle);
    var imgEvent = new kony.ui.Image2({
        "centerX": "50%",
        "height": "84%",
        "id": "imgEvent",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "ba1.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblEventName = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "55%",
        "height": "20%",
        "id": "lblEventName",
        "isVisible": false,
        "skin": "CopyslLabel07a4c0e33e63d44",
        "text": "Scavenger hunt",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxEventPic.add(CopyflxBack0609409ffb19542, imgEvent, lblEventName);
    var flxEventDescription = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "60%",
        "horizontalScrollIndicator": true,
        "id": "flxEventDescription",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "30%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxEventDescription.setDefaultUnit(kony.flex.DP);
    var DescriptionCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "DescriptionCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslFbox062dd4e1035c049",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    DescriptionCont.setDefaultUnit(kony.flex.DP);
    var RateItCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "6%",
        "id": "RateItCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    RateItCont.setDefaultUnit(kony.flex.DP);
    var rateitbtn = new kony.ui.Button({
        "centerY": "52.71%",
        "focusSkin": "slButtonGlossRed",
        "height": "80%",
        "id": "rateitbtn",
        "isVisible": true,
        "onClick": AS_Button_38dcd9b1943f4ce2af8b806e73411811,
        "right": "1.93%",
        "skin": "CopyslButtonGlossBlue03e28ac9cf78846",
        "text": "Rate",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMyEventName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblMyEventName",
        "isVisible": true,
        "left": "4%",
        "skin": "CopyslLabel06b8b5a8243f541",
        "text": "Kony Visualizer 8.2",
        "textStyle": {
            "strikeThrough": false
        },
        "top": "2.50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    RateItCont.add(rateitbtn, lblMyEventName);
    var LocationCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "6%",
        "id": "LocationCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    LocationCont.setDefaultUnit(kony.flex.DP);
    var lblLocationName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblLocationName",
        "isVisible": true,
        "left": "4%",
        "skin": "lblDescriptionName",
        "text": "Location :",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblLocation = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblLocation",
        "isVisible": true,
        "left": "1%",
        "skin": "KeyLabel",
        "text": "Phoenix",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    LocationCont.add(lblLocationName, lblLocation);
    var TimingsCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "6%",
        "id": "TimingsCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    TimingsCont.setDefaultUnit(kony.flex.DP);
    var lblTimingName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTimingName",
        "isVisible": true,
        "left": "4%",
        "skin": "lblDescriptionName",
        "text": "Timing :",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblTimings = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTimings",
        "isVisible": true,
        "left": "1%",
        "skin": "KeyLabel",
        "text": "10AM - 2PM",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    TimingsCont.add(lblTimingName, lblTimings);
    var PointsCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "6%",
        "id": "PointsCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    PointsCont.setDefaultUnit(kony.flex.DP);
    var lblPointsName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblPointsName",
        "isVisible": true,
        "left": "4%",
        "skin": "lblDescriptionName",
        "text": "Points :",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblPoints = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblPoints",
        "isVisible": true,
        "left": "1%",
        "skin": "KeyLabel",
        "text": "80",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    PointsCont.add(lblPointsName, lblPoints);
    var ContDescription = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "ContDescription",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ContDescription.setDefaultUnit(kony.flex.DP);
    var lblDescriptionName = new kony.ui.Label({
        "id": "lblDescriptionName",
        "isVisible": true,
        "left": "12dp",
        "skin": "lblDescriptionName",
        "text": "Event Description :",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtDescription1 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "id": "txtDescription1",
        "isVisible": false,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 3,
        "skin": "TextBoxSkin",
        "text": "The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. ",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [1, 1, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtDescription = new kony.ui.Label({
        "centerX": "50%",
        "id": "txtDescription",
        "isVisible": true,
        "skin": "CopyslLabel0c095515c83934b",
        "text": "The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. The buying of large-screen TVs and the screen is there i always see it in the mirror for no reason. ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    ContDescription.add(lblDescriptionName, txtDescription1, txtDescription);
    var flxSchedule = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "horizontalScrollIndicator": true,
        "id": "flxSchedule",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSchedule.setDefaultUnit(kony.flex.DP);
    var lblSchedule = new kony.ui.Label({
        "id": "lblSchedule",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel00f5738a0d4ee4b",
        "text": "Schedule :",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "4%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var ScheduleSeg = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "data": [{
            "CheckImg": "tickicn.png",
            "Linelbl": "",
            "descrpition": "Ongoing",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSeparater": "| | | | | | | | | | | | | | | | |",
            "lblStageName": "Session - 1",
            "lblTime": "10 AM - 2 PM"
        }, {
            "CheckImg": "tickicn.png",
            "Linelbl": "",
            "descrpition": "Ongoing",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSeparater": "| | | | | | | | | | | | | | | | |",
            "lblStageName": "Session - 1",
            "lblTime": "10 AM - 2 PM"
        }, {
            "CheckImg": "tickicn.png",
            "Linelbl": "",
            "descrpition": "Ongoing",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSeparater": "| | | | | | | | | | | | | | | | |",
            "lblStageName": "Session - 1",
            "lblTime": "10 AM - 2 PM"
        }],
        "groupCells": false,
        "id": "ScheduleSeg",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyflxMyEvent0db10d8d616a84e,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "12.50%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CheckImg": "CheckImg",
            "CkeckBox": "CkeckBox",
            "CopyflxMyEvent0db10d8d616a84e": "CopyflxMyEvent0db10d8d616a84e",
            "DateNTimeCont": "DateNTimeCont",
            "Linelbl": "Linelbl",
            "ScheduleCont": "ScheduleCont",
            "descrpition": "descrpition",
            "flxMyEventDetail": "flxMyEventDetail",
            "lblDate": "lblDate",
            "lblDateName": "lblDateName",
            "lblSeparater": "lblSeparater",
            "lblStageName": "lblStageName",
            "lblTime": "lblTime"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSchedule.add(lblSchedule, ScheduleSeg);
    DescriptionCont.add(RateItCont, LocationCont, TimingsCont, PointsCont, ContDescription, flxSchedule);
    flxEventDescription.add(DescriptionCont);
    var btnEnroll = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "CopyslButtonGlossBlue007fa73d91f9e4a",
        "height": "5.80%",
        "id": "btnEnroll",
        "isVisible": true,
        "left": "0.00%",
        "onClick": AS_Button_28a5ebd93d7b4215972922f77f81ab50,
        "skin": "CopyslButtonGlossBlue007fa73d91f9e4a",
        "text": "Done",
        "top": "91.60%",
        "width": "89%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var RateStars = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "RateStars",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_6a92f6e57b11492b995135f210769b39,
        "skin": "CopyslFbox08efd91ef15b741",
        "width": "100%",
        "zIndex": 4
    }, {}, {});
    RateStars.setDefaultUnit(kony.flex.DP);
    var FlexContainer0ee3e39e2f95541 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "FlexContainer0ee3e39e2f95541",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0207c51db64db49",
        "width": "80%",
        "zIndex": 5
    }, {}, {});
    FlexContainer0ee3e39e2f95541.setDefaultUnit(kony.flex.DP);
    var StarCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "35%",
        "clipBounds": true,
        "height": "35%",
        "id": "StarCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 5
    }, {}, {});
    StarCont.setDefaultUnit(kony.flex.DP);
    var Star1 = new kony.ui.Image2({
        "centerX": "10%",
        "centerY": "50%",
        "height": "60dp",
        "id": "Star1",
        "isVisible": true,
        "left": "2dp",
        "onTouchStart": AS_Image_2b1454446c744615a7b4613f354c156e,
        "skin": "slImage",
        "src": "rating_empty.png",
        "top": "62dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Star2 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "60dp",
        "id": "Star2",
        "isVisible": true,
        "left": "0%",
        "onTouchStart": AS_Image_cace6952619b4fec8f16ddd04dd9d641,
        "skin": "slImage",
        "src": "rating_empty.png",
        "width": "20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Star3 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "60dp",
        "id": "Star3",
        "isVisible": true,
        "left": "0%",
        "onTouchStart": AS_Image_2635622fb03040269a80c19f7a68c325,
        "skin": "slImage",
        "src": "rating_empty.png",
        "width": "20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Star4 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "100%",
        "id": "Star4",
        "isVisible": true,
        "left": "0%",
        "onTouchStart": AS_Image_593cda34319b4809839b68392c53fa22,
        "skin": "slImage",
        "src": "rating_empty.png",
        "width": "20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Star5 = new kony.ui.Image2({
        "centerX": "10%",
        "centerY": "50%",
        "height": "60dp",
        "id": "Star5",
        "isVisible": true,
        "left": "0%",
        "onTouchStart": AS_Image_52652cf78e25463aa7312215d04774b3,
        "skin": "slImage",
        "src": "rating_empty.png",
        "width": "20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    StarCont.add(Star1, Star2, Star3, Star4, Star5);
    var RateBtn = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "80%",
        "focusSkin": "slButtonGlossRed",
        "height": "13%",
        "id": "RateBtn",
        "isVisible": true,
        "left": "19dp",
        "onClick": AS_Button_c90ef03916344c4294a22d00e30b8481,
        "skin": "CopyslButtonGlossBlue0c46382ba7b0447",
        "text": "Rate It",
        "width": "20%",
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0ee3e39e2f95541.add(StarCont, RateBtn);
    RateStars.add(FlexContainer0ee3e39e2f95541);
    flxMain.add(flxEventPic, flxEventDescription, btnEnroll, RateStars);
    frmMyEventDetailed.add(flxEvent, flxMain);
};

function frmMyEventDetailedGlobals() {
    frmMyEventDetailed = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMyEventDetailed,
        "enabledForIdleTimeout": false,
        "id": "frmMyEventDetailed",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
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
    frmMyEventDetailed.info = {
        "kuid": "1c4373d8799040819287da65ea1ee7d0"
    };
};