const textBox = document.querySelector("input");
const label = document.querySelector("label");
textBox.addEventListener('keydown', handleKeyDown = (evt) => {
  if (evt.key.length < 2){
  label.innerText += `${evt.key}`;
  }
})