const $main = document.querySelector("main");
fetch("express.md")
  .then((res) => (res.ok ? res.text() : Promise.reject(res)))
  .then((text) => {
    var converter = new showdown.Converter({ tables: true });
    var html = converter.makeHtml(text);
    $main.innerHTML = html;
    hljs.highlightAll();
    enableCopy();
  })
  .catch((err) => {
    console.log(err);
  });

function enableCopy(
  selector = "pre",
  childSelector = "code",
  btnText = "Copiar",
  btnTextSuccess = "Copiado!",
  activeClass = "--copy"
) {
  document
    .querySelectorAll(`${selector}:not(.${activeClass})`)
    .forEach((node) => {
      // create a "copy" button
      let copyBtn = document.createElement("button");
      copyBtn.innerText = btnText;
      // activeClass acts as flag so we don't add another copy button by  mistake
      copyBtn.classList.add(activeClass);
      node.prepend(copyBtn);
      copyBtn.addEventListener("click", async () => {
        // copy to clipboard
        if (navigator.clipboard) {
          let text = node.querySelector(childSelector).innerText;
          await navigator.clipboard.writeText(text);
        }
        // change text of button after copying
        copyBtn.innerText = btnTextSuccess;
        // change text back to normal after ### ms
        setTimeout(() => (copyBtn.innerText = btnText), 2000);
      });
    });
}
