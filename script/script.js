$(function () {
    //default
    $('table').FrzTable({ count: { show: 7 } });

    //detect mobile devices
    let isMobile = window.matchMedia('only screen and (max-width: 900px)').matches;
    if (isMobile) {
        $('table').FrzTable({ count: { slide: 2, show: 3 }, speed: 0.9 });
    }
    //rwd desktop to mobiles
    $(window).resize(() => {
        let width = $(document).width();
        if (width < 900) {
            $('table').FrzTable({ count: { slide: 2, show: 3 }, speed: 0.9 });
        }
    });
});
