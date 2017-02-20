var glob_ks_id;
var email;
var username;
var sdkClient = null;
KMSPROP = {
    kmsServerUrl: "https://mobilefabric-demo1.messaging.konycloud.com",
    senderID: "510396346140", // applicable for android only- clientID generated in google console
    appId: "fb8acc5a-bc4e-42b2-a331-bdddb672bd60"
};

function initializeApp() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        try {
            var key = "f4a07ec6b71996f56a2cdcb0cd983b43";
            var secret = "7a1e163a4f0bf3b9b72954190ab37b85";
            var surl = "https://100003520.auth.konycloud.com/appconfig";
            sdkClient = new kony.sdk();
            sdkClient.init(key, secret, surl, function(response) {
                //  login();
                // showeventsf();
            }, function(err) {
                alert("client init error " + JSON.stringify(err));
            });
        } catch (e) {
            alert(e);
        }
    } else {
        alert("Device is offline");
    }
}