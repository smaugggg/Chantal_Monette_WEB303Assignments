$(document).ready(function() {
	
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
