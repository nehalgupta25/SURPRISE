function toggleLetter() {
    const popup = document.getElementById("letter-popup");
    const left = document.getElementById("page-left");
    const right = document.getElementById("page-right");

    popup.style.display = "flex";

    setTimeout(() => {
        left.classList.add("open");
        left.style.transform = "rotateY(0deg)";
    }, 50);

    setTimeout(() => {
        right.classList.add("open");
        right.style.transform = "rotateY(0deg)";
    }, 500);
}

function closeLetter() {
    const popup = document.getElementById("letter-popup");
    const left = document.getElementById("page-left");
    const right = document.getElementById("page-right");

    right.style.transform = "rotateY(-90deg)";
    right.classList.remove("open");

    setTimeout(() => {
        left.style.transform = "rotateY(90deg)";
        left.classList.remove("open");
    }, 300);

    setTimeout(() => {
        popup.style.display = "none";
    }, 800);
}



let count = 0;
let up = true;

setInterval(() => {
    const c = document.getElementById("count");

    if (up) {
        count++;
        if (count >= 16) up = false;
    } 

    c.textContent = count;
}, 500);

let c = 17;
let u = true;

setInterval(() => {
    const cn = document.getElementById("c");

    if (u) {
        c++;
        if (c <= 100) u =true;
    } else {
        if (c==100) u=false;
    }

    cn.textContent = c;
}, 500);

let index = 0;

document.querySelector(".slider").addEventListener("click", function (e) {
  e.preventDefault();

  
  if (e.button === 0) {
    index--;
  }
});

document.querySelector(".slider").addEventListener("contextmenu", function (e) {
  e.preventDefault();

  
  index++;
});

setInterval(() => updateSlider(), 10); 
function updateSlider() {
  const track = document.querySelector(".slider-track");
  const total = track.querySelectorAll("img").length;

  if (index < 0) index = total - 1;
  if (index >= total) index = 0;

  track.style.transform = `translateX(-${index * 100}%)`;
}




