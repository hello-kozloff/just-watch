const $actionClass = "header__action";

//# open hamburger
$(document).ready(function () {
    $("." + $actionClass + "_hamburger").on("click", function (event) {
        event.preventDefault();

        $(".header__site-search").removeClass("header__site-search_is-visible");

        const $div = $(".navigation");
        const $activeClass = "navigation_is-active";

        //# if navigation open
        if ($div.hasClass($activeClass)) {
            //# remove overlay
            removeOverlay(true);

            //# remove active state
            $div.removeClass($activeClass);
            return false;
        }

        //# show overlay
        showOverlay(false, true);

        //# open navigation
        $div.addClass($activeClass);
    });
});

//# open search
$(document).ready(function () {
    $("." + $actionClass + "_search").on("click", function (event) {
        event.preventDefault();

        $(".navigation").removeClass("navigation_is-active");

        const $div = $(".header__site-search");
        const $activeClass = "header__site-search_is-visible";

        //# if search open
        if ($div.hasClass($activeClass)) {
            //# remove overlay
            removeOverlay(true);

            //# remove active state
            $div.removeClass($activeClass);
            return false;
        }

        //# show overlay
        showOverlay(true, true);

        //# open navigation
        $div.addClass($activeClass);
    });
});

//# on click overlay callback
$(document).ready(function () {
    $(".overlay").on("click", function () {
        //# remove overlay and unfreeze body
        removeOverlay(true);

        //# remove components
        $(".navigation").removeClass("navigation_is-active");
        $(".header__site-search").removeClass("header__site-search_is-visible");
    });
});

/**
 * This function show overlay container
 * @param isContrast
 * @param isBodyFixed
 */
function showOverlay(isContrast = false, isBodyFixed = false) {
    const $div = $(".overlay");

    $div
        .removeClass("overlay_is-contrast")
        .addClass("overlay_is-visible");

    if (isContrast === true) {
        $div.addClass("overlay_is-contrast");
    }

    if (isBodyFixed === true) {
        $("body").addClass("fixed");
    }
}

/**
 * This function remove overlay container
 * @param unfreezeBody
 */
function removeOverlay(unfreezeBody = false) {
    const $div = $(".overlay");

    $div
        .removeClass("overlay_is-contrast")
        .removeClass("overlay_is-visible");

    //# unfreeze
    if (unfreezeBody === true) {
        $("body").removeClass("fixed");
    }
}
