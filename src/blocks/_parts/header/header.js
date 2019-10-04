$(document).ready(() => {

    //# open mobile search
    $(".header__action_search").on("click", function (event) {
        event.preventDefault();

        $("body").addClass("fixed");
        $(".overlay").addClass("overlay_is-visible").addClass("overlay_is-contrast");
        $(".header__site-search").addClass("header__site-search_is-visible");
    });

    //# close mobile search
    $(".header__action_close").on("click", function (event) {
        event.preventDefault();
        remove();
    });

    $(".overlay").on("click", function () {
        remove();
    });

    function remove() {
        $("body").removeClass("fixed");
        $(".overlay").removeClass("overlay_is-visible").removeClass("overlay_is-contrast");
        $(".header__site-search").removeClass("header__site-search_is-visible");
    }
});
