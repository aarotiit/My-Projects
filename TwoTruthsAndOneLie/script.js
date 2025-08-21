let button = document.getElementById("toggle-answers");
let toggleHide = document.querySelectorAll("show");

button.addEventListener("click", toggleAnswers);

function toggleAnswers() {
  if (button.value === 1) {
    toggleHide.style.display = `none`;
    button.value += 1;
    button.textContent = "Show Answers";
  } else {
    toggleHide.style.display = `inline`;
    button.value -= 1;
    button.textContent = "Hide Answers";
  }
}
