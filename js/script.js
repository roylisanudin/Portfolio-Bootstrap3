//event pada saat link di klik
$('.page-scroll').on('click', function(e){

    //ambil isi href
    var tujuan = $(this).attr('href');
    
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

});

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop()>50);
});


//PARALAX

//about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    //Jumbotron

    //Ambil element Img - ubah css nya  
    $('.jumbotron img').css({
        //menggunakan sumbu x default dan y bantuan dari w scroll
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        //menggunakan sumbu x default dan y bantuan dari w scroll
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        //menggunakan sumbu x default dan y bantuan dari w scroll
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });


    //portofolio
    if (wScroll > $('.portofolio').offset().top - 350 ) {
        
        $('.portofolio .thumbnail').each(function(i){
            setTimeout(function(){
                //element equal
                $('.portofolio .thumbnail').eq(i).addClass('muncul');
            }, 400 * (i+1)); //400 miliseconds untuk waktunya / 0,4 detik
        });
        
    }


});
