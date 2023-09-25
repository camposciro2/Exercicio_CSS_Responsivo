$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    });
})

$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    });
});

$(document).ready(function () {
    const $menuHamburguer = $(".menu-hamburguer");
    const $asideMenu = $(".aside-menu");

    $menuHamburguer.click(function () {
        $asideMenu.toggleClass("hidden");
    });

    $asideMenu.click(function () {
        $asideMenu.addClass("hidden");
    });

    const $menuLinks = $(".aside-menu a");

    $menuLinks.click(function () {
        $asideMenu.addClass("hidden");
    });
});
