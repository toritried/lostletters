---
layout: 3col
title: now
emoji: ‼️
permalink: /now/
menu: about
---
<style type="text/css">
    .tg {
        border-spacing: 5px;
        float: right;
        margin-left: 1em;
        margin-bottom: .5em;
        max-width: 370px;
        line-height: 1.2em;
    }
    .tg td, .tg th {
        border-width:1px;
        font-family:Arial, sans-serif;
        font-size:14px;
        font-weight: normal;
        overflow:hidden;
        word-break:normal;
        text-align: left;
    }
    .tg .tg-0pky {
        border: 1px solid var(--color-primary-a50);
        padding-left: 3px;
        padding-right: 3px;
    }
    @media screen and (max-width: 767px) {
        .tg {width: auto !important;}
        .tg col {width: auto !important;}
        .tg-wrap {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            }
        }
</style>
<table class="tg"><!-- table generated from https://www.tablesgenerator.com/html_tables#, I tweaked the styling -->
    <tbody>
        <tr>
            <td class="tg-0pky" colspan="3">
                <div id='feed-reader' style="margin: 3px;"></div> <!-- script source: https://bechnokid.neocities.org/resources/tut_statuscafefeed -->
                <script>
                const feedURL = 'https://status.cafe/users/lostletters.atom';
                    fetch(feedURL)
                        .then(response => response.text())
                        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
                        .then(data => {
                        const entries = data.querySelectorAll("entry");
                        let html = (entries.length < 1) ? `<p>No statuses yet.</p>`: '';
                        if (entries.length > 1){
                            for (i = 0; i < 1; i++) {
                                let title = entries[i].querySelector("title").innerHTML.slice(11, 14).trim();
                                let content = entries[i].querySelector("content").textContent.trim();
                                let dateString = entries[i].querySelector("published").innerHTML.slice(0,10);
                                html += `
                                    <a target="_blank" href="https://status.cafe/users/lostletters"><b>${dateString}</b> ${title}</a> ${content}
                                `;
                            }
                            document.getElementById("feed-reader").innerHTML = html;
                        }
                    })
                </script>
            </td>
        </tr>
        <tr>
            <th class="tg-0pky" title="date">🗓️ 26.07.19</th>
            <th class="tg-0pky" title="digitally exploring">💻 <a target="_blank" href="https://cozy.talk/">cozy.talk</a></th>
            <th class="tg-0pky" title="eating">🥣 enchiladas</th>
        </tr>
        <tr>
            <td class="tg-0pky" title="time">⌚ 12:45am</td>
            <td class="tg-0pky" title="reading">📖 <a href="/books/dcc3/">DCC #3</a></td>
            <td class="tg-0pky" title="drinking">🫖 water</td>
        </tr>
        <tr>
            <td class="tg-0pky" title="weather">🌞 smoky</td>
            <td class="tg-0pky" title="listening to">🎧 dungeon synth</td>
            <td class="tg-0pky" title="wearing">👘 bike shorts</td>
        </tr>
        <tr>
            <td class="tg-0pky" title="temperature">🌡️ 75*F</td>
            <td class="tg-0pky" title="watching">👀 my garden</td>
            <td class="tg-0pky" title="feeling">😤 locked in</td>
        </tr>
    </tbody>
</table>
<h1>My Now Page</h1>
<p>
    This page is intended for casual, personal updates compared to my blog posts. It is inspired by <a target="_blank" href="https://bibianca.neocities.org">bia's <i>every sunday</i> page</a>, <a target="_blank" href="https://cepheus.neocities.org/">Cepheus's <i>atm table</i></a>, <a target="_blank" href="https://slashpages.net/#now">now slash pages</a>, and weeknotes.
</p>
<h2>This Week: July 13 - 19, 2026</h2>

1. **What were my wins?** I got my first dental cleaning since December of 2024 because we finally got new insurance with an actual up-to-date providers list. All of the clinic staff masked in N95s like I asked in my intake form, and they also had a great air purifier running the whole time I was unmasked.
2. **What am I struggling with?** I haven't been motivated to get on the peloton. I've come up with many excuses: it's too nice out so I'll just walk for exercise instead (even though that isn't cardio--I know!); I was infected with the dreaded cyclospora for a month (it was terrible for my physical AND mental health, avoid at all costs!); I skinned my knee. I finally have healed from everything, and the weather is consistently too hot to walk outside, so I need to get back into regularly riding the peloton.
3. **What's up next week?** Just like this week, there isn't a whole lot going on. I'm volunteering to pick up garbage in my neighborhood, going to a tamagotchi meetup, and virtually playing Edge of the Empire if everyone can still attend the session.

<div class="col-wrapper">
    <div class="three-col">
        <div class="color-stroke">
            <div class="dashed-outline">
                <img style="float: left; margin: 0 5px 0 0; image-rendering: pixelated;" src="/graphics/toy/emoticons/love-bear.gif" title="if you know who illustrated this, please lmk"/><b>what's in my bag (summer ed.)</b>
                <br>
                📔 <a target="_blank" href="https://www.1101.com/store/techo/en/2026/pc/detail_cover/wb26_kitagishi/">Yumi Kitagishi Hobonichi Weeks</a>
                <br>
                ✒️ <a target="_blank" href="https://bungubox.shop/pages/originalfountainpenhistory#:~:text=The%20Tale%20of%20the%20Bamboo%20Cutter%20%2D%20Princess%20Kaguya.%E3%80%90October%202023%E3%80%91JPY42%2C000%EF%BD%9E">Princess Kaguya Sailor PGS pen</a>
                <br>
                🐣 <a href="/tamagotchi/">Sanrio Tamagotchi Meets</a>
                <br>
                🛍️ <a target="_blank" href="https://www.moomin.co.jp/news/products/93782">Moomin Shupatto reusable bag</a>
                <br>
                🕶️ <a target="_blank" href="https://www.krewe.com/collections/sunglasses/products/st-louis-tuscan-tortoise-18k-polarized-sunglasses">Krewe St. Louis sungalsses</a>
                <br>
                ☀️ Skin Aqua Tone Up UV Essence
                <br>
                💧 Darling Daisy Owala bottle
                <br>
                🎲 <a href="/ttrpgs/">Polyhedral set of math rocks</a>
            </div>
        </div>
        <div class="color-stroke">
            <div class="dashed-outline">
                <img style="float: left; margin: 0 5px 0 0; image-rendering: pixelated;"  src="/graphics/toy/emoticons/hearts-2-watercolor.gif" title="if you know who illustrated this, please lmk"/><b>Mid-term Goals</b>
                <br>
                🍅 have a great summer harvest
                <br>
                🎲 have fun at Gen Con
                <br>
                🤡 take an improv class
                <br>
                🧶 finish knitting WIPs
                <br>
                ✂️ grow out my bad haircut
                <br>
                💰 sell some tamagotchi
                <br>
                🫂 deepen my relationships
                <br>
                🌱 publish vegan recipes
            </div>
        </div>
        <div class="color-stroke">
            <div class="dashed-outline">
                <img style="float: left; margin: 0 5px 0 0; image-rendering: pixelated;" src="/graphics/toy/emoticons/love_cat.gif" title="if you know who illustrated this, please lmk"/><b>Long-term Goals</b>
                <br>
                🍄 learn to forage food locally
                <br>
                🧘🏻‍♀️ attend vipassana
                <br>
                💻 learn JavaScript
                <br>
                🚲 200 peloton rides
                <br>
                📚 <a href="/books/">read 20 books in 2026</a>
                <br>
                😈 keep getting better at <a target="_blank" href="https://bloodontheclocktower.com/">BotC</a>
                <br>
                🎨 practice pixel art more
                <br>
                🍰 practice baking cakes & pies
        </div>
        </div>
    </div>
</div>
<h2>Past Entries</h2>
<details>
    <summary>
        July 2026
    </summary>
    <p>
        🍅 impatiently waiting for my first tomato harvest
        <br>
        🏝️ excited for the season finale of Love Island USA #Brinity
        <br>
        🩹 healing from a knee injury
        <br>
        ✂️ growing out a bad haircut
        <br>
        🍿 eating kirkland signature popcorn with nooch
        <br>
        😈 on a 3-game win streak for Blood on the Clocktower
    </p>
</details>