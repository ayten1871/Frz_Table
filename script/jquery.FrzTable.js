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
            whenClick: function($element) {
             console.log($element)
            }
        }, options );
 
        // Greenify the collection based on the settings variable.
        return this.css({
            color: settings.count,
            backgroundColor: settings.backgroundColor
        });
 
    };
 
}( jQuery ));
