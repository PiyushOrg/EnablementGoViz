response = null;
var event = [],
    session = [];
var error;
var eventId;
var arr = [];
var scanID, session_name;

function showeventsf() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        kony.print("myString");
        var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
        var operationName = "showEvents";
        var headers = {};
        var params = {};
        integrationObj.invokeOperation(operationName, headers, params, successCallBack1, failureCallBack1);
        //kony.application.showLoadingScreen("sknLoading","Loading..",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
        function successCallBack1(result) {
            var res = result;
            kony.print("myString1");
            var obj = [];
            session = [];
            //       alert("success"+JSON.stringify(res));
            //       alert(res);
            //       alert(JSON.stringify(res));
            // alert("Success1 length is"+res.result.length);
            //frmEventDetail.ScheduleSeg.removeAll();
            for (var i = 0; i < res.result.length; i++) {
                obj.push({
                    "location": res.result[i].location,
                    "event_id": res.result[i].event_id,
                    "name": res.result[i].name,
                    "max_score": res.result[i].max_score,
                    "description": res.result[i].description
                });
                event.push(res.result[i].event_id);
                session.push({
                    "sessions": res.result[i].sessions
                });
            }
            //frmHome.tabHome.tabMyEvent.segMyEvents.widgetDataMap = {"lblPlace":"location","lblEventName":"name"};
            //frmHome.tabHome.tabMyEvent.segMyEvents.setData(obj);
            frmHome.tabHome.tabEvent.segEvents.widgetDataMap = {
                "lblLocation": "location",
                "lblEventName": "name",
                "lblDescription": "description",
                "lblScore": "max_score"
            };
            frmHome.tabHome.tabEvent.segEvents.setData(obj);
            //kony.application.dismissLoadingScreen();
            //myEvents();
        }

        function failureCallBack1(err) {
            var error = res;
            kony.print(JSON.stringify(error));
            // alert(error);
        }
    } else {
        alert("Device is offline");
    }
}

function enroll(eventId) {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
        var operationName = "enroll";
        var data = {
            "eventid": eventId,
            "userid": kony.store.getItem("email"),
        };
        var headers = {};
        // alert("event id and email "+eventId+ " "+ email);
        integrationObj.invokeOperation(operationName, headers, data, successCallBack2, failureCallBack2);

        function successCallBack2(res) {
            //alert("success"+JSON.stringify(res));
            alert(" Thank you for enrolling");
        }

        function failureCallBack2(err) {
            kony.print(JSON.stringify(error));
            alert("error " + JSON.stringify(err));
        }
    } else {
        alert("Device is offline");
    }
}

function eventEnroll() {
    eventId = frmHome.segEvents.selectedItems[0].event_id;
    //alert("event id "+eventId);
    enroll(eventId);
}

function regUser() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
        var operationName = "regUser";
        var data = {
            "email": email,
            "userName": username,
        };
        var headers = {};
        integrationObj.invokeOperation(operationName, headers, data, successCallBack3, failureCallBack3);

        function successCallBack3(res) {
            // alert("success"+JSON.stringify(res));
            var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
            var operationName = "saveKSID";
            var data = {
                "email": email,
                "ksid": glob_ks_id,
            };
            var headers = {};
            integrationObj.invokeOperation(operationName, headers, data, successCallBack4, failureCallBack4);

            function failureCallBack4(err) {
                //alert("error"+JSON.stringify(err));
            }

            function successCallBack4(err) {
                //alert("error"+JSON.stringify(err));
            }
        }

        function failureCallBack3(err) {
            //alert("error"+JSON.stringify(err));
        }
    } else {
        alert("Device is offline");
    }
}

function eventDetail() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        frmEventDetail.lblMyEventName.text = frmHome.segEvents.selectedItems[0].name;
        frmEventDetail.lblLocation.text = frmHome.segEvents.selectedItems[0].location;
        frmEventDetail.lblPoints.text = frmHome.segEvents.selectedItems[0].max_score;
        frmEventDetail.txtDescription.text = frmHome.segEvents.selectedItems[0].description;
        var row = frmHome.segEvents.selectedRowIndex[1];
        var i = " " + parseInt(row);
        var x = i.trim();
        frmEventDetail.ScheduleSeg.widgetDataMap = {
            "lblStageName": "session_name"
        };
        frmEventDetail.ScheduleSeg.setData(session[x].sessions);
        //frmEventDetail.btnEnroll.
    } else {
        alert("Device is offline");
    }
}

function login() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        var client = kony.sdk.getCurrentInstance();
        var oAuthObj = client.getIdentityService("MSLogin");
        var loginObj = oAuthObj.login({}, function(res) {
            var profile = oAuthObj.getProfile(false, function(profile) {
                email = profile.email;
                username = profile.firstname + " " + profile.lastname;
                kony.store.setItem("email", email);
                kony.store.setItem("username", username);
                kony.application.showLoadingScreen();
                regForPush();
            }, function(error) {
                kony.application.dismissLoadingScreen();
                alert("Error occured while fetching the profile.");
            });
            frmHome.flxHome.tabHome.lblName.text = username;
            frmHome.show();
            kony.application.dismissLoadingScreen();
        }, function(err) {
            alert("Login Failed" + err);
        });
    } else {
        alert("Device is offline");
    }
}

function launchBarcodeCapture() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        barcode.captureBarcode(barcodeCapCallback);
    } else {
        alert("Device is offline");
    }
}

function barcodeCapCallback(barcodedata, androidScannedText) {
    var platformName = kony.os.deviceInfo().name;
    if (kony.string.startsWith(platformName, "iphone", true)) {
        alert(androidScannedText);
    } else if (kony.string.startsWith(platformName, "android", true)) {
        var barcodearr = androidScannedText.split(',');
        //     alert(androidScannedText);
        //     alert(barcodearr[0]);
        //     alert(barcodearr[1]);
        if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
            kony.print("myString");
            var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
            var operationName = "attendance";
            var headers = {};
            var data = {
                "userid": kony.store.getItem("email"),
                "eventid": barcodearr[0],
                "session_name": barcodearr[1],
                "timestamp": "ljlk"
            };
            //alert(data);
            integrationObj.invokeOperation(operationName, headers, data, successCallBackBarcode, failureCallBackBarcode);

            function successCallBackBarcode(res) {
                alert(res.message);
                //alert("Thanks for attending "+barcodearr[1]+" session.")
            }

            function failureCallBackBarcode(err) {
                alert(err);
            }
        } else {
            alert("Device is offline");
        }
    }
}

function saveAttendance() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
        var currentdate = new Date();
        var timeStamp = currentdate.getFullYear() + "." + currentdate.getMonth() + "." + currentdate.getDate() + "." + currentdate.getHours() + "." + currentdate.getMinutes() + "." + currentdate.getSeconds();
        var operationName = "attendance";
        var data = {
            "eventid": scanID, // the variable you will store the event name in
            "userid": email, // the variable you will store the id in
            "session_name": session_name,
            "timestamp": timeStamp
        };
        var headers = {};
        integrationObj.invokeOperation(operationName, headers, data, successCallBack2, failureCallBack2);

        function successCallBack2(res) {
            alert("Attendance Marked");
        }

        function failureCallBack2(err) {
            //alert("error"+JSON.stringify(err));
            //alert("Successfully Enrolled");
        }
    } else {
        alert("Device is offline");
    }
}

function refreshRanks() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
        var operationName = "refreshRanks";
        var headers = {};
        integrationObj.invokeOperation(operationName, headers, {}, successCallBackRefreshRanks, failureCallBackRefreshRanks);

        function successCallBackRefreshRanks(res) {
            //alert("Ranks refreshed");
        }

        function failureCallBackRefreshRanks(err) {
            //alert("error"+JSON.stringify(err));
            //alert("Successfully Enrolled");
        }
    } else {
        alert("Device is offline");
    }
}

function likes() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
        var operationName = "getLikes";
        var headers = {};
        integrationObj.invokeOperation(operationName, headers, {}, successCallBackRefreshRanks, failureCallBackRefreshRanks);

        function successCallBackRefreshRanks(res) {
            //alert("Ranks refreshed");
        }

        function failureCallBackRefreshRanks(err) {
            //alert("error"+JSON.stringify(err));
            //alert("Successfully Enrolled");
        }
    } else {
        alert("Device is offline");
    }
}

function logout() {
    kony.application.showLoadingScreen();
    kony.store.clear();
    var client = kony.sdk.getCurrentInstance();
    var oAuthObj = client.getIdentityService("MSLogin");
    oAuthObj.logout(function(response) {
        kony.print("Logout success" + JSON.stringify(response));
        frmLogin.show();
        kony.application.dismissLoadingScreen();
    }, function(error) {
        kony.application.dismissLoadingScreen();
        kony.print("Logout failure" + JSON.stringify(error));
    });
}