document.addEventListener("DOMContentLoaded", function(){
    var boardBtn= document.querySelector("#board")
    var mainsBtn= document.querySelector("#mains")
    var advBtn= document.querySelector("#adv")

    var boardSec= document.querySelector(".slider-board")
    var mainsSec= document.querySelector(".slider-main")
    var advSec= document.querySelector(".slider-adv")
    


    boardBtn.addEventListener("click", function(){
        boardSec.style.display="block"
        mainsSec.style.display="none"
        advSec.style.display="none"
        var flkty = new Flickity(".slider-board > .images");
        flkty.resize();
    })
    
    
    mainsBtn.addEventListener("click", function(){
        boardSec.style.display="none"
        mainsSec.style.display="block"
        advSec.style.display="none"
        var flkty = new Flickity(".slider-main> .images");
        flkty.resize();
    })

    advBtn.addEventListener("click", function(){
        boardSec.style.display="none"
        mainsSec.style.display="none"
        advSec.style.display="block"
        var flkty = new Flickity( ".slider-adv > .images");
        flkty.resize();
    })

})

