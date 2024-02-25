let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = 'letter out';
        }, i * 80);

    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        
        letter.className = 'letter behind';
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);

    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    
};
changeText();
setInterval(changeText, 3000);


let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);


const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50);
})



let form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    try {
        let name = document.getElementById("name-form").value;
        let email = document.getElementById("email-form").value;
        let address = document.getElementById("address-form").value;
        let message = document.getElementById("message-form").value;
        let number =document.getElementById("number-form").value
        let obj = { name, email, address, message ,number};
        localStorage.setItem("data",{obj})
        console.log(obj);
        
    }
    catch (error) {
        console.log(error);
    }
    
    
})
