$(document).ready(() => {

    //# open mobile search
    $(".header__action_search").on("click", function (event) {
        event.preventDefault();

        $(".overlay").addClass("overlay_is-visible");
        $(".header__site-search").addClass("header__site-search_is-visible");
    });

    //# close mobile search
    $(".header__action_close").on("click", function (event) {
        event.preventDefault();

        $(".overlay").removeClass("overlay_is-visible");
        $(".header__site-search").removeClass("header__site-search_is-visible");
    });
});
