


function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      reveals[i].classList.add("service-card");

    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);



function revealcards() {
  var revealcards = document.querySelectorAll(".revealcards");
  for (var i = 0; i < revealcards.length; i++) {
    var windowH = window.innerHeight;
    var elementT = revealcards[i].getBoundingClientRect().top;
    if (elementT < windowH - 100) {
      revealcards[i].classList.add("active-client");
      revealcards[i].classList.add("client-review-container-card");

    } else {
      revealcards[i].classList.remove("active-client");
    }
  }
}
window.addEventListener("scroll", revealcards);

function revealTimeline() {
  var revealtimeline = document.querySelectorAll(".revealtimeline");
  var windowHT = window.innerHeight;
  var elementHT = revealtimeline[0].getBoundingClientRect().top;
  if (elementHT < windowHT - 100) {
    revealtimeline[0].classList.add("active-timeline");
    revealtimeline[0].classList.add("conference-center-line");
  }
}
window.addEventListener("scroll", revealTimeline);

var cards = document.getElementsByClassName("service-card");
var index = 1;
function selectedHover() {
  cards[index].classList.add('tempHover');
}
function mouseOver() {
  cards[index].classList.remove('tempHover');
}
if (screen.width >= 556) {
  selectedHover();
}

// Progress bar
function updateProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  progressBar.style.width = progress + '%';
}

updateProgressBar();
window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);
window.addEventListener('scroll', rotate);

function rotate() {
  let icons = document.querySelectorAll('.client-review-box i');
  var windowRotate = window.innerHeight;
  var elementRotate = icons[0].getBoundingClientRect().top;
  if (elementRotate < windowRotate - 100) {
    let randomNumber = Math.floor(Math.random() * icons.length);
    icons[randomNumber].classList.toggle('icon-rotate');
  }
}


const headinglines = ['Crafting Code, <span class="txt01">Shaping</span> Tomorrow',
  'Pixels and <span class="txt01">Pixels</span> of Possibilities',
  'Where <span class="txt01">Algorithms</span> Meet Aesthetics',
  `Make Your <span class="txt01">Vision</span> A <span>Reality !</span>`];
const heading_text = document.getElementById('heading_text');
let heading_index = 0;
const timeFunc = setInterval(() => {
  heading_text.innerHTML = headinglines[heading_index];
  if (heading_index >= 3) {
    heading_index = 0;
  }
  else {
    heading_index++;
  }
}, 3000);

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Orbital Cursor Effect
function initOrbitalEffect() {
  const container = document.getElementById('orbital-container');
  const banner = document.querySelector('.banner');
  if (!container || !banner) return;

  const dots = [];
  const numDots = 20; // Number of orbiting dots
  const colors = ['#FF4136', '#2ECC40', '#0074D9', '#FFDC00', '#B10DC9', '#FF851B', '#39CCCC', '#F012BE'];

  // Store client coordinates
  let clientX = window.innerWidth / 2;
  let clientY = window.innerHeight / 2;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  class OrbitalDot {
    constructor() {
      this.element = document.createElement('div');
      this.element.classList.add('orbital-dot');
      container.appendChild(this.element);

      this.reset();
    }

    reset() {
      this.angle = Math.random() * Math.PI * 2;
      this.radius = 30 + Math.random() * 60; // Distance from cursor
      this.speed = (0.02 + Math.random() * 0.05) * (Math.random() < 0.5 ? 1 : -1);
      this.size = 3 + Math.random() * 5;
      this.color = colors[Math.floor(Math.random() * colors.length)];

      this.element.style.width = `${this.size}px`;
      this.element.style.height = `${this.size}px`;
      this.element.style.backgroundColor = this.color;
      this.element.style.boxShadow = `0 0 ${this.size}px ${this.color}`;
      this.element.style.top = '0';
      this.element.style.left = '0';
    }

    update() {
      this.angle += this.speed;

      // Get banner position to calculate relative coordinates
      const rect = banner.getBoundingClientRect();

      // Calculate cursor position relative to banner
      const relX = clientX - rect.left;
      const relY = clientY - rect.top;

      // Calculate dot position
      const x = relX + Math.cos(this.angle) * this.radius;
      const y = relY + Math.sin(this.angle) * this.radius;

      // Apply position
      this.element.style.transform = `translate(${x}px, ${y}px)`;
    }
  }

  // Initialize dots
  for (let i = 0; i < numDots; i++) {
    dots.push(new OrbitalDot());
  }

  function animate() {
    dots.forEach(dot => dot.update());
    requestAnimationFrame(animate);
  }

  animate();
}

// Initialize the effect
initOrbitalEffect();