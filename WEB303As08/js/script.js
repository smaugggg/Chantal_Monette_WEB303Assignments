// WEB303 Assignment 8
// Chantal Monette W0800871
// 2022 11 17

function getCharacters() {
    $.getJSON("wentworth.json").done(function(data) {
        $.each(data.inmates, function(index, value) {
            if(value.alive = true) {
                let lifestatus = $('<td></td>').text("Alive");
            } else {
                let lifestatus = $('<td></td>').text("Deceased");
            }

            $('.inmate').append(
                `<tr>
                <td class="name">${value.firstname + " " + value.lastname}</td>
                <td>${value.nickname}</td>
                <td>${value.occupation}</td>
                <td>${lifestatus}</td>
                <td>${value.sentence}</td>
                </tr>`
            );
        });
            
    });
}


$(document).ready(function() {
    getCharacters();
});  


/* 
        $("#am").click(function(){
            
            $("tbody").find("tr").show();
            $("tbody tr").each(function() {
                let value = $(this).children().first().text();
                console.log(value);
                console.log(value[0]);
                if(!value[0].match(/[a-mA-M]/)) {
                    $(this).hide();
                }
            });
        });
        $("#nz").click(function(){
            
            $("tbody").find("tr").show();
            $("tbody tr").each(function() {
                let value = $(this).children().first().text();
                console.log(value);
                console.log(value[0]);
                if(!value[0].match(/[n-zN-Z]/)) {
                    $(this).hide();
                }
            });
        });
    }); */

