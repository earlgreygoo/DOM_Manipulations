
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don't click me so hard")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var pSelect = document.querySelector("#compoundInvestment")
  var count = pSelect.innerHTML * 2
  pSelect.innerHTML = count
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circle = document.querySelector("#circle-bw")
  
  
 if (circle.style.background === "black") {
  	 return circle.style.background = "white"
 }
 else {
 	return circle.style.background = "black"
 }

  


})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}

  var redcircle = document.querySelector(".circle-red")
  rcStyles = window.getComputedStyle(redcircle)
   
  var rcwidth = rcStyles.width
  var doubler = parseInt(rcwidth) * 2

  redcircle.style.width  =  doubler + "px" 
  redcircle.style.height = doubler + "px"

  if (doubler >= 320) {
  	
  	redcircle.style.width  =  "40px"
   redcircle.style.height = "40px"
  }




})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
    var node = document.querySelector("#userList")
    var listItems = node.children
  for (var i = 0; i < listItems.length; i ++) {
    var liNode = listItems[i]
    if (liNode.classList.contains('inactive')) {
      node.removeChild(liNode)
      i--
    }
}


})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})