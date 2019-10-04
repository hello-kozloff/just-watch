//# on click show mobile filters
$(document).ready(function () {
    $(".content-filters__toggle").on("click", function (event) {
        event.preventDefault();

        $("body").toggleClass("fixed");
        $(".toolbar-filters").toggleClass("toolbar-filters_is-active");
    });
});

//# on click hide mobile filters
$(document).ready(function () {
    $(".toolbar-filters__close").on("click", function (event) {
        event.preventDefault();

        $("body").removeClass("fixed");
        $(".toolbar-filters").removeClass("toolbar-filters_is-active");
    });
});
