function startGeneration() {
  intervalID = setInterval(() => {
    const container = document.querySelector("#section");
    newSection.style.backgroundColor = randomColor;
    container.append(newSection);
  }, 1000);
}

function stopGeneration() {
  clearInterval(intervalID);
}

function remove(element) {
  element.parentElement.remove();
}
