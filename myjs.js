let list__affairs = document.querySelector(".list__affairs");
let textarea = document.querySelector(".list__textarea")
let number__id = 1;
let buttons = document.getElementsByClassName("button2");
button.onclick = function () {
  if (textarea.value != 0) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("case");
    newDiv.class
    newDiv.innerHTML = `<div id=${"id"+number__id} class="case__text">${textarea.value}<button class="button2">delete</button></div>`;
    list__affairs.prepend(newDiv)
    textarea.value = "";
    number__id++
  }
}
textarea.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#button").click();
  }
});
function cheackId(elem) {
  let divId = elem.parentElement.id
  document.getElementById(divId).remove()
}
setInterval(() => {
  for (let e of buttons) {
    e.addEventListener("click", () => {
      cheackId(e)
    })
  }
}, 200)
button__del.onclick = function () {
  let delAll = document.querySelector(".list__affairs")
  delAll.innerHTML = ""
}