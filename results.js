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
        boardSec.style.display="flex"
        mainsSec.style.display="none"
        advSec.style.display="none"
        var flkty = new Flickity(".slider-board > .images");
        flkty.resize();
        board.style.backgroundColor="var(--primary-color)"
        main.style.backgroundColor="white"
        adv.style.backgroundColor="white"
        boardBtn.classList.add("hover")
        mainsBtn.classList.remove("hover")
        advBtn.classList.remove("hover")
    })
    
    
    mainsBtn.addEventListener("click", function(){
        boardSec.style.display="none"
        mainsSec.style.display="flex"
        advSec.style.display="none"
        var flkty = new Flickity(".slider-main> .images");
        flkty.resize();
        main.style.backgroundColor="var(--primary-color)"
        board.style.backgroundColor="white"
        adv.style.backgroundColor="white"
        boardBtn.classList.remove("hover")
        mainsBtn.classList.add("hover")
        advBtn.classList.remove("hover")
    })

    advBtn.addEventListener("click", function(){
        boardSec.style.display="none"
        mainsSec.style.display="none"
        advSec.style.display="flex"
        var flkty = new Flickity( ".slider-adv > .images");
        flkty.resize();
        adv.style.backgroundColor="var(--primary-color)"
        main.style.backgroundColor="white"
        board.style.backgroundColor="white"
        boardBtn.classList.remove("hover")
        mainsBtn.classList.remove("hover")
        advBtn.classList.add("hover")
    })

})

