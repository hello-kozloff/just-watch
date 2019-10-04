//# year filter
$(document).ready(() => {
    const currentYear = new Date().getFullYear();
    const settingsContainer = $("input[name='year_settings']");

    const $filter = $("div[data-target='filter_year'] input.dropdown-content__range").ionRangeSlider({
        to: currentYear,
        onChange: () => {
            //# remove checked in settings when change value
            settingsContainer.prop("checked", false);
        }
    });
    let $instances = [];

    $filter.each((index) => {
        $instances.push($($filter[index]).data("ionRangeSlider"));
    });

    //# settings in year range-slider
    settingsContainer.on("click", function () {
        const action = $(this).attr("data-action");

        const THIS_YEAR = "this_year";
        const LAST_YEAR = "last_year";

        switch (action) {
            case THIS_YEAR: {
                $instances.forEach((value => {
                    value.update({
                        from: currentYear,
                        to: currentYear
                    });
                }));
                break;
            }

            case LAST_YEAR: {
                $instances.forEach((value => {
                    value.update({
                        from: currentYear - 1,
                        to: currentYear - 1
                    });
                }));
                break;
            }

            default: {
                console.log("ERROR: Invalid filter parameter!");
            }
        }
    });

    //# reset button in year filter
    $("div[data-target='filter_year'] .dropdown-content__reset").on("click", function () {
        settingsContainer.prop("checked", false);

        $instances.forEach((value => {
            value.update({
                from: 1990,
                to: currentYear
            });
        }));
    });
});

//# genre filter
$(document).ready(() => {
    //# reset button in genre filter
    $("div[data-target='filter_genre'] .dropdown-content__reset").on("click", function () {
        $("div[data-target='filter_genre']")
            .find("input.checkbox-filter__field")
            .prop("checked", false);
    });
});

//# year filter
$(document).ready(() => {
    const settingsContainer = $("input[name='price_settings']");

    const $filter = $("div[data-target='filter_price'] input.dropdown-content__range").ionRangeSlider({
        onChange: () => {
            //# remove checked in settings when change value
            settingsContainer.prop("checked", false);
        }
    });
    let $instances = [];

    $filter.each((index) => {
        $instances.push($($filter[index]).data("ionRangeSlider"));
    });

    //# settings in year range-slider
    settingsContainer.on("click", function () {
        const action = $(this).attr("data-action");

        const UP_TO_1 = "up_to_1";
        const UP_TO_2 = "up_to_2";
        const UP_TO_3 = "up_to_3";
        const UP_TO_5 = "up_to_5";

        switch (action) {
            case UP_TO_1: {
                $instances.forEach((value => {
                    value.update({ from: 1 });
                }));
                break;
            }

            case UP_TO_2: {
                $instances.forEach((value => {
                    value.update({ from: 2 });
                }));
                break;
            }

            case UP_TO_3: {
                $instances.forEach((value => {
                    value.update({ from: 3 });
                }));
                break;
            }

            case UP_TO_5: {
                $instances.forEach((value => {
                    value.update({ from: 5 });
                }));
                break;
            }

            default: {
                console.log("ERROR: Invalid filter parameter!");
            }
        }
    });

    //# reset button
    $("div[data-target='filter_price'] .dropdown-content__reset").on("click", function () {
        const module = $(this)
            .parent(".dropdown-content__header")
            .parent(".dropdown-content__module");

        //# price
        if (module.hasClass("dropdown-content__module_price")) {
            settingsContainer.prop("checked", false);

            $instances.forEach((value => {
                value.update({
                    from: 0,
                    top: 50
                });
            }));
        }

        //# type
        else if (module.hasClass("dropdown-content__module_type")) {
            module.find("input.checkbox-filter__field").prop("checked", false);
        }
    });
});
