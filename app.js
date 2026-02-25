const q1a = document.getElementById("q1a");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const result = document.getElementById("result");

const resultTitle = document.getElementById("resultTitle");
const resultBody = document.getElementById("resultBody");
const resultList = document.getElementById("resultList");

function getVal(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

function show(el) {
  el.classList.remove("is-hidden");
}

function hide(el) {
  el.classList.add("is-hidden");
}

function clearGroup(name) {
  document.querySelectorAll(`input[name="${name}"]`).forEach((r) => {
    r.checked = false;
  });
}

function showResult(title, body, bullets = []) {
  show(result);
  resultTitle.textContent = title;
  resultBody.textContent = body;

  resultList.innerHTML = "";
  bullets.forEach((b) => {
    const li = document.createElement("li");
    li.textContent = b;
    resultList.appendChild(li);
  });
}

function hideResult() {
  hide(result);
  resultTitle.textContent = "";
  resultBody.textContent = "";
  resultList.innerHTML = "";
}

function update() {
  const hasText = getVal("hasText");

  // Start state: only Q1 visible
  if (!hasText) {
    hide(q1a);
    hide(q2);
    hide(q3);
    hideResult();
    return;
  }

  // Branch: text in image
  if (hasText === "yes") {
    show(q1a);
    hide(q2);
    hide(q3);

    // reset other branch
    clearGroup("inControl");
    clearGroup("addsInfo");

    const t = getVal("textType");
    if (!t) {
      hideResult();
      return;
    }

    if (t === "functional") {
      showResult("Deze afbeelding is functioneel.", "", [
        "Link: beschrijf het doel van de link.",
        "Knop: beschrijf het resultaat van de actie.",
      ]);
      return;
    }

    if (t === "nowhereElse") {
      showResult(
        "Deze afbeelding is informatief.",
        "Geef een tekstalternatief dat beschrijft wat er op de afbeelding te zien is."
      );
      return;
    }

    showResult(
      "De afbeelding is decoratief.",
      "Verberg decoratieve afbeeldingen voor screenreaders."
    );
    return;
  }

  // Branch: no text in image
  hide(q1a);
  show(q2);

  // reset text branch
  clearGroup("textType");

  const inControl = getVal("inControl");

  // Q3 must NOT show until Q2 is answered
  if (!inControl) {
    hide(q3);
    clearGroup("addsInfo");
    hideResult();
    return;
  }

  // If it is in a control, Q3 stays hidden
  if (inControl === "yesOnlyImage") {
    hide(q3);
    clearGroup("addsInfo");
    showResult("Deze afbeelding is functioneel.", "", [
      "Link: beschrijf het doel van de link.",
      "Knop: beschrijf het resultaat van de actie.",
    ]);
    return;
  }

  if (inControl === "yesWithText") {
    hide(q3);
    clearGroup("addsInfo");
    showResult(
      "De afbeelding kan decoratief zijn.",
      "De tekst van de knop of link geeft al voldoende informatie."
    );
    return;
  }

  // inControl === "no" -> show Q3
  show(q3);

  const addsInfo = getVal("addsInfo");
  if (!addsInfo) {
    hideResult();
    return;
  }

  if (addsInfo === "simpleInfo") {
    showResult(
      "Deze afbeelding is informatief.",
      "Geef een tekstalternatief dat beschrijft wat er op de afbeelding te zien is."
    );
    return;
  }

  if (addsInfo === "complexInfo") {
    showResult(
      "Deze afbeelding is complex.",
      "Beschrijf kort wat er te zien is en geef een uitgebreide toelichting in de tekst."
    );
    return;
  }

  showResult(
    "De afbeelding is decoratief.",
    "Verberg decoratieve afbeeldingen voor screenreaders."
  );
}

document.addEventListener("change", (e) => {
  if (e.target.matches('input[type="radio"]')) update();
});

// Ensure start is empty and clean
hide(q1a);
hide(q2);
hide(q3);
hideResult();