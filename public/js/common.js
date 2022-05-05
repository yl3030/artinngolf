$(".header_menu").click(function(){
    $(".header_nav-m").addClass("active");
})
$(".header_menu_cross").click(function(){
    $(".header_nav-m").removeClass("active");
})

$(".gototop").click(function(){
    $("html,body").animate({scrollTop:0},300)
})

$(".product-menu_cross").click(function(){
    $(".product-nav").removeClass("active");
})
$(".product-class").click(function(){
    $(".product-nav").addClass("active");
})

$(".image-view").click(function(){
    $(".product_detail_pic").addClass("larger");
})
$(".product-big_cross").click(function(){
    $(".product_detail_pic").removeClass("larger");
})