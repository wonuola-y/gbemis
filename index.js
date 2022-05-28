const load = document.getElementById('loader')
const project = document.getElementById('projects-two')
const dart = document.getElementById('projects-three')
const second = document.getElementById('second-loader')
const third = document.getElementById('third-loader')
const text = document.getElementById('dom')

const slide = document.querySelector('.slides')
const slideTwo = document.querySelector('.p-one')
const slideThree = document.querySelector('.p-two')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')


const pro = document.getElementsByClassName('project-name')
const about = document.getElementsByClassName('project-about')
const devices = document.querySelectorAll('.project-devices')
const symbol = document.querySelector('.symbol')
const btn = document.querySelector('.btn-one')

const cancel = document.querySelector(".cancel")
const open = document.querySelector('.hamburger')
const sidenav = document.querySelector('.mobile-list')
const body = document.querySelector('body')
const one = document.querySelector('.one')

const main = document.querySelector('main')
let loading;

function myFunction() {
    loading = setTimeout(showPage, 3000);
    body.style.backgroundColor = ""
}
  
function showPage() {
document.getElementById("loader").style.display = "none";
main.style.display = "block";
}

open.addEventListener('click', () =>{
console.log('hello');
sidenav.style.display = "block";
sidenav.style.zIndex = "1";
body.style.zIndex = "-1";
one.style.zIndex = "-1";
body.style.background = "#151515d4";
})
cancel.addEventListener("click", () =>{
console.log('bye');
sidenav.style.display = "none";
body.style.backgroundColor = "#ffff";

})

btn.onmouseenter = function () {
    symbol.addEventListener("mouseenter",  symbol.classList.add('hovered'));
    setTimeout(function() {
        symbol.classList.remove('hovered');
      }.bind(symbol), 1000)
}


load.addEventListener("click", () =>{
    console.log('gbems'); 
    project.style.display = "block";
    load.style.display = "none";
    second.style.display = "block";
  
         
});
second.addEventListener("click", () =>{
    console.log('gbems'); 
    dart.style.display = "block";
    second.style.display = "none";
    third.style.display = "block";
   
         
});
third.addEventListener("click", () =>{
    console.log('tells'); 
    dart.style.display = "block";
    third.style.display = "none";
    text.style.display = "block";
         
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  

}


document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    let dataText = [ "the Economy.", " Finance.", "Governance.", "Education.", "the Health sector."];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(content, a, fnCallback) {
      // chekc if text isn't finished yet
      if (a < (content.length)) {
        // add next character to h1
       document.querySelector(".type-writer").innerHTML = content.substring(0, a + 1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(content, a + 1, fnCallback)
        }, 90);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 900);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(a) {
       if (typeof dataText[a] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 2000);
       }
       // check if dataText[i] exists
      if (a < dataText[a].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[a], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(a + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });
//   const boxes = document.getElementsByTagName("i");

// window.addEventListener("scroll", checkBoxes);

// checkBoxes();

// function checkBoxes() {
// console.log('hey');
//   const triggerBottom = (window.innerHeight / 5) * 4;

//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top;

//     if (boxTop < triggerBottom) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
    
// }
//   });
// }
