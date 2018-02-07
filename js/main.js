$(document).ready(function(){
    $(".tab_header .item").on("click", function(){
        
        var item = $(this).data("item");
        
        $(".tab_header .item").removeClass("active");
        $(this).addClass("active");
        
        $(".tab_container .item_container").hide();
        $("div[data-itemContainer='" + item + "']").show();
    });
});