var timeBlock = document.querySelector("#hour-time");
var hour = document.querySelector("#currentHour");
var containerEl = document.querySelector(".container");


$(document).ready(function() {
    function timeDiv() {
        var i; 
        for (i = 10; i < 23; i++) {
        var time = moment().format(i + "a");
        console.log(time);
        $(containerEl).append (
            `<div id="hour-time" class="row time-block">
                <div id="currentHour" class="col-md-1 hour">` + time + `</div>
                <textarea class="col-md-10 description"></textarea>
                <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
            </div>`);
        }
    };
    

    timeDiv();
});

var getTime = function() {
    var showDate = "<div>" + moment().format('MMMM Do YYYY'); + "</div>";
    $( "#currentDay" ).append(showDate);
}

getTime();
