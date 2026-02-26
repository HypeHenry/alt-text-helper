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


## Gebruik
1. Open de applicatie in een browser.  
2. Beantwoord de vragen in volgorde.  
3. Lees het automatisch gegenereerde advies.  
4. Pas het tekstalternatief toe in de eigen content of applicatie.  

## Toegankelijkheid
Er is rekening gehouden met:

- Semantische HTML (fieldset, legend, labels)  
- Toetsenbordbediening  
- Screenreader ondersteuning  
- Geen vooraf geselecteerde keuzes bij start  

## Doelgroep
Deze tool is bedoeld voor:

- Contentspecialisten  
- Webredacteuren  
- UX designers  
- Ontwikkelaars  
- Communicatiemedewerkers    

## Inspiratie en bronvermelding

Deze tool is geïnspireerd op de uitleg en structuur uit de kennisbankpagina *WCAG voor redacteuren* van Niek Derksen. De oorspronkelijke pagina biedt praktische richtlijnen voor het schrijven van tekstalternatieven en het toepassen van toegankelijkheidsprincipes in content.

**Bron:**  
https://niekderksen.nl/kennisbank/wcag-voor-redacteuren/

De implementatie in deze repository is zelfstandig ontwikkeld als een standalone interactieve beslisboom. De interactielogica, technische uitwerking en inhoud zijn aangepast en verder uitgewerkt voor bredere toepasbaarheid.

Het doel van deze tool is het ondersteunen van contentmakers bij het correct toepassen van digitale toegankelijkheid, in lijn met WCAG-richtlijnen.

Alle credits voor het oorspronkelijke concept en de inhoudelijke inspiratie gaan naar Niek Derksen.

## Licentie
Vrij te gebruiken en aan te passen binnen de eigen organisatie. Aanpassingen aan huisstijl of richtlijnen zijn mogelijk.

## Auteur
Ontwikkeld ter ondersteuning van digitale toegankelijkheid en het correct toepassen van tekstalternatieven voor afbeeldingen.
