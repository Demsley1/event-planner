var hour = document.querySelectorAll("#currentHour");
var containerEl = document.querySelector(".container");

// only once the html document has fully loaded start running these functions.
$(document).ready(function() {
    // function to color code time block based on past, present, and future.
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

    // on save button click store the key and value of the text based on the timeblock id.
    $(".saveBtn").on("click", function () {
        var textVal = $(this).siblings(".description").val();
        var timeVal = $(this).parent().attr("id");
        localStorage.setItem(timeVal, textVal);

    });

    // function to retrieve and show stored data from local storage to a timeblock
    function getData() {
        var savedTasks = localStorage.getItem((8));
        $("#8 .description").append(savedTasks)
        console.log(savedTasks);
    }
    
    auditTimeBlock();    
    getData();
});

// shows date at top of page in DOM
var getTime = function() {
    var showDate = "<div>" + moment().format('MMMM Do YYYY'); + "</div>";
    $( "#currentDay" ).append(showDate);
}


getTime();