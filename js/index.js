$(function() {
    $("a[href*=#]:not([href=#])").on("click", function() {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var target = $(this.hash);
            if (target) {
                $("html, body").animate({
                    //Scroll to target's top minus the header's height
                    scrollTop: target.offset().top - $("header").outerHeight()
                }, 1000);
            }
            return false;
        }
    });
});
