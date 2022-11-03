$(document).ready(function() {

$(".glitch").hover(function() {
        $(this).text("Надежда Попова");
    }, 
    function() {
        $(this).text("Elizabeth Jennings");
});

$(".accordionElizabeth").each(function() {
    $(".accordionElizabeth h1").on('click', function() {
        let id = this.id;
        if(!$(this).is("active")) {
            $(".accordionElizabeth h1").removeClass("active");
            $(".accordionElizabeth div").removeClass("active");
            $(".accordionElizabeth div").slideUp();

        }

        $("#" + id).addClass("active");
        $(".accordionElizabeth div#" + id).addClass("active");  
        $(".accordionElizabeth div#" + id).slideDown();
    });
});

$(".accordionNadezhda").each(function() {
    $(".accordionNadezhda h1").on('click', function() {
        let id = this.id;
        if(!$(this).is("active")) {
            $(".accordionNadezhda h1").removeClass("active");
            $(".accordionNadezhda div").removeClass("active");
            $(".accordionNadezhda div").slideUp();
        }

        $("#" + id).addClass("active");
        $(".accordionNadezhda div#" + id).addClass("active");  
        $(".accordionNadezhda div#" + id).slideDown();
    });
});


$(".classified").on('click', function() {
    $(".classified").css("z-index", "0");
    $(".classified").css("opacity", "0");
})
    
$(".tabbedmenu").each(function() {
    $(".tab-button").on('click', function() {      
        if(!$(this).is("active")) {
            $(".tabbed li").removeClass("active");
            $(".tab-button").removeClass("active");
            
            let alias = $(this).index();
            $(this).addClass("active");
            let aliasline = $(".tabbed ul").find("li:eq(" + alias + ")");
            aliasline.addClass("active");
        }
    });
});



});
