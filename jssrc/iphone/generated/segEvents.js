function initializesegEvents() {
    flxEv = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "43%",
        "id": "flxEv",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0c50320d01fb546"
    }, {}, {});
    flxEv.setDefaultUnit(kony.flex.DP);
    var flexShodow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "95%",
        "id": "flexShodow",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0a9758ed0c9ac40",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    flexShodow.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "48%",
        "clipBounds": true,
        "height": "98%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "CopyslFbox0075ffa25008f4f",
        "width": "99.90%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "15%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox0534a696e63064d",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var lblEventName = new kony.ui.Label({
        "centerY": "50%",
        "height": "60%",
        "id": "lblEventName",
        "isVisible": true,
        "left": "4%",
        "skin": "CopyslLabel00c79a2fc34c644",
        "text": "Kony Visualizer 8.2",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMax = new kony.ui.Label({
        "id": "lblMax",
        "isVisible": true,
        "left": "14%",
        "right": 0,
        "skin": "CopyslLabel0d1da0de6521a4d",
        "text": "Points:",
        "top": "26%",
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
    var lblScore = new kony.ui.Label({
        "id": "lblScore",
        "isVisible": true,
        "skin": "CopyslLabel0cea7f7f704e54e",
        "text": "80",
        "top": "26%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxHeader.add(lblEventName, lblMax, lblScore);
    var RatingCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "12%",
        "id": "RatingCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": 0,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    RatingCont.setDefaultUnit(kony.flex.DP);
    var RatingBar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "95%",
        "id": "RatingBar",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "4%",
        "skin": "slFbox",
        "width": "26%",
        "zIndex": 1
    }, {}, {});
    RatingBar.setDefaultUnit(kony.flex.DP);
    var Star1 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "13dp",
        "id": "Star1",
        "isVisible": true,
        "left": "1%",
        "skin": "slImage",
        "src": "rating_empty.png",
        "width": "13dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Star2 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "13dp",
        "id": "Star2",
        "isVisible": true,
        "left": "3%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "13dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Star3 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "13dp",
        "id": "Star3",
        "isVisible": true,
        "left": "3%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "13dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Star4 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "13dp",
        "id": "Star4",
        "isVisible": true,
        "left": "3%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "13dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Star5 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "13dp",
        "id": "Star5",
        "isVisible": true,
        "left": "3dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "13dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    RatingBar.add(Star1, Star2, Star3, Star4, Star5);
    var NoOfRatings = new kony.ui.Label({
        "centerY": "50%",
        "id": "NoOfRatings",
        "isVisible": true,
        "left": "1%",
        "skin": "CopyslLabel0212b9c2591ac45",
        "text": "(40)",
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
    RatingCont.add(RatingBar, NoOfRatings);
    var flxImg = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "45%",
        "id": "flxImg",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "93.50%",
        "zIndex": 1
    }, {}, {});
    flxImg.setDefaultUnit(kony.flex.DP);
    var imgEvent = new kony.ui.Image2({
        "height": "100%",
        "id": "imgEvent",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "bck.PNG",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblEventID = new kony.ui.Label({
        "id": "lblEventID",
        "isVisible": false,
        "left": "124dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "94dp",
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
    flxImg.add(imgEvent, lblEventID);
    var flxBottom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "30%",
        "id": "flxBottom",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBottom.setDefaultUnit(kony.flex.DP);
    var DateCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "67%",
        "id": "DateCont",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3.30%",
        "skin": "CopyslFbox0fbb5a3080e1448",
        "top": "14%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    DateCont.setDefaultUnit(kony.flex.DP);
    var lblDay = new kony.ui.Label({
        "centerX": "51%",
        "id": "lblDay",
        "isVisible": true,
        "skin": "CopyslLabel083a9ddf112614a",
        "text": "22",
        "top": "6%",
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
        "centerX": "50%",
        "id": "lblDate",
        "isVisible": true,
        "skin": "CopyslLabel04bae3b83f1b444",
        "text": "Feb 17",
        "top": "51.50%",
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
    DateCont.add(lblDay, lblDate);
    var StatusCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "80%",
        "id": "StatusCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "slFbox",
        "width": "55%",
        "zIndex": 1
    }, {}, {});
    StatusCont.setDefaultUnit(kony.flex.DP);
    var lblUpcoming = new kony.ui.Label({
        "id": "lblUpcoming",
        "isVisible": true,
        "left": "7%",
        "skin": "CopyslLabel08e129f10543642",
        "text": "UPCOMING",
        "top": "10%",
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
    var LocationCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "LocationCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3dp",
        "skin": "slFbox",
        "top": "3%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    LocationCont.setDefaultUnit(kony.flex.DP);
    var lblLocationName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblLocationName",
        "isVisible": true,
        "left": "7%",
        "skin": "locatELabel",
        "text": "Location : ",
        "top": "0%",
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
    var lblLocation = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblLocation",
        "isVisible": true,
        "left": "0%",
        "skin": "locatELabel",
        "text": "Phoenix",
        "top": "0dp",
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
    LocationCont.add(lblLocationName, lblLocation);
    var TimeCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "25%",
        "id": "TimeCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3dp",
        "skin": "slFbox",
        "top": "3%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    TimeCont.setDefaultUnit(kony.flex.DP);
    var lblTimeName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTimeName",
        "isVisible": true,
        "left": "7%",
        "skin": "locatELabel",
        "text": "Time :   ",
        "top": "0%",
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
    var lblTime = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTime",
        "isVisible": true,
        "left": "0%",
        "skin": "locatELabel",
        "text": "10 AM - 10 PM",
        "top": "0dp",
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
    TimeCont.add(lblTimeName, lblTime);
    StatusCont.add(lblUpcoming, LocationCont, TimeCont);
    var flxEnroll = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "31%",
        "id": "flxEnroll",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.50%",
        "onClick": AS_FlexContainer_58f0b9102b6144c9aa61bcd73569aa4f,
        "skin": "CopyslFbox0eabb42e7d3924b",
        "top": "33.50%",
        "width": "22.50%",
        "zIndex": 1
    }, {}, {});
    flxEnroll.setDefaultUnit(kony.flex.DP);
    var imgEnroll = new kony.ui.Image2({
        "height": "100%",
        "id": "imgEnroll",
        "isVisible": false,
        "left": "0%",
        "skin": "slImage",
        "src": "enroll.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxEnroll.add(imgEnroll);
    var ButtonEnroll = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossBlue0bacd52f84f9a4c",
        "height": "31%",
        "id": "ButtonEnroll",
        "isVisible": false,
        "left": "0.50%",
        "onClick": AS_Button_92d694ec681d49ab9ae573b598279963,
        "skin": "CopyslButtonGlossBlue0bacd52f84f9a4c",
        "text": "ENROLL",
        "top": "33.50%",
        "width": "22.50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var LikesCont = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "centerX": "18%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "30%",
        "id": "LikesCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox09de0ef80f72a40",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    LikesCont.setDefaultUnit(kony.flex.DP);
    var LikeImg = new kony.ui.Image2({
        "centerY": "50%",
        "height": "15dp",
        "id": "LikeImg",
        "isVisible": true,
        "left": "2%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "15dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var LikesCountlbl = new kony.ui.Label({
        "centerY": "50%",
        "id": "LikesCountlbl",
        "isVisible": true,
        "left": "6%",
        "skin": "CopyslLabel0f997da76ff1f43",
        "text": "(30)",
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
    LikesCont.add(LikeImg, LikesCountlbl);
    flxBottom.add(DateCont, StatusCont, flxEnroll, ButtonEnroll, LikesCont);
    var flxDesc = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxDesc",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0f308a024d4ba4c",
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDesc.setDefaultUnit(kony.flex.DP);
    var lblDescription = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblDescription",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0b2c7c51b13a94b",
        "text": "The event is all about searching an item, the item could be anything of any size depending on the team size. The winner would be highest percentage.",
        "top": "10%",
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
    flxDesc.add(lblDescription);
    var flxFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxFooter",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0189c3da42b3e4b",
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxFooter.setDefaultUnit(kony.flex.DP);
    var flxLike = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxLike",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "1%",
        "width": "33.30%",
        "zIndex": 1
    }, {}, {});
    flxLike.setDefaultUnit(kony.flex.DP);
    var imgLike = new kony.ui.Image2({
        "height": "100%",
        "id": "imgLike",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "like.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLike.add(imgLike);
    var flxComment = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxComment",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "33.30%",
        "onClick": AS_FlexContainer_52c1d9260eb74539867ae72c92ec5c33,
        "skin": "slFbox",
        "top": "0%",
        "width": "33.30%",
        "zIndex": 1
    }, {}, {});
    flxComment.setDefaultUnit(kony.flex.DP);
    var imgComment = new kony.ui.Image2({
        "height": "100%",
        "id": "imgComment",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "comment.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxComment.add(imgComment);
    flxFooter.add(flxLike, flxComment);
    var FlexContainer0a592a32577c646 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "FlexContainer0a592a32577c646",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox025106665947545",
        "top": "15%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0a592a32577c646.setDefaultUnit(kony.flex.DP);
    var lblOngoing = new kony.ui.Label({
        "id": "lblOngoing",
        "isVisible": true,
        "left": "40%",
        "skin": "CopyslLabel08e129f10543642",
        "text": "Ongoing",
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
    var lblCompleted = new kony.ui.Label({
        "id": "lblCompleted",
        "isVisible": true,
        "left": "70%",
        "skin": "CopyslLabel08e129f10543642",
        "text": "Completed",
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
    var lblSeparator = new kony.ui.Label({
        "height": "2%",
        "id": "lblSeparator",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel034b3249d35f54a",
        "text": "k",
        "top": "67%",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer0a592a32577c646.add(lblOngoing, lblCompleted, lblSeparator);
    flxMain.add(flxHeader, RatingCont, flxImg, flxBottom, flxDesc, flxFooter, FlexContainer0a592a32577c646);
    flexShodow.add(flxMain);
    flxEv.add(flexShodow);
}