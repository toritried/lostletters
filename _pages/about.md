---
layout: 3col
title: about me
emoji: 🤡
permalink: /about-me/
menu: about
---

<style>
    #piccrew {
        float: left;
        position: relative;
        display: inline-block;
        width: 40%;
        z-index: 1;
        max-width: 220px;
        border-radius: 50%;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
        shape-outside: url(/graphics/layout/piccrew.png);
        shape-image-threshold: 0.0;
        transition: all 1.5s;
    }
    
    #piccrew:hover {
        transform: rotate(20deg);
        transition: all 1.5s;
        animation-direction: alternate;
    }
    
    #moomin {
        float: right;
        width: 93px;
        shape-outside: url(/graphics/toy/moomin_by_SqdPxl.gif);
        shape-margin: 15px;
        shape-image-threshold: 0.0;
    }
    #snufkin {
        float: left;
        shape-outside: url(/graphics/toy/snufkin_by_Caicyo.png);
        shape-margin: 15px;
        shape-image-threshold: 0.0;
    }
    .color-stroke-info {
        border-radius: 10px;
        background-color: var(--color-primary-a10);
        margin-bottom: 3em;
        width: 90%;
        position: relative;
        left: 1.5em;
        top: 1.2em;
    }
    
    .outline-info {
        border: 2px dashed var(--color-primary-a50);
        border-radius: 10px;
        padding: 1em;
        position: relative;
        top: .5em;
        left: .5em;
    }

    .color-stroke {
        border-radius: 10px;
        background-color: var(--color-primary-a10);
    }

    .outline {
        border: 2px dashed var(--color-primary-a50);
        border-radius: 10px;
        padding: .3em;
        position: relative;
        top: 6px;
        left: 6px;
    }
    .container {
        display: flex;
        flex-flow: row wrap;
        align-content: stretch;
        justify-content: flex-start;
    }
    .container > div {
        box-sizing:border-box;
        flex-shrink: 0;
        flex-grow: 1;
        flex-basis: 164px;
        margin-top: 1em;
    }
    .things {
        margin-top: .7em;
        padding-left: .5em;
    }
    .trans {
        background-image: linear-gradient( /** credit: https://cesque.com/gaydient/ **/
            to right, 
            rgb(85, 205, 252), 
            rgb(179, 157, 233), 
            rgb(247, 168, 184), 
            rgb(246, 216, 221), 
            rgb(255, 255, 255) 45%, 
            rgb(255, 255, 255), 
            rgb(255, 255, 255) 55%, 
            rgb(246, 216, 221), 
            rgb(247, 168, 184), 
            rgb(179, 157, 233), 
            rgb(85, 205, 252));
        background-repeat: no-repeat;
        background-position: bottom -1px right 0px;
        background-size: 100% 4px;
    }
    .nb {
        background-image: linear-gradient( /** credit: https://cesque.com/gaydient/ **/
            to right, 
            rgb(253, 219, 0), 
            rgb(238, 212, 143), 
            rgb(255, 255, 255) 30%, 
            rgb(255, 255, 255), 
            rgb(255, 255, 255) 36%, 
            rgb(212, 181, 222), 
            rgb(156, 92, 212), 
            rgb(88, 50, 96), 
            rgb(0, 0, 0)); 
        background-repeat: no-repeat;
        background-position: bottom -1px right 0px;
        background-size: 100% 4px;
    }
</style>
<div>
    <img id="piccrew" src="/graphics/layout/piccrew.png" alt="a cartoonish pale-skinned woman with a brown haired pixie cut with pink bows, wearing a black shirt with a white lace collar and holding a pride flag" title="Hail and well met, traveler!"> <!--pic crew thanks to sushicore!-->
</div>
<div class="color-stroke-info">
    <div class="outline-info">
        <img src="/graphics/toy/emoticons/walkietalkie-watercolor.gif" style="image-rendering: pixelated;">&nbsp;&nbsp;<b>call me:</b> lost (she/they)
        <br>
        <img src="/graphics/toy/emoticons/laugh-hello-sony-kitty.gif" style="image-rendering: pixelated;">&nbsp;&nbsp;<b>age:</b> millenial
        <br>
        <img src="/graphics/toy/emoticons/skull-watercolor.gif" style="image-rendering: pixelated;">&nbsp;&nbsp;<b>neurospicy:</b> ADHD, bipolar
        <br>
        <img src="/graphics/toy/emoticons/onsen-bear.gif" style="image-rendering: pixelated;">&nbsp;&nbsp;<b>location:</b> japan (utc+9)
        <br>
        <img src="/graphics/toy/emoticons/star-watercolor.gif" style="image-rendering: pixelated;">&nbsp;&nbsp;<b>identities:</b> <text class="nb">nonbinary</text>, <text class="trans">trans</text>, <text style="text-decoration: underline wavy 2px; text-decoration-color:var(--color-primary-a20);" title="since 2016-01-28">vegan</text>, japanese-american, <span style="text-decoration: underline wavy 2px; text-decoration-color:var(--color-primary-a20);" title="since 2024-02-12">married</span>, intersectional feminist
    </div>
</div>
<div class="noext">
    <h2>My Journey to Web Dev</h2>
    <a target="_blank" href="https://www.deviantart.com/sqdpxl/art/moomin-to-the-groove-811004899"><img id="moomin" src="/graphics/toy/moomin_by_SqdPxl.gif" title="click for artist"/></a>
    I started informally learning some HTML, CSS, and PHP thanks to Neopets and free web hosts in the early 2000s, which inspired me to pour my heart into kawaii pixel art and website layouts drawn in MS Paint and participate in online communities, including <a href="/quilt/#history">the q*bee</a> and <a href="/afternoontea/#inspiration">Teahouse MB</a>.
    <br>
    <br>
    <a target="_blank" href="https://www.deviantart.com/caicyo/art/Pixel-snufkin-794162961">
        <img id="snufkin" src="/graphics/toy/snufkin_by_Caicyo.png" title="click for artist"/>
    </a>
    The boredom of the pandemic finally gave me the inspiration and judgement-free opportunity to explore basic web dev and early internet haunts again, leading me back to the threadbare remnants of the early internet I so enjoyed as a child. What started out as setting a goal to earn 10 million neopoints after all these years to achieve "ultimate riches" on Neopets quickly snowballed into discovering the yesterweb and web revival. All of a sudden, I was up until 2am, filled with a sense of urgency to memorialize as much as I could of the early internet of my childhood, which felt so close to being lost forever. That urgency inspired this website, so, if it feels like an incoherent fever dream, that's because it is.
</div>
<div class="container">
    <div class="item-c">
        <div class="color-stroke">
            <div class="outline">
                <img align="left" style="margin: 0 5px 0 0;" src="/graphics/toy/emoticons/love-bear.gif" style="image-rendering: pixelated;" title="if you know who illustrated this, please lmk"/>&nbsp;likes
            </div>
        </div>
        <div class="things">
            🏳️‍⚧️ trans rights
            <br>
            ♿ accessibility
            <br>
            🥰 words of affirmation
        </div>
    </div>
    <div class="item-d">
        <div class="color-stroke">
            <div class="outline">
                <img align="left" style="margin: 0 5px 0 0;" src="/graphics/toy/emoticons/shocked-sony-cat.gif" style="image-rendering: pixelated;" title="if you know who illustrated this, please lmk"/>&nbsp;dislikes
            </div>
        </div>
        <div class="things">
            🚫 trauma dumping
            <br>
            🚫 not crediting artists
            <br>
            🚫 not using CWs
        </div>
    </div>
    <div class="item-e">
        <div class="color-stroke">
            <div class="outline">
                <img align="left" style="margin: 0 5px 0 0;" src="/graphics/toy/emoticons/learning_pig.gif" style="image-rendering: pixelated;" title="if you know who illustrated this, please lmk"/>&nbsp;practicing
            </div>
        </div>
        <div class="things">
            ☸️ buddhism
            <br>
            ❤️ <a target="_blank" href="https://philmaffetone.com/180-formula/">low HR training</a>
        </div>
    </div>
</div>
<div class="container">
    <div class="item-a">
        <div class="color-stroke">
            <div class="outline">
                <img align="left" style="margin: 0 5px 0 0;" src="/graphics/toy/emoticons/love_cat.gif" style="image-rendering: pixelated;" title="if you know who illustrated this, please lmk"/>&nbsp;hobby goals
            </div>
        </div>
        <div class="things">
            🇪🇸 spanish fluency
            <br>
            🧶 become a <a target="_blank" href="https://tkga.org/certification/master-hand-knitting/">Master Knitter</a>
            <br>
            👄 train to sing opera
            <br>
            💻 learn JavaScript
            <br>
            🛼 join a roller derby team
        </div>
    </div>
    <div class="item-b">
        <div class="color-stroke">
            <div class="outline">
                <img align="left" style="margin: 0 5px 0 0;" src="/graphics/toy/emoticons/apple-watercolor.gif" style="image-rendering: pixelated;" title="if you know who illustrated this, please lmk"/>&nbsp;health goals
            </div>
        </div>
        <div class="things">
            🏃🏻‍♀️ run a marathon,
            <br>
            🍏 become a <a target="_blank" href="https://www.eatright.org/become-an-rdn">nutritionist</a>,
            <br>
            🍄 learn to forage food locally,
            <br>
            🧘🏻‍♀️ attend vipassana
            <br>
            👩🏻‍🍳 attend vegan culinary school
        </div>
    </div>
</div>
