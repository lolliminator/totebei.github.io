// This is a note
const image = document.getElementById("still");

image.addEventListener("click", () => {
  const source = image.getAttribute("src");
  if (source === "images/still-1.png") {
    image.setAttribute("src", "images/still-2.png");
  } else if (source === "images/still-2.png") {
    image.setAttribute("src", "images/still-3.png");
  } else {
    image.setAttribute("src", "images/still-1.png");
  }
});
