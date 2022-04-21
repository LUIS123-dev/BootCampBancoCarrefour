//Jquery

$('.owl-carousel').owlCarousel({
    loop:true, //efeito de loop ligado o carrosel sempre volta para o inicio, se for false ele só vai rolar até o ultimo filme
    margin:10, // margem entre as caixas do carrosel 

    nav:false, //setinha de navegação se desabilitar some da tela 
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})