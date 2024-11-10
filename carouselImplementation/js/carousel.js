document.addEventListener("DOMContentLoaded",()=>{
    new ctcCarousel("#carousel1,#carousel2",{
        autoPlay: true,
        autoPlayInterval: 2000,
        autoPlaySelector: "#carousel2"
    })
})