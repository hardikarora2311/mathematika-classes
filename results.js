document.addEventListener("DOMContentLoaded", function(){
    var boardBtn= document.querySelector("#board")
    var mainsBtn= document.querySelector("#mains")
    var advBtn= document.querySelector("#adv")

    var boardSec= document.querySelector(".slider-board")
    var mainsSec= document.querySelector(".slider-main")
    var advSec= document.querySelector(".slider-adv")

    var board= document.querySelector("#board > hr")
    var main= document.querySelector("#mains > hr")
    var adv= document.querySelector("#adv> hr")

    


    boardBtn.addEventListener("click", function(){
        boardSec.style.display="block"
        mainsSec.style.display="none"
        advSec.style.display="none"
        var flkty = new Flickity(".slider-board > .images");
        flkty.resize();
        board.style.backgroundColor="var(--primary-color)"
        main.style.backgroundColor="white"
        adv.style.backgroundColor="white"
    })
    
    
    mainsBtn.addEventListener("click", function(){
        boardSec.style.display="none"
        mainsSec.style.display="block"
        advSec.style.display="none"
        var flkty = new Flickity(".slider-main> .images");
        flkty.resize();
        main.style.backgroundColor="var(--primary-color)"
        board.style.backgroundColor="white"
        adv.style.backgroundColor="white"
    })

    advBtn.addEventListener("click", function(){
        boardSec.style.display="none"
        mainsSec.style.display="none"
        advSec.style.display="block"
        var flkty = new Flickity( ".slider-adv > .images");
        flkty.resize();
        adv.style.backgroundColor="var(--primary-color)"
        main.style.backgroundColor="white"
        board.style.backgroundColor="white"
    })

})

