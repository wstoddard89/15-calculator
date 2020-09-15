const numOne = document.querySelector("#numOne");
const numTwo = document.querySelector("#numTwo");
const answer = document.querySelector("#answer");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");


multiply.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = Number(numOne.value) * Number(numTwo.value))
})
add.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = Number(numOne.value) + Number(numTwo.value))
})
divide.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = numOne.value / numTwo.value)
})
subtract.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = numOne.value - numTwo.value)
})