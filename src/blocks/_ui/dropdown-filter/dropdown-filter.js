$(document).ready(() => {
    $(".dropdown-filter").on("click", function () {
        if ($(this).hasClass("dropdown-filter_is-toggle")) {
            hideDropdown();
            return false;
        }

        //# hide all open dropdown
        $(".dropdown-content").removeClass("dropdown-content_is-toggle");

        //# remove class in all filters
        $(".dropdown-filter").removeClass("dropdown-filter_is-toggle");

        //# add body overlay
        $(".overlay").addClass("overlay_is-visible");

        //# toggle current dropdown
        $(this).addClass("dropdown-filter_is-toggle");
        $(this).parent().find("div.dropdown-content").addClass("dropdown-content_is-toggle");
    });

    $(".overlay").on("click", function () {
        hideDropdown();
    });

    function hideDropdown() {
        //# hide all open dropdown
        $(".dropdown-content").removeClass("dropdown-content_is-toggle");

        //# remove class in all filters
        $(".dropdown-filter").removeClass("dropdown-filter_is-toggle");

        //# hide overlay
        $(".overlay").removeClass("overlay_is-visible");
    }
});
