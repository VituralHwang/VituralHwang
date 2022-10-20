$(function() {
    var width_window = $(window).width();                        
    console.log(width_window);

    $(window).on('load', function() {
        var gtg = ($('.main-s-pic').height()*2)+30;
        $('.box-pic').height(gtg)
        var gtg2 = ($('.main-s-pic-v2').height()*2)+30;
        $('.box-pic-v2').height(gtg2)
        var gtg3 = ($('.main-s-pic-v3').height()*2)+15;
        $('.box-pic-v3').height(gtg3)
        var hvd = $('.main-s-pic').height();
        $('.s-vid').height(hvd);
        var hvd2 = $('.main-s-pic-v2').height();
        $('.s-vid-v2').height(hvd2);
        var hvd3 = $('.main-s-pic-v3').height();
        $('.s-vid-v3').height(hvd3);

        var divtt_v2 = $('.l-pic-v2').width();
        $('.div-tt-v2').width(divtt_v2);

        if (width_window <= 767) {
            $('.fx-1').addClass('fx-on');
            $('.fx-2').addClass('fx-on');
            $('.fx-3').addClass('fx-on');
            $('.fx-4').addClass('fx-on');
            $('.fx-5').addClass('fx-on');
            $('.fx-6').addClass('fx-on');
            $('.fx-7').addClass('fx-on');
            $('.fx-8').addClass('fx-on');
            $('.fx-9').addClass('fx-on');
            $('.fx-10').addClass('fx-on');
            $('.fx-11').addClass('fx-on');
            $('.fx-12').addClass('fx-on');
        }
    });

    $('.fx-1').addClass('fx-on');
    $('.fx-2').addClass('fx-on');
    $('.fx-3').addClass('fx-on');
    $('.fx-4').addClass('fx-on');
    
    $(window).scroll(function(event){
        vtht = $('html, body').scrollTop();
        console.log(vtht);
        if (vtht >1499) {
            $('.fx-5').addClass('fx-on');
        }
        if (vtht >1999) {
            $('.fx-6').addClass('fx-on');
            $('.fx-7').addClass('fx-on');
        }
        if (vtht >2499) {
            $('.fx-8').addClass('fx-on');
            $('.fx-9').addClass('fx-on');
        }

        if (width_window < 1800) {
            $('.fx-1').addClass('fx-on');
            $('.fx-2').addClass('fx-on');
            $('.fx-3').addClass('fx-on');
            $('.fx-4').addClass('fx-on');
            $('.fx-5').addClass('fx-on');
            $('.fx-6').addClass('fx-on');
            $('.fx-7').addClass('fx-on');
            $('.fx-8').addClass('fx-on');
            $('.fx-9').addClass('fx-on');
            $('.fx-10').addClass('fx-on');
            $('.fx-11').addClass('fx-on');
            $('.fx-12').addClass('fx-on');
        }
    })
})