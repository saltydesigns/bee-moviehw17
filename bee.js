/* preloader */
function fade () {
    $('.preloader').fadeOut("fast", "linear");
    }
    setTimeout(fade, 3000);

    /* mobile nav menu toggle */
    $(".toggle").on("click", function (){
        $(".item").toggleClass("active");
    });