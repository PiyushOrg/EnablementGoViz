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
            "Label08b194af0dc3d41": "Ongoing",
            "Linelbl": "",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSep2": "------------------",
            "lblSeparater": "| | | | | | | | | | | | | | | | |",
            "lblStageName": "Session - 1",
            "lblTime": "10 AM - 2 PM"
        }, {
            "CheckImg": "tickicn.png",
            "Label08b194af0dc3d41": "Ongoing",
            "Linelbl": "",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSep2": "------------------",
            "lblSeparater": "| | | | | | | | | | | | | | | | |",
            "lblStageName": "Session - 1",
            "lblTime": "10 AM - 2 PM"
        }, {
            "CheckImg": "tickicn.png",
            "Label08b194af0dc3d41": "Ongoing",
            "Linelbl": "",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSep2": "------------------",
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
            "Label08b194af0dc3d41": "Label08b194af0dc3d41",
            "Linelbl": "Linelbl",
            "ScheduleCont": "ScheduleCont",
            "flxMyEventDetail": "flxMyEventDetail",
            "lblDate": "lblDate",
            "lblDateName": "lblDateName",
            "lblSep2": "lblSep2",
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
        "src": "carousel4.png",
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
        "height": "67.50%",
        "horizontalScrollIndicator": true,
        "id": "flxEventDescription",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "20.50%",
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
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslFbox062dd4e1035c049",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    DescriptionCont.setDefaultUnit(kony.flex.DP);
    var lblMyEventName = new kony.ui.Label({
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
    var LocationCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "LocationCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "6.50%",
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
        "height": "10%",
        "id": "TimingsCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "14%",
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
        "height": "10%",
        "id": "PointsCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "20.50%",
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
        "top": "29.50%",
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
        "top": "55%",
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
        "top": "6%",
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
            "Label08b194af0dc3d41": "Ongoing",
            "Linelbl": "",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSep2": "------------------",
            "lblSeparater": "| | | | | | | | | | | | | | | | |",
            "lblStageName": "Session - 1",
            "lblTime": "10 AM - 2 PM"
        }, {
            "CheckImg": "tickicn.png",
            "Label08b194af0dc3d41": "Ongoing",
            "Linelbl": "",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSep2": "------------------",
            "lblSeparater": "| | | | | | | | | | | | | | | | |",
            "lblStageName": "Session - 1",
            "lblTime": "10 AM - 2 PM"
        }, {
            "CheckImg": "tickicn.png",
            "Label08b194af0dc3d41": "Ongoing",
            "Linelbl": "",
            "lblDate": "22 Jan 2017",
            "lblDateName": "Date : ",
            "lblSep2": "------------------",
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
            "Label08b194af0dc3d41": "Label08b194af0dc3d41",
            "Linelbl": "Linelbl",
            "ScheduleCont": "ScheduleCont",
            "flxMyEventDetail": "flxMyEventDetail",
            "lblDate": "lblDate",
            "lblDateName": "lblDateName",
            "lblSep2": "lblSep2",
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
    DescriptionCont.add(lblMyEventName, LocationCont, TimingsCont, PointsCont, ContDescription, flxSchedule);
    flxEventDescription.add(DescriptionCont);
    flxMain.add(flxEventPic, flxEventDescription);
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