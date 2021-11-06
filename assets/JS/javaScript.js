var timeBlock = document.querySelector("#hour-time");
var hour = document.querySelector("#currentHour");
var containerEl = document.querySelector(".container");


$(document).ready(function() {
    function timeDiv() {
        var i; 
        for (i = 8; i < 23; i++) {
        var newTime = $(timeBlock).attr("id", "hour-time-" + i);
        console.log(newTime);
        $(containerEl).append(
            `<div id="hour-time" class="row time-block">
                <div id="currentHour" class="col-md-1 hour"><span>9 a.m.</span></div>
                <textarea class="col-md-10 description"></textarea>
                <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
            </div>`);
        }

    };

    timeDiv();
});

var getTime = function() {
    var showDate = "<div>" + moment().format('MMMM Do YYYY, h:mm:ss a'); + "</div>";
    $( "#currentDay" ).append(showDate);
}

getTime();
