$(function () {
    // //Mobile prev & next btn initial position
    // let initialNextBtn = $(window).width() - 24;
    // $(".carousel-btn-next").css("left", `${initialNextBtn}px`);
    // let initialPrevBtn = $(".first-col").width()+19;
    // $(".carousel-btn-prev").css("left",`${initialPrevBtn}px`);
    
    // //Mobile prev & next btn RWD position
    // $(window).resize(() => {
        // let nextBtnLeft = $(window).width() - 24;
        // let prevBtnLeft = $(".first-col").width()+19;
        // $(".carousel-btn-next").css("left", `${nextBtnLeft}px`);
        // $(".carousel-btn-prev").css("left",`${prevBtnLeft}px`);
    //   });
        
    // //click events--cross
    // $("td").click(function () {
        // //add class "selected" to current clicked <td>
        // if ($("td").hasClass("selected")){
            // $("td").removeClass("selected")
        // }
        // $(this).addClass("selected");

        // //highligh horizational sibilngs
        // let tdCol = $(this).attr('class').split(" ").shift();
    //    // console.log(tdCol);
        // if ($(`.${tdCol}`).siblings("td").hasClass("selected-siblings")){
            // $(`.${tdCol}`).siblings("td").removeClass("selected-siblings")
        // }
        // $(this).siblings("td").addClass("selected-siblings");
        // //highligh vertical sibilngs
        // $(`.${tdCol}`).addClass("selected-siblings");

        // //click events--prev/next

    // });
    // let tdWidth = $(".col-1").width();
    // let leftPos = $('.table-container').scrollLeft();
    // //click events-- prev/next
    // $(".carousel-btn-next").click(function () {
        // let nextPos=$(".carousel-btn-next").position().left;
        // let leftPos = $('.table-container').scrollLeft();
        // let col7 = $('.col-7').position().left;
        // console.log(nextPos,col7);
        // $(".table-container").animate({scrollLeft: leftPos + tdWidth}, 100);
    // })

    // $(".carousel-btn-prev").click(function() {
        // //let leftPos = $('.table-container').scrollLeft();
        // //console.log(leftPos);
        // $(".table-container").animate({scrollLeft: leftPos - tdWidth}, 100);
    // })

    // //prev & next btns events
    // // initially, hide prev btn
    // $(".carousel-btn-prev").hide();

    // $(".carousel-btn-next").click(() => {
        // // show prev btn when prev col is available
    // $(".carousel-btn-prev").show();
        // //hide next btn when meet the last col
        // let $width = $('.table-container').outerWidth()
		// let $scrollWidth = $('.table-container')[0].scrollWidth;	
      	// let $scrollLeft = $('.table-container').scrollLeft();
        
    //   if(parseInt($scrollWidth - $width) === parseInt($scrollLeft)){
        // $(".carousel-btn-next").hide();
    //   }

    // });
    // $(".carousel-btn-prev").click(() => {
        // // show next btn when next col is available
        // $(".carousel-btn-next").show();
            // //hide prev btn when meet the last col
            // let $scrollLeft = Math.round($('.table-container').scrollLeft());

        //   if(parseInt($scrollLeft)===0){
            //   $(".carousel-btn-prev").hide();
        //   }
    // });

    $("table").FrzTable({count:{show:7}});
    
    //plugin

    // $(window).resize(function (e) {
        // //only works on mobile devices
        // if ($(window).width() <= 900) {

            // $("table").FrzTable({count:{slide:1,show:4}});
        // }
        // if ($(window).width() > 900) {
            // $("table").FrzTable({count:{show:7}});
        // }
    // })
     let isMobile = window.matchMedia("only screen and (max-width: 900px)").matches;
    if (isMobile) {
        $("table").FrzTable({ count: { slide: 2, show: 4 },speed:.9 });
    }
});
  
