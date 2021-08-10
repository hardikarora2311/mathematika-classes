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

})

mainsBtn.addEventListener("click", function(){
  boardSec.style.display="none"
  mainsSec.style.display="block"
  advSec.style.display="none"
  console.log("click")

})

advBtn.addEventListener("click", function(){
  boardSec.style.display="none"
  mainsSec.style.display="none"
  advSec.style.display="block"

})