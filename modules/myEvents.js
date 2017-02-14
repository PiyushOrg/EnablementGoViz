//Type your code here
var sessionOne=[];
function myEvents()
{
  if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
    var email=kony.store.getItem("email");
    var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
    var operationName = "myEvents";
    var data = {
      "user_email_id":email
    };
    var headers = {};           
    integrationObj.invokeOperation(operationName, headers, data, successCallBack4, failureCallBack4);
    kony.application.showLoadingScreen("sknLoading","Loading....",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
   
    function successCallBack4(res){ 
//       alert("success"+JSON.stringify(res));
//       alert("Success length is"+res.result.length);

      var obj=[];
      sessionOne=[];
       var email=kony.store.getItem("email");
	
    //  frmMyEventDetailed.ScheduleSeg.removeAll();
      for(var i=0 ; i<res.result.length; i++)
      {
        //alert(res.result[i].name);
        var user_scores = JSON.parse(res.result[i].user_scores);
        var users_rank = JSON.parse(res.result[i].users_rank);
       // alert(" Hello");
        //alert("AA" + x);
        //alert("DD" + email);
       //alert("TT" + user_scores[email]);
        var x = user_scores[email];
        var y = users_rank[email];
       // alert(" RANK " + x);
       // alert("TT1" + users_rank[email]);
//         var emailtemp = '"'+email+'"'; 
//         alert("RR" + emailtemp);
//         alert("II " + x[emailtemp]);

        obj.push({
          "event_id":res.result[i].event_id,
          "name":res.result[i].name,
          "description":res.result[i].description,
          "status":res.result[i].status,
          "max_score":res.result[i].max_score,
          "ratingList":res.result[i].ratingList,
          "averageRating":res.result[i].averageRating,
          "event_type":res.result[i].event_type,
          "location":res.result[i].location,
          "user_scores":parseInt(x).toString(),
          "users_rank":parseInt(y).toString()

        });
        //event.push(res.result[i].event_id);
        sessionOne.push({"sessions":res.result[i].sessions});
      }
     
       var user_score_email = "user_scores."+email;
      
     
      // alert(" ALL DAA ");
     // alert(obj);
      frmHome.tabHome.tabMyEvent.segMyEvents.widgetDataMap = {"lblEventName":"name","LocationCont":"location","lblRank":"users_rank","lblPoints":"user_scores"};
      frmHome.tabHome.tabMyEvent.segMyEvents.setData(obj);
      kony.application.dismissLoadingScreen();
      refreshRanks();
      userInfo();
    }
    function failureCallBack4(err){
       //alert("error"+JSON.stringify(err));
    }
  }else{
    alert("Device is offline");
  }
}

function eventDetailMyEvent()
{
  alert("Success");
  frmMyEventDetailed.lblMyEventName.text=frmHome.segMyEvents.selectedItems[0].name;
  frmMyEventDetailed.lblLocation.text=frmHome.segMyEvents.selectedItems[0].location;
  frmMyEventDetailed.lblPoints.text=frmHome.segMyEvents.selectedItems[0].max_score;
  frmMyEventDetailed.txtDescription1.text=frmHome.segMyEvents.selectedItems[0].description;
  var row=frmHome.segMyEvents.selectedRowIndex[1]; 
  var i=" "+parseInt(row);
  var x=i.trim();
  frmMyEventDetailed.ScheduleSeg.widgetDataMap = {"lblStageName":"session_name"};
  frmMyEventDetailed.ScheduleSeg.setData(sessionOne[x].sessions);
}

function userInfo()
{
  if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
    var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService("IntServ");
    var operationName = "userInfo";
    var data = {
      "userid":kony.store.getItem("email"),
    };
    var headers = {};           
    integrationObj.invokeOperation(operationName, headers, data, successCallBackUserInfo, failureCallBackUserInfo);

    function successCallBackUserInfo(res){ 
     frmHome.tabHome.tabMyEvent.lblRank = res.result[i].rank;
     frmHome.tabHome.tabMyEvent.lblTotalPoints = res.result[i].cumulative_score;
    }
    function failureCallBackUserInfo(err){
      //alert("error"+JSON.stringify(err));
    }
  }else{
    alert("Device is offline");
  }
}
