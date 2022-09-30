// WEB303 Assignment 3
// Chantal Monette W0800871
// started20220929 

function getTeamJSON() {
    $.getJSON("../team.json").done(function(data) {
        $.each(data.team, function(index, value) {
            let teamName = $("<h2></h2>").text(value.name);
            let teamPosition = $("<h5></h5>").text(value.position);
            let teamBio = $("<p></p>").text(value.bio);

            $("div#team").append(teamName);
            $("div#team").append(teamPosition);
            $("div#team").append(teamBio);
        });
    });
}

function getTeamJSON2() { 
    $.getJSON("../team.json").done(function(data) {
        $.each(data.team, function(index, value) {
            $("#team").append("<h2>${value.name}</h2><br /><h5>${value.position}</h5><br /><p>${value.bio}</p><br />"); 
        });
    }); 
}


function getTeamAJAX() {
    $.ajax({
        type: 'GET',
        url: '../team.json',
        datatype: 'JSON',
        beforeSend: function() {
            $("#team").innerHTML("Loading...");
        },
        error: function(xhr, error) {
            $("#team").innerHTML("There was an error in retrieving the data.");
        },
        success: function(data) {
            $.each(data.team, function(index, value) {
                let teamName = $("<h2></h2>").text(value.name);
                let teamPosition = $("<h5></h5>").text(value.position);
                let teamBio = $("<p></p>").text(value.bio);
        
                $("#team").innerHTML(teamName, teamPosition, teamBio);
            });
        },
    });
}

$(document).ready(function() {
    let callDelay = 3000;
    setTimeout(getTeamAJAX(), callDelay);
});

