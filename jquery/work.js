$(function() {
    var width_window = $(window).width();                        
    console.log(width_window);

    $(window).on('load', function() {
        $('.fx-1').addClass('fx-on');
        $('.fx-2').addClass('fx-on');
        $('.fx-3').addClass('fx-on');
        $('.fx-4').addClass('fx-on');
        $('.fx-5').addClass('fx-on');
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
            $('.fx-13').addClass('fx-on');
            $('.fx-14').addClass('fx-on');
            $('.fx-15').addClass('fx-on');
            $('.fx-16').addClass('fx-on');
            $('.fx-17').addClass('fx-on');
        }
    });

    var cc_nitendo = $('.cc_nitendo').height();
    $('.cc_nitendo_custom').height(cc_nitendo);
    console.log(cc_nitendo);

    if (width_window <= 1279) {
        $('.box-vid').on('click', function (event) {
            if (this.paused) {$(this).trigger('play')}
            else if (this.play) {$(this).trigger('pause')}  
        });

    }
	
	$(window).scroll(function(event){
		vtht = $('html, body').scrollTop();
		console.log(vtht);

		if (vtht >999) {
            $('.fx-14').addClass('fx-on');
            $('.fx-15').addClass('fx-on');
            $('.fx-16').addClass('fx-on');
            $('.fx-17').addClass('fx-on');
		}

		if (vtht >2099) {
            $('.fx-6').addClass('fx-on');
            $('.fx-7').addClass('fx-on');
            $('.fx-8').addClass('fx-on');
            $('.fx-9').addClass('fx-on');
		}

        if (vtht >2999) {
            $('.fx-10').addClass('fx-on');
            $('.fx-11').addClass('fx-on');
            $('.fx-12').addClass('fx-on');
            $('.fx-13').addClass('fx-on');
        }

        if (width_window >= 1600) {
            if (vtht >899) {
                $('.fx-14').addClass('fx-on');
                $('.fx-15').addClass('fx-on');
                $('.fx-16').addClass('fx-on');
                $('.fx-17').addClass('fx-on');
            }

            if (vtht >1799) {
                $('.fx-6').addClass('fx-on');
                $('.fx-7').addClass('fx-on');
                $('.fx-8').addClass('fx-on');
                $('.fx-9').addClass('fx-on');
            }

            if (vtht >2599) {
                $('.fx-10').addClass('fx-on');
                $('.fx-11').addClass('fx-on');
                $('.fx-12').addClass('fx-on');
                $('.fx-13').addClass('fx-on');
            }
        }

        if (width_window <= 1400) {
            if (vtht >599) {
                $('.fx-14').addClass('fx-on');
                $('.fx-15').addClass('fx-on');
                $('.fx-16').addClass('fx-on');
                $('.fx-17').addClass('fx-on');
            }

            if (vtht >1399) {
                $('.fx-6').addClass('fx-on');
                $('.fx-7').addClass('fx-on');
                $('.fx-8').addClass('fx-on');
                $('.fx-9').addClass('fx-on');
            }

            if (vtht >2099) {
                $('.fx-10').addClass('fx-on');
                $('.fx-11').addClass('fx-on');
                $('.fx-12').addClass('fx-on');
                $('.fx-13').addClass('fx-on');
            }
        }

        if (width_window <= 1280) {
            if (vtht > 299) {
                $('.fx-14').addClass('fx-on');
                $('.fx-15').addClass('fx-on');
                $('.fx-16').addClass('fx-on');
                $('.fx-17').addClass('fx-on');
            }

            if (vtht >799) {
                $('.fx-6').addClass('fx-on');
                $('.fx-7').addClass('fx-on');
                $('.fx-8').addClass('fx-on');
                $('.fx-9').addClass('fx-on');
            }

            if (vtht >1899) {
                $('.fx-10').addClass('fx-on');
                $('.fx-11').addClass('fx-on');
                $('.fx-12').addClass('fx-on');
                $('.fx-13').addClass('fx-on');
            }
        }
	})

    $(document).on('click', '.modal-backdrop', function () {
        $('.modal').modal('hide')
    })

    $('#modal12').on('shown.bs.modal', function () {$('#video-work-main0')[0].play();})
    $('#modal12').on('hidden.bs.modal', function () {$('#video-work-main0')[0].pause();})

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
    $('#modal7').on('shown.bs.modal', function () {$('#video-work-main7')[0].play();})
    $('#modal7').on('hidden.bs.modal', function () {$('#video-work-main7')[0].pause();})
    $('#modal8').on('shown.bs.modal', function () {$('#video-work-main8')[0].play();})
    $('#modal8').on('hidden.bs.modal', function () {$('#video-work-main8')[0].pause();})
    
    $('#modal14').on('shown.bs.modal', function () {$('#video-work-main14')[0].play();})
    $('#modal14').on('hidden.bs.modal', function () {$('#video-work-main14')[0].pause();})
    $('#modal15').on('shown.bs.modal', function () {$('#video-work-main15')[0].play();})
    $('#modal15').on('hidden.bs.modal', function () {$('#video-work-main15')[0].pause();})
    $('#modal16').on('shown.bs.modal', function () {$('#video-work-main16')[0].play();})
    $('#modal16').on('hidden.bs.modal', function () {$('#video-work-main16')[0].pause();})
    $('#modal17').on('shown.bs.modal', function () {$('#video-work-main17')[0].play();})
    $('#modal17').on('hidden.bs.modal', function () {$('#video-work-main17')[0].pause();})

    var movehover0 = $('.sec-vid-0').hover( hoverVideo0, hideVideo0 );
    function hoverVideo0(e) {$('#video-work-0')[0].play();}
    function hideVideo0(e) {$('#video-work-0')[0].pause();}
    var body1 = $('body');

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

    var movehover7 = $('.sec-vid-7').hover( hoverVideo7, hideVideo7 );
    function hoverVideo7(e) {$('#video-work-7')[0].play();}
    function hideVideo7(e) {$('#video-work-7')[0].pause();}
    var body7 = $('body');

    var movehover8 = $('.sec-vid-8').hover( hoverVideo8, hideVideo8 );
    function hoverVideo8(e) {$('#video-work-8')[0].play();}
    function hideVideo8(e) {$('#video-work-8')[0].pause();}
    var body8 = $('body');



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


    var mainvid_height = $('.v-f-vid').height();
    mainvid_height += 220;
    $('.main-vid').height(mainvid_height);

    var mainvid_height_2 = $('.v-f-vid-v2').height();
    $('.s-vid-ct-2').height(mainvid_height_2);

    var mainvid_height_3 = $('.v-f-vid-v3').height();
    $('.s-vid-ct-3').height(mainvid_height_3);
})