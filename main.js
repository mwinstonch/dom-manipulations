    
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("Youch, don't click me so hard")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var num = document.querySelector("#compoundInvestment")
  num.innerHTML = num.innerHTML*2

 // console.log(num)

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3

  var color = document.querySelector("#circle-bw") 

  if (color.style.background === "black") {
  	color.style.background = "white" 
  }
  else {color.style.background = "black"
}

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4
 var circle = document.querySelector('.circle-red')
var box2sStyles = window.getComputedStyle(circle)

var doublePx = function(pxValue) {
  var doubledInt = parseInt(pxValue) * 2
  return doubledInt + "px"  
}
circle.style.width = doublePx(box2sStyles.width)
circle.style.height = doublePx(box2sStyles.height)

if (parseInt(circle.style.width) > 320) {
	circle.style.width = 40 + "px"
	circle.style.height = 40 + "px"
}

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5

var container = document.querySelector("#userList") 

var containerList = document.querySelectorAll("#userList li") 

for (var i = 0; i < containerList.length; i++) {
	if (containerList[i].className === "inactive") {
	container.removeChild(containerList[i])
	}
}


})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6


var boxContainer = document.querySelector("#reverse-squares .answer-box")

var boxes = document.querySelectorAll("#reverse-squares .answer-box span")

boxContainer.innerHTML = ''

for (var i = boxes.length - 1; i >= 0; i--) {

boxContainer.appendChild(boxes[i])

}

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

  var taskBox = document.querySelectorAll("#tasks li")

  var reverseString = function(input) { 
       var newString = ""
  		for (var i = input.length - 1; i >= 0 ; i--) {
  		var char = input.charAt(i)
  		newString += char
  	}
      return newString
  }

  var newArray = []

  for (var i = 0; i < taskBox.length; i++) {
  	var newStringArray = reverseString(taskBox[i].innerHTML)
  	taskBox[i].innerHTML = newStringArray
  	newArray.push(newStringArray)
  }
  console.log(newArray)


})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})