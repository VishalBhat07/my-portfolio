var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// -----------------Adding responsiveness------------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// ----------------------Added typing Effect---------------------

const texts = [
  "Web Development",
  "Computer Science",
  "LeetCode",
  "Data Structures",
  "Algorithms",
  "C++",
  "Codeforces",
];
let currentIndex = 0;
let currentText = "";
let currentCharIndex = 0;
let isDeleting = false;

function type() {
  const typeJsText = document.querySelector(".typeJsText");
  const fullText = texts[currentIndex];

  if (isDeleting) {
    currentText = fullText.substring(0, currentCharIndex--);
  } else {
    currentText = fullText.substring(0, currentCharIndex++);
  }

  typeJsText.textContent = currentText;

  if (!isDeleting && currentCharIndex === fullText.length) {
    setTimeout(() => (isDeleting = true), 200); // Pause at the end of the word
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 100 : 150);
}

type(); // Start the typing effect
