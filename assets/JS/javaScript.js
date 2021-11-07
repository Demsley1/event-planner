var hour = document.querySelectorAll("#currentHour");
var containerEl = document.querySelector(".container");

$(document).ready(function() {
    var auditTimeBlock = function() {
        // get current hour from 
        var hourNow = moment().hour();
        console.log(hourNow)

        $(".time-block").each(function() {
            var time = parseInt($(this).attr("id"));
            console.log(time);
            if (hourNow > time) {
                $(this).addClass("past");
            }
            else if (hourNow == time) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
            }
        });

    };

    $(".saveBtn").on("click", function () {
        var textVal = $(this).siblings(".description").val();
        var timeVal = $(this).parent().attr("id");
        localStorage.setItem(timeVal, textVal);

    });

    auditTimeBlock();
    var savedTasks = $("#8", ".description" ).append().val(localStorage.getItem());
    return savedTasks;
});

var getTime = function() {
    var showDate = "<div>" + moment().format('MMMM Do YYYY'); + "</div>";
    $( "#currentDay" ).append(showDate);
}


getTime();