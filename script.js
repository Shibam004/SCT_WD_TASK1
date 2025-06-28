window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Typing Effect
const titleText = "Hello, I am Shibam Karmakar";
const subtitleText = "I am an Intern at SkillCraft Technology";

let titleIndex = 0;
let subtitleIndex = 0;

function typeTitle() {
  if (titleIndex < titleText.length) {
    document.getElementById("typed-title").innerHTML += titleText.charAt(titleIndex);
    titleIndex++;
    setTimeout(typeTitle, 100);
  } else {
    setTimeout(typeSubtitle, 400);
  }
}

function typeSubtitle() {
  if (subtitleIndex < subtitleText.length) {
    document.getElementById("typed-subtitle").innerHTML += subtitleText.charAt(subtitleIndex);
    subtitleIndex++;
    setTimeout(typeSubtitle, 80);
  }
}

window.onload = typeTitle;
