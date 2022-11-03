$(document).ready(function() {
	

$(".glitch").hover(function() {
        $(this).text("Надежда Попова");
        $(this).css("animation", "glitch 3s infinite linear")
    }, 
    function() {
        $(this).text("Elizabeth Jennings");
    });


$(".classified").on('click', function() {
    $(".classified").css("z-index", "0");
    $(".classified").css("opacity", "0");
})
    
$(".tabbedmenu").each(function() {
    $(".tab-button").on('click', function() {
        console.log("you clicked a button!")
        
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
