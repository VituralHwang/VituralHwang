$(function() {
    var width_window = $(window).width();                        
    console.log(width_window);

    $(window).on('load', function() {
        $('.fx-1').addClass('fx-on');
        $('.fx-2').addClass('fx-on');
        $('.fx-3').addClass('fx-on');
        $('.fx-4').addClass('fx-on');
        $('.fx-5').addClass('fx-on');
        $('.fx-6').addClass('fx-on');
        if (width_window <= 767) {
            $('.fx-1').addClass('fx-on');
            $('.fx-2').addClass('fx-on');
            $('.fx-3').addClass('fx-on');
            $('.fx-4').addClass('fx-on');
            $('.fx-5').addClass('fx-on');
            $('.fx-6').addClass('fx-on');
            $('.fx-9').addClass('fx-on');
            $('.fx-10').addClass('fx-on');
            $('.fx-11').addClass('fx-on');
            $('.fx-12').addClass('fx-on');
            $('.fx-13').addClass('fx-on');
            $('.fx-14').addClass('fx-on');
            $('.fx-15').addClass('fx-on');
            $('.fx-16').addClass('fx-on');
        }
    });
    
    if (width_window <= 1280) {
        $('.box-vid').on('click', function (event) {
            if (this.paused) {$(this).trigger('play')}
            else if (this.play) {$(this).trigger('pause')}  
        });
    }
    
    $(window).scroll(function(event){
        vtht = $('html, body').scrollTop();
        console.log(vtht);
        if (vtht >1099) {
            $('.fx-9').addClass('fx-on');
            $('.fx-10').addClass('fx-on');
            $('.fx-11').addClass('fx-on');
            $('.fx-12').addClass('fx-on');
        }

        if (vtht >2099) {
            $('.fx-13').addClass('fx-on');
            $('.fx-14').addClass('fx-on');
        }

        if (vtht >2699) {
            $('.fx-15').addClass('fx-on');
            $('.fx-16').addClass('fx-on');
        }

        if (width_window <= 1600) {
            if (vtht >999) {
                $('.fx-9').addClass('fx-on');
                $('.fx-10').addClass('fx-on');
                $('.fx-11').addClass('fx-on');
                $('.fx-12').addClass('fx-on');
            }

            if (vtht >1799) {
                $('.fx-13').addClass('fx-on');
                $('.fx-14').addClass('fx-on');
            }

            if (vtht >2299) {
                $('.fx-15').addClass('fx-on');
                $('.fx-16').addClass('fx-on');
            }
        }

        if (width_window <= 1400) {
            if (vtht >799) {
                $('.fx-9').addClass('fx-on');
                $('.fx-10').addClass('fx-on');
                $('.fx-11').addClass('fx-on');
                $('.fx-12').addClass('fx-on');
            }

            if (vtht >1599) {
                $('.fx-13').addClass('fx-on');
                $('.fx-14').addClass('fx-on');
            }

            if (vtht >2099) {
                $('.fx-15').addClass('fx-on');
                $('.fx-16').addClass('fx-on');
            }
        }
        if (width_window <= 1280) {
            if (vtht >299) {
                $('.fx-9').addClass('fx-on');
                $('.fx-10').addClass('fx-on');
                $('.fx-11').addClass('fx-on');
                $('.fx-12').addClass('fx-on');
            }

            if (vtht >899) {
                $('.fx-13').addClass('fx-on');
                $('.fx-14').addClass('fx-on');
            }

            if (vtht >1299) {
                $('.fx-15').addClass('fx-on');
                $('.fx-16').addClass('fx-on');
            }
        }
    })

    $(document).on('click', '.modal-backdrop', function () {
        $('.modal').modal('hide')
    })

    $('#modal1').on('shown.bs.modal', function () {$('#video-work-main')[0].play();})
    $('#modal1').on('hidden.bs.modal', function () {$('#video-work-main')[0].pause();})
    $('#modal2').on('shown.bs.modal', function () {$('#video-work-main2')[0].play();})
    $('#modal2').on('hidden.bs.modal', function () {$('#video-work-main2')[0].pause();})
    $('#modal3').on('shown.bs.modal', function () {$('#video-work-main3')[0].play();})
    $('#modal3').on('hidden.bs.modal', function () {$('#video-work-main3')[0].pause();})
    $('#modal4').on('shown.bs.modal', function () {$('#video-work-main4')[0].play();})
    $('#modal4').on('hidden.bs.modal', function () {$('#video-work-main4')[0].pause();})

    $('#modal5').on('shown.bs.modal', function () {$('#video-work-main5')[0].play();})
    $('#modal5').on('hidden.bs.modal', function () {$('#video-work-main5')[0].pause();})
    $('#modal6').on('shown.bs.modal', function () {$('#video-work-main6')[0].play();})
    $('#modal6').on('hidden.bs.modal', function () {$('#video-work-main6')[0].pause();})

    $('#modal9').on('shown.bs.modal', function () {$('#video-work-main9')[0].play();})
    $('#modal9').on('hidden.bs.modal', function () {$('#video-work-main9')[0].pause();})
    $('#modal10').on('shown.bs.modal', function () {$('#video-work-main10')[0].play();})
    $('#modal10').on('hidden.bs.modal', function () {$('#video-work-main10')[0].pause();})
    $('#modal11').on('shown.bs.modal', function () {$('#video-work-main11')[0].play();})
    $('#modal11').on('hidden.bs.modal', function () {$('#video-work-main11')[0].pause();})
    $('#modal12').on('shown.bs.modal', function () {$('#video-work-main12')[0].play();})
    $('#modal12').on('hidden.bs.modal', function () {$('#video-work-main12')[0].pause();})

    $('#modal13').on('shown.bs.modal', function () {$('#video-work-main13')[0].play();})
    $('#modal13').on('hidden.bs.modal', function () {$('#video-work-main13')[0].pause();})
    $('#modal14').on('shown.bs.modal', function () {$('#video-work-main14')[0].play();})
    $('#modal14').on('hidden.bs.modal', function () {$('#video-work-main14')[0].pause();})

    $('#modal15').on('shown.bs.modal', function () {$('#video-work-main15')[0].play();})
    $('#modal15').on('hidden.bs.modal', function () {$('#video-work-main15')[0].pause();})
    $('#modal16').on('shown.bs.modal', function () {$('#video-work-main16')[0].play();})
    $('#modal16').on('hidden.bs.modal', function () {$('#video-work-main16')[0].pause();})

    var movehover1 = $('.sec-vid-1').hover( hoverVideo1, hideVideo1 );
    function hoverVideo1(e) {$('#video-work-1')[0].play();}
    function hideVideo1(e) {$('#video-work-1')[0].pause();}
    var body1 = $('body');

    var movehover2 = $('.sec-vid-2').hover( hoverVideo2, hideVideo2 );
    function hoverVideo2(e) {$('#video-work-2')[0].play();}
    function hideVideo2(e) {$('#video-work-2')[0].pause();}
    var body2 = $('body');

    var movehover3 = $('.sec-vid-3').hover( hoverVideo3, hideVideo3 );
    function hoverVideo3(e) {$('#video-work-3')[0].play();}
    function hideVideo3(e) {$('#video-work-3')[0].pause();}
    var body3 = $('body');

    var movehover4 = $('.sec-vid-4').hover( hoverVideo4, hideVideo4 );
    function hoverVideo4(e) {$('#video-work-4')[0].play();}
    function hideVideo4(e) {$('#video-work-4')[0].pause();}
    var body4 = $('body');


    var movehover5 = $('.sec-vid-5').hover( hoverVideo5, hideVideo5 );
    function hoverVideo5(e) {$('#video-work-5')[0].play();}
    function hideVideo5(e) {$('#video-work-5')[0].pause();}
    var body5 = $('body');

    var movehover6 = $('.sec-vid-6').hover( hoverVideo6, hideVideo6 );
    function hoverVideo6(e) {$('#video-work-6')[0].play();}
    function hideVideo6(e) {$('#video-work-6')[0].pause();}
    var body6 = $('body');


    var movehover9 = $('.sec-vid-9').hover( hoverVideo9, hideVideo9 );
    function hoverVideo9(e) {$('#video-work-9')[0].play();}
    function hideVideo9(e) {$('#video-work-9')[0].pause();}
    var body9 = $('body');

    var movehover10 = $('.sec-vid-10').hover( hoverVideo10, hideVideo10 );
    function hoverVideo10(e) {$('#video-work-10')[0].play();}
    function hideVideo10(e) {$('#video-work-10')[0].pause();}
    var body10 = $('body');

    var movehover11 = $('.sec-vid-11').hover( hoverVideo11, hideVideo11 );
    function hoverVideo11(e) {$('#video-work-11')[0].play();}
    function hideVideo11(e) {$('#video-work-11')[0].pause();}
    var body11 = $('body');

    var movehover12 = $('.sec-vid-12').hover( hoverVideo12, hideVideo12 );
    function hoverVideo12(e) {$('#video-work-12')[0].play();}
    function hideVideo12(e) {$('#video-work-12')[0].pause();}
    var body12 = $('body');


    var movehover13 = $('.sec-vid-13').hover( hoverVideo13, hideVideo13 );
    function hoverVideo13(e) {$('#video-work-13')[0].play();}
    function hideVideo13(e) {$('#video-work-13')[0].pause();}
    var body13 = $('body');

    var movehover14 = $('.sec-vid-14').hover( hoverVideo14, hideVideo14 );
    function hoverVideo14(e) {$('#video-work-14')[0].play();}
    function hideVideo14(e) {$('#video-work-14')[0].pause();}
    var body14 = $('body');

    var movehover15 = $('.sec-vid-15').hover( hoverVideo15, hideVideo15 );
    function hoverVideo15(e) {$('#video-work-15')[0].play();}
    function hideVideo15(e) {$('#video-work-15')[0].pause();}
    var body15 = $('body');

    var movehover16 = $('.sec-vid-16').hover( hoverVideo16, hideVideo16 );
    function hoverVideo16(e) {$('#video-work-16')[0].play();}
    function hideVideo16(e) {$('#video-work-16')[0].pause();}
    var body16 = $('body');
})