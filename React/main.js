const $main = document.querySelector("main");
fetch("React.md")
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
      let code = node.querySelector(childSelector);
      var nameLanguague = Array.from(code.classList).filter(word => word.indexOf("language-") != -1);
      let language = nameLanguague[0].replace("language-", "");

      if(language != "console") {
        let header = document.createElement("header");
        let spanLanguage = document.createElement("span");
        let copyBtn = document.createElement("button");

        copyBtn.innerText = btnText;
        //console.log(nameLanguague[0])
        spanLanguage.innerText = language;

        // activeClass acts as flag so we don't add another copy button by  mistake
        copyBtn.classList.add(activeClass);
        header.prepend(copyBtn);
        header.prepend(spanLanguage);
        node.prepend(header)
        copyBtn.addEventListener("click", async () => {
          // copy to clipboard
          if (navigator.clipboard) {
            let text = code.innerText;
            await navigator.clipboard.writeText(text);
          }
          // change text of button after copying
          copyBtn.innerText = btnTextSuccess;
          // change text back to normal after ### ms
          setTimeout(() => (copyBtn.innerText = btnText), 2000);
        });
      }
    });
}
