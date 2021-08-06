const questions = document.querySelectorAll(".faq__question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    removeActive();
    question.parentElement.classList.toggle("active");
  });
});

function removeActive() {
  questions.forEach((question) => {
    question.parentElement.classList.remove("active");
  });
}
