const typingText = document.querySelector('.typing-text p')
const input = document.querySelector('.wrapper .input-field')
const time = document.querySelector('.time span b')
const mistakes = document.querySelector('.mistake span')
const wpm = document.querySelector('.wpm span')
const cpm = document.querySelector('.cpm span')
const btn = document.querySelector('button')


//set values
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;




function loadParagraph() {
    const paragraph = ["Accountability is a critical component of teamwork.", "Each team member must take responsibility for their actions, their contributions, and their impact on the team's overall performance.", "When everyone is accountable, the team can function smoothly, with everyone pulling their weight and working towards a common goal.", "Accountability also fosters trust, as team members know that they can rely on each other to fulfill their commitments."]

    const randomIndex = Math.floor(Math.random() * paragraph.length)
    typingText.innerHTML = ''
    for (const char of paragraph[randomIndex]) {
        console.log(char)
        typingText.innerHTML +=`<span>${char}</span>`
    }
    typingText.querySelectorAll('span')[0].classList.add('active')

}



//handle user input

function initTyping() {
    const char = typingText.querySelectorAll('span')
    const typedChar = input.value.charAt(charIndex)
    if (charIndex < char.length && timeLeft > 0) {
        if (char[charIndex].innerText === typedChar) {
            char[charIndex].classList.add('correct');
            console.log('correct')
        }else{
            char[charIndex].classList.add('incorrect');
            console.log('incorrect')
        }
        charIndex++
    }
}
input.addEventListener('input', initTyping)
loadParagraph()