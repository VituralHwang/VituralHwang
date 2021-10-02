$(function() {
    var width_window = $(window).width();                        
    console.log(width_window);

/*    var h2p = $('.2-pic').height();
    $('.l-pic').height(h2p);
    var h2p_v2 = $('.2-pic-v2').height();
    $('.l-pic-v2').height(h2p_v2);
    var h2p_v3 = $('.2-pic-v3').height();
    $('.l-pic-v3').height(h2p_v3);*/

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

    $(window).on('load', function() {
        $('.fx-1').addClass('fx-on');
        $('.fx-2').addClass('fx-on');
        $('.fx-3').addClass('fx-on');
        $('.fx-4').addClass('fx-on');

        if (width_window <= 767) {
            $('.fx-1').addClass('fx-on');
            $('.fx-2').addClass('fx-on');
            $('.fx-3').addClass('fx-on');
            $('.fx-4').addClass('fx-on');
            $('.fx-5').addClass('fx-on');
            $('.fx-6').addClass('fx-on');
            $('.fx-7').addClass('fx-on');
            $('.fx-8').addClass('fx-on');
        }
    });
    
    $(window).scroll(function(event){
        vtht = $('html, body').scrollTop();
        console.log(vtht);
        if (vtht >399) {
            $('.fx-4').addClass('fx-on');
        }
        if (vtht >899) {
            $('.fx-5').addClass('fx-on');
            $('.fx-6').addClass('fx-on');
        }
        if (vtht >1399) {
            $('.fx-7').addClass('fx-on');
        }
        if (width_window >= 1600) {
            if (vtht >499) {
                $('.fx-5').addClass('fx-on');
                $('.fx-6').addClass('fx-on');
            }
            if (vtht >899) {
                $('.fx-7').addClass('fx-on');
                $('.fx-8').addClass('fx-on');
            }
        }

        if (width_window <= 1400) {
            if (vtht >99) {
                $('.fx-5').addClass('fx-on');
                $('.fx-6').addClass('fx-on');
            }
            if (vtht >699) {
                $('.fx-7').addClass('fx-on');
                $('.fx-8').addClass('fx-on');
            }
        }

        if (width_window <= 1280) {
            if (vtht >99) {
                $('.fx-5').addClass('fx-on');
                $('.fx-6').addClass('fx-on');
            }
            if (vtht >499) {
                $('.fx-7').addClass('fx-on');
                $('.fx-8').addClass('fx-on');
            }
        }
    })
})