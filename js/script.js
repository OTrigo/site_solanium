$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }if(this.scrollY > 100){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });

    tippy('#whatsapp-btn', {
        content: 'Fale conosco!',
        placement: 'left'
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    var typed = new Typed(".typing",{
        strings:["Energia Solar", "Informação", "Tecnologia", "O melhor do mercado"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    var typed = new Typed(".typing-2",{
        strings:["Energia Solar", "Informação", "Tecnologia", "O melhor do mercado"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })
});

var navegadores = "";

if (navegadores = navigator.userAgent.toLowerCase().indexOf('brave') > -1) {
    document.getElementById("")
}

let i = 0
    function toggleMenu(){
        const nav  = document.getElementById('menu')
        nav.classList.toggle('active')
    }
    
    const hamburger = document.getElementById('hamburger')
        hamburger.addEventListener('click', toggleMenu)