const $ = (sel) => document.querySelector(sel);

const q1a = $("#q1a");
const q2 = $("#q2");
const q3 = $("#q3");

const result = $("#result");
const resultTitle = $("#resultTitle");
const resultBody = $("#resultBody");
const resultList = $("#resultList");

function getVal(name){
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

function showResult(title, body, bullets = null){
  result.hidden = false;
  resultTitle.textContent = title;
  resultBody.textContent = body || "";

  if (bullets && bullets.length){
    resultList.hidden = false;
    resultList.innerHTML = bullets.map(b => `<li>${b}</li>`).join("");
  } else {
    resultList.hidden = true;
    resultList.innerHTML = "";
  }
}

function hideResult(){
  result.hidden = true;
  resultTitle.textContent = "";
  resultBody.textContent = "";
  resultList.hidden = true;
  resultList.innerHTML = "";
}

function resetGroup(name){
  document.querySelectorAll(`input[name="${name}"]`).forEach(r => (r.checked = false));
}

function update(){
  const hasText = getVal("hasText");

  // Branch 1, er staat tekst in de afbeelding
  if (hasText === "yes"){
    q1a.hidden = false;
    q2.hidden = true;
    q3.hidden = true;

    resetGroup("inControl");
    resetGroup("addsInfo");

    const t = getVal("textType");
    if (!t){
      hideResult();
      return;
    }

    if (t === "visualOnly"){
      showResult(
        "De afbeelding is puur decoratief!",
        "Verberg afbeeldingen die puur decoratief zijn voor schermlezers."
      );
      return;
    }

    if (t === "functional"){
      showResult(
        "Deze afbeelding is functioneel want het wordt ook gebruikt als link of knop!",
        "",
        [
          "Link: Beschrijf wat het doel van de link is én beschrijf wat er op de afbeelding te zien is.",
          "Knop: Beschrijf wat het resultaat van de actie is én beschrijf wat er op de afbeelding te zien is."
        ]
      );
      return;
    }

    if (t === "nowhereElse"){
      showResult(
        "Deze afbeelding is informatief want het draagt informatie over!",
        "Geef informatieve afbeeldingen een tekstalternatief dat beschrijft wat er op de afbeelding te zien is."
      );
      return;
    }

    // alreadyOnPage
    showResult(
      "De afbeelding is puur decoratief!",
      "Verberg afbeeldingen die puur decoratief zijn voor schermlezers."
    );
    return;
  }

  // Branch 2, er staat geen tekst in de afbeelding
  q1a.hidden = true;
  q2.hidden = false;

  // vraag 3 pas tonen na het invullen van vraag 2, en alleen als antwoord "no"
  const inControl = getVal("inControl");

  // reset text branch
  resetGroup("textType");

  // Als vraag 2 nog niet is ingevuld, verberg vraag 3 en verberg resultaat
  if (!inControl){
    q3.hidden = true;
    resetGroup("addsInfo");
    hideResult();
    return;
  }

  // Als afbeelding in link of knop zit, vraag 3 hoeft niet zichtbaar te zijn
  if (inControl === "yesOnlyImage" || inControl === "yesWithText"){
    q3.hidden = true;
    resetGroup("addsInfo");

    if (inControl === "yesOnlyImage"){
      showResult(
        "Deze afbeelding is functioneel want het wordt ook gebruikt als link of knop!",
        "",
        [
          "Link: Beschrijf wat het doel van de link is én beschrijf wat er op de afbeelding te zien is.",
          "Knop: Beschrijf wat het resultaat van de actie is én beschrijf wat er op de afbeelding te zien is."
        ]
      );
      return;
    }

    // yesWithText
    showResult(
      "Afbeelding in link of knop met tekst aanwezig",
      "Zorg dat de toegankelijke naam klopt door de aanwezige tekst, de afbeelding kan vaak decoratief worden gemaakt (alt=\"\")."
    );
    return;
  }

  // inControl === "no" -> nu pas vraag 3 tonen
  q3.hidden = false;

  const addsInfo = getVal("addsInfo");
  if (!addsInfo){
    hideResult();
    return;
  }

  if (addsInfo === "simpleInfo"){
    showResult(
      "Deze afbeelding is informatief want het draagt informatie over!",
      "Geef informatieve afbeeldingen een tekstalternatief dat beschrijft wat er op de afbeelding te zien is."
    );
    return;
  }

  if (addsInfo === "complexInfo"){
    showResult(
      "De afbeelding is complex want het draagt complexe informatie over!",
      "Beschrijf kort wat er op de afbeelding te zien is. Zorg ook voor een uitgebreide beschrijving in de omringende content of eventueel op een aparte pagina."
    );
    return;
  }

  if (addsInfo === "infoAlsoInText" || addsInfo === "decorative"){
    showResult(
      "De afbeelding is puur decoratief!",
      "Verberg afbeeldingen die puur decoratief zijn voor schermlezers."
    );
    return;
  }

  hideResult();
}

document.addEventListener("change", (e) => {
  if (e.target.matches('input[type="radio"]')) update();
});

update();

function init(){
  // alles verbergen behalve vraag 1
  q1a.hidden = true;
  q2.hidden = true;
  q3.hidden = true;
  hideResult();

  // alle radio’s uit
  document.querySelectorAll('input[type="radio"]').forEach(r => {
    r.checked = false;
  });
}

init();