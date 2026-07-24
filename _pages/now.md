---
layout: 3col
title: now
emoji: ‼️
permalink: /now/
menu: about
---
<table class="tg"><!-- table generated from https://www.tablesgenerator.com/html_tables#, I tweaked the styling -->
    <tbody><!-- script source: https://bechnokid.neocities.org/resources/tut_statuscafefeed
        <tr>
            <td class="tg-0pky" colspan="3">
                <div id='feed-reader' style="margin: 3px;"></div>
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
        </tr>-->
        <tr>
            <td class="tg-0pky noext" colspan="3">
                <a target="_blank" href="https://status.lol/lostletters">
                    <script defer src="https://status.lol/lostletters.js">
                    </script>
                </a>
            </td>
        </tr>
        <tr>
            <th class="tg-0pky" title="date">🗓️ 26.07.23</th>
            <th class="tg-0pky" title="digitally exploring">💻 <a target="_blank" href="https://omg.lol/">omg.lol</a></th>
            <th class="tg-0pky" title="eating">🍦 sorbet</th>
        </tr>
        <tr>
            <td class="tg-0pky" title="time">⌚ 8:45pm</td>
            <td class="tg-0pky" title="feeling">🤩 excited</td>
            <td class="tg-0pky" title="drinking">🥤 poppi</td>
        </tr>
        <tr>
            <td class="tg-0pky" title="listening to" colspan="3">🎵 <a target="_blank" href="https://youtube.com/playlist?list=OLAK5uy_kUiVUvheDRSQelAOt_P_jEl1CXMUJApJk">Same Stories, Different Narratives</a></td>
        </tr>
        <tr>
            <td class="tg-0pky" title="watching" colspan="3">📺 House of the Dragon (HBO)</td>
        </tr>
        <tr>
            <td class="tg-0pky" title="reading" colspan="3">📖 <a target="_blank" href="https://rknight.me/blog/automating-my-now-page/">Automating My Now Page</a></td>
        </tr>
    </tbody>
</table>
<h1>My Now Page</h1>
<p>
    This page is intended for casual, personal updates compared to my blog posts. It is inspired by <a target="_blank" href="https://cepheus.neocities.org/">Cepheus's <i>atm table</i></a>, <a target="_blank" href="https://slashpages.net/#now">now slash pages</a>, and level 10 life.
</p>
<h2>Last Update: July 23, 2026</h2>
<div class="col-wrapper">
    <div class="three-col">
        <div class="color-stroke">
            <div class="dashed-outline">
                <img style="float: left; margin: 0 5px 0 0; image-rendering: pixelated;" src="/graphics/toy/emoticons/laugh-hello-sony-kitty.gif"/> <b>Friends and Family</b>
                <br>
                Feeling very blessed on this front. Still going strong with friends I've made since moving back to the US and often have more requests to strengthen connections than I have bandwidth or desire for. Been better about checking in and setting up video calls with friends around the globe than I ever have before.
            </div>
        </div>
        <div class="color-stroke">
            <div class="dashed-outline">
                <img style="float: left; margin: 0 5px 0 0; image-rendering: pixelated;" src="/graphics/toy/emoticons/learning_pig.gif"/> <b>Personal development</b>
                <br>
                Learning there are more interests that overlap with being queer and neurodivergent, and I'm curious to explore them. Javascript learning has stalled—oops! Once Gen Con is behind me, I really need to look into taking improv classes.
            </div>
        </div>
        <div class="color-stroke">
            <div class="dashed-outline">
                <img style="float: left; margin: 0 5px 0 0; image-rendering: pixelated;" src="/graphics/toy/emoticons/music-christmas-cat.gif"/> <b>Spirituality</b>
                <br>
                I don't think I'm anywhere near a state of equanimity. I've been struggling for years with feeling restless and bored. These feelings have persisted regardless of where I've lived. I think it's just the ADHD extrovert in me being unhappy unless every day has something novel and social going on. The last time I don't recall feeling this way was in 2019 when I was manic, exploring Tokyo's drinking and food scene with friends every day.
            </div>
        </div>
        <div class="color-stroke">
            <div class="dashed-outline">
                <img style="float: left; margin: 0 5px 0 0; image-rendering: pixelated;" src="/graphics/toy/emoticons/drop-watercolor.gif"/> <b>Career</b>
                <br>
                The least interesting thing about me now, and I'm really happy with that. I'm just working for the paycheck and trying to avoid AI at work as much as possible. I work 100% remote now, and I love the freedom and covid safety of that. I no longer feel the need to make friends out of coworkers, so working alone really suits me now.
            </div>
        </div>
        <div class="color-stroke">
            <div class="dashed-outline">
                <img style="float: left; margin: 0 5px 0 0; image-rendering: pixelated;" src="/graphics/toy/emoticons/flower-2-watercolor.gif"/> <b>Fun and Recreation</b>
                <br>
                Really taking this <a target="/ttrpgs/">TTRPG hobby</a> to the next level by attending Gen Con this summer. I'm kind of waning on <a target="/2025/10/18/ttrpg.html">my excitement for one-shots from last year</a> and prefer just playing in one <a target="_blank" href="https://chrismcdee.itch.io/mythic-bastionland">Mythic Bastionland</a> campaign now. Haven't explored parlor LARPs because I'm not entirely convinced I'd enjoy them.
            </div>
        </div>
        <div class="color-stroke">
            <div class="dashed-outline">
                <img style="float: left; margin: 0 5px 0 0; image-rendering: pixelated;" src="/graphics/toy/emoticons/onsen-bear.gif"/> <b>Health and Fitness</b>
                <br>
                Took a long break from <a href="/2026/03/16/march-update">going hard on the peloton</a>, but need to get back to it regularly. I have no strategy for how to make that a reality, so I'm kind of just hoping I feel motivated again soon. Meds feel pretty dialed in despite my ongoing restlessness and boredom. Thankful for getting health insurance again.
            </div>
        </div>
        <div class="color-stroke">
            <div class="dashed-outline">
                <img style="float: left; margin: 0 5px 0 0; image-rendering: pixelated;" src="/graphics/toy/emoticons/love-bear.gif" title="if you know who illustrated this, please lmk"/><b>What's In My Bag: Summer Edition</b>
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
    .tg-0pky:hover {
        transform: rotate(2deg) ;
    }
    @media screen and (max-width: 767px) {
        .tg {
            float: none;
            display: flex;
            justify-content: center;
            max-width: 100%;
            margin-left: 0;
            margin-bottom: 0;
            align-items: center;
        }
    }
    .statuslol {
        padding: 0px !important;
        background: transparent !important;
        display: flex;
        gap: 5px;
    }
    .statuslol_emoji_container {
        align-content: center;
    }
    .statuslol_content {
        color: var(--color-primary-a80) !important;
        font-family: var(--font), sans-serif;
    }
    .statuslol_content p {
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .statuslol_time a {
        color: var(--color-primary-a60) !important;
    }
</style>