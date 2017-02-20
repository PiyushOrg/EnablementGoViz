//actions.js file 
function AS_AppEvents_457245f58d09465a86a236a5bed832b6(eventobject) {
    initializeApp.call(this);
    showeventsf.call(this);
}

function AS_AppEvents_ee86c84e5b134efd8546ebad61c19c23(eventobject) {
    postAppInit.call(this);
}

function AS_Button_0aafcaa1058640858486496ac79e9c45(eventobject) {
    close("flxEnroll");
}

function AS_Button_14c7e7561ad64d9c9dd99165b7e13486(eventobject) {
    return launchBarcodeCapture.call(this);
}

function AS_Button_178171e81b3b421e9aa0feafc98c01db(eventobject) {
    return eventEnroll.call(this);
}

function AS_Button_22a6c2fb683b4f3199859b6a4624280d(eventobject) {
    frmHome.flxHome.flxSearch.isVisible = "false";
}

function AS_Button_24d031c2b1794d8bb662a867d166046f(eventobject) {
    close("flxComment");
}

function AS_Button_49fbb61f80224be8b9cb49610fd529cf(eventobject) {
    close("flxEnroll");
}

function AS_Button_5b82c935f8bc4a67b227986400ac4e1d(eventobject, context) {
    eventID.call(this);
}

function AS_Button_6d19984d331e46cf8d8e8a283e2f6445(eventobject) {
    return logout.call(this);
}

function AS_Button_92d694ec681d49ab9ae573b598279963(eventobject, context) {
    eventID.call(this);
}

function AS_Button_961fcb8f12a7456abaa85b2a4035a5b1(eventobject) {
    close("flxComment");
}

function AS_Button_e5dafde352d246b4b49e45d0dd19d7b3(eventobject) {
    close("flxEnroll");
}

function AS_Button_fe2caa4491f24329881a2b674d03684c(eventobject) {
    return launchBarcodeCapture.call(this);
}

function AS_FlexContainer_0268bf079e5c4840a7286b769cd9c7ed(eventobject) {
    login();
}

function AS_FlexContainer_0e6f9ec2297541db95d2cef88dc56c99(eventobject, context) {
    open("flxComment");
}

function AS_FlexContainer_3fc2b26c4d84495e86def18d19381d7b(eventobject, context) {
    open("flxEnroll");
    eventID();
}

function AS_FlexContainer_40bae11f025742258a3fef2ca636957d(eventobject) {
    frmHome.show();
}

function AS_FlexContainer_52c1d9260eb74539867ae72c92ec5c33(eventobject, context) {
    open("flxComment");
}

function AS_FlexContainer_58f0b9102b6144c9aa61bcd73569aa4f(eventobject, context) {
    open("flxEnroll");
    eventID();
}

function AS_FlexContainer_65dea0c939a348b685ca7229ddac24f6(eventobject) {
    frmHome.flxHome.flxHeader.isVisible = "false";
    frmHome.flxHome.flxSearch.isVisible = "true";
}

function AS_FlexContainer_7b0b6360174741f69e9b63f1252e2483(eventobject) {
    frmHome.show();
}

function AS_FlexContainer_d2c81a878d2a4992a5a216ae43403428(eventobject) {
    frmHome.flxHome.flxHeader.isVisible = "true";
    frmHome.flxHome.flxSearch.isVisible = "false";
}

function AS_FlexContainer_d4c9f13705ec4deebf58e314bb5fea5d(eventobject) {
    frmHome.flxSearch.isVisible = "true";
}

function AS_FlexContainer_dc72f6949f0a431a94932ec13c98bdf1(eventobject, context) {
    open("flxEnroll");
    eventID();
}

function AS_FlexContainer_e717ee30f36845649141646bfeb68137(eventobject, context) {
    open("flxComment");
}

function AS_FlexContainer_ef5bcab785854b2daca86750c880a2ff(eventobject, context) {
    open("flxEnroll");
    eventID();
}

function AS_FlexContainer_f66434714ddb4351a709e691622b0ed1(eventobject) {
    frmHome.show();
}

function AS_Form_09a8ff578ca04620956942e05b106af0(eventobject) {}

function AS_Form_55edb0dc1055436c9bf3fe12dba3fa35(eventobject) {}

function AS_Form_a2664a999750481fa771260383c78153(eventobject) {
    regUser.call(this);
    initializeApp.call(this);
}

function AS_Form_bdc8eb1e017141c0bb152635da6a3591(eventobject) {}

function AS_Form_dc6f528118b243ccb769b948ce9e2b2a(eventobject) {
    kony.application.exit();
}

function AS_Segment_0765ec05573745bebabe53b3991d7169(eventobject) {
    return myEvents.call(this);
}

function AS_Segment_1df2f5cdad5e4ecfb29b0cd7c893ee95(eventobject, sectionNumber, rowNumber) {
    frmMyEventDetailed.show();
    eventDetailMyEvent();
}

function AS_Segment_4f3e4454990648ec8c06b7901ba6e13a(eventobject) {
    return showeventsf.call(this);
}

function AS_Segment_d5fd7f01444645e7b56043acaa21d9f5(eventobject, sectionNumber, rowNumber) {
    frmEventDetail.show();
    eventDetail();
}

function AS_Tab_eb03912aca8e4555b895ded6685e1304(eventobject) {
    return showeventsf.call(this);
}

function AS_Tab_efc43ca2af1f42019d7fa618661da560(eventobject, x, y) {}

function AS_TextField_cc71c854033744bba51edd9e56d69934(eventobject, changedtext) {
    return filter.call(this);
}