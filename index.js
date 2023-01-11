const inputTextArea = document.getElementById("input-textarea");
const characterCount = document.getElementById("charac-count");
const wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
  characterCount.textContent = inputTextArea.value.length;

  const txt = inputTextArea.value.trim();

  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});
