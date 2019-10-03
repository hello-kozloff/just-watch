$(document).ready(() => {
    $(".single-hero-carousel__content").flickity({
        draggable: false,
        wrapAround: true,
        prevNextButtons: true,
        pageDots: true,
        accessibility: false,
        setGallerySize: false,
        autoPlay: 5000,
        pauseAutoPlayOnHover: true
    });

    const prevNextButtons = $(".single-hero-carousel .flickity-button");
    $(".single-hero-carousel__buttons").append(prevNextButtons);
});
