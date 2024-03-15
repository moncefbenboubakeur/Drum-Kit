let drumKeys = document.querySelectorAll(".drum");

for (i = 0; i < drumKeys.length; i++) {
  drumKeys[i].addEventListener("click", () => {
    alert("I got clicked!");
  });
}
