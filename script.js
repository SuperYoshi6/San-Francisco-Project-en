let selectedColor = "yellow"; // Standardfarbe

function setColor(color) {
  selectedColor = color;
}

function makeWordsClickable() {
  document.querySelectorAll("p").forEach(p => {
    const words = p.textContent.trim().split(/\s+/); // trennt Wörter
    p.innerHTML = ""; // leeren

    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.classList.add("clickable-word");
      span.textContent = word;

      p.appendChild(span);

      // Füge Leerzeichen nach dem Wort als normales Textzeichen hinzu
      if (index < words.length - 1) {
        p.appendChild(document.createTextNode(" "));
      }
    });
  });

  applyListeners();
}

function applyListeners() {
  let isTouching = false;

  document.addEventListener("mousedown", () => isTouching = true);
  document.addEventListener("mouseup", () => isTouching = false);
  document.addEventListener("touchstart", () => isTouching = true);
  document.addEventListener("touchend", () => isTouching = false);

  document.querySelectorAll(".clickable-word").forEach(span => {
    span.addEventListener("click", () => {
      span.style.backgroundColor =
        span.style.backgroundColor === selectedColor ? "" : selectedColor;
    });

    span.addEventListener("mouseover", () => {
      if (isTouching) span.style.backgroundColor = selectedColor;
    });

    span.addEventListener("touchmove", e => {
      const touched = document.elementFromPoint(
        e.touches[0].clientX,
        e.touches[0].clientY
      );
      if (touched?.classList.contains("clickable-word")) {
        touched.style.backgroundColor = selectedColor;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", makeWordsClickable);
