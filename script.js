

document.addEventListener("DOMContentLoaded", function () {
    "use strict"; // cleaner code

    // define variables
    // grabs verticalLine class and all li elem into a collection
    var items = document.querySelectorAll(".verticalLine li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // mark li elememts in-view/out-view
    function markElements() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList = "in-view";
            } else {
                items[i].classList = "out-view";
            }
        }
    }

    // listen for events in current open window
    window.addEventListener("load", markElements);
    window.addEventListener("resize", markElements);
    window.addEventListener("scroll", markElements);
})
