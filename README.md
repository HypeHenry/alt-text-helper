# Beslisboom tekstalternatieven voor afbeeldingen

Website: https://hypehenry.github.io/alt-text-helper/

## Over dit project
Deze interactieve beslisboom helpt redacteuren, contentspecialisten en ontwerpers bij het bepalen van het juiste tekstalternatief voor afbeeldingen. De tool begeleidt gebruikers stap voor stap met vragen en geeft direct advies op basis van de gemaakte keuzes.

De beslisboom sluit aan op toegankelijkheidsrichtlijnen zoals WCAG 2.2 en ondersteunt het correct toepassen van alt-teksten in verschillende situaties, waaronder decoratieve afbeeldingen, functionele afbeeldingen en informatieve afbeeldingen.

## Functionaliteit
De tool bevat:

- Een stapsgewijze vragenflow  
- Dynamisch tonen en verbergen van vervolgvragen  
- Adviesblokken die automatisch worden aangepast op basis van keuzes  
- Een lege startstatus zonder vooraf geselecteerde opties  
- Toegankelijke HTML structuur met fieldsets en labels  

De logica werkt als volgt:

1. Vraag 1 bepaalt of er tekst in de afbeelding staat.  
2. Bij antwoord “Ja” verschijnt een vervolgvraag over het type tekst.  
3. Bij antwoord “Nee” verschijnt een vervolgvraag over gebruik in een link of knop.  
4. Een derde vraag wordt pas zichtbaar nadat de vorige vraag is ingevuld en alleen wanneer dat relevant is.  
5. Het adviesblok verschijnt zodra voldoende informatie beschikbaar is.  

## Techniek
De tool is gebouwd met:

- HTML  
- CSS  
- Vanilla JavaScript (geen frameworks of externe afhankelijkheden)  

## Bestandsstructuur
Voorbeeldstructuur:
/index.html
/styles.css
/script.js
README.md

