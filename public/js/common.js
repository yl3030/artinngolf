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

$(".header_nav-m_list_dropdown").click(function(){
    $(this).parents("li").find(".header_nav-m_list-second").slideToggle(300);
    $(this).toggleClass("drop");
})

// $(".image-view").click(function(){
//     $(".product_detail_pic").addClass("larger");
// })
// $(".product-big_cross").click(function(){
//     $(".product_detail_pic").removeClass("larger");
// })