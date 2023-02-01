const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const generateBtn = document.getElementById("generate-password-btn")
const inputEl = document.getElementById("input-el")
let firstPasswordEl = document.getElementById("first-password")
let secondPasswordEl = document.getElementById("second-password")

generateBtn.addEventListener("click", () => {
    firstPasswordEl.textContent = ""
    secondPasswordEl.textContent = ""
    let firstCharacterIndex = 0
    let secondCharacterIndex = 0

    inputElValue = Number(inputEl.value)
    
    if(inputElValue === 0) {
        for (let i = 0; i < 15; i++) {
            firstCharacterIndex = Math.floor(Math.random() * characters.length)
            secondCharacterIndex = Math.floor(Math.random() * characters.length)
            firstPasswordEl.textContent += characters[firstCharacterIndex]
            secondPasswordEl.textContent += characters[secondCharacterIndex]
        }
    }
    else if (isNaN(inputElValue)) {
        alert("Please enter a number")
    }
    else {
        for (let i = 0; i < inputElValue; i++) {
            firstCharacterIndex = Math.floor(Math.random() * characters.length)
            secondCharacterIndex = Math.floor(Math.random() * characters.length)
            firstPasswordEl.textContent += characters[firstCharacterIndex]
            secondPasswordEl.textContent += characters[secondCharacterIndex]
        }
    }
})

firstPasswordEl.addEventListener("click", () => {
    let text = firstPasswordEl.textContent
    navigator.clipboard.writeText(text)

    if(text !== "")
        alert("Password copied to clipboard")
    else
        alert("Password couldn't copied to clipboard")
})

secondPasswordEl.addEventListener("click", () => {
    let text = secondPasswordEl.textContent
    navigator.clipboard.writeText(text)

    if(text !== "")
        alert("Password copied to clipboard")
    else
        alert("Password couldn't copied to clipboard")
})

