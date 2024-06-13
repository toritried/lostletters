---
layout: 3col
title: short rest
emoji: 🫂
permalink: /short-rest/
menu: health
---

<link rel="stylesheet" href="/bookshelf.css">
<style>
  #wrapper {
    position: relative;
    justify-self: center;
    width: 300px;
    height: 300px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }
  #ball { /* tutorial from https://www.geeksforgeeks.org spinning-ball-animation-with-glow-effect-using-css/ */
    height: 250px;
    width: 250px;
    position: relative;
    border-radius: 250px;
    animation: spinBall 5s linear infinite;
    box-shadow: inset 0 0 30px #fff,
    inset 6px 0 100px violet,
    inset -6px 0 75px #0ff,
    inset 6px 0 30px violet,
    inset -6px 0 24px #0ff,
    0 0 18px #fff, -4px
    0 18px violet, 4px 0 18px #0ff;
    z-index: 1;
    margin: 0 auto;
  }
  @keyframes spinBall {
    100% {
    transform: rotate(360deg);
    }
  }
  #fatedMantra {
    z-index: 2;
    width: 202px;
    position: absolute;
    top: 7em;
    left: 50px;
    margin: 0 auto;
  }
</style>

<script> /* script credit: https://mitchum.blog/how-to-build-a-magic-eight-ball-with-javascript/ */
  let mantras = [
    'I am capable. I can do this. My success is assured.',
    'This is hard, but it was meant to be hard. I can handle this.',
    'I am feeling bad right now, but this will pass with time. Breathe.',
    'I have everything I need to get through this.',
    'I can choose how I respond to this situation.',
    'I give myself permission to seek rest.',
    'Fear is no longer an excuse I will accept.',
    'I set myself free from expectations and desires.'
  ]

  let displayMantra = function()
  {
    let index = Math.floor(Math.random() * mantras.length);
    let mantra = mantras[index];
    let element = document.getElementById( 'fatedMantra' );
    element.style.display = 'inline-block';
    element.innerHTML = mantra;
  }
</script>
<h1 style="text-align: center;">Let's take a short rest.</h1>
<p style="text-align: center;">
  This page was created as an entry for the <a target="_blank" href="https://tilde.32bit.cafe/~ribose/events/destination/index.html">32bit.cafe Community Code Jam #4: Destination Vacation</a> event.
</p>
<div style="display: inline-block;">
  <p>
    <img src="/graphics/layout/short-rest/pusheen-reading.png" style="width: 200px; float: left;" title="gif by Pusheen">
    Welcome, weary traveler. You have triumphantly made it to A Short Rest, a DIY mental spa of sorts for those who just need a little break or boost. Adventuring brings all sorts here, so take what you find valuable and leave the rest. This magical little destination is one you can return to as many times as you like whenever and wherever you are thanks to the powerful enchantment of a web weaver (provided you have a speaking stone or other enchanted device that can connect to the internet). Please note that although a short rest can be extremely helpful in times of need, <b>this is not a substitute for profession medical advice</b>. There is a <a href="https://www.helpguide.org/find-help.htm">directory of international mental health helplines</a> should you need a powerful healer or greater restoration.
  </p>
  <p>
    With that disclaimer out of the way, let's HALT here and assess what you might need. <a target="_blank" href="https://www.goodtherapy.org/blog/how-are-you-feeling-take-minute-halt-for-your-health-0515184">Are you <b>h</b>ungry, <b>a</b>ngry, <b>l</b>onely, <b>t</b>ired</a>?It's probably best to hydrate too while we assess if you're in state that puts your mood and behavior at risk. Simply bringing awareness to these issues can be helpful, but if there's anything else we can get you to help, please let us know!
  </p>
</div>
<div class="two-col">
  <p>
    Now, I'd like to recommend this criminally underappreciated bard: Sammy Rae & The Friends. Their EP, The Good Life, is sure to lift your spirits. These songs are enchanted with main character energy and evoke a sense of skipping through a summer block party in New York city during golden hour, if that's your thing. I assure you that it's nearly impossible to frown while skipping. I recommend you listen in order, but this old music player can be a little finnicky sometimes—just ask it nicely, press the play button, and pray for your hand that it hasn't been replaced with a mimic.
  </p>
  <p align="center">
    <iframe style="border: 0; width: 400px; height: 307px;" src="https://bandcamp.com/EmbeddedPlayer/album=1569565009/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://sammyraemusic.bandcamp.com/album/the-good-life">The Good Life by Sammy Rae</a></iframe>
  </p>
</div>
<br>
<div class="col-wrapper">
  <div class="three-col">
    <div style="text-align: center;">
      <img src="/graphics/layout/short-rest/pusheen-butterfly.png" style="width: 300px;" title="gif by Pusheen">
    </div>
    <div class="mantra-peddler">
      As you move on from the music player, you notice a few folks milling about as well as an array of books on a shelf in the back corner. Your eyes land on a jovial giant sloth wearing a green cloak. They smile and motion for you to come closer. As you get closer, they twist their wrist upward to reveal a glowing orb in the claws of their left hand.
      <br>
      <br>
      "This orb provides incantations you can try when you're in a difficult spot. Take a look!"
    </div>
    <div id="wrapper">
      <br>
      <div id="fatedMantra">
      </div>
      <div id="ball">
      </div>
      <br>
      <div id="mantraButton"> 
        <button class="orb.button" type="button" onclick="displayMantra()">inspect the orb</button>
      </div>
    </div>
  </div>
</div>
<h2>Tools of the Trade</h2>
<ul>
  <li>
    <a target="_blank" href="https://habitica.com/"><b>Habitica</b></a> (website) - earn EXP, HP, equipment, pets, mounts, potions, and more as you complete your habits, daily routines, and to-do list. You can even join in on party quests to defeat bosses! It's such a clever and robust RPG system that gamifies getting things done. It has helped me reframe tedious, procrastinated chores into tasks that I am eager to do first thing when I wake up for the points. I'm a make number go up goblin though, so your milage may vary.
  </li>
  <li>
    <a target="_blank" href="https://pomofocus.io/"><b>pomofocus.io</b></a> (website) - a free pomodoro timer that allows helps keep you focused for 25 minute blocks with a 5 minute block in between.
  </li>
  <li>
    <a target="_blank" href="https://www.psychologytools.com/professional/techniques/socratic-questioning-socratic-dialogue/"><b>Socratic Questioning</b></a> (mental intervention) - I was introduced to this tool in therapy. Asking myself, "What evidence do I have to feel this way?" quickly diffused the intensity and duration of anxiety attacks to the point that I no longer suffer from anxiety regularly. For me, it works because, in answering the question, I always come to the realization that my anxiety is unfounded because I actually have a lot of evidence to the contrary.</li>
  <li>
    <a target="_blank" href="https://www.youtube.com/watch?v=kSZKIupBUuc&t=124s"><b>Physiological Sigh</b></a> (physical intervention) was introduced to me as a way to <a target="_blank" href="https://scopeblog.stanford.edu/2023/02/09/cyclic-sighing-can-help-breathe-away-anxiety/">improve mood</a> by Dr. Andrew Huberman, associate professor in the department of neurobiology and psychiatry and behavioral sciences at Stanford University School of Medicine.
  </li>
</ul>
Do you have a suggestion for this list that might help fellow travelers? Drop me a webmention or leave a message in my guestbook! I'm sure visitors will appreciate it.
<br>
<h2>Enchanted Tombs</h2>
<div class="bookshelf-container">
  <div class="bookshelf">
    <div class="books noext">
      <a target="_blank" href="https://www.poojalakshmin.com/realselfcare">
        <div class="book" style="--bg-image: url(/graphics/layout/books/real-self-care.png);" title="buying something shiny or working harder just isn't going to cut it"></div>
      </a>
      <a target="_blank" href="https://www.poojalakshmin.com/realselfcare">
        <div class="book" style="--bg-image: url(/graphics/layout/books/how-to-do-the-work.png);" title="lots of deep journaling prompts to really help unpack your inner challenges, including parental trauma"></div>
      </a>
      <a target="_blank" href="https://www.strugglecare.com/book">
      <div class="book" style="--bg-image: url(/graphics/layout/books/How-to-Keep-House.png);" title="you're probably already familiar with Struggle Care, but just in case, I wanted to include this"></div>
      </a>
    </div>
  </div>
</div>
