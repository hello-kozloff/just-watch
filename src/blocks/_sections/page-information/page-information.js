$(document).ready(() => {
    const component = $(".page-information");

    component.find(".page-information__toggle").on("click", function (event) {
        event.preventDefault();

        // if content not small
        if (!component.hasClass("page-information_small-content")) {
            // Toggle class in component
            component.toggleClass("page-information_is-toggle");

            // Toggle class in button
            component.find(".page-information__toggle").toggleClass("page-information__toggle_is-active");
        }
    });
});
