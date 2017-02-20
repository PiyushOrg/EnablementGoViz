function open(a) {
    function SCALE_ACTION____ad93a964dc3b43098ab216c7c1d84534_Callback() {}
    frmHome[a].isVisible="true";
    frmHome[a].animate(
    kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "width": "80%",
            "height": "20%"
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
    }, {
        "animationEnd": SCALE_ACTION____ad93a964dc3b43098ab216c7c1d84534_Callback
    });
   frmHome.flxHome.setEnabled(false);

} 
function close(a) {
    function SCALE_ACTION____ad93a964dc3b43098ab216c7c1d84534_Callback() {}
   frmHome.flxHome.setEnabled(true);
    frmHome[a].animate(
    kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "width": "10%",
            "height": "10%"
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
    }, {
        "animationEnd": SCALE_ACTION____ad93a964dc3b43098ab216c7c1d84534_Callback
    });
  frmHome[a].isVisible="false";
} 


function filter(){
   var data = "";
   if(frmHome.flxHome.tabHome.segEvents.data!==null){
        data = frmHome.flxHome.tabHome.segEvents.data;
    // alert("data is "+data);
   }
   else{
      data = eventData;
      alert("eventdata is "+data);
     if (null == data){
       return;
     }
   }
   var str = frmHome.txtEnter.text;
   var data1 = searchinJSON(data,str);
    if(str===""||str===null||data1===null||data1==="")
     {
      frmHome.flxHome.tabHome.segEvents.setData(eventData); 
       return;
     }
  
   frmHome.flxHome.tabHome.segEvents.setData(data1);
  }

  function searchinJSON(data,str)
  {
    var tempData = [];
     // alert("inside data "+data);
    for(var i=0;i<data.length;i++){
      if(data[i].name.toLowerCase().search(str.toLowerCase())!=-1){
        tempData.push(data[i]);
      }
    }
    return tempData;
  }