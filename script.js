const form = document.getElementById("reviewForm");
const message = document.getElementById("message");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const titleInput = document.getElementById("title");
    const title = titleInput.value;

    if (title === "") {
      message.textContent = "Please enter a title.";
      return;
    }

    message.textContent = 
      "Review submitted successfully (simulation).";

    form.reset();

  });

}
