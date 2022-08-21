const textareaEl = document.getElementById("text-area")

const totalcharactersEl = document.getElementById("total-characters")

const remainingEl = document.getElementById("Remaining")

textareaEl.addEventListener("keyup", () => {
    updateText()
})



function updateText(){
    totalcharactersEl.innerText = textareaEl.value.length
    remainingEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length
}