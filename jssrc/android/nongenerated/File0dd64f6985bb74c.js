function setBanner(EventCategory) {
    if (EventCategory == "Hackathon") return "banner4.png";
    if (EventCategory == "Workshop") return "banner3.png";
    if (EventCategory == "Training") return "banner5.png";
    if (EventCategory == "Feature") return "banner1.png";
    if (EventCategory == "Technical") return "banner2.png";
}

function splitDate(Date) {
    var DateSplit = [];
    var res = Date.split("-");
    DateSplit[0] = res[2];
    DateSplit[1] = GetMonthYear(res);
    return DateSplit;
}

function GetMonthYear(res) {
    var year = res[0].substring(2, 4);
    var month;
    switch (parseInt(res[1])) {
        case 1:
            month = "Jan";
            break;
        case 2:
            month = "Feb";
            break;
        case 3:
            month = "Mar";
            break;
        case 4:
            month = "Apl";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "Jun";
            break;
        case 7:
            month = "Jul";
            break;
        case 8:
            month = "Aug";
            break;
        case 9:
            month = "Sep";
            break;
        case 10:
            month = "Oct";
            break;
        case 11:
            month = "Nov";
            break;
        case 12:
            month = "Dec";
            break;
    }
    var monthYear = month + " " + year;
    return monthYear;
}

function setRating(Rating) {
    var data = [],
        n = 1,
        data1 = [];
    var tempdata;
    var starN;
    while (n <= Rating) {
        starN = "Star" + n;
        tempdata = {
            starN: "rating_full.png"
        };
        data1[n] = "rating_full.png";
        n++;
        data.push(tempdata);
    }
    if (Rating > n - 1) {
        starN = "Star" + n;
        tempdata = {
            starN: "rating_half.png"
        };
        data1[n] = "rating_half.png";
        n++;
        data.push(tempdata);
    }
    while (n <= 5) {
        starN = "Star" + n;
        tempdata = {
            starN: "rating_full.png"
        };
        data1[n] = "rating_empty.png";
        n++;
        data.push(tempdata);
    }
    return data1;
}

function onclickNull() {}

function SetLike() { 
    var segNo = frmHome.tabHome.tabEvent.segEvents.selectedRowIndex; 
    if (flag[segNo[1]] === 0)  {   
        var likeCount = EventsData[segNo[1]].LikesCountlbl;   
        var len = likeCount.length;   
        var likes = parseInt(likeCount.substring(1, len - 1));   
        EventsData[segNo[1]].LikesCountlbl = likes + 1;   
        flag[segNo[1]] = 1; 
    } 
    frmHome.tabHome.tabEvent.segEvents.setDataAt(EventsData[segNo[1]], [segNo[1]], [segNo[0]]);    
} 
var ratingConst = 0;

function Rateit(id) {
    var idsplit = id.split("r");
    var i = 1;
    while (i <= parseInt(idsplit[1])) {
        frmMyEventDetailed["Star" + i].src = "rating_full.png";
        ratingConst = i;
        i++;
    }
    while (i < 6) {
        frmMyEventDetailed["Star" + i].src = "rating_empty.png";
        i++;
    }
}

function onRateClick() {
    frmMyEventDetailed.RateStars.isVisible = true;
}

function rateSubmit() {
    frmMyEventDetailed.RateStars.isVisible = false;
    var Index = frmHome.tabHome.tabMyEvent.segMyEvents.selectedRowIndex;
    var StarID = id;
    var Rating = ratingConst;
    ratingPost(event[Index[1]], Rating);
}

function ratingPost(CurrentEventID, Rating) {}

function onEventsTabClick() {
    frmHome.tabHome.tabEvent.s
}