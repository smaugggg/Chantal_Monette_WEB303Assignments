// WEB303 Assignment 9
// Chantal Monette W0800871
// 2022 11 23

$(document).ready(function() {
    getCharacters();

    $("th").each(function(column){
        $(this).click(function(){ // when you click the header item
            if($(".default")) {
                $('table').removeClass("default");
                $('table').addClass("active");
                var type = $(this).data("type");
                var records = $("table").find("tbody > tr");
                records.sort(function(a, b) {
                    var value1 = $(a).children("td").eq(column).text();
                    var value2 = $(b).children("td").eq(column).text();
                    if(type == "num") {
                        value1 *= 1;
                        value2 *= 1;    
                    }
                    return (value1 < value2) ? -1 :(value1>value2?1:0);
                });
                $.each(records, function(index, row) {
                    $("tbody").append(row);
                });
            }  
            $(this).click(function(){
                if ($(".active")){
                    $('table').removeClass("active");
                    $('table').addClass("active2");
                    var type = $(this).data("type");
                    var records = $("table").find("tbody > tr");
                    records.sort(function(a, b) {
                        var value1 = $(a).children("td").eq(column).text();
                        var value2 = $(b).children("td").eq(column).text();
                        if(type == "num") {
                            value1 *= 1;
                            value2 *= 1;    
                        }
                        return (value1 > value2) ? -1 :(value1<value2?1:0);
                    });
                    $.each(records, function(index, row) {
                        $("tbody").append(row);
                    });
                }
                $(this).click(function(){
                    if($(".active2")){
                        $('table').removeClass("active2");
                        $('table').addClass("default");
                    }
                });
            }); 
        });
    }); 
    
    $('.sortable').each(function() {
        var $table = $(this);
        var $tbody = $table.find('tbody');
        var $controls = $table.find('th');
        $controls.on('click', function() {
            var $header = $(this);
            if($header.is('.ascending') || $header.is('.descending')) {
                $header.toggleClass('ascending descending');
            } else {
                $header.addClass('ascending');
                $header.siblings().removeClass('ascending descending');
            }
        });
    });  

});  

function getCharacters() {
    $.getJSON("wentworth.json").done(function(data) {
        $.each(data.inmates, function(index, value) {
            $('.inmate').append(
                `<tr>
                <td class="name">${value.firstname + " " + value.lastname}</td>
                <td>${value.nickname}</td>
                <td>${value.occupation}</td>
                <td>${value.alive}</td>
                <td>${value.sentence}</td>
                <td>${value.firstappeared}</td>
                </tr>`
            );
        });  
    });
}


