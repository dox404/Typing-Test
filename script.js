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
    const paragraph = ["Accountability is a critical component of teamwork.", "Each team member must take responsibility for their actions, their contributions, and their impact on the team's overall performance.", "When everyone is accountable, the team can function smoothly, with everyone pulling their weight and working towards a common goal.", "Accountability also fosters trust, as team members know that they can rely on each other to fulfill their commitments.","Eenie, meenie, minie, mo, catch a piggy by the toe. If he hollers, let him go, eenie, meenie, minie, moe.Eenie, meenie, minie, mo, catch a tiger by the toe. If he hollers, let him go, eenie, meenie, minie, moe.","Sahiba Ek Kutti aur Gawar H Mani Sabse best h"]

    const randomIndex = Math.floor(Math.random() * paragraph.length)
    typingText.innerHTML = ''
    for (const char of paragraph[randomIndex]) {
        console.log(char)
        typingText.innerHTML +=`<span>${char}</span>`
    }
    typingText.querySelectorAll('span')[0].classList.add('active')

    //when the page is loded then it foccus to the input field
    document.addEventListener('keydown', ()=>{
        input.focus()

    })
    typingText.addEventListener('click',()=>{
        input.focus()
    })

}



//handle user input

function initTyping() {
    const char = typingText.querySelectorAll('span')
    const typedChar = input.value.charAt(charIndex)
    if (charIndex < char.length && timeLeft > 0) {

        if(!isTyping){
            timer=setInterval(initTime,1000)
            isTyping = true
        }


        if (char[charIndex].innerText === typedChar) {
            char[charIndex].classList.add('correct');
            console.log('correct')
        }else{
            mistake++
            char[charIndex].classList.add('incorrect');
            console.log('incorrect')
        }
        charIndex++
        char[charIndex].classList.add('active');
        mistakes.innerText=mistake;
        cpm.innerText=charIndex-mistake
    }else{
        clearInterval(timer)
        input.value='';
    }
}



function initTime(){
    if(timeLeft>0){
        timeLeft--;
        time.innerText=timeLeft;
        let wpmVal=Math.round(((charIndex-mistake)/5)/(maxTime-timeLeft)*60)
        wpm.innerText=wpmVal
    }else{
        clearInterval(timer)
    }
}

function reset(){
    loadParagraph()
    clearInterval(timer);
    timeLeft=maxTime;
    time.innerText=timeLeft
    input.value=''
    charIndex=0;
    mistake=0;
    isTyping=false;
    wpm.innerText=0
    cpm.innerText=0
    mistakes.innerText=0
}

input.addEventListener('input', initTyping)
btn.addEventListener('click',reset)
loadParagraph()