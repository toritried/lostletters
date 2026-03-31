const TAROT_CARD = "tarotCard";
const TAROT_TIME = "tarotTime";

const CARD_URLS = [
  "/graphics/tarot/Cards-png/00-TheFool.png",
  "/graphics/tarot/Cards-png/01-TheMagician.png",
  "/graphics/tarot/Cards-png/02-TheHighPriestess.png",
  "/graphics/tarot/Cards-png/03-TheEmpress.png",
  "/graphics/tarot/Cards-png/04-TheEmperor.png",
  "/graphics/tarot/Cards-png/05-TheHierophant.png",
  "/graphics/tarot/Cards-png/06-TheLovers.png",
  "/graphics/tarot/Cards-png/07-TheChariot.png",
  "/graphics/tarot/Cards-png/08-Strength.png",
  "/graphics/tarot/Cards-png/09-TheHermit.png",
  "/graphics/tarot/Cards-png/10-WheelOfFortune.png",
  "/graphics/tarot/Cards-png/11-Justice.png",
  "/graphics/tarot/Cards-png/12-TheHangedMan.png",
  "/graphics/tarot/Cards-png/13-Death.png",
  "/graphics/tarot/Cards-png/14-Temperance.png",
  "/graphics/tarot/Cards-png/15-TheDevil.png",
  "/graphics/tarot/Cards-png/16-TheTower.png",
  "/graphics/tarot/Cards-png/17-TheStar.png",
  "/graphics/tarot/Cards-png/18-TheMoon.png",
  "/graphics/tarot/Cards-png/19-TheSun.png",
  "/graphics/tarot/Cards-png/20-Judgement.png",
  "/graphics/tarot/Cards-png/21-TheWorld.png",
  "/graphics/tarot/Cards-png/Cups01.png",
  "/graphics/tarot/Cards-png/Cups02.png",
  "/graphics/tarot/Cards-png/Cups03.png",
  "/graphics/tarot/Cards-png/Cups04.png",
  "/graphics/tarot/Cards-png/Cups05.png",
  "/graphics/tarot/Cards-png/Cups06.png",
  "/graphics/tarot/Cards-png/Cups07.png",
  "/graphics/tarot/Cards-png/Cups08.png",
  "/graphics/tarot/Cards-png/Cups09.png",
  "/graphics/tarot/Cards-png/Cups10.png",
  "/graphics/tarot/Cards-png/Cups11.png",
  "/graphics/tarot/Cards-png/Cups12.png",
  "/graphics/tarot/Cards-png/Cups13.png",
  "/graphics/tarot/Cards-png/Cups14.png",
  "/graphics/tarot/Cards-png/Pentacles01.png",
  "/graphics/tarot/Cards-png/Pentacles02.png",
  "/graphics/tarot/Cards-png/Pentacles03.png",
  "/graphics/tarot/Cards-png/Pentacles04.png",
  "/graphics/tarot/Cards-png/Pentacles05.png",
  "/graphics/tarot/Cards-png/Pentacles06.png",
  "/graphics/tarot/Cards-png/Pentacles07.png",
  "/graphics/tarot/Cards-png/Pentacles08.png",
  "/graphics/tarot/Cards-png/Pentacles09.png",
  "/graphics/tarot/Cards-png/Pentacles10.png",
  "/graphics/tarot/Cards-png/Pentacles11.png",
  "/graphics/tarot/Cards-png/Pentacles12.png",
  "/graphics/tarot/Cards-png/Pentacles13.png",
  "/graphics/tarot/Cards-png/Pentacles14.png",
  "/graphics/tarot/Cards-png/Swords01.png",
  "/graphics/tarot/Cards-png/Swords02.png",
  "/graphics/tarot/Cards-png/Swords03.png",
  "/graphics/tarot/Cards-png/Swords04.png",
  "/graphics/tarot/Cards-png/Swords05.png",
  "/graphics/tarot/Cards-png/Swords06.png",
  "/graphics/tarot/Cards-png/Swords07.png",
  "/graphics/tarot/Cards-png/Swords08.png",
  "/graphics/tarot/Cards-png/Swords09.png",
  "/graphics/tarot/Cards-png/Swords10.png",
  "/graphics/tarot/Cards-png/Swords11.png",
  "/graphics/tarot/Cards-png/Swords12.png",
  "/graphics/tarot/Cards-png/Swords13.png",
  "/graphics/tarot/Cards-png/Swords14.png",
  "/graphics/tarot/Cards-png/Wands01.png",
  "/graphics/tarot/Cards-png/Wands02.png",
  "/graphics/tarot/Cards-png/Wands03.png",
  "/graphics/tarot/Cards-png/Wands04.png",
  "/graphics/tarot/Cards-png/Wands05.png",
  "/graphics/tarot/Cards-png/Wands06.png",
  "/graphics/tarot/Cards-png/Wands07.png",
  "/graphics/tarot/Cards-png/Wands08.png",
  "/graphics/tarot/Cards-png/Wands09.png",
  "/graphics/tarot/Cards-png/Wands10.png",
  "/graphics/tarot/Cards-png/Wands11.png",
  "/graphics/tarot/Cards-png/Wands12.png",
  "/graphics/tarot/Cards-png/Wands13.png",
  "/graphics/tarot/Cards-png/Wands14.png",
];


function getRandomCard() {
  return CARD_URLS[Math.floor(Math.random() * CARD_URLS.length)];
}

function getNewCard() {
  localStorage.setItem(TAROT_TIME, new Date().toISOString());
  const newCard = getRandomCard();
  localStorage.setItem(TAROT_CARD, newCard);
  return newCard;
}

function show() {
  let card = localStorage.getItem(TAROT_CARD);
  if (!card) {
    card = getNewCard();
  } else {
    const isoString = localStorage.getItem(TAROT_TIME);
    if (!isoString) {
      card = getNewCard();
    } else {
      const currentDate = new Date();
      const tarotDate = new Date(isoString);
      if (
        tarotDate.getTime() === NaN ||
        (currentDate.getFullYear() > tarotDate.getFullYear() ||
          currentDate.getMonth() > tarotDate.getMonth() ||
          currentDate.getDate() > tarotDate.getDate())
      ) {
        card = getNewCard();
      }
    }
  }

  const el = document.getElementById("tarot-card-img-id");
  const alt = card.slice(26, -4);
  el.src = card;
  el.alt = alt;
  el.title = alt;
}

document.addEventListener("DOMContentLoaded", () => {
  show();
});
