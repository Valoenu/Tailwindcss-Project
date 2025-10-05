const errrorMessage = document.getElementById("error-message");
const form = document.getElementById("link-form");
const button = document.getElementById("menu-btn");
const modal = document.getElementById("menu");
const input = document.getElementById("link-input");

form.addEventListener("submit", formSubmit);
button.addEventListener("click", navToggle);

// Link Expression to validate a url (stackoverflow)
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

document.querySelector("video").playbackRate = 0.75; // video duration
style = "--tw-playback-rate: 0.5;";

function navToggle() {
  modal.classList.toggle("flex");
  button.classList.toggle("open");
  modal.classList.toggle("hidden");
}

function formSubmit(e) {
  e.preventDefault; // Prevent refreshing page behaviour

  if (input.value === "") {
    errrorMessage.innerHTML = "You Must Provide Filled Text";
    input.classList.add("border-red"); //add class
  } else if (!validURL(input.value)) {
    errrorMessage.innerHTML = "You Must Provide Valid URL";
    input.classList.add("border-red"); //add class
  } else {
    errrorMessage.innerHTML = "";
    input.classList.remove("border-red");
    alert("Successfully Submit");
  }
}
