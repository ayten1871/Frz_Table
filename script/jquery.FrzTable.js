(function ( $ ) {
    //Make it be available like any other jQuery object method
    $.fn.FrzTable = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            count: {
                // M版時每次點擊往前往後移動幾格儲
                slide: 1, 
                // M版時一個畫面show幾格儲存格
                show: 4
            },
            // 設定花多久時間移動完成
            speed: .3,
            // 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
            whenClick: function(para) {
                console.log(para);
            }
        }, options);

        /**
        * ?M版時每次點擊往前往後移動幾格儲存格
        
        let multiplication;
        switch (settings.count.slide) {
            case 1:
                multiplication = 1;
              break;
            case 2:
                multiplication = 2;
            break;
            case 3:
                multiplication = 3;
                break;
            case 4:
                multiplication = 4;
            break;
            default:
                multiplication = 1;
                break;
        }
        */
        /**
         * ?M版時一個畫面show幾格儲存格 
         */
         let percentage;
         switch (settings.count.show) {
             case 1:
                 percentage = "400%";
               break;
             case 2:
                 percentage = "266%";
             break;
             case 3:
                 percentage = "200%";
                 break;
             case 4:
                 percentage = "160%";
             break;
             case 5:
                 percentage = "133%";
                 break;
             case 6:
                 percentage = "114%";
                 break;
             case 7:
                 percentage = "100%";
                 break;
             default:
                 percentage = "200%";
                 break;
        }
        /**
         * ?設定花多久時間移動完成
         
         let speed;
         switch (settings.speed) {
             case .1:
                speed = 100;
               break;
             case .2:
                speed = 200;
             break;
             case .3:
                speed = 300;
                 break;
             case .4:
                speed = 400;
             break;
             case .5:
                speed = 500;
                 break;
             case .6:
                speed = 600;
                 break;
             case .7:
                speed = 700;
                 break;
            case .8:
                speed = 800;
                break;
            case .9:
                speed = 900;
                 break;
            case 1:
                speed = 1000;
                break;
             default:
                speed = 500;
                break;
        }
        */
        /**
         * ?每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
         */
        return this.each(function () {
    
            /**
             * *click events--cross
             */
             $("td").click(function () {
                //add class "selected" to current clicked <td>
                if ($("td").hasClass("selected")){
                    $("td").removeClass("selected")
                }
                $(this).addClass("selected");
                //highligh horizational sibilngs
                let tdCol = $(this).attr('class').split(" ").shift();
               // console.log(tdCol);
                if ($(`.${tdCol}`).siblings("td").hasClass("selected-siblings")){
                    $(`.${tdCol}`).siblings("td").removeClass("selected-siblings")
                }
                $(this).siblings("td").addClass("selected-siblings");
                //highligh vertical sibilngs
                $(`.${tdCol}`).addClass("selected-siblings");
                /**
                 * TODO plugin method
                 */
                 //pluginMethod();
                 //console.log($(this));
                 settings.whenClick($(this));
                 
             });
            
            /** 
             * *Mobile prev & next btn initial position
            */
            let initialNextBtn = $(window).width() - 24;
            $(".carousel-btn-next").css("left", `${initialNextBtn}px`);
            let initialPrevBtn = $(".first-col").width()+19;
            $(".carousel-btn-prev").css("left", `${initialPrevBtn}px`);

            /**
             * *Mobile prev & next btn RWD position
             */
            $(window).resize(() => {
                let nextBtnLeft = $(window).width() - 24;
                let prevBtnLeft = $(".first-col").width()+19;
                $(".carousel-btn-next").css("left", `${nextBtnLeft}px`);
                $(".carousel-btn-prev").css("left",`${prevBtnLeft}px`);
            });

            /**
             * *click events-- prev/next
             * ? M版時每次點擊往前往後移動幾格儲存格
             */
            
          //  let leftPos = $('.table-container').scrollLeft();
            //move right when next btn clicked
            $(".carousel-btn-next").off().click(function () {
               // let nextPos=$(".carousel-btn-next").position().left;
               let leftPos = $('.table-container').scrollLeft();
               // let col7 = $('.col-7').position().left;
                let tdWidth = $(".col-1").width();
                //let pace = tdWidth * multiplication;
                console.log(leftPos,tdWidth,settings.count.slide,settings.speed*1000);
                $(".table-container").animate({scrollLeft: leftPos + tdWidth*settings.count.slide},settings.speed*1000);
            })
            //move light when next btn clicked
            $(".carousel-btn-prev").off().click(function () {
                let tdWidth = $(".col-1").width();
                let leftPos = $('.table-container').scrollLeft();
                $(".table-container").animate({scrollLeft: leftPos - tdWidth*settings.count.slide}, settings.speed*1000);
            })
            /**
             * *prev & next btns events
             */
            // initially, hide prev btn
            $(".carousel-btn-prev").hide();
            $(".carousel-btn-next").click(() => {
                // show prev btn when prev col is available
            $(".carousel-btn-prev").show();
                //hide next btn when meet the last col
                let $width = $('.table-container').outerWidth()
                let $scrollWidth = $('.table-container')[0].scrollWidth;	
                let $scrollLeft = $('.table-container').scrollLeft();

              if(parseInt($scrollWidth - $width) === parseInt($scrollLeft)){
                $(".carousel-btn-next").hide();
              }
            });
            $(".carousel-btn-prev").click(() => {
                // show next btn when next col is available
                $(".carousel-btn-next").show();
                    //hide prev btn when meet the last col
                    let $scrollLeft = Math.round($('.table-container').scrollLeft());
                  if(parseInt($scrollLeft)===0){
                      $(".carousel-btn-prev").hide();
                  }
            });

            /**
             *?M版時一個畫面show幾格儲存格 
             */
    
             $(this).css({
                "width": percentage
             });
            /**
             * ?每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
             */
            $(this).off().click(function () {
                settings.whenClick($(this));
            })


        })
 
    };
 
}( jQuery ));
